import Stripe from "stripe";

// Server-side Stripe instance
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
  typescript: true,
});

// Product configuration
export const PRODUCTS = {
  starterKit: {
    name: "KI im Bau Starter Kit",
    priceId: process.env.STRIPE_PRICE_STARTER_KIT,
    price: 4700, // in cents
  },
  bumpOffer: {
    name: "Premium Vorlagen-Paket",
    priceId: process.env.STRIPE_PRICE_BUMP_OFFER,
    price: 1900, // in cents
  },
  upsell: {
    name: "KI-Kickstart Video-Training",
    priceId: process.env.STRIPE_PRICE_UPSELL,
    price: 9700, // in cents
  },
} as const;

// Helper to format price for display
export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(cents / 100);
}
