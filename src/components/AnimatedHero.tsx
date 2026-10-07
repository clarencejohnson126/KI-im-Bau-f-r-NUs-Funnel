"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Play, CheckCircle } from "lucide-react";
import { Button } from "./ui/Button";
import { DrillIcon, HardHatIcon, RulerIcon, HammerIcon, ExcavatorIcon, CableDrumIcon } from "./icons/ConstructionIcons";
import { copy } from "../../content/copy";

const VIDEO_URL = "https://eoahpwciwttfavzpqfnz.supabase.co/storage/v1/object/sign/unrelated/e-book%20video%20final.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85YmJlMzI3NC0xODJjLTRmZGUtODk2NC1hMTcxNzVmY2I1NGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1bnJlbGF0ZWQvZS1ib29rIHZpZGVvIGZpbmFsLm1wNCIsImlhdCI6MTc2ODc4MDk0NSwiZXhwIjoxOTU3OTk2OTQ1fQ.VDAFOYf3zPS0h9myIkhtJjr4GzOyid4L9e5kFwasqB0";

export function AnimatedHero() {
  const { hero } = copy;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-concrete-950"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                            linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating construction tools - Parallax */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-[15%] left-[10%]"
        >
          <motion.div
            animate={{ rotate: [0, 10, 0], y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="opacity-20"
          >
            <DrillIcon className="w-20 h-20 md:w-28 md:h-28" />
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          className="absolute top-[20%] right-[15%]"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            className="opacity-15"
          >
            <HardHatIcon className="w-24 h-24 md:w-32 md:h-32" />
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: y3 }}
          className="absolute bottom-[25%] left-[8%]"
        >
          <motion.div
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="opacity-15"
          >
            <RulerIcon className="w-16 h-16 md:w-24 md:h-24" />
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: y1 }}
          className="absolute bottom-[30%] right-[10%]"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="opacity-10"
          >
            <CableDrumIcon className="w-20 h-20 md:w-28 md:h-28" />
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          className="absolute top-[50%] left-[5%]"
        >
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 2 }}
            className="opacity-10"
          >
            <ExcavatorIcon className="w-32 h-32 md:w-40 md:h-40" />
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: y3 }}
          className="absolute top-[40%] right-[5%]"
        >
          <motion.div
            animate={{ rotate: [0, -20, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            className="opacity-15"
          >
            <HammerIcon className="w-16 h-16 md:w-20 md:h-20" />
          </motion.div>
        </motion.div>
      </div>

      {/* Main content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 container mx-auto px-4 text-center max-w-5xl"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <motion.span
            className="inline-flex items-center gap-3 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-3"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(249, 115, 22, 0.4)",
                "0 0 0 12px rgba(249, 115, 22, 0)",
                "0 0 0 0 rgba(249, 115, 22, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 font-medium">
              <span className="text-lg md:text-xl">Für Nachunternehmer im Bau</span>
              <span className="text-sm md:text-base ml-1">mit bis zu 50 Mitarbeiter</span>
            </span>
          </motion.span>
        </motion.div>

        {/* Headline with typewriter effect */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-display-xl text-white mb-6"
          style={{ wordSpacing: '0.15em' }}
        >
          {hero.headline.split("\n").map((line, lineIndex) => (
            <span key={lineIndex} className="block">
              {line.split(" ").map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + (lineIndex * 3 + wordIndex) * 0.1 }}
                  className={
                    word === "frisst"
                      ? "text-orange-500 relative inline"
                      : "inline"
                  }
                >
                  {word}
                  {word === "frisst" && (
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full h-3"
                      viewBox="0 0 100 12"
                      preserveAspectRatio="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                    >
                      <motion.path
                        d="M0 8 Q25 2, 50 6 T100 4"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                      />
                    </motion.svg>
                  )}
                  {wordIndex < line.split(" ").length - 1 && " "}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-concrete-300 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          {hero.subheadline}
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 mb-10"
        >
          {hero.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl text-orange-400">
                {stat.number}
              </div>
              <div className="text-concrete-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a href="/checkout">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="primary"
                size="lg"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {hero.cta} – {hero.price}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </a>

          <a href={VIDEO_URL} target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 text-concrete-400 hover:text-white transition-colors px-6 py-3 cursor-pointer"
            >
              <Play className="w-5 h-5" />
              <span>Video ansehen</span>
            </motion.div>
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap justify-center items-center gap-6 text-concrete-500"
        >
          {hero.trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
              className="flex items-center gap-2 text-sm"
            >
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>{badge}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-concrete-500"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
