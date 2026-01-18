"use client";

import React from "react";
import { Quote, Star, CheckCircle } from "lucide-react";
import { copy } from "../../content/copy";

interface SocialProofBreakProps {
  variant?: 1 | 2;
}

export function SocialProofBreak({ variant = 1 }: SocialProofBreakProps) {
  const content = variant === 1 ? copy.socialProofBreak1 : copy.socialProofBreak2;

  // Single testimonial variant
  if (variant === 1) {
    const single = content as typeof copy.socialProofBreak1;
    return (
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-concrete-50 overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 max-w-4xl">
          <div className="relative bg-white border border-concrete-200 rounded-2xl p-8 md:p-12 shadow-xl">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 p-4 bg-orange-500 rounded-xl shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6 pt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Quote Text */}
            <blockquote className="text-xl md:text-2xl text-concrete-800 leading-relaxed mb-8 italic">
              &ldquo;{single.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {single.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-bold text-concrete-900">
                    {single.author}
                  </p>
                  <p className="text-concrete-500 text-sm">{single.role}</p>
                </div>
              </div>

              {/* Stat Badge */}
              <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-4 py-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-green-700 font-medium text-sm">
                  {single.stat}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Multiple testimonials variant
  const multiple = content as typeof copy.socialProofBreak2;
  return (
    <section className="relative py-20 md:py-32 bg-concrete-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-4 tracking-tight">
            {multiple.headline}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {multiple.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-concrete-800/50 border border-concrete-700 rounded-2xl p-6 hover:bg-concrete-800/70 transition-colors"
            >
              {/* Highlight Badge */}
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-3 py-1 mb-4">
                <span className="text-xs text-orange-400 font-medium">
                  {testimonial.highlight}
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-concrete-300 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-bold text-white text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-concrete-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
