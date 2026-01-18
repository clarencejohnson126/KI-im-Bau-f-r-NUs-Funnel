"use client";

import React from "react";
import { Crown, CheckCircle, Lightbulb, Sparkles } from "lucide-react";
import { copy } from "../../content/copy";

export function GoldenRules() {
  const { goldenRules } = copy;

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #f97316 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-2 mb-6">
            <Crown className="w-4 h-4 text-orange-600" />
            <span className="text-sm text-orange-700 font-medium">
              Merke dir das
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-concrete-900 mb-4 tracking-tight">
            {goldenRules.headline}
          </h2>
          <p className="text-xl text-concrete-600">{goldenRules.subheadline}</p>
        </div>

        {/* Rules */}
        <div className="space-y-6 mb-12">
          {goldenRules.rules.map((rule, index) => (
            <div
              key={index}
              className="bg-white border-2 border-concrete-200 rounded-2xl p-6 md:p-8 shadow-lg hover:border-orange-300 hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-4 md:gap-6">
                {/* Number Badge */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    <span className="font-display text-2xl md:text-3xl text-white">
                      {rule.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-heading text-xl md:text-2xl text-concrete-900 mb-2">
                    {rule.title}
                  </h3>
                  <p className="text-concrete-600 leading-relaxed">
                    {rule.description}
                  </p>
                </div>

                {/* Check Icon */}
                <div className="flex-shrink-0 hidden md:block">
                  <CheckCircle className="w-6 h-6 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Formula Box */}
        <div className="bg-gradient-to-br from-concrete-900 to-concrete-800 rounded-3xl p-8 md:p-12 text-center">
          <Lightbulb className="w-12 h-12 text-orange-400 mx-auto mb-6" />
          <h3 className="font-display text-xl md:text-2xl text-concrete-400 mb-4 uppercase tracking-wider">
            Die Formel
          </h3>
          <div className="inline-flex flex-wrap items-center justify-center gap-4 text-2xl md:text-3xl lg:text-4xl">
            <span className="text-white font-heading">Deine Erfahrung</span>
            <span className="text-orange-400">+</span>
            <span className="text-orange-400 font-heading">KI-Geschwindigkeit</span>
            <span className="text-white">=</span>
            <span className="text-green-400 font-display">Wettbewerbsvorteil</span>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-concrete-400">
            <Sparkles className="w-5 h-5 text-orange-400" />
            <span className="text-sm">
              Das unterscheidet dich von der Konkurrenz
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
