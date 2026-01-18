"use client";

import React from "react";
import { Monitor, X, Check, Sparkles, AlertCircle } from "lucide-react";
import { copy } from "../../content/copy";

export function DigitalizationLie() {
  const { digitalizationLie } = copy;

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-concrete-50 via-white to-concrete-50" />

      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-200 rounded-full px-4 py-2 mb-6">
            <Monitor className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-700 font-medium">
              Die unbequeme Wahrheit
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-concrete-900 mb-4 tracking-tight">
            {digitalizationLie.headline}
          </h2>
        </div>

        {/* Intro Quote */}
        <div className="bg-concrete-100 border-l-4 border-purple-500 rounded-r-2xl p-6 md:p-8 mb-10">
          <p className="text-xl text-concrete-700 italic">
            {digitalizationLie.intro}
          </p>
        </div>

        {/* Reality Check */}
        <div className="bg-white border-2 border-concrete-200 rounded-2xl p-6 md:p-8 mb-10 shadow-lg">
          <p className="text-lg text-concrete-600 leading-relaxed whitespace-pre-line">
            {digitalizationLie.reality}
          </p>
        </div>

        {/* Honest Questions */}
        <div className="mb-12">
          <h3 className="font-heading text-xl text-concrete-800 mb-6 text-center">
            Sei ehrlich zu dir selbst:
          </h3>
          <div className="space-y-3">
            {digitalizationLie.honestQuestions.map((question, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-red-50 border border-red-100 rounded-xl p-4"
              >
                <div className="flex-shrink-0 p-1 rounded-full bg-red-100">
                  <X className="w-4 h-4 text-red-500" />
                </div>
                <p className="text-concrete-700">{question}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Diagnosis */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-center text-white mb-12">
          <AlertCircle className="w-10 h-10 mx-auto mb-4 opacity-80" />
          <p className="text-xl md:text-2xl font-heading">
            {digitalizationLie.diagnosis}
          </p>
        </div>

        {/* Real Digitalization */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-green-100">
              <Sparkles className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-heading text-xl text-green-800">
              Echte Digitalisierung sieht anders aus
            </h3>
          </div>

          <div className="prose prose-lg text-concrete-700 whitespace-pre-line">
            {digitalizationLie.realDigitalization.split('\n').map((line, index) => {
              if (line.startsWith('•')) {
                return (
                  <div key={index} className="flex items-start gap-3 mb-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{line.replace('• ', '')}</span>
                  </div>
                );
              }
              return line ? <p key={index} className="mb-4">{line}</p> : null;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
