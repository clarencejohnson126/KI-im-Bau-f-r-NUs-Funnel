"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { copy } from "../../content/copy";
import { ScrollReveal } from "./ui/ScrollReveal";

export function DeeperPain() {
  const { deeperPain } = copy;

  return (
    <section className="relative py-20 md:py-32 bg-concrete-950 overflow-hidden">
      {/* Atmospheric Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-concrete-900 via-concrete-950 to-black" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-concrete-700 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        {/* Story Headline */}
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            {deeperPain.headline}
          </h2>
        </ScrollReveal>

        {/* Hero Image */}
        <ScrollReveal className="mb-12">
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/images/bau/pain-reality.png"
              alt="Die Realität eines Nachunternehmers - späte Nacht am Schreibtisch"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-concrete-950 via-concrete-950/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
              <p className="text-concrete-400 text-lg italic">
                "Es ist 22:47 Uhr. Die Kinder schlafen längst. Du sitzt noch immer am Küchentisch."
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* The Story */}
        <div className="prose prose-lg prose-invert max-w-none mb-12">
          <div className="bg-concrete-900/50 border border-concrete-800 rounded-2xl p-6 md:p-10 mb-8">
            {deeperPain.story.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className={`text-concrete-300 leading-relaxed ${
                  index < deeperPain.story.split("\n\n").length - 1
                    ? "mb-6"
                    : ""
                } ${
                  paragraph.includes('"') && paragraph.length < 60
                    ? "text-xl md:text-2xl font-heading text-white italic text-center my-8"
                    : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Continuation */}
          <div className="space-y-6">
            {deeperPain.continuation.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className={`text-concrete-400 text-lg leading-relaxed ${
                  paragraph.includes("?")
                    ? "text-xl text-white font-heading"
                    : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Pain Bullet Points */}
        <div className="bg-gradient-to-br from-red-950/30 to-concrete-900/50 border border-red-900/30 rounded-2xl p-6 md:p-10 mb-12">
          <ul className="space-y-4">
            {deeperPain.bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                </span>
                <span className="text-concrete-200 text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Closing Question */}
        <div className="text-center">
          <p className="font-display text-2xl md:text-4xl text-orange-400 tracking-tight">
            {deeperPain.closingQuestion}
          </p>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-concrete-950 to-transparent" />
    </section>
  );
}
