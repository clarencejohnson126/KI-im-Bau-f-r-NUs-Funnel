"use client";

import React from "react";
import { Check } from "lucide-react";
import { Button } from "./Button";

interface PriceBoxProps {
  originalPrice?: string;
  currentPrice: string;
  savings?: string;
  discount?: string;
  features?: string[];
  ctaText: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  microCopy?: string;
  highlighted?: boolean;
  className?: string;
}

export function PriceBox({
  originalPrice,
  currentPrice,
  savings,
  discount,
  features,
  ctaText,
  ctaHref,
  onCtaClick,
  microCopy,
  highlighted = false,
  className = "",
}: PriceBoxProps) {
  const handleClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else if (ctaHref) {
      window.location.href = ctaHref;
    }
  };

  return (
    <div
      className={`rounded-2xl p-6 md:p-8 ${
        highlighted
          ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-2xl"
          : "bg-white border-2 border-gray-200 shadow-lg"
      } ${className}`}
    >
      {/* Price */}
      <div className="text-center mb-6">
        {originalPrice && (
          <div className="flex items-center justify-center gap-3 mb-2">
            <span
              className={`text-lg line-through ${
                highlighted ? "text-orange-200" : "text-gray-400"
              }`}
            >
              {originalPrice}
            </span>
            {discount && (
              <span
                className={`text-xs font-bold px-2 py-1 rounded-full ${
                  highlighted ? "bg-white text-orange-600" : "bg-orange-100 text-orange-700"
                }`}
              >
                {discount}
              </span>
            )}
          </div>
        )}
        <div className="flex items-end justify-center gap-1">
          <span
            className={`text-5xl md:text-6xl font-bold ${
              highlighted ? "text-white" : "text-gray-900"
            }`}
          >
            {currentPrice}
          </span>
        </div>
        {savings && (
          <p
            className={`text-sm mt-2 ${
              highlighted ? "text-orange-100" : "text-green-600 font-medium"
            }`}
          >
            {savings}
          </p>
        )}
      </div>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check
                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                  highlighted ? "text-orange-200" : "text-green-500"
                }`}
              />
              <span
                className={highlighted ? "text-white/90" : "text-gray-700"}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <Button
        onClick={handleClick}
        variant={highlighted ? "secondary" : "primary"}
        size="lg"
        fullWidth
        className={highlighted ? "!bg-white !text-orange-600 hover:!bg-orange-50" : ""}
      >
        {ctaText}
      </Button>

      {/* Micro Copy */}
      {microCopy && (
        <p
          className={`text-sm text-center mt-4 ${
            highlighted ? "text-orange-200" : "text-gray-500"
          }`}
        >
          {microCopy}
        </p>
      )}
    </div>
  );
}
