"use client";

import React from "react";
import { Zap, AlertTriangle, Lightbulb } from "lucide-react";
import { copy } from "../../content/copy";

export function ToolComparison() {
  const { toolComparison } = copy;

  return (
    <section className="relative py-20 md:py-32 bg-concrete-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-500/5 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-400 font-medium">
              Tool-Vergleich
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            {toolComparison.headline}
          </h2>
          <p className="text-xl text-concrete-400 max-w-3xl mx-auto">
            {toolComparison.intro}
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {toolComparison.tools.map((tool, index) => (
            <div
              key={index}
              className="bg-concrete-800/50 border border-concrete-700 rounded-2xl p-6 hover:border-orange-500/50 transition-colors"
            >
              <h3 className="font-display text-2xl text-white mb-1">
                {tool.name}
              </h3>
              <p className="text-concrete-500 text-sm mb-4">{tool.provider}</p>

              <div className="space-y-4">
                <div>
                  <p className="text-concrete-400 text-xs uppercase tracking-wider mb-1">
                    Stärke
                  </p>
                  <p className="text-green-400">{tool.strength}</p>
                </div>
                <div>
                  <p className="text-concrete-400 text-xs uppercase tracking-wider mb-1">
                    Schwäche
                  </p>
                  <p className="text-red-400">{tool.weakness}</p>
                </div>
                <div>
                  <p className="text-concrete-400 text-xs uppercase tracking-wider mb-1">
                    Beste für
                  </p>
                  <p className="text-white">{tool.recommendation}</p>
                </div>
                <div className="pt-4 border-t border-concrete-700">
                  <p className="text-orange-400 font-mono text-lg">
                    {tool.cost}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Recommendation */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-concrete-800 border border-concrete-700 rounded-full px-6 py-3">
            <Lightbulb className="w-5 h-5 text-orange-400" />
            <p className="text-concrete-300">{toolComparison.recommendation}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
