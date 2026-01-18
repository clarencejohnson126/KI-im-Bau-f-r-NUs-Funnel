"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { copy } from "../../content/copy";

export function SolutionBridge() {
  const { solution } = copy;

  return (
    <section className="bg-gradient-to-b from-white to-orange-50 py-16 md:py-24">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-orange-600 font-medium mb-4">
            <Sparkles className="w-5 h-5" />
            Die Lösung
          </span>
          <h2 className="heading-2 text-gray-900 mb-4">{solution.headline}</h2>
        </div>

        {/* Comparison Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {solution.points.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                {/* Before */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Vorher
                    </span>
                  </div>
                  <p className="text-gray-500 line-through text-lg">
                    {point.before}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-orange-600" />
                  </div>
                </div>

                {/* After */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                      Mit KI
                    </span>
                  </div>
                  <p className="text-gray-900 font-semibold text-lg">
                    {point.after}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-gray-600">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
