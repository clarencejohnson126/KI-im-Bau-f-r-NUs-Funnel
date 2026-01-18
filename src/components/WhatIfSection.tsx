"use client";

import React from "react";
import { Sparkles, Check, Lightbulb } from "lucide-react";
import { copy } from "../../content/copy";

export function WhatIfSection() {
  const { whatIf } = copy;

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-4 py-2 mb-6">
            <Lightbulb className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-700 font-medium">
              Die neue Realität
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-concrete-900 tracking-tight">
            {whatIf.headline}
          </h2>
        </div>

        {/* Scenarios Grid */}
        <div className="grid gap-4 mb-12">
          {whatIf.scenarios.map((scenario, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur border border-green-200 rounded-2xl p-6 md:p-8 hover:bg-white hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 rounded-xl bg-green-100 group-hover:bg-green-200 transition-colors">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-lg md:text-xl text-concrete-700 leading-relaxed">
                  {scenario}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Punchline */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-8 md:p-12 text-center text-white">
          <Sparkles className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <p className="text-2xl md:text-3xl font-heading mb-4">
            {whatIf.punchline}
          </p>
          <p className="text-green-100 text-lg">
            Und dieses Buch zeigt dir genau, wie.
          </p>
        </div>

        {/* Arrow pointing down */}
        <div className="flex justify-center mt-12">
          <div className="animate-bounce">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
