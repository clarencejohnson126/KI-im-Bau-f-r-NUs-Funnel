"use client";

import React from "react";
import { Calendar, TrendingDown, AlertTriangle } from "lucide-react";
import { copy } from "../../content/copy";

const iconMap = {
  calendar: Calendar,
  "trending-down": TrendingDown,
  "alert-triangle": AlertTriangle,
};

export function Consequences() {
  const { consequences } = copy;

  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Warning Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              #ef4444 20px,
              #ef4444 40px
            )`,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            {consequences.headline}
          </h2>
          <p className="text-xl text-concrete-400">{consequences.subheadline}</p>
        </div>

        {/* Timeline Scenarios */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-500 via-red-600 to-red-900 hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {consequences.scenarios.map((scenario, index) => {
              const Icon = iconMap[scenario.icon as keyof typeof iconMap];
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative md:flex md:items-center ${
                    index > 0 ? "md:mt-12" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-red-500 shadow-glow-red animate-pulse" />
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-[45%] ${
                      isLeft ? "md:pr-12" : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <div className="bg-gradient-to-br from-red-950/40 to-concrete-900/60 border border-red-900/30 rounded-2xl p-6 md:p-8 transform hover:scale-[1.02] transition-transform">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/30">
                          {Icon && <Icon className="w-6 h-6 text-red-400" />}
                        </div>
                        <h3 className="font-display text-2xl md:text-3xl text-red-400">
                          {scenario.title}
                        </h3>
                      </div>
                      <p className="text-concrete-300 text-lg leading-relaxed">
                        {scenario.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Harsh Truth Box */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-r from-red-950 via-red-900/80 to-red-950 border-2 border-red-500/50 rounded-2xl p-8 md:p-12 text-center overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-red-500/20 to-red-500/10 animate-pulse" />

            <div className="relative z-10">
              <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-6" />
              <h3 className="font-display text-2xl md:text-3xl text-white mb-4">
                {consequences.harshTruth.headline}
              </h3>
              <p className="text-lg text-concrete-200 leading-relaxed">
                {consequences.harshTruth.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
