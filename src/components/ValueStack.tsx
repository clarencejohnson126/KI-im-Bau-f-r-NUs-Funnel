"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Gift, RotateCcw, Sparkles, Star } from "lucide-react";
import { copy } from "../../content/copy";
import { ScrollReveal } from "./ui/ScrollReveal";

function ValueFlipCard({ item, index }: { item: typeof copy.valueStack.items[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const colors = [
    "from-orange-500 to-amber-500",
    "from-blue-500 to-cyan-500",
    "from-green-500 to-emerald-500",
    "from-purple-500 to-violet-500",
    "from-pink-500 to-rose-500",
  ];

  const bgColor = colors[index % colors.length];

  return (
    <div
      className="relative h-[320px] cursor-pointer group"
      style={{ perspective: "1000px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of Card */}
        <div
          className="absolute inset-0 bg-white border-2 border-concrete-200 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Animated hover border effect */}
          <motion.div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            style={{ padding: "2px" }}
          >
            <div className="absolute inset-[2px] bg-white rounded-2xl" />
          </motion.div>

          <div className="relative p-6 h-full flex flex-col">
            {/* Number Badge */}
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${bgColor} text-white font-bold text-lg`}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                {index + 1}
              </motion.div>
              <div className="flex-1">
                <h3 className="font-display text-xl text-concrete-900">
                  {item.title}
                </h3>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-block px-3 py-1.5 bg-green-100 text-green-700 font-heading font-bold rounded-lg text-sm">
                  {item.value}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-concrete-600 mb-4 flex-1">
              {item.description}
            </p>

            {/* Flip hint */}
            <div className="pt-4 border-t border-concrete-200">
              <motion.div
                className="flex items-center justify-center gap-2 text-concrete-500 text-sm"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <RotateCcw className="w-4 h-4" />
                Umdrehen für Details
              </motion.div>
            </div>

            {/* Gradient accent */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${bgColor}`} />
          </div>
        </div>

        {/* Back of Card */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${bgColor} rounded-2xl overflow-hidden shadow-xl`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="p-6 h-full flex flex-col text-white">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-white/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-lg">Was du bekommst:</h4>
            </div>

            {/* Highlights */}
            <div className="flex-1 overflow-auto">
              <ul className="space-y-3">
                {item.highlights.map((highlight, hIndex) => (
                  <motion.li
                    key={hIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: hIndex * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Value at bottom */}
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-white/80" />
                  <span className="font-heading text-lg">Wert: {item.value}</span>
                </div>
                <motion.div
                  className="flex items-center gap-2 text-white/70 text-sm"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <RotateCcw className="w-4 h-4" />
                  Zurück
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ValueStack() {
  const { valueStack } = copy;

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-concrete-100 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Header */}
        <ScrollReveal className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-2 mb-6">
            <Gift className="w-4 h-4 text-orange-600" />
            <span className="text-sm text-orange-700 font-medium">
              Detaillierter Wert
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-concrete-900 mb-4 tracking-tight">
            {valueStack.headline}
          </h2>
          <p className="text-xl text-concrete-600">{valueStack.subheadline}</p>
          <p className="text-concrete-500 mt-4">Klicke auf eine Karte, um die Details zu sehen</p>
        </ScrollReveal>

        {/* Value Items as Flip Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {valueStack.items.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <ValueFlipCard item={item} index={index} />
            </ScrollReveal>
          ))}
        </div>

        {/* Total Value Box - Enhanced with hover effect */}
        <ScrollReveal>
          <motion.div
            className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-center shadow-glow-orange relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Animated sparkle effect */}
            <motion.div
              className="absolute top-4 right-4"
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 text-white/30" />
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-4"
              animate={{ rotate: -360, scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            >
              <Sparkles className="w-6 h-6 text-white/20" />
            </motion.div>

            <div className="relative grid md:grid-cols-3 gap-6 items-center">
              <motion.div whileHover={{ scale: 1.05 }}>
                <p className="text-orange-100 text-sm uppercase tracking-wider mb-1">
                  Gesamtwert
                </p>
                <p className="font-display text-3xl md:text-4xl text-white line-through opacity-75">
                  {valueStack.totalValue}
                </p>
              </motion.div>
              <motion.div
                className="border-t md:border-t-0 md:border-l md:border-r border-orange-400/30 py-4 md:py-0 md:px-6"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-orange-100 text-sm uppercase tracking-wider mb-1">
                  Dein Preis heute
                </p>
                <motion.p
                  className="font-display text-4xl md:text-5xl text-white"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {valueStack.yourPrice}
                </motion.p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <p className="text-orange-100 text-sm uppercase tracking-wider mb-1">
                  Du sparst
                </p>
                <p className="font-display text-2xl md:text-3xl text-white">
                  {valueStack.savings}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
