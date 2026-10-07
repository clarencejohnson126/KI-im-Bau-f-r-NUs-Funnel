"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowRight, Shield, Clock, Zap, Sparkles } from "lucide-react";
import { Button } from "./ui/Button";
import { copy } from "../../content/copy";
import { ScrollReveal } from "./ui/ScrollReveal";

export function FinalCTA() {
  const { finalCta, product } = copy;

  return (
    <section id="final-cta" className="relative bg-concrete-900 py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        {/* Diagonal Lines */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(249, 115, 22, 1) 40px,
              rgba(249, 115, 22, 1) 41px
            )`,
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-display-lg text-white mb-4">
              {finalCta.headline}
            </h2>
            <p className="text-xl text-concrete-400">{finalCta.subheadline}</p>
          </div>

          {/* Main Card */}
          <div className="relative">
            {/* Outer Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 rounded-[2rem] blur-sm opacity-60" />

            <div className="relative bg-white rounded-[2rem] overflow-hidden">
              {/* Top Banner */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-3 px-6 text-center">
                <p className="text-white font-heading font-semibold flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Einmaliges Angebot – Spare {product.pricing.savings.split(' ')[1]}
                </p>
              </div>

              <div className="p-8 md:p-12">
                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-10">
                  {/* Left: Benefits */}
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-concrete-900 mb-6">
                      Das bekommst du:
                    </h3>
                    <ul className="space-y-4">
                      {finalCta.bullets.map((bullet, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-7 h-7 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-concrete-700 text-lg">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Trust Indicators */}
                    <div className="mt-8 pt-6 border-t border-concrete-200">
                      <div className="flex flex-wrap gap-6 text-sm text-concrete-500">
                        <div className="flex items-center gap-2">
                          <Shield className="w-5 h-5 text-green-500" />
                          <span>14-Tage Garantie</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-blue-500" />
                          <span>Sofort-Download</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Price & CTA */}
                  <div className="lg:border-l lg:border-concrete-200 lg:pl-10">
                    {/* Price */}
                    <div className="text-center mb-8">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-xl text-concrete-400 line-through">
                          {product.pricing.original}
                        </span>
                        <span className="bg-red-100 text-red-600 text-sm font-bold px-3 py-1 rounded-full">
                          {product.pricing.discount}
                        </span>
                      </div>
                      <div className="font-display text-7xl md:text-8xl text-concrete-900 leading-none">
                        {product.pricing.current}
                      </div>
                      <p className="text-green-600 font-semibold mt-2 text-lg">
                        {product.pricing.savings}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <a href="/checkout" className="block">
                      <Button
                        variant="primary"
                        size="lg"
                        fullWidth
                        className="group text-xl py-6 shadow-brutal-orange hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                      >
                        {finalCta.cta}
                        <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>

                    {/* Micro Copy */}
                    <p className="text-sm text-concrete-500 text-center mt-4">
                      {finalCta.microCopy}
                    </p>

                    {/* Guarantee Box */}
                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <Shield className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-green-800 text-sm">
                            Kein Risiko
                          </p>
                          <p className="text-green-700 text-xs">
                            14 Tage Geld-zurück-Garantie, ohne Wenn und Aber
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Future Vision Image */}
          <ScrollReveal className="mt-12">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/bau/zukunft-ar.png"
                alt="Die Zukunft der Baubranche mit KI"
                width={1200}
                height={400}
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-concrete-900 via-concrete-900/70 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="p-6 md:p-8 max-w-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-orange-400" />
                    <span className="text-orange-400 text-sm font-medium">Deine Zukunft</span>
                  </div>
                  <p className="text-white font-display text-xl md:text-2xl mb-2">
                    Sei Teil der KI-Revolution im Bau
                  </p>
                  <p className="text-concrete-400 text-sm">
                    Die Nachunternehmer, die jetzt handeln, werden den Markt dominieren.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Social Proof */}
          <div className="mt-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-concrete-900 flex items-center justify-center text-white font-bold text-xs"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {["TM", "SK", "MH", "JP", "AS"][i]}
                  </motion.div>
                ))}
              </div>
              <span className="text-concrete-400 text-sm">Zusammenarbeit mit +300 Nachunternehmern über 13 Jahre Baupraxis</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </motion.svg>
              ))}
              <span className="text-concrete-400 text-sm ml-2">4.9/5 Bewertung</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
