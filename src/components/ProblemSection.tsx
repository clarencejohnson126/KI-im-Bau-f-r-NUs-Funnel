"use client";

import React from "react";
import { AlertTriangle, Clock, FileText, Mail, DollarSign, X } from "lucide-react";
import { copy } from "../../content/copy";

export function ProblemSection() {
  const { problem } = copy;

  const icons = [
    <FileText key="file" className="w-6 h-6" />,
    <Mail key="mail" className="w-6 h-6" />,
    <DollarSign key="dollar" className="w-6 h-6" />,
    <Clock key="clock" className="w-6 h-6" />,
  ];

  return (
    <section className="relative bg-concrete-900 text-white py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Diagonal Lines Pattern */}
        <div className="absolute inset-0 opacity-5 bg-diagonal-lines" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-concrete-900 via-transparent to-concrete-900" />

        {/* Red Warning Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 font-heading font-semibold text-sm uppercase tracking-wider mb-6">
            <AlertTriangle className="w-4 h-4" />
            Das Problem
          </div>

          <h2 className="font-display text-display-lg text-white mb-4">
            {problem.headline}
          </h2>
          <p className="text-xl text-concrete-400 max-w-2xl mx-auto">
            {problem.subheadline}
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {problem.painPoints.map((point, index) => (
            <div
              key={index}
              className="group relative bg-concrete-800/50 backdrop-blur-sm border border-concrete-700/50 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-red-500/20 rounded-tr-2xl transition-colors group-hover:border-red-500/40" />

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center text-red-400 group-hover:bg-red-500/20 transition-colors">
                  {icons[index]}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-red-300 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-concrete-400 leading-relaxed text-sm">
                    {point.description}
                  </p>
                </div>
              </div>

              {/* X Mark */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <X className="w-4 h-4 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Stat Highlight */}
        <div className="relative max-w-2xl mx-auto">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-500/20 rounded-3xl blur-xl" />

          <div className="relative bg-gradient-to-br from-concrete-800 to-concrete-900 border border-red-500/30 rounded-3xl p-10 text-center">
            {/* Decorative Lines */}
            <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
            <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

            <div className="font-display text-8xl md:text-9xl text-red-500 leading-none mb-4">
              {problem.stat.number}
            </div>
            <p className="text-xl md:text-2xl text-concrete-300 font-heading">
              {problem.stat.label}
            </p>

            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-3xl animate-pulse-glow opacity-30" />
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-concrete-500 mt-10 text-lg">
          Studien zeigen: Fast die Hälfte deiner Zeit geht für Papierkram drauf.
          <br />
          <span className="text-red-400 font-semibold">Das muss nicht sein.</span>
        </p>
      </div>
    </section>
  );
}
