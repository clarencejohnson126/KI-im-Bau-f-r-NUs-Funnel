"use client";

import React, { useState } from "react";
import { MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { copy } from "../../content/copy";

export function Objections() {
  const { objections } = copy;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-concrete-50 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-concrete-100 border border-concrete-200 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="w-4 h-4 text-concrete-600" />
            <span className="text-sm text-concrete-600 font-medium">
              Häufige Einwände
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-concrete-900 tracking-tight">
            {objections.headline}
          </h2>
        </div>

        {/* Objections Accordion */}
        <div className="space-y-4">
          {objections.items.map((item, index) => (
            <div
              key={index}
              className={`bg-white border-2 rounded-2xl overflow-hidden transition-all ${
                openIndex === index
                  ? "border-orange-500 shadow-lg"
                  : "border-concrete-200 hover:border-concrete-300"
              }`}
            >
              {/* Question/Objection */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span
                  className={`font-heading text-lg md:text-xl ${
                    openIndex === index ? "text-orange-600" : "text-concrete-800"
                  }`}
                >
                  {item.objection}
                </span>
                <span
                  className={`flex-shrink-0 ml-4 p-2 rounded-lg transition-colors ${
                    openIndex === index
                      ? "bg-orange-100 text-orange-600"
                      : "bg-concrete-100 text-concrete-500"
                  }`}
                >
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </span>
              </button>

              {/* Response */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-lg p-4 md:p-6">
                    <p className="text-concrete-700 leading-relaxed">
                      {item.response}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-concrete-500 text-lg">
            Noch Fragen?{" "}
            <a
              href="mailto:thinkbig@rebelz-ai.com"
              className="text-orange-600 hover:text-orange-700 underline"
            >
              Schreib mir eine E-Mail
            </a>{" "}
            – ich antworte innerhalb von 24 Stunden.
          </p>
        </div>
      </div>
    </section>
  );
}
