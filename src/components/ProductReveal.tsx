"use client";

import React from "react";
import {
  BookOpen,
  Terminal,
  Grid3X3,
  CheckSquare,
  Package,
  ArrowRight,
  Sparkles,
  Presentation,
} from "lucide-react";
import { Button } from "./ui/Button";
import { copy } from "../../content/copy";

export function ProductReveal() {
  const { product } = copy;

  const iconMap: Record<string, React.ReactNode> = {
    book: <BookOpen className="w-8 h-8" />,
    terminal: <Terminal className="w-8 h-8" />,
    grid: <Grid3X3 className="w-8 h-8" />,
    checklist: <CheckSquare className="w-8 h-8" />,
    presentation: <Presentation className="w-8 h-8" />,
  };

  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById("final-cta");
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        {/* Decorative Circle */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-100 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 border border-orange-200 rounded-full text-orange-700 font-heading font-semibold text-sm uppercase tracking-wider mb-6">
            <Package className="w-4 h-4" />
            {product.badge}
          </div>

          <h2 className="font-display text-display-lg text-concrete-900 mb-4">
            {product.headline}
          </h2>
          <p className="text-body-lg text-concrete-600 max-w-2xl mx-auto">
            {product.subheadline}
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {product.items.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-concrete-200 rounded-2xl p-6 hover:border-orange-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Number Badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-display text-lg shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center text-orange-600 mb-5 group-hover:scale-110 transition-transform">
                {iconMap[item.icon]}
              </div>

              {/* Content */}
              <h3 className="font-heading font-bold text-xl text-concrete-900 mb-1">
                {item.title}
              </h3>
              <p className="text-orange-600 font-semibold text-sm mb-3">
                {item.subtitle}
              </p>
              <p className="text-concrete-600 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* Price Box */}
        <div className="max-w-lg mx-auto">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-3xl blur-lg opacity-40 animate-pulse-glow" />

            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-concrete-900 via-concrete-800 to-concrete-900 rounded-3xl p-8 md:p-10 text-white overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-grid-pattern" />
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-orange-500/30 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-orange-500/30 rounded-br-3xl" />

              <div className="relative z-10">
                {/* Badge */}
                <div className="flex justify-center mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    Limitiertes Angebot
                  </span>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <span className="text-2xl text-concrete-400 line-through">
                      {product.pricing.original}
                    </span>
                    <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                      {product.pricing.discount}
                    </span>
                  </div>
                  <div className="font-display text-7xl md:text-8xl text-white leading-none">
                    {product.pricing.current}
                  </div>
                  <p className="text-green-400 font-semibold mt-2">
                    {product.pricing.savings}
                  </p>
                </div>

                {/* What's Included */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {product.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-concrete-300">
                      <div className="w-5 h-5 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>{item.title}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  onClick={scrollToCheckout}
                  variant="primary"
                  size="lg"
                  fullWidth
                  className="group text-xl py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                >
                  Jetzt für {product.pricing.current} sichern
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Micro Copy */}
                <p className="text-center text-concrete-400 text-sm mt-4">
                  Einmalzahlung • Sofort-Download • Kein Abo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
