"use client";

import React from "react";
import { Building2, Clock, FileCheck, Euro, CheckCircle, AlertTriangle } from "lucide-react";
import { copy } from "../../content/copy";

export function GUExpectations() {
  const { guExpectations } = copy;

  const icons = [FileCheck, Clock, FileCheck, Euro];

  return (
    <section className="relative py-20 md:py-32 bg-concrete-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 mb-6">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-700 font-medium">
              Perspektivwechsel
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-concrete-900 mb-4 tracking-tight">
            {guExpectations.headline}
          </h2>
        </div>

        {/* Intro Text */}
        <div className="bg-white border border-concrete-200 rounded-2xl p-6 md:p-8 mb-12 shadow-lg">
          <p className="text-lg text-concrete-600 leading-relaxed">
            {guExpectations.intro}
          </p>
        </div>

        {/* Expectations Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {guExpectations.expectations.map((expectation, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="bg-white border-2 border-concrete-200 rounded-2xl p-6 shadow-lg hover:border-blue-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-concrete-900">
                    {expectation.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {expectation.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-concrete-600"
                    >
                      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Honest Question */}
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-2xl p-8 md:p-10 mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-3 rounded-xl bg-orange-100">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-lg text-concrete-700 leading-relaxed mb-4">
                {guExpectations.honestQuestion}
              </p>
              <p className="text-concrete-600 italic">
                {guExpectations.reality}
              </p>
            </div>
          </div>
        </div>

        {/* Punchline */}
        <div className="bg-concrete-900 rounded-2xl p-8 text-center">
          <p className="text-xl md:text-2xl text-white">
            {guExpectations.punchline}
          </p>
        </div>
      </div>
    </section>
  );
}
