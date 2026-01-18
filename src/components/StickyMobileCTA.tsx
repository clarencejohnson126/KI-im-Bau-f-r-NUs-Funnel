"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import { Button } from "./ui/Button";
import { copy } from "../../content/copy";

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { product } = copy;

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-fade-in-up">
      {/* Gradient Border Top */}
      <div className="h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" />

      <div className="bg-white/95 backdrop-blur-lg border-t border-concrete-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4">
        <div className="flex items-center justify-between gap-3">
          {/* Price Info */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-xs text-concrete-400 line-through">
                {product.pricing.original}
              </span>
              <span className="text-xs font-bold text-green-600 bg-green-100 px-1.5 py-0.5 rounded">
                -76%
              </span>
            </div>
            <p className="font-display text-2xl text-concrete-900 leading-none">
              {product.pricing.current}
            </p>
          </div>

          {/* CTA Button */}
          <a href="/checkout" className="flex-shrink-0">
            <Button variant="primary" size="md" className="group whitespace-nowrap shadow-lg">
              Jetzt sichern
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>

          {/* Dismiss Button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="flex-shrink-0 p-2 text-concrete-400 hover:text-concrete-600 transition-colors"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Trust Badge */}
        <div className="flex items-center justify-center gap-4 mt-2 text-xs text-concrete-500">
          <span>✓ 14-Tage Garantie</span>
          <span>✓ Sofort-Download</span>
        </div>
      </div>
    </div>
  );
}
