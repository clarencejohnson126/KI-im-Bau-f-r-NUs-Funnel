"use client";

import React from "react";
import { DollarSign, FileX, Users, Heart, AlertCircle } from "lucide-react";
import { copy } from "../../content/copy";

export function CostOfChaos() {
  const { costOfChaos } = copy;

  const icons = [FileX, FileX, Users, Heart];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-concrete-50 to-white" />

      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 border border-red-200 rounded-full px-4 py-2 mb-6">
            <DollarSign className="w-4 h-4 text-red-600" />
            <span className="text-sm text-red-700 font-medium">
              Die versteckten Kosten
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-concrete-900 mb-4 tracking-tight">
            {costOfChaos.headline}
          </h2>
          <p className="text-xl text-concrete-600 max-w-3xl mx-auto">
            {costOfChaos.subheadline}
          </p>
        </div>

        {/* Cost Sections */}
        <div className="space-y-8">
          {costOfChaos.sections.map((section, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="bg-white border-2 border-concrete-200 rounded-2xl p-6 md:p-8 shadow-lg hover:border-red-300 transition-colors"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-red-100 border border-red-200">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-concrete-900">
                    {section.title}
                  </h3>
                </div>

                {/* Story */}
                <div className="bg-concrete-50 rounded-xl p-6 mb-6">
                  <p className="text-concrete-700 leading-relaxed whitespace-pre-line">
                    {section.story}
                  </p>
                </div>

                {/* Data Table if exists */}
                {section.data && (
                  <div className="mb-6 overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-concrete-200">
                          <th className="text-left px-4 py-3 text-concrete-500 font-medium">
                            Projektgröße
                          </th>
                          <th className="text-left px-4 py-3 text-concrete-500 font-medium">
                            Typisches Nachtragsvolumen
                          </th>
                          <th className="text-left px-4 py-3 text-concrete-500 font-medium">
                            Verloren wg. Doku
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.data.map((row, rowIndex) => (
                          <tr
                            key={rowIndex}
                            className="border-b border-concrete-100"
                          >
                            <td className="px-4 py-3 text-concrete-700">
                              {row.project}
                            </td>
                            <td className="px-4 py-3 text-concrete-700">
                              {row.nachtrag}
                            </td>
                            <td className="px-4 py-3 text-red-600 font-semibold">
                              {row.lost}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Question if exists */}
                {section.question && (
                  <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-xl p-4 mb-4">
                    <p className="text-concrete-700 italic">{section.question}</p>
                  </div>
                )}

                {/* Calculation if exists */}
                {section.calculation && (
                  <p className="text-concrete-600 mb-4">{section.calculation}</p>
                )}

                {/* Costs list if exists */}
                {section.costs && (
                  <ul className="space-y-2 mb-4">
                    {section.costs.map((cost, costIndex) => (
                      <li
                        key={costIndex}
                        className="flex items-center gap-2 text-concrete-600"
                      >
                        <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                        {cost}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Reality if exists */}
                {section.reality && (
                  <p className="text-concrete-600 italic">{section.reality}</p>
                )}

                {/* Punchline if exists */}
                {section.punchline && (
                  <div className="mt-4 pt-4 border-t border-concrete-200">
                    <p className="text-red-600 font-heading text-lg font-semibold">
                      {section.punchline}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Total Cost Summary */}
        <div className="mt-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="font-display text-2xl md:text-3xl mb-4">
            Rechne es selbst nach:
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-red-100 text-sm mb-1">Verpasste Nachträge</p>
              <p className="font-display text-2xl">10.000-50.000 €/Jahr</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-red-100 text-sm mb-1">Verlorene Aufträge</p>
              <p className="font-display text-2xl">50.000-250.000 €/Jahr</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-red-100 text-sm mb-1">Fluktuation & Stress</p>
              <p className="font-display text-2xl">Unbezahlbar</p>
            </div>
          </div>
          <p className="text-xl text-red-100">
            Das Chaos kostet dich mehr als du denkst.
          </p>
        </div>
      </div>
    </section>
  );
}
