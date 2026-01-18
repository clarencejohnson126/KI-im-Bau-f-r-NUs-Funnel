"use client";

import React from "react";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "./ui/Button";
import { copy } from "../../content/copy";

export function FinalStackRecap() {
  const { finalStackRecap, product } = copy;

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #f97316 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-concrete-900 mb-4 tracking-tight">
            {finalStackRecap.headline}
          </h2>
          <p className="text-xl text-concrete-600">{finalStackRecap.subheadline}</p>
        </div>

        {/* Stack Items */}
        <div className="bg-gradient-to-br from-concrete-50 to-white border-2 border-concrete-200 rounded-2xl p-6 md:p-10 mb-8 shadow-xl">
          <div className="space-y-4 mb-8">
            {finalStackRecap.items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-4 border-b border-concrete-200 last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-concrete-800 text-lg">{item.item}</span>
                </div>
                <span className="text-concrete-500 font-mono text-lg line-through">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="bg-concrete-900 rounded-xl p-6 md:p-8 text-center">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-concrete-400 text-sm uppercase tracking-wider mb-1">
                  Gesamtwert
                </p>
                <p className="font-display text-2xl text-white line-through opacity-50">
                  {finalStackRecap.totalValue.replace("Gesamtwert: ", "")}
                </p>
              </div>
              <div>
                <p className="text-concrete-400 text-sm uppercase tracking-wider mb-1">
                  Dein Preis
                </p>
                <p className="font-display text-3xl md:text-4xl text-orange-400">
                  {finalStackRecap.yourPrice.replace("Dein Preis heute: ", "")}
                </p>
              </div>
              <div>
                <p className="text-concrete-400 text-sm uppercase tracking-wider mb-1">
                  Du sparst
                </p>
                <p className="font-display text-2xl text-green-400">
                  {finalStackRecap.savings.replace("Du sparst: ", "")}
                </p>
              </div>
            </div>

            <a href="/checkout">
              <Button variant="primary" size="lg" className="group w-full md:w-auto">
                Jetzt für {product.pricing.current} sichern
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            {/* Guarantee Reminder */}
            <div className="flex items-center justify-center gap-2 mt-4 text-concrete-400">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-sm">14-Tage Geld-zurück-Garantie</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
