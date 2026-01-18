"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Lock,
  Check,
  ArrowLeft,
  CreditCard,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { copy } from "../../../content/copy";

export default function CheckoutPage() {
  const [includeBump, setIncludeBump] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { product, bumpOffer, hero } = copy;

  const basePrice = 47;
  const bumpPrice = 19;
  const totalPrice = includeBump ? basePrice + bumpPrice : basePrice;

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          includeBump,
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("No checkout URL received");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Übersicht
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Order Summary */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Deine Bestellung
            </h1>

            {/* Main Product */}
            <Card variant="bordered" className="mb-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">E-BOOK</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">
                    {product.headline}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    E-Book (300+ Seiten) + Prompts + Checklisten
                  </p>
                  <div className="mt-2">
                    <span className="text-lg font-bold text-gray-900">
                      {basePrice} €
                    </span>
                    <span className="text-sm text-gray-400 line-through ml-2">
                      {product.pricing.original}
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Bump Offer */}
            <Card
              variant={includeBump ? "elevated" : "bordered"}
              className={`mb-6 cursor-pointer transition-all ${
                includeBump
                  ? "border-2 border-orange-500 bg-orange-50"
                  : "hover:border-orange-300"
              }`}
              onClick={() => setIncludeBump(!includeBump)}
            >
              <div className="flex items-start gap-4">
                {/* Checkbox */}
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                    includeBump
                      ? "bg-orange-500 border-orange-500"
                      : "border-gray-300"
                  }`}
                >
                  {includeBump && <Check className="w-4 h-4 text-white" />}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-bold text-orange-600 uppercase">
                      Einmaliges Angebot
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900">
                    {bumpOffer.headline}{" "}
                    <span className="text-orange-600">{bumpOffer.price}</span>
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {bumpOffer.description}
                  </p>
                  <p className="text-sm font-medium text-orange-600 mt-2">
                    {bumpOffer.checkbox}
                  </p>
                </div>
              </div>
            </Card>

            {/* Order Total */}
            <Card variant="bordered" className="bg-gray-50">
              <div className="space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Starter Kit</span>
                  <span>{basePrice} €</span>
                </div>
                {includeBump && (
                  <div className="flex justify-between text-gray-600">
                    <span>Premium Vorlagen-Paket</span>
                    <span>{bumpPrice} €</span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Gesamt</span>
                    <span className="text-orange-600">{totalPrice} €</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>14 Tage Geld-zurück</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-green-500" />
                <span>Sichere Zahlung</span>
              </div>
            </div>
          </div>

          {/* Right Column - Payment */}
          <div>
            <Card variant="elevated" padding="lg">
              <div className="flex items-center gap-2 mb-6">
                <CreditCard className="w-5 h-5 text-gray-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  Zahlungsmethode
                </h2>
              </div>

              {/* Payment Info */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6 text-center">
                <Lock className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600">
                  Du wirst zu Stripe weitergeleitet, um die Zahlung sicher
                  abzuschließen.
                </p>
                <div className="flex justify-center gap-2 mt-4">
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Kreditkarte, Debitkarte, Apple Pay, Google Pay
                </p>
              </div>

              {/* Buy Button */}
              <Button
                onClick={handleCheckout}
                variant="primary"
                size="lg"
                fullWidth
                disabled={isLoading}
                className="text-xl py-5"
              >
                {isLoading ? (
                  "Wird geladen..."
                ) : (
                  <>Jetzt für {totalPrice} € kaufen</>
                )}
              </Button>

              {/* Legal */}
              <p className="text-xs text-gray-500 text-center mt-4">
                Mit dem Kauf akzeptierst du unsere{" "}
                <Link href="/agb" className="underline hover:text-gray-700">
                  AGB
                </Link>{" "}
                und{" "}
                <Link
                  href="/datenschutz"
                  className="underline hover:text-gray-700"
                >
                  Datenschutzerklärung
                </Link>
                .
              </p>

              {/* Guarantee */}
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 text-green-700">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">
                    14-Tage Geld-zurück-Garantie
                  </span>
                </div>
                <p className="text-sm text-green-600 mt-1">
                  Nicht zufrieden? Du bekommst dein Geld zurück – ohne Fragen.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
