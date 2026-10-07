import { redirect } from "next/navigation";
import { stripe } from "@/lib/stripe";
import { DOWNLOAD_LINKS } from "@/lib/downloads";
import { ThankYouContent } from "./ThankYouContent";

// Never cache: every request must be checked against Stripe
export const dynamic = "force-dynamic";

async function isPaidSession(sessionId: string): Promise<boolean> {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return session.payment_status === "paid";
  } catch (error) {
    console.error("Could not verify checkout session:", error);
    return false;
  }
}

export default async function DankePage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  const sessionId = searchParams.session_id;

  if (!sessionId || !(await isPaidSession(sessionId))) {
    redirect("/checkout");
  }

  return (
    <ThankYouContent
      downloadUrl={DOWNLOAD_LINKS.downloadUrl}
      flipbookUrl={DOWNLOAD_LINKS.flipbookUrl}
    />
  );
}
