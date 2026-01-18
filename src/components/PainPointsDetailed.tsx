"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  FileText,
  Clock,
  Euro,
  AlertTriangle,
  RotateCcw,
  Search,
} from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { AnimatedCounter } from "./ui/AnimatedCounter";
import { DrillIcon, HardHatIcon, ExcavatorIcon, CableDrumIcon } from "./icons/ConstructionIcons";

const painPoints = [
  {
    id: "calls",
    icon: Phone,
    title: "Verpasste Anrufe",
    shortDesc: "Kunde ruft an. Du bist auf der Baustelle. Auftrag weg.",
    fullStory: `Montag, 14:32 Uhr. Dein Handy klingelt. Du stehst auf der Leiter, Akkuschrauber in der Hand.

Der Anruf geht auf die Mailbox. Der Kunde hinterlässt keine Nachricht – er ruft den nächsten Betrieb an.

Später siehst du: Es war eine Anfrage für ein 15.000 € Projekt.`,
    stats: { value: 5, suffix: " Anrufe", label: "pro Tag verpasst" },
    cost: "15.000-50.000 € pro Jahr",
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-500",
  },
  {
    id: "emails",
    icon: Mail,
    title: "E-Mail-Flut vom GU",
    shortDesc: "47 ungelesene E-Mails. Eine davon hat eine Frist. Morgen.",
    fullStory: `Du öffnest dein E-Mail-Programm nach einem Tag auf der Baustelle. 47 neue Nachrichten.

Irgendwo in diesem Chaos ist eine E-Mail mit dem Betreff "Fristablauf Nachtrag Nr. 7 – Antwort bis morgen 12:00 Uhr".

Du findest sie um 23:45 Uhr.`,
    stats: { value: 47, suffix: "+", label: "E-Mails pro Tag" },
    cost: "2-3 Stunden täglich",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-500",
  },
  {
    id: "documents",
    icon: FileText,
    title: "Dokumenten-Wahnsinn",
    shortDesc: "80-seitige Ausschreibung. 3 Tage Frist. Versteckte Klausel auf Seite 67.",
    fullStory: `Eine neue Ausschreibung trudelt ein. 80 Seiten. Du hast 3 Tage Zeit.

Du überfliegst das LV. Machst ein Angebot.

Drei Monate später: Auf Seite 67 stand eine Klausel, die Rohrisolation beinhaltet. Das hast du nicht einkalkuliert.

10.550 € minus.`,
    stats: { value: 163, suffix: "%", label: "mehr Baustreitigkeiten" },
    cost: "10.000+ € pro Detail",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500",
  },
  {
    id: "reports",
    icon: Clock,
    title: "Tagesberichte-Terror",
    shortDesc: "Jeden Abend 30 Minuten tippen, statt Zeit mit der Familie.",
    fullStory: `Es ist 20:15 Uhr. Die Kinder sind im Bett. Du sitzt am Küchentisch.

"Was haben wir heute gemacht?" Du scrollst durch 43 Fotos auf deinem Handy.

30 Minuten später ist der Bericht fertig. Für morgen wartet schon der nächste.

Das sind 10+ Stunden im Monat.`,
    stats: { value: 30, suffix: " Min", label: "pro Tagesbericht" },
    cost: "10+ Stunden pro Monat",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500",
  },
  {
    id: "nachtraege",
    icon: Euro,
    title: "Verlorene Nachträge",
    shortDesc: '"Das war so nie beauftragt." – 5.000 € weg.',
    fullStory: `Der GU ruft an: "Können Sie noch schnell die Ecke mit machen?"

Du machst es. Die Baustelle muss laufen.

Bei der Abrechnung drei Monate später: "Das war nie beauftragt."

Du suchst die E-Mail. Du findest sie nicht.

5.000 € weg.`,
    stats: { value: 30, suffix: "-50%", label: "Nachträge abgelehnt" },
    cost: "10.000-50.000 € pro Jahr",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500",
  },
  {
    id: "search",
    icon: Search,
    title: "Die ewige Suche",
    shortDesc: '"Wo steht das nochmal?" – 30 Minuten suchen.',
    fullStory: `Der GU schreibt: "Laut Protokoll vom 15.03. war das so vereinbart."

Du weißt, dass du das Protokoll hast. Irgendwo.

847 Ergebnisse für "Protokoll". 5 verschiedene Ordner.

45 Minuten später findest du es. Im falschen Ordner. Mit dem falschen Datum benannt.`,
    stats: { value: 45, suffix: " Min", label: "Suchzeit" },
    cost: "5+ Stunden pro Woche",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500",
  },
];

function FlipCard({ point, index }: { point: typeof painPoints[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = point.icon;

  return (
    <div
      className="relative h-[380px] cursor-pointer group"
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
          className="absolute inset-0 bg-concrete-800/80 border-2 border-concrete-700 rounded-2xl overflow-hidden backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Animated gradient border on hover */}
          <motion.div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${point.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            style={{ padding: "2px" }}
          >
            <div className="absolute inset-[2px] bg-concrete-800 rounded-2xl" />
          </motion.div>

          <div className="relative p-6 h-full flex flex-col">
            {/* Icon with pulse animation */}
            <motion.div
              className={`p-4 rounded-xl bg-gradient-to-br ${point.color} w-fit mb-4`}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Icon className="w-7 h-7 text-white" />
            </motion.div>

            <h3 className="font-display text-2xl text-white mb-3">
              {point.title}
            </h3>

            <p className="text-concrete-400 text-base leading-relaxed mb-auto">
              {point.shortDesc}
            </p>

            {/* Stats preview */}
            <div className="mt-4 pt-4 border-t border-concrete-700/50">
              <div className="flex items-center justify-between">
                <div className="text-red-400 font-mono text-sm font-bold">
                  {point.cost}
                </div>
                <motion.div
                  className="flex items-center gap-2 text-concrete-500 text-sm"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <RotateCcw className="w-4 h-4" />
                  Umdrehen
                </motion.div>
              </div>
            </div>

            {/* Gradient accent line */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${point.color}`} />
          </div>
        </div>

        {/* Back of Card */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${point.color} rounded-2xl overflow-hidden backface-hidden`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="p-6 h-full flex flex-col text-white">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-white/20">
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-lg">Die ganze Geschichte</h4>
            </div>

            {/* Story */}
            <div className="flex-1 overflow-auto">
              <p className="text-white/90 text-sm leading-relaxed whitespace-pre-line font-mono">
                {point.fullStory}
              </p>
            </div>

            {/* Stats at bottom */}
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-2xl">
                    <AnimatedCounter
                      end={point.stats.value}
                      suffix={point.stats.suffix}
                    />
                  </div>
                  <p className="text-white/70 text-xs">{point.stats.label}</p>
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

export function PainPointsDetailed() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-concrete-950 to-concrete-900 overflow-hidden">
      {/* Floating construction tools */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-[10%] left-[5%] opacity-10"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <DrillIcon className="w-24 h-24" />
        </motion.div>
        <motion.div
          className="absolute bottom-[20%] right-[8%] opacity-10"
          animate={{ y: [0, -15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        >
          <ExcavatorIcon className="w-32 h-32" />
        </motion.div>
        <motion.div
          className="absolute top-[40%] right-[15%] opacity-10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <CableDrumIcon className="w-20 h-20" />
        </motion.div>
        <motion.div
          className="absolute bottom-[30%] left-[10%] opacity-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          <HardHatIcon className="w-16 h-16" />
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-400 font-medium">
              Konkrete Fälle aus der Praxis
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            6 Situationen, die du kennst
          </h2>
          <p className="text-xl text-concrete-400 max-w-2xl mx-auto">
            Klicke auf eine Karte, um die ganze Geschichte zu lesen
          </p>
        </ScrollReveal>

        {/* Pain Points Flip Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <ScrollReveal key={point.id} delay={index * 0.1}>
              <FlipCard point={point} index={index} />
            </ScrollReveal>
          ))}
        </div>

        {/* Total Cost */}
        <ScrollReveal className="mt-12">
          <motion.div
            className="bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-500/20 border-2 border-red-500/30 rounded-3xl p-8 md:p-12 text-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="font-display text-2xl md:text-3xl text-white mb-6">
              Rechne es zusammen:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="font-display text-3xl md:text-4xl text-red-400">
                  <AnimatedCounter end={50000} prefix="" suffix=" €" />
                </div>
                <p className="text-concrete-400 text-sm">Verpasste Aufträge</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="font-display text-3xl md:text-4xl text-red-400">
                  <AnimatedCounter end={30000} suffix=" €" />
                </div>
                <p className="text-concrete-400 text-sm">Verlorene Nachträge</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="font-display text-3xl md:text-4xl text-red-400">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <p className="text-concrete-400 text-sm">Stunden Admin/Jahr</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="font-display text-3xl md:text-4xl text-red-400">
                  ∞
                </div>
                <p className="text-concrete-400 text-sm">Stress & Lebenszeit</p>
              </motion.div>
            </div>
            <p className="text-xl text-concrete-300">
              Das muss nicht so bleiben. KI kann das ändern.
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
