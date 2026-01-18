"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Clock, Users, FileText, Calculator, Coffee, X, AlertTriangle, TrendingDown } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

const realityImages = [
  {
    src: "/images/bau/team-meeting.png",
    title: "Morgenbesprechung",
    description: "Jeden Tag koordinieren. Jeden Tag dokumentieren.",
    icon: Users,
    span: "col-span-2 row-span-2",
    height: "h-80 md:h-96",
    detailedTitle: "Die tägliche Morgenbesprechung",
    detailedProblem: `Jeden Morgen das gleiche Ritual: 20-30 Minuten stehen alle rum, während einer die Aufgaben verteilt.

Was danach passiert:
• Du musst das alles noch dokumentieren – wer macht was, welche Materialien, welche Fristen
• Die Hälfte vergisst, was besprochen wurde
• Am Ende des Tages stimmt die Realität nicht mehr mit dem Plan überein
• Wenn der GU fragt "Wer hat das entschieden?" – hast du keinen Beweis

Das kostet dich:
• 30-45 Minuten pro Tag für Koordination und Dokumentation
• Konflikte, weil "das war so nie besprochen"
• Nachträge, die du nicht durchsetzen kannst, weil du keine Protokolle hast`,
    stats: { time: "30-45 Min/Tag", cost: "10+ Stunden/Monat" },
  },
  {
    src: "/images/bau/timesheet-filling.png",
    title: "Stundenzettel",
    description: "Handschriftlich. Jeden Tag. Für jeden Mitarbeiter.",
    icon: Clock,
    span: "col-span-1",
    height: "h-48",
    detailedTitle: "Das Stundenzettel-Chaos",
    detailedProblem: `Jeden Abend das gleiche Theater: Stundenzettel einsammeln, entziffern, abtippen.

Die Realität:
• Handschriften, die niemand lesen kann
• "Hab ich vergessen" – fehlende Einträge
• Falsches Datum, falsche Projektzuordnung
• Überstunden, die nicht dokumentiert wurden
• Lohnbüro beschwert sich über unleserliche Zettel

Was das bedeutet:
• 15-30 Minuten pro Tag nur fürs Sortieren
• Streit mit Mitarbeitern über Stunden
• Fehler bei der Abrechnung gegenüber dem GU
• Geld, das du nicht abrechnen kannst, weil die Dokumentation fehlt`,
    stats: { time: "15-30 Min/Tag", cost: "Verlorene Abrechnungen" },
  },
  {
    src: "/images/bau/excel-calculation.png",
    title: "Kalkulation",
    description: "Excel-Listen ohne Ende.",
    icon: Calculator,
    span: "col-span-1",
    height: "h-48",
    detailedTitle: "Excel-Hölle bei der Kalkulation",
    detailedProblem: `Die Ausschreibung liegt vor dir. 80 Positionen. 3 Tage Zeit.

Dein Ablauf:
• Preislisten durchsuchen (die von 2023, hoffentlich aktuell)
• Manuell Mengen ausrechnen
• Aufschläge draufrechnen – oder waren es 18% oder 22%?
• Formeln, die plötzlich nicht mehr funktionieren
• "Baustelle_Müller_Kalkulation_FINAL_v3_NEU.xlsx"

Die Folgen:
• 3-6 Stunden pro Angebot
• Rechenfehler, die dich Tausende kosten
• Positionen vergessen – und später aus eigener Tasche zahlen
• Konkurrenz ist schneller, weil sie automatisiert

Ein einziger Fehler in Zeile 47 kann 10.000 € kosten.`,
    stats: { time: "3-6 Std/Angebot", cost: "10.000 € Risiko/Fehler" },
  },
  {
    src: "/images/bau/worker-studying.png",
    title: "Weiterbildung",
    description: "Lernen nach Feierabend.",
    icon: FileText,
    span: "col-span-1",
    height: "h-48",
    detailedTitle: "Weiterbildung nach Feierabend",
    detailedProblem: `Es ist 20 Uhr. Die Baustelle ist dicht. Jetzt lernst du.

Die Realität für Handwerksmeister:
• Neue Normen, neue Vorschriften, neue Technik
• VOB-Änderungen, die du kennen musst
• Seminare am Wochenende – während die Familie wartet
• Fachbücher, die du nach 10 Stunden Baustelle lesen sollst

Das Problem:
• Du kommst nicht hinterher
• Konkurrenz nutzt neue Methoden, du nicht
• Fehler aus Unwissen kosten Geld
• Kein Ende in Sicht – es wird nur mehr

Die Lösung wäre einfach: KI kann dir komplexe Themen in 5 Minuten erklären, statt dass du stundenlang Fachbücher wälzt.`,
    stats: { time: "5+ Std/Woche", cost: "Verpasste Entwicklung" },
  },
  {
    src: "/images/bau/site-discussion.png",
    title: "Baubesprechung",
    description: "Abstimmung vor Ort.",
    icon: Users,
    span: "col-span-1",
    height: "h-48",
    detailedTitle: "Baubesprechungen ohne Dokumentation",
    detailedProblem: `"Machen Sie das noch mit." – Der Bauleiter zeigt auf die Ecke.

Was dann passiert:
• Du machst es, weil die Baustelle laufen muss
• Keiner schreibt es auf
• 3 Monate später: "Das war nie beauftragt"
• Du suchst die E-Mail – findest sie nicht
• Der Nachtrag wird abgelehnt

Die harte Wahrheit:
• 30-50% aller Nachträge werden abgelehnt
• Hauptgrund: fehlende Dokumentation
• Jede mündliche Absprache ist Geld, das du verschenkst
• Der GU weiß das – und nutzt es aus

Eine einfache Sprachnachricht an die KI könnte das ändern: "Heute hat Bauleiter Müller mündlich beauftragt..." – und du hast einen Beweis.`,
    stats: { time: "Sofort", cost: "5.000-20.000 €/Jahr" },
  },
];

export function DailyReality() {
  const [selectedImage, setSelectedImage] = useState<typeof realityImages[0] | null>(null);

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-concrete-950 to-black overflow-hidden">
      {/* Header */}
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <ScrollReveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-concrete-800/80 border border-concrete-700 rounded-full px-4 py-2 mb-6">
            <Camera className="w-4 h-4 text-concrete-400" />
            <span className="text-sm text-concrete-400 font-medium">
              Die Realität auf deutschen Baustellen
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            Kennst du das?
          </h2>
          <p className="text-xl text-concrete-400 max-w-3xl mx-auto">
            Klicke auf ein Bild, um das Problem im Detail zu sehen
          </p>
        </ScrollReveal>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-auto">
          {realityImages.map((image, index) => {
            const Icon = image.icon;
            return (
              <ScrollReveal
                key={index}
                delay={index * 0.1}
                className={image.span}
              >
                <motion.button
                  onClick={() => setSelectedImage(image)}
                  className={`relative rounded-2xl overflow-hidden group w-full text-left ${image.height}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-concrete-950 via-concrete-950/40 to-transparent" />

                  {/* Click indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      Klicken für Details
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-orange-500/20 backdrop-blur-sm">
                        <Icon className="w-4 h-4 text-orange-400" />
                      </div>
                      <h3 className="font-heading text-white text-lg">{image.title}</h3>
                    </div>
                    <p className="text-concrete-400 text-sm">{image.description}</p>
                  </div>

                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-orange-500/0 rounded-2xl"
                    whileHover={{ borderColor: "rgba(249, 115, 22, 0.5)" }}
                  />
                </motion.button>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Message */}
        <ScrollReveal className="mt-12">
          <div className="bg-concrete-900/50 border border-concrete-800 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Coffee className="w-6 h-6 text-orange-400" />
              <span className="text-xl text-white font-heading">
                Das muss nicht so bleiben.
              </span>
            </div>
            <p className="text-concrete-400 max-w-2xl mx-auto">
              KI kann dir bei all dem helfen – Stundenzettel automatisieren, Kalkulationen beschleunigen,
              Dokumentation vereinfachen. Nicht irgendwann. Heute.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Modal/Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-auto bg-concrete-900 rounded-3xl border border-concrete-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-concrete-800/80 backdrop-blur-sm border border-concrete-700 text-white hover:bg-concrete-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="relative h-64 md:h-96">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-concrete-900 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-red-500/20">
                    <AlertTriangle className="w-8 h-8 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
                      {selectedImage.detailedTitle}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                        <Clock className="w-4 h-4" />
                        {selectedImage.stats.time}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-lg text-orange-400 text-sm">
                        <TrendingDown className="w-4 h-4" />
                        {selectedImage.stats.cost}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Problem Description */}
                <div className="bg-concrete-800/50 border border-concrete-700 rounded-2xl p-6 mb-6">
                  <p className="text-concrete-300 leading-relaxed whitespace-pre-line">
                    {selectedImage.detailedProblem}
                  </p>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-orange-500/20 to-amber-500/10 border border-orange-500/30 rounded-2xl p-6 text-center">
                  <p className="text-white font-heading text-lg mb-2">
                    Im E-Book zeige ich dir, wie du genau dieses Problem mit KI löst.
                  </p>
                  <p className="text-concrete-400 text-sm">
                    Schritt für Schritt. Mit konkreten Prompts. Ohne Technik-Kenntnisse.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
