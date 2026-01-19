import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { sendProductDeliveryEmail } from "@/lib/resend";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json(
      { error: "Webhook signature verification failed" },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;

      // Get customer email
      const customerEmail = session.customer_details?.email;
      const customerName = session.customer_details?.name || undefined;
      const customerId = session.customer as string;
      const sessionId = session.id;
      const includeBump = session.metadata?.includeBump === "true";
      const includeUpsell = session.metadata?.includeUpsell === "true";

      console.log("Payment successful:", {
        sessionId,
        customerEmail,
        customerId,
        includeBump,
        includeUpsell,
        amountTotal: session.amount_total,
      });

      // Send product delivery email
      if (customerEmail) {
        // Google Drive download links
        const downloadUrl = "https://drive.google.com/file/d/1ZTQJhqwzIkv35OKY52c4PxloQ41dluD4/view?usp=drive_link";
        const flipbookUrl = "https://drive.google.com/file/d/1Uag-CD5k-SFLFBfFmgLfHj-F_sjJ3BYO/view?usp=sharing";

        try {
          await sendProductDeliveryEmail({
            to: customerEmail,
            customerName,
            downloadUrl,
            flipbookUrl,
            includeBump,
            includeUpsell,
          });
          console.log("Product delivery email sent to:", customerEmail);
        } catch (emailError) {
          console.error("Failed to send product delivery email:", emailError);
          // Don't fail the webhook - log the error for manual follow-up
        }
      } else {
        console.warn("No customer email found for session:", sessionId);
      }

      break;
    }

    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log("PaymentIntent succeeded:", paymentIntent.id);
      break;
    }

    case "payment_intent.payment_failed": {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log("PaymentIntent failed:", paymentIntent.id);
      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
