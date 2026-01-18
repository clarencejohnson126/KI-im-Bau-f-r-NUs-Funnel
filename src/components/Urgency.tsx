"use client";

import React from "react";
import { Clock, TrendingUp, Calculator, AlertCircle } from "lucide-react";
import { copy } from "../../content/copy";

export function Urgency() {
  const { urgency } = copy;

  const icons = [TrendingUp, Clock, Calculator];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-concrete-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-6">
            <AlertCircle className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-400 font-medium">
              Nicht warten
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            {urgency.headline}
          </h2>
          <p className="text-xl text-concrete-400">{urgency.subheadline}</p>
        </div>

        {/* Urgency Points */}
        <div className="space-y-6 mb-12">
          {urgency.points.map((point, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="bg-concrete-800/50 border border-concrete-700 rounded-2xl p-6 md:p-8 hover:bg-concrete-800/70 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
                    <Icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl text-white mb-2">
                      {point.title}
                    </h3>
                    <p className="text-concrete-400 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ROI Calculation Box */}
        <div className="bg-gradient-to-br from-orange-500/20 via-concrete-800/80 to-orange-500/20 border-2 border-orange-500/30 rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-8 h-8 text-orange-400" />
            <h3 className="font-display text-2xl md:text-3xl text-white">
              {urgency.callout.headline}
            </h3>
          </div>

          <div className="space-y-3">
            {urgency.callout.items.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 ${
                  index === urgency.callout.items.length - 1
                    ? "pt-4 border-t border-orange-500/30"
                    : ""
                }`}
              >
                <span
                  className={`font-mono text-lg ${
                    index === urgency.callout.items.length - 1
                      ? "text-orange-400 font-bold text-xl"
                      : index === urgency.callout.items.length - 2
                      ? "text-green-400"
                      : "text-concrete-300"
                  }`}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
