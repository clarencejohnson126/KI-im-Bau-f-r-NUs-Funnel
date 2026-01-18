"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { copy } from "../../content/copy";

export function WhoIsThisFor() {
  const { whoIsThisFor } = copy;

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-concrete-900 mb-4 tracking-tight">
            {whoIsThisFor.headline}
          </h2>
          <p className="text-xl text-concrete-600">{whoIsThisFor.subheadline}</p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Ideal Customer - Green */}
          <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-green-500 shadow-lg">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-xl md:text-2xl text-green-800">
                {whoIsThisFor.idealCustomer.headline}
              </h3>
            </div>

            <ul className="space-y-4">
              {whoIsThisFor.idealCustomer.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-concrete-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For - Red/Gray */}
          <div className="bg-gradient-to-br from-concrete-100 to-white border-2 border-concrete-300 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-concrete-400 shadow-lg">
                <X className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-xl md:text-2xl text-concrete-700">
                {whoIsThisFor.notFor.headline}
              </h3>
            </div>

            <ul className="space-y-4 mb-6">
              {whoIsThisFor.notFor.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-concrete-400 flex-shrink-0 mt-0.5" />
                  <span className="text-concrete-600">{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-concrete-200">
              <p className="text-concrete-500 text-sm italic">
                {whoIsThisFor.notFor.closing}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
