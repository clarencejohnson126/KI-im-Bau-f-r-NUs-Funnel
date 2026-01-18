"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  Clock,
  Lightbulb,
  Rocket,
  CheckCircle2,
  Star,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

const timelineSteps = [
  {
    id: "before",
    phase: "VORHER",
    title: "Der Alltag vieler Nachunternehmer",
    icon: AlertCircle,
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    details: [
      "17:30 Uhr, nach 10 Stunden auf der Baustelle",
      "Noch 47 ungelesene E-Mails vom GU",
      "Tagesbericht muss noch geschrieben werden",
      "Ausschreibung mit 3 Tagen Frist liegt noch unbearbeitet",
      "Nachträge wurden wieder nicht dokumentiert",
    ],
    emotion: "Frustration, Überforderung, Zeitmangel",
    stat: { value: "60%", label: "der Zeit für Admin statt Arbeit" },
  },
  {
    id: "discovery",
    phase: "TAG 1-3",
    title: "Du entdeckst das Starter Kit",
    icon: Lightbulb,
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    details: [
      "Download und erstes Durchblättern des E-Books",
      "Aha-Moment: 'Das geht auch einfacher!'",
      "Erste Prompts kopiert und ausprobiert",
      "Tagesbericht in 5 statt 30 Minuten erstellt",
      "Die Skeptik wird zu Neugier",
    ],
    emotion: "Neugier, erste Hoffnung",
    stat: { value: "25min", label: "beim ersten Tagesbericht gespart" },
  },
  {
    id: "implementation",
    phase: "WOCHE 1-2",
    title: "Du setzt die Methoden um",
    icon: Clock,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    details: [
      "Alle 50+ Prompts durchgearbeitet und angepasst",
      "Erste Ausschreibung in 10 Minuten analysiert",
      "E-Mails an GU in 2 Minuten statt 20 formuliert",
      "Versteckte Klausel im LV gefunden → Nachtrag",
      "Workflow-Automatisierung aufgesetzt",
    ],
    emotion: "Wachsendes Vertrauen, Effizienz",
    stat: { value: "8h", label: "pro Woche zurückgewonnen" },
  },
  {
    id: "mastery",
    phase: "MONAT 1-2",
    title: "Du meisterst die Tools",
    icon: Rocket,
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    details: [
      "KI ist fester Teil deines Workflows",
      "Nachträge werden systematisch erkannt und dokumentiert",
      "Angebote 9x schneller erstellt",
      "Professionellere Kommunikation mit GUs",
      "Erste messbare Mehrerträge durch gefundene Nachträge",
    ],
    emotion: "Selbstvertrauen, Kontrolle",
    stat: { value: "7.800€", label: "zusätzlich durch einen Nachtrag" },
  },
  {
    id: "transformation",
    phase: "NACHHER",
    title: "Dein neuer Alltag",
    icon: Star,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    details: [
      "17:30 Uhr – du bist zu Hause, nicht am Laptop",
      "Admin läuft nebenbei, automatisiert",
      "Mehr Zeit für Familie, Hobbies, Leben",
      "Höhere Gewinne durch systematische Nachträge",
      "Du bist der Konkurrenz einen Schritt voraus",
    ],
    emotion: "Freiheit, Zufriedenheit, Erfolg",
    stat: { value: "40%", label: "mehr Zeit für das, was zählt" },
  },
];

export function TransformationTimeline() {
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-concrete-900 to-concrete-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <Calendar className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-400 font-medium">
              Deine Transformation
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            Von Chaos zu Kontrolle
          </h2>
          <p className="text-xl text-concrete-400">
            So sieht dein Weg aus – Schritt für Schritt
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-concrete-700 transform md:-translate-x-1/2" />

          {/* Timeline steps */}
          <div className="space-y-8">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              const isHovered = hoveredStep === step.id;
              const isLeft = index % 2 === 0;

              return (
                <ScrollReveal
                  key={step.id}
                  delay={index * 0.15}
                  direction={isLeft ? "left" : "right"}
                >
                  <div
                    className={`relative flex items-center gap-4 md:gap-0 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content Card */}
                    <motion.div
                      onClick={() => setActiveStep(isActive ? null : step.id)}
                      onMouseEnter={() => setHoveredStep(step.id)}
                      onMouseLeave={() => setHoveredStep(null)}
                      className={`flex-1 ml-12 md:ml-0 ${
                        isLeft ? "md:mr-8 md:text-right" : "md:ml-8"
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div
                        className={`${step.bgColor} border ${step.borderColor} rounded-2xl p-6 cursor-pointer transition-shadow ${
                          isActive ? "shadow-xl" : "hover:shadow-lg"
                        }`}
                      >
                        {/* Phase label */}
                        <span className={`text-xs font-bold tracking-wider bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                          {step.phase}
                        </span>

                        {/* Title */}
                        <h3 className="font-heading text-xl text-white mt-2 mb-3">
                          {step.title}
                        </h3>

                        {/* Stat */}
                        <div className={`inline-flex items-center gap-2 ${step.bgColor} ${step.borderColor} border rounded-lg px-3 py-1.5 mb-4`}>
                          <span className={`font-display text-lg bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                            {step.stat.value}
                          </span>
                          <span className="text-concrete-400 text-sm">
                            {step.stat.label}
                          </span>
                        </div>

                        {/* Expanded details */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className={`pt-4 border-t ${step.borderColor} mt-4`}>
                                <ul className={`space-y-2 ${isLeft ? "md:text-right" : ""}`}>
                                  {step.details.map((detail, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: i * 0.05 }}
                                      className={`flex items-center gap-2 text-sm text-concrete-300 ${
                                        isLeft ? "md:flex-row-reverse" : ""
                                      }`}
                                    >
                                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`} style={{ color: step.color.includes("red") ? "#ef4444" : step.color.includes("yellow") ? "#eab308" : step.color.includes("blue") ? "#3b82f6" : step.color.includes("purple") ? "#a855f7" : "#22c55e" }} />
                                      <span>{detail}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                                <div className={`mt-4 p-3 rounded-lg bg-concrete-800/50 ${isLeft ? "md:text-right" : ""}`}>
                                  <p className="text-concrete-400 text-sm">
                                    <strong className="text-white">Gefühl:</strong> {step.emotion}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Click hint */}
                        {!isActive && (
                          <p className="text-concrete-500 text-xs mt-2">
                            Klicken für Details
                          </p>
                        )}
                      </div>
                    </motion.div>

                    {/* Center icon */}
                    <motion.div
                      className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10`}
                      animate={isHovered || isActive ? { scale: 1.2 } : { scale: 1 }}
                    >
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>

                    {/* Empty space for alignment */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.5} className="mt-16 text-center">
          <motion.a
            href="/checkout"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-heading text-xl px-10 py-5 rounded-xl shadow-lg shadow-orange-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Starte deine Transformation
            <ArrowRight className="w-6 h-6" />
          </motion.a>
          <p className="text-concrete-500 text-sm mt-4">
            Die Reise beginnt mit einem Klick
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
