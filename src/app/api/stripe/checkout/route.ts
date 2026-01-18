import { NextRequest, NextResponse } from "next/server";
import { stripe, PRODUCTS } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { includeBump } = body;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    // Build line items
    const lineItems: Array<{
      price_data: {
        currency: string;
        product_data: { name: string };
        unit_amount: number;
      };
      quantity: number;
    }> = [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: PRODUCTS.starterKit.name,
          },
          unit_amount: PRODUCTS.starterKit.price,
        },
        quantity: 1,
      },
    ];

    // Add bump offer if selected
    if (includeBump) {
      lineItems.push({
        price_data: {
          currency: "eur",
          product_data: {
            name: PRODUCTS.bumpOffer.name,
          },
          unit_amount: PRODUCTS.bumpOffer.price,
        },
        quantity: 1,
      });
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      success_url: `${baseUrl}/upsell?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout`,
      metadata: {
        includeBump: includeBump ? "true" : "false",
      },
      allow_promotion_codes: true,
      billing_address_collection: "required",
      customer_creation: "always",
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
