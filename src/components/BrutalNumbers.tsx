"use client";

import React from "react";
import { Clock, Calculator, AlertTriangle } from "lucide-react";
import { copy } from "../../content/copy";

export function BrutalNumbers() {
  const { brutalNumbers } = copy;

  return (
    <section className="relative py-20 md:py-32 bg-concrete-900 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                              linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-400 font-medium">
              Die harte Wahrheit
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            {brutalNumbers.headline}
          </h2>
          <p className="text-xl text-concrete-400 max-w-3xl mx-auto">
            {brutalNumbers.subheadline}
          </p>
        </div>

        {/* Intro Text */}
        <div className="bg-concrete-800/50 border border-concrete-700 rounded-2xl p-6 md:p-8 mb-12">
          <p className="text-lg text-concrete-300 leading-relaxed">
            {brutalNumbers.intro}
          </p>
        </div>

        {/* Time Breakdown Table */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
              <Clock className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-white">
              {brutalNumbers.timeBreakdown.headline}
            </h3>
          </div>

          <div className="bg-concrete-800/50 border border-concrete-700 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-concrete-700">
                    <th className="text-left px-6 py-4 text-concrete-400 font-medium text-sm uppercase tracking-wider">
                      Aufgabe
                    </th>
                    <th className="text-right px-6 py-4 text-concrete-400 font-medium text-sm uppercase tracking-wider">
                      Zeitaufwand
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {brutalNumbers.timeBreakdown.items.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-concrete-700/50 last:border-b-0 hover:bg-concrete-800/50 transition-colors"
                    >
                      <td className="px-6 py-4 text-concrete-300">
                        {item.task}
                      </td>
                      <td className="px-6 py-4 text-right font-mono text-orange-400">
                        {item.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-orange-500/10 border-t-2 border-orange-500/30">
                    <td className="px-6 py-4 text-white font-heading text-lg">
                      Summe Admin
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-2xl text-orange-400 font-bold">
                      {brutalNumbers.timeBreakdown.total}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        {/* Punchline */}
        <div className="bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-500/20 border-2 border-red-500/30 rounded-2xl p-8 md:p-12 text-center">
          <Calculator className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
            {brutalNumbers.punchline}
          </p>
        </div>

        {/* Visual: 40% stat */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center">
            <span className="font-display text-8xl md:text-9xl text-red-500/30">
              40-60%
            </span>
            <span className="text-concrete-400 text-lg -mt-4">
              deiner Arbeitszeit = Administration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
