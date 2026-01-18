"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Play,
  Check,
  Clock,
  Video,
  Gift,
  ArrowRight,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { copy } from "../../../content/copy";

function UpsellContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [isLoading, setIsLoading] = useState(false);
  const { upsell } = copy;

  const handleAcceptUpsell = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          upsellOnly: true,
          originalSessionId: sessionId,
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        // If no URL, just go to thank you page
        window.location.href = `/danke?session_id=${sessionId}`;
      }
    } catch (error) {
      console.error("Upsell error:", error);
      window.location.href = `/danke?session_id=${sessionId}`;
    }
  };

  const handleDeclineUpsell = () => {
    window.location.href = `/danke?session_id=${sessionId}`;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        {/* Success Badge */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
            <Check className="w-4 h-4" />
            Zahlung erfolgreich!
          </span>
        </div>

        {/* Upsell Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Gift className="w-4 h-4" />
            {upsell.badge}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {upsell.headline}
          </h1>
          <p className="text-xl text-gray-400">{upsell.subheadline}</p>
        </div>

        {/* Video Placeholder */}
        <div className="mb-10">
          <div className="aspect-video bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-700">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-orange-600 transition-colors">
                <Play className="w-10 h-10 text-white ml-1" />
              </div>
              <p className="text-gray-400">Video-Vorschau</p>
            </div>
          </div>
        </div>

        {/* Upsell Card */}
        <Card variant="elevated" padding="lg" className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              KI-Kickstart Video-Training
            </h2>
            <p className="text-gray-600">{upsell.description}</p>
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {upsell.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Price */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-lg text-gray-400 line-through">
                {upsell.originalPrice}
              </span>
              <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-full">
                50% RABATT
              </span>
            </div>
            <div className="text-5xl font-bold text-gray-900">
              {upsell.price}
            </div>
          </div>

          {/* Urgency */}
          <div className="flex items-center justify-center gap-2 text-orange-600 mb-6">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">{upsell.urgency}</span>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleAcceptUpsell}
              variant="primary"
              size="lg"
              fullWidth
              disabled={isLoading}
              className="text-lg group"
            >
              {isLoading ? (
                "Wird geladen..."
              ) : (
                <>
                  {upsell.ctaYes}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>

            <button
              onClick={handleDeclineUpsell}
              className="w-full py-3 text-gray-500 hover:text-gray-700 text-sm transition-colors flex items-center justify-center gap-2"
            >
              <X className="w-4 h-4" />
              {upsell.ctaNo}
            </button>
          </div>
        </Card>

        {/* Guarantee */}
        <p className="text-center text-gray-500 text-sm">
          Auch hier gilt: 14-Tage Geld-zurück-Garantie. Kein Risiko.
        </p>
      </div>
    </main>
  );
}

export default function UpsellPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
          <div className="text-white">Wird geladen...</div>
        </div>
      }
    >
      <UpsellContent />
    </Suspense>
  );
}
