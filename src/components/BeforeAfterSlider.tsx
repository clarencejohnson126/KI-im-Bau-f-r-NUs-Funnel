"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Zap, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

const comparisons = [
  {
    category: "Ausschreibung analysieren",
    before: {
      time: "3 Stunden",
      description: "Seite für Seite durchlesen, Notizen machen, Risiken übersehen",
      pain: "Versteckte Klauseln werden oft übersehen → teure Überraschungen",
    },
    after: {
      time: "10 Minuten",
      description: "KI fasst zusammen, markiert Risiken, zeigt versteckte Anforderungen",
      benefit: "€10.550 gefunden, die sonst übersehen worden wären",
    },
    savings: "2h 50min",
    icon: "📄",
  },
  {
    category: "Angebot erstellen",
    before: {
      time: "45 Minuten",
      description: "Positionen abtippen, Preise raussuchen, Texte formulieren",
      pain: "Unter Zeitdruck werden Fehler gemacht → zu niedrig kalkuliert",
    },
    after: {
      time: "5 Minuten",
      description: "KI erstellt Entwurf aus Vorlage, du prüfst nur noch",
      benefit: "9x mehr Angebote rausschicken = mehr Aufträge",
    },
    savings: "40min",
    icon: "💰",
  },
  {
    category: "Tagesbericht schreiben",
    before: {
      time: "30 Minuten",
      description: "Abends am Küchentisch tippen, Fotos sortieren, erinnern was war",
      pain: "Jeden Abend. Nach einem 10-Stunden-Tag. Statt Familie.",
    },
    after: {
      time: "5 Minuten",
      description: "2 Minuten ins Handy sprechen, KI macht professionellen Bericht",
      benefit: "8+ Stunden pro Monat zurück. Fast ein ganzer Arbeitstag.",
    },
    savings: "25min",
    icon: "📝",
  },
  {
    category: "Nachtrag dokumentieren",
    before: {
      time: "Variable",
      description: "Irgendwo aufschreiben, später suchen, oft vergessen",
      pain: "30-50% der Nachträge werden abgelehnt wegen fehlender Doku",
    },
    after: {
      time: "Sofort",
      description: "KI erkennt Nachtragspotenzial, erstellt Vorlage mit Bezügen",
      benefit: "70-80% Erfolgsquote statt 30-50%",
    },
    savings: "€€€",
    icon: "📋",
  },
  {
    category: "E-Mail an GU schreiben",
    before: {
      time: "15-20 Minuten",
      description: "Formulieren, umformulieren, zu emotional, nochmal neu",
      pain: "Falsche Wortwahl kann Geschäftsbeziehung beschädigen",
    },
    after: {
      time: "2 Minuten",
      description: "Stichpunkte eingeben, KI formuliert sachlich & professionell",
      benefit: "Professioneller Auftritt, bessere Geschäftsbeziehung",
    },
    savings: "15min",
    icon: "✉️",
  },
];

export function BeforeAfterSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const active = comparisons[activeIndex];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-diagonal-lines opacity-50" />

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-700 font-medium">
              Vorher vs. Nachher
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-concrete-900 mb-4 tracking-tight">
            So viel Zeit sparst du wirklich
          </h2>
          <p className="text-xl text-concrete-600">
            Zieh den Slider und vergleiche
          </p>
        </ScrollReveal>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {comparisons.map((comp, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                activeIndex === index
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-concrete-100 text-concrete-600 hover:bg-concrete-200"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{comp.icon}</span>
              <span className="hidden sm:inline">{comp.category}</span>
            </motion.button>
          ))}
        </div>

        {/* Before/After Comparison */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative bg-concrete-50 rounded-3xl overflow-hidden border-2 border-concrete-200 shadow-xl"
        >
          {/* Slider Container */}
          <div className="relative h-[500px] md:h-[400px]">
            {/* Before Side (Red) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="p-8 md:p-12 h-full flex flex-col justify-center max-w-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-red-600 font-medium text-sm uppercase tracking-wider">
                      Ohne KI
                    </p>
                    <p className="font-display text-3xl text-red-700">
                      {active.before.time}
                    </p>
                  </div>
                </div>

                <h3 className="font-heading text-xl text-concrete-800 mb-4">
                  {active.category}
                </h3>
                <p className="text-concrete-600 mb-4">{active.before.description}</p>

                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <p className="text-red-700 text-sm">
                    <strong>Problem:</strong> {active.before.pain}
                  </p>
                </div>
              </div>
            </div>

            {/* After Side (Green) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100"
              style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
              <div className="absolute right-0 top-0 bottom-0 p-8 md:p-12 h-full flex flex-col justify-center max-w-lg ml-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-green-600 font-medium text-sm uppercase tracking-wider">
                      Mit KI
                    </p>
                    <p className="font-display text-3xl text-green-700">
                      {active.after.time}
                    </p>
                  </div>
                </div>

                <h3 className="font-heading text-xl text-concrete-800 mb-4">
                  {active.category}
                </h3>
                <p className="text-concrete-600 mb-4">{active.after.description}</p>

                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <p className="text-green-700 text-sm">
                    <strong>Ergebnis:</strong> {active.after.benefit}
                  </p>
                </div>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-orange-500 cursor-ew-resize z-10"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-full shadow-lg flex items-center justify-center">
                <div className="flex items-center gap-0.5 text-white">
                  <ChevronLeft className="w-4 h-4" />
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Slider Input (invisible, for interaction) */}
            <input
              type="range"
              min="10"
              max="90"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />
          </div>

          {/* Savings Badge */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full font-heading shadow-lg">
            Du sparst: <span className="font-display text-xl">{active.savings}</span>
          </div>
        </motion.div>

        {/* Navigation Arrows (Mobile) */}
        <div className="flex justify-center gap-4 mt-6 md:hidden">
          <button
            onClick={() =>
              setActiveIndex((prev) =>
                prev === 0 ? comparisons.length - 1 : prev - 1
              )
            }
            className="p-3 rounded-full bg-concrete-100 text-concrete-600 hover:bg-concrete-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() =>
              setActiveIndex((prev) =>
                prev === comparisons.length - 1 ? 0 : prev + 1
              )
            }
            className="p-3 rounded-full bg-concrete-100 text-concrete-600 hover:bg-concrete-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
