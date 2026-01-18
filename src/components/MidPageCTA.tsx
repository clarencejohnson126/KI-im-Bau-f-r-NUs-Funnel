"use client";

import React from "react";
import { ArrowRight, Shield, Download, Clock } from "lucide-react";
import { Button } from "./ui/Button";
import { copy } from "../../content/copy";

interface MidPageCTAProps {
  variant?: "default" | "dark" | "gradient";
}

export function MidPageCTA({ variant = "default" }: MidPageCTAProps) {
  const { midPageCTA, product } = copy;

  const bgClasses = {
    default: "bg-concrete-100",
    dark: "bg-concrete-900",
    gradient: "bg-gradient-to-r from-orange-500 to-orange-600",
  };

  const textClasses = {
    default: {
      headline: "text-concrete-900",
      subheadline: "text-concrete-600",
      reminder: "text-concrete-500",
    },
    dark: {
      headline: "text-white",
      subheadline: "text-concrete-300",
      reminder: "text-concrete-400",
    },
    gradient: {
      headline: "text-white",
      subheadline: "text-orange-100",
      reminder: "text-orange-100",
    },
  };

  const colors = textClasses[variant];

  return (
    <section className={`relative py-16 md:py-24 ${bgClasses[variant]} overflow-hidden`}>
      {/* Background Pattern for gradient variant */}
      {variant === "gradient" && (
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
        </div>
      )}

      <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
        <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl ${colors.headline} mb-4 tracking-tight`}>
          {midPageCTA.headline}
        </h2>
        <p className={`text-lg md:text-xl ${colors.subheadline} mb-8 max-w-2xl mx-auto`}>
          {midPageCTA.subheadline}
        </p>

        {/* Price and CTA */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className={`text-lg ${colors.subheadline} line-through`}>
              {product.pricing.original}
            </span>
            <span className={`font-display text-4xl md:text-5xl ${variant === "gradient" ? "text-white" : "text-orange-500"}`}>
              {product.pricing.current}
            </span>
            <span className={`px-2 py-1 rounded text-sm font-bold ${
              variant === "gradient"
                ? "bg-white/20 text-white"
                : "bg-green-100 text-green-700"
            }`}>
              {product.pricing.discount}
            </span>
          </div>

          <a href="/checkout">
            <Button
              variant={variant === "gradient" ? "secondary" : "primary"}
              size="lg"
              className={`group ${variant === "gradient" ? "bg-white text-orange-600 hover:bg-orange-50" : ""}`}
            >
              {midPageCTA.cta}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className={`flex flex-wrap justify-center gap-4 md:gap-6 ${colors.reminder}`}>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span className="text-sm">14-Tage Garantie</span>
          </div>
          <div className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span className="text-sm">Sofort-Download</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Kein Abo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
