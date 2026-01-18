"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Zap,
  TrendingUp,
  Clock,
  UserCheck,
  Shield,
  Gift,
  Sparkles,
} from "lucide-react";
import { copy } from "../../content/copy";
import { ScrollReveal } from "./ui/ScrollReveal";

export function Benefits() {
  const { benefits } = copy;

  const iconMap: Record<string, React.ReactNode> = {
    zap: <Zap className="w-6 h-6" />,
    "trending-up": <TrendingUp className="w-6 h-6" />,
    clock: <Clock className="w-6 h-6" />,
    "user-check": <UserCheck className="w-6 h-6" />,
    shield: <Shield className="w-6 h-6" />,
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-concrete-900 to-concrete-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
        <motion.div
          className="absolute top-1/3 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Header */}
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <Gift className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-400 font-medium">
              Deine Vorteile
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            {benefits.headline}
          </h2>
          <p className="text-xl text-concrete-400 max-w-3xl mx-auto">
            Das Starter Kit wurde speziell für Nachunternehmer entwickelt.
          </p>
        </ScrollReveal>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Dashboard Image */}
          <ScrollReveal>
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/bau/dashboard.png"
                alt="KI Dashboard für Nachunternehmer"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-concrete-950 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-heading">Alles auf einen Blick</p>
                    <p className="text-concrete-400 text-sm">KI-gesteuerte Automatisierung</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Right: Benefits Grid */}
          <div className="space-y-4">
            {benefits.items.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  className="flex items-start gap-4 p-5 bg-concrete-800/50 border border-concrete-700 rounded-xl hover:border-orange-500/50 transition-all group"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    {iconMap[item.icon]}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-concrete-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <ScrollReveal className="mt-16">
          <div className="bg-gradient-to-r from-orange-500/20 via-amber-500/10 to-orange-500/20 border border-orange-500/30 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="font-display text-2xl md:text-3xl text-orange-400">bis zu 25%</p>
                <p className="text-concrete-400 text-sm">Zeitersparnis</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-orange-400">9x</p>
                <p className="text-concrete-400 text-sm">Schnellere Angebote</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-orange-400">300+</p>
                <p className="text-concrete-400 text-sm">Seiten Wissen</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-orange-400">50+</p>
                <p className="text-concrete-400 text-sm">Fertige Prompts</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
