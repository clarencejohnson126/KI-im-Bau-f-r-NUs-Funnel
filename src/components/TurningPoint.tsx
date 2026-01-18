"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbulb, Sparkles } from "lucide-react";
import { copy } from "../../content/copy";
import { ScrollReveal } from "./ui/ScrollReveal";

export function TurningPoint() {
  const { turningPoint } = copy;

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-black via-concrete-950 to-concrete-900 overflow-hidden">
      {/* Subtle Light Effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        {/* Header */}
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <Lightbulb className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-400 font-medium">
              Der Wendepunkt
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white tracking-tight">
            {turningPoint.headline}
          </h2>
        </ScrollReveal>

        {/* Hero Image - AI Workshop */}
        <ScrollReveal className="mb-12">
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/images/bau/turning-point-moment.png"
              alt="Der Wendepunkt - Zukunft Bauen mit KI"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-concrete-950 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-wrap items-center gap-4">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-lg font-heading">
                  Zukunft Bauen
                </span>
                <span className="text-white/80">Der Moment, der alles verändert hat</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* The Story - Part 1 */}
        <div className="bg-concrete-900/50 border border-concrete-800 rounded-2xl p-6 md:p-10 mb-8">
          <div className="space-y-6">
            {turningPoint.story.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className={`text-concrete-300 leading-relaxed ${
                  paragraph.includes('"') && !paragraph.includes("Was sind")
                    ? "text-xl md:text-2xl font-heading text-concrete-200 italic"
                    : "text-lg"
                } ${paragraph.includes("Was sind") ? "bg-concrete-800/50 border border-concrete-700 rounded-lg p-4 font-mono text-sm text-orange-300" : ""}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Revelation Box */}
        <div className="relative bg-gradient-to-br from-orange-950/40 via-concrete-900/80 to-orange-950/40 border border-orange-500/30 rounded-2xl p-8 md:p-12 mb-8 overflow-hidden">
          {/* Sparkle Effect */}
          <div className="absolute top-4 right-4">
            <Sparkles className="w-8 h-8 text-orange-400/50 animate-pulse" />
          </div>
          <div className="absolute bottom-4 left-4">
            <Sparkles className="w-6 h-6 text-orange-400/30 animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>

          <div className="relative z-10 space-y-6">
            {turningPoint.revelation.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className={`leading-relaxed ${
                  paragraph.includes("30 Sekunden") ||
                  paragraph.includes("10 Minuten") ||
                  paragraph.includes("1:30 Uhr")
                    ? "text-xl text-orange-300 font-heading"
                    : "text-lg text-concrete-200"
                } ${
                  paragraph.includes("In dieser Nacht")
                    ? "text-2xl md:text-3xl font-display text-white text-center pt-4"
                    : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Realization */}
        <div className="text-center">
          <p className="text-xl md:text-2xl text-concrete-300 italic">
            {turningPoint.realization}
          </p>
        </div>
      </div>
    </section>
  );
}
