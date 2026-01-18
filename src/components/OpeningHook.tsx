"use client";

import React from "react";
import { Clock, AlertCircle } from "lucide-react";
import { copy } from "../../content/copy";

export function OpeningHook() {
  const { openingHook } = copy;

  return (
    <section className="relative py-20 md:py-32 bg-concrete-900 overflow-hidden">
      {/* Dramatic lighting effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-3xl">
        {/* Time Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-concrete-800 border border-concrete-700 rounded-full px-4 py-2">
            <Clock className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-concrete-300">Die Realität</span>
          </div>
        </div>

        {/* Opening Headline */}
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white text-center mb-8 tracking-tight leading-tight">
          {openingHook.headline}
        </h2>

        {/* Story Text */}
        <div className="bg-concrete-800/50 border border-concrete-700 rounded-2xl p-8 md:p-10 mb-8">
          <p className="text-xl md:text-2xl text-concrete-300 leading-relaxed whitespace-pre-line font-body">
            {openingHook.continuation}
          </p>
        </div>

        {/* Punchline */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-orange-500/10 border border-orange-500/30 rounded-full px-6 py-3">
            <AlertCircle className="w-5 h-5 text-orange-400" />
            <p className="text-lg md:text-xl text-orange-400 font-heading">
              {openingHook.punchline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
