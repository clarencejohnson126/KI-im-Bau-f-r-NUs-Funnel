"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Frown, Smile, TrendingUp, Home, Heart } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

export function BeforeAfterTransformation() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-concrete-900 to-concrete-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400 font-medium">
              Die Transformation
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            Von der Überlastung zur Kontrolle
          </h2>
          <p className="text-xl text-concrete-400 max-w-3xl mx-auto">
            So verändert KI deinen Arbeitsalltag – weniger Stress, mehr Zeit für das Wesentliche
          </p>
        </ScrollReveal>

        {/* Before/After Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* BEFORE */}
          <ScrollReveal delay={0.1}>
            <div className="relative bg-red-500/5 border border-red-500/20 rounded-3xl overflow-hidden">
              <div className="absolute top-4 left-4 z-20 bg-red-500 text-white px-4 py-2 rounded-lg font-heading">
                VORHER
              </div>

              {/* Image */}
              <div className="relative h-64 md:h-80">
                <Image
                  src="/images/bau/late-night-container.png"
                  alt="Handwerker arbeitet spät abends im Baucontainer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-concrete-950 via-concrete-950/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-red-500/20">
                    <Frown className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="font-display text-2xl text-white">Der Alltag ohne KI</h3>
                </div>

                <ul className="space-y-3">
                  {[
                    "Jeden Abend 2 Stunden Büroarbeit",
                    "Wochenende im Baucontainer statt mit der Familie",
                    "E-Mail-Chaos und verpasste Fristen",
                    "Nachträge, die im Nirgendwo verschwinden",
                    "Das Gefühl, nie fertig zu werden"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-2 text-concrete-400"
                    >
                      <span className="text-red-400 mt-1">✕</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* AFTER */}
          <ScrollReveal delay={0.2}>
            <div className="relative bg-green-500/5 border border-green-500/20 rounded-3xl overflow-hidden">
              <div className="absolute top-4 left-4 z-20 bg-green-500 text-white px-4 py-2 rounded-lg font-heading">
                NACHHER
              </div>

              {/* Image - Happy Boss */}
              <div className="relative h-64 md:h-80">
                <Image
                  src="/images/bau/happy-boss.png"
                  alt="Zufriedener Handwerksmeister im Büro"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-concrete-950 via-concrete-950/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-green-500/20">
                    <Smile className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="font-display text-2xl text-white">Der Alltag mit KI</h3>
                </div>

                <ul className="space-y-3">
                  {[
                    "Büroarbeit in der Hälfte der Zeit erledigt",
                    "Feierabend um 17 Uhr – wirklich Feierabend",
                    "Alle Dokumente in Sekunden gefunden",
                    "Nachträge wasserdicht dokumentiert",
                    "Endlich wieder Kontrolle über den Tag"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-2 text-concrete-300"
                    >
                      <span className="text-green-400 mt-1">✓</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Hero Transformation Image */}
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/images/bau/happy-worker-leaving.png"
              alt="Glücklicher Handwerker verlässt die Baustelle pünktlich"
              width={1400}
              height={600}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-concrete-950 via-transparent to-concrete-950/80" />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8">
                <div className="max-w-lg">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-concrete-950/80 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 md:p-8"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-green-500/20">
                        <Home className="w-8 h-8 text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl text-white">Pünktlich Feierabend</h3>
                        <p className="text-green-400 font-medium">Jeden Tag. Nicht nur manchmal.</p>
                      </div>
                    </div>
                    <p className="text-concrete-300 mb-4">
                      Stell dir vor: Du verlässt die Baustelle, schaust auf dein Handy – und siehst deine Familie.
                      Nicht noch 47 ungelesene E-Mails. Nicht noch ein Nachtrag, der bis morgen fertig sein muss.
                    </p>
                    <div className="flex items-center gap-2 text-concrete-400 text-sm">
                      <Heart className="w-4 h-4 text-red-400" />
                      <span>Mehr Zeit für das, was wirklich zählt</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { value: "bis zu 25%", label: "weniger Büroarbeit", icon: Clock },
            { value: "17 Uhr", label: "Feierabend statt 20 Uhr", icon: Home },
            { value: "0", label: "verpasste Fristen", icon: TrendingUp },
            { value: "100%", label: "mehr Lebensqualität", icon: Heart },
          ].map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                className="bg-concrete-800/50 border border-concrete-700 rounded-2xl p-6 text-center"
                whileHover={{ scale: 1.05, borderColor: "rgba(34, 197, 94, 0.5)" }}
              >
                <stat.icon className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <p className="font-display text-3xl text-green-400">{stat.value}</p>
                <p className="text-concrete-400 text-sm">{stat.label}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
