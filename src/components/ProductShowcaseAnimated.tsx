"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  FileCode,
  Layers,
  CheckSquare,
  Video,
  Sparkles,
  ArrowRight,
  Check,
  ChevronDown,
  Gift,
  Zap,
} from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { AnimatedCounter } from "./ui/AnimatedCounter";

const bundleItems = [
  {
    id: "ebook",
    icon: BookOpen,
    title: "E-Book: KI im Bau",
    subtitle: "300+ Seiten Praxiswissen",
    color: "from-orange-500 to-amber-500",
    value: "89 €",
    details: [
      "21 Kapitel in 7 Teilen",
      "Schritt-für-Schritt Anleitungen",
      "Screenshots & Beispiele",
      "Sofort anwendbare Strategien",
      "Konkrete Einsparungsrechner",
    ],
    highlight: "Herzstück des Bundles",
    chapters: [
      "Teil 1: Die brutale Wahrheit über deine Zeit",
      "Teil 2: KI-Grundlagen ohne Bullshit",
      "Teil 3: Dokumente & Verträge meistern",
      "Teil 4: Kommunikation automatisieren",
      "Teil 5: Kalkulation & Nachträge",
      "Teil 6: Projektmanagement & Reporting",
      "Teil 7: Zukunftssicher aufstellen",
    ],
  },
  {
    id: "prompts",
    icon: FileCode,
    title: "Prompt-Sammlung",
    subtitle: "50+ fertige Prompts",
    color: "from-blue-500 to-cyan-500",
    value: "47 €",
    details: [
      "Copy & Paste ready",
      "Für jeden Anwendungsfall",
      "Mit Variablen zum Anpassen",
      "Getestet & optimiert",
      "Regelmäßige Updates",
    ],
    highlight: "Sofort einsetzbar",
    categories: [
      "Ausschreibungs-Analyse (8 Prompts)",
      "Angebotserstellung (6 Prompts)",
      "E-Mail-Kommunikation (12 Prompts)",
      "Nachtragsmanagement (7 Prompts)",
      "Tagesberichte (5 Prompts)",
      "Vertragsanalyse (6 Prompts)",
      "Protokolle & Doku (6 Prompts)",
    ],
  },
  {
    id: "matrix",
    icon: Layers,
    title: "Tool-Vergleichsmatrix",
    subtitle: "Claude, ChatGPT, Gemini, Grok",
    color: "from-purple-500 to-violet-500",
    value: "29 €",
    details: [
      "Stärken & Schwächen",
      "Preisvergleich",
      "Für Bau-Anwendungen bewertet",
      "Meine Empfehlungen",
      "Wann welches Tool",
    ],
    highlight: "Geld sparen",
    tools: ["Claude (Anthropic)", "ChatGPT (OpenAI)", "Gemini (Google)", "Grok (xAI)", "Perplexity", "NotebookLM"],
  },
  {
    id: "checklists",
    icon: CheckSquare,
    title: "5 Praxis-Checklisten",
    subtitle: "Zum Ausdrucken & Abhaken",
    color: "from-green-500 to-emerald-500",
    value: "19 €",
    details: [
      "LV-Prüfung Checkliste",
      "Nachtragsdokumentation",
      "Tagesbericht-Vorlage",
      "KI-Setup Checkliste",
      "Prompt-Qualitätsprüfung",
    ],
    highlight: "Sofort loslegen",
    formats: ["PDF zum Ausdrucken", "Editierbare Word-Version", "Notion-Vorlage"],
  },
];

const bonusItem = {
  id: "bonus",
  icon: Gift,
  title: "BONUS: Premium Vorlagen",
  subtitle: "Bei Bestellung heute",
  color: "from-rose-500 to-pink-500",
  value: "39 €",
  details: [
    "10 E-Mail-Vorlagen für GU",
    "Nachtragsmuster nach VOB",
    "Behinderungsanzeige Template",
    "Mängelrüge Vorlage",
    "Abnahmeprotokoll",
  ],
  highlight: "GRATIS dazu",
};

export function ProductShowcaseAnimated() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const totalValue = 89 + 47 + 29 + 19 + 39;

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-white to-concrete-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" />
        <motion.div
          className="absolute top-1/3 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-sm text-orange-700 font-medium">
              Das komplette Bundle
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-concrete-900 mb-4 tracking-tight">
            Alles, was du brauchst
          </h2>
          <p className="text-xl text-concrete-600 max-w-2xl mx-auto">
            Klicke auf eine Karte, um alle Details zu sehen
          </p>
        </ScrollReveal>

        {/* Bundle Items Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {bundleItems.map((item, index) => {
            const Icon = item.icon;
            const isExpanded = expandedItem === item.id;
            const isHovered = hoveredItem === item.id;

            return (
              <ScrollReveal key={item.id} delay={index * 0.1}>
                <motion.div
                  onClick={() => setExpandedItem(isExpanded ? null : item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative bg-white border-2 rounded-2xl cursor-pointer overflow-hidden transition-shadow ${
                    isExpanded
                      ? "border-orange-500 shadow-xl"
                      : "border-concrete-200 hover:border-orange-300 hover:shadow-lg"
                  }`}
                  whileHover={{ y: -4 }}
                  layout
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}
                        animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-heading text-xl text-concrete-900">
                            {item.title}
                          </h3>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                            {item.highlight}
                          </span>
                        </div>
                        <p className="text-concrete-600 text-sm">{item.subtitle}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-concrete-400 text-sm line-through">{item.value}</p>
                        <p className="text-green-600 font-bold">Inklusiv</p>
                      </div>
                    </div>

                    {/* Quick Details */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.details.slice(0, 3).map((detail, i) => (
                        <span
                          key={i}
                          className="text-xs bg-concrete-100 text-concrete-600 px-2 py-1 rounded-lg"
                        >
                          {detail}
                        </span>
                      ))}
                      {!isExpanded && item.details.length > 3 && (
                        <span className="text-xs text-orange-500 px-2 py-1">
                          +{item.details.length - 3} mehr
                        </span>
                      )}
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 pt-6 border-t border-concrete-200"
                        >
                          <h4 className="font-heading text-sm text-concrete-500 uppercase tracking-wider mb-3">
                            {item.id === "ebook" ? "Kapitelübersicht" :
                             item.id === "prompts" ? "Prompt-Kategorien" :
                             item.id === "matrix" ? "Verglichene Tools" : "Enthaltene Formate"}
                          </h4>
                          <ul className="space-y-2">
                            {(item.chapters || item.categories || item.tools || item.formats || []).map((sub, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-2 text-sm text-concrete-700"
                              >
                                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                {sub}
                              </motion.li>
                            ))}
                          </ul>

                          <div className="mt-4 p-3 bg-orange-50 rounded-xl">
                            <p className="text-sm text-orange-700">
                              <strong>Allein wert:</strong> {item.value} – im Bundle inklusive
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Expand indicator */}
                    <motion.div
                      className="flex justify-center mt-4"
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                    >
                      <ChevronDown className="w-5 h-5 text-concrete-400" />
                    </motion.div>
                  </div>

                  {/* Gradient line at bottom */}
                  <div className={`h-1 bg-gradient-to-r ${item.color}`} />
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bonus Item - Full width */}
        <ScrollReveal delay={0.4}>
          <motion.div
            onClick={() => setExpandedItem(expandedItem === "bonus" ? null : "bonus")}
            className={`relative bg-gradient-to-r from-rose-50 to-pink-50 border-2 rounded-2xl cursor-pointer overflow-hidden ${
              expandedItem === "bonus"
                ? "border-rose-500 shadow-xl"
                : "border-rose-200 hover:border-rose-400 hover:shadow-lg"
            }`}
            whileHover={{ y: -4 }}
            layout
          >
            <div className="absolute top-0 right-0 bg-rose-500 text-white text-sm font-bold px-4 py-1 rounded-bl-xl">
              BONUS
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start gap-4">
                <motion.div
                  className={`p-4 rounded-xl bg-gradient-to-br ${bonusItem.color} shadow-lg`}
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Gift className="w-8 h-8 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl text-concrete-900 mb-2">
                    {bonusItem.title}
                  </h3>
                  <p className="text-concrete-600">{bonusItem.subtitle}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {bonusItem.details.map((detail, i) => (
                      <span
                        key={i}
                        className="text-sm bg-white text-rose-700 px-3 py-1 rounded-lg border border-rose-200"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-concrete-400 text-lg line-through">{bonusItem.value}</p>
                  <p className="text-rose-500 font-bold text-xl">GRATIS</p>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Total Value Summary */}
        <ScrollReveal delay={0.5} className="mt-12">
          <div className="bg-concrete-900 rounded-3xl p-8 md:p-12 text-center">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Left: Total Value */}
              <div>
                <p className="text-concrete-400 text-sm uppercase tracking-wider mb-2">
                  Gesamtwert
                </p>
                <div className="font-display text-4xl md:text-5xl text-white line-through decoration-red-500">
                  <AnimatedCounter end={totalValue} suffix=" €" />
                </div>
              </div>

              {/* Center: Arrow & Savings */}
              <div className="flex flex-col items-center">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-8 h-8 text-orange-500 hidden md:block" />
                </motion.div>
                <div className="bg-green-500/20 border border-green-500/50 rounded-xl px-6 py-3 mt-2">
                  <p className="text-green-400 font-heading">
                    Du sparst <span className="text-2xl font-bold">{totalValue - 47} €</span>
                  </p>
                </div>
              </div>

              {/* Right: Final Price */}
              <div>
                <p className="text-concrete-400 text-sm uppercase tracking-wider mb-2">
                  Dein Preis heute
                </p>
                <div className="font-display text-5xl md:text-6xl text-orange-500">
                  47 €
                </div>
                <p className="text-concrete-500 text-sm mt-2">Einmalig, kein Abo</p>
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="/checkout"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-heading text-xl px-10 py-5 rounded-xl mt-8 shadow-lg shadow-orange-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Zap className="w-6 h-6" />
              Jetzt Starter Kit sichern
              <ArrowRight className="w-6 h-6" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
