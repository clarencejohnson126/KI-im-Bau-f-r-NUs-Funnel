"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageSquare,
  Mail,
  Database,
  FileSearch,
  Bot,
  ChevronRight,
  Check,
  Sparkles,
  Mic,
  Brain,
  Zap,
} from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

const solutions = [
  {
    id: "voice",
    icon: Phone,
    title: "KI-Telefonassistent",
    subtitle: "24/7 erreichbar – auch auf der Baustelle",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    image: "/images/bau/phone-communication.png",
    problem: "Du verpasst Anrufe, weil du auf der Baustelle bist. Kunden rufen an, niemand geht ran – Auftrag weg.",
    solution: "Ein KI-Telefonassistent nimmt jeden Anruf entgegen, versteht das Anliegen, bucht Termine direkt in deinen Kalender und sendet dir eine Zusammenfassung per WhatsApp.",
    features: [
      "Automatische Terminbuchung mit Kalender-Sync",
      "Notdienst-Anfragen priorisieren",
      "Anfragen nach Postleitzahl filtern",
      "SMS-Bestätigung an Kunden",
      "DSGVO-konform (Server in EU)",
    ],
    stats: { value: "100%", label: "Erreichbarkeit" },
    providers: ["Telify", "voiceOne", "Famulor"],
  },
  {
    id: "whatsapp",
    icon: MessageSquare,
    title: "WhatsApp-Automatisierung",
    subtitle: "Kundenanfragen automatisch beantworten",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    image: "/images/bau/ki-workshop.png",
    problem: "Du bekommst 50 WhatsApp-Nachrichten am Tag. Die Hälfte sind die gleichen Fragen: 'Was kostet...?', 'Haben Sie Zeit am...?'",
    solution: "Ein KI-Chatbot beantwortet häufige Fragen automatisch, sammelt Kundeninformationen und leitet nur wichtige Anfragen an dich weiter.",
    features: [
      "Automatische Antworten auf Standardfragen",
      "Terminvorschläge basierend auf deinem Kalender",
      "Fotos analysieren (z.B. Schadenbilder)",
      "Kostenvoranschläge automatisch erstellen",
      "Mehrsprachig (DE, EN, TR, PL)",
    ],
    stats: { value: "80%", label: "weniger Nachrichten manuell beantworten" },
    providers: ["n8n + WhatsApp API", "Typebot", "Jotform AI"],
  },
  {
    id: "email",
    icon: Mail,
    title: "E-Mail-Automatisierung",
    subtitle: "GU-Mails automatisch analysieren & beantworten",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    image: "/images/bau/ausschreibung-work.png",
    problem: "47 ungelesene E-Mails vom GU. Irgendwo drin versteckt sich eine Frist, die morgen abläuft. Du findest sie zu spät.",
    solution: "KI scannt jede eingehende E-Mail, klassifiziert sie (Frist, Nachtrag, Info), fasst zusammen und schlägt Antworten vor.",
    features: [
      "Automatische Klassifizierung (Dringend/Normal/Info)",
      "Fristenerkennung und Erinnerungen",
      "Nachtragspotenzial erkennen",
      "Antwort-Entwürfe generieren",
      "Dokumentation automatisch verknüpfen",
    ],
    stats: { value: "90%", label: "schnellere E-Mail-Bearbeitung" },
    providers: ["Claude + Outlook", "ChatGPT + Gmail", "n8n Workflows"],
  },
  {
    id: "rag",
    icon: Database,
    title: "RAG-Wissenssystem",
    subtitle: "Dein gesamtes Firmenwissen durchsuchbar",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    image: "/images/bau/nachtraege-organized.png",
    problem: "'Wo steht das nochmal?' – Du suchst 30 Minuten nach einem Dokument, einer E-Mail, einer Klausel im Vertrag.",
    solution: "Alle deine Dokumente (Verträge, LVs, E-Mails, Protokolle) werden indexiert. Du stellst Fragen in natürlicher Sprache – die KI findet die Antwort mit Quellenangabe.",
    features: [
      "PDFs, Word, Excel, E-Mails durchsuchbar",
      "Fragen in normaler Sprache stellen",
      "Quellenangabe für jede Antwort",
      "Projektübergreifend suchen",
      "Lernt aus deinen Dokumenten",
    ],
    stats: { value: "95%", label: "schnellere Informationssuche" },
    providers: ["NotebookLM (kostenlos)", "Claude Projects", "Custom RAG"],
  },
  {
    id: "documents",
    icon: FileSearch,
    title: "Intelligente Dokumentenverarbeitung",
    subtitle: "Ausschreibungen, Rechnungen, Verträge automatisch",
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/30",
    image: "/images/bau/dokumentation.png",
    problem: "Eine 80-seitige Ausschreibung. 3 Tage Frist. Du liest sie durch, übersiehst eine versteckte Klausel – und verlierst 10.000 €.",
    solution: "KI analysiert Ausschreibungen, extrahiert Risiken, findet versteckte Anforderungen und erstellt eine strukturierte Zusammenfassung.",
    features: [
      "Automatische Zusammenfassung von LVs",
      "Risiko-Analyse (versteckte Kosten)",
      "Vergleich mit früheren Projekten",
      "Nachtragspotenzial identifizieren",
      "Export als Checkliste",
    ],
    stats: { value: "10x", label: "schnellere Dokumentenanalyse" },
    providers: ["Claude", "ChatGPT", "Perplexity"],
  },
  {
    id: "agents",
    icon: Bot,
    title: "KI-Agenten für Workflows",
    subtitle: "Komplette Prozesse automatisieren",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
    image: "/images/bau/dashboard.png",
    problem: "Jeden Tag die gleichen Schritte: Tagesbericht erstellen, Fotos sortieren, E-Mail schreiben, Dokument ablegen. Stundenlange Routinen.",
    solution: "KI-Agenten verbinden mehrere Tools und erledigen komplette Workflows automatisch – von der Spracheingabe bis zum fertigen Bericht.",
    features: [
      "Tagesbericht aus Sprachnachricht",
      "Automatische Foto-Sortierung",
      "Rechnungsprüfung gegen Aufträge",
      "Stundenzettel-Kontrolle",
      "Dashboard-Updates in Echtzeit",
    ],
    stats: { value: "15h", label: "pro Woche gespart" },
    providers: ["n8n", "Make", "CrewAI"],
  },
];

export function KISolutions() {
  const [activeSolution, setActiveSolution] = useState(solutions[0].id);
  const active = solutions.find((s) => s.id === activeSolution)!;

  return (
    <section className="relative py-20 md:py-32 bg-concrete-900 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <Brain className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-400 font-medium">
              So hilft KI konkret
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            6 KI-Lösungen für Nachunternehmer
          </h2>
          <p className="text-xl text-concrete-400 max-w-3xl mx-auto">
            Keine Theorie. Konkrete Tools, die heute schon funktionieren.
          </p>
        </ScrollReveal>

        {/* Solution Tabs - Horizontal scroll on mobile */}
        <div className="mb-12 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex gap-3 md:flex-wrap md:justify-center min-w-max md:min-w-0">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              const isActive = activeSolution === solution.id;
              return (
                <motion.button
                  key={solution.id}
                  onClick={() => setActiveSolution(solution.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 transition-all whitespace-nowrap ${
                    isActive
                      ? `${solution.bgColor} ${solution.borderColor} text-white`
                      : "bg-concrete-800/50 border-concrete-700 text-concrete-400 hover:border-concrete-600"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{solution.title}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Active Solution Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSolution}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Left: Problem & Solution */}
            <div className="space-y-6">
              {/* Solution Image */}
              <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-concrete-900 via-concrete-900/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  {(() => {
                    const Icon = active.icon;
                    return (
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r ${active.color} text-white text-sm font-medium`}>
                        <Icon className="w-4 h-4" />
                        {active.title}
                      </div>
                    );
                  })()}
                </div>
              </div>

              {/* Problem */}
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                    <span className="text-red-400 font-bold">!</span>
                  </div>
                  <h4 className="text-red-400 font-heading text-lg">Das Problem</h4>
                </div>
                <p className="text-concrete-300 leading-relaxed">{active.problem}</p>
              </div>

              {/* Solution */}
              <div className={`${active.bgColor} border ${active.borderColor} rounded-2xl p-6`}>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${active.color} flex items-center justify-center`}>
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-white font-heading text-lg">Die Lösung</h4>
                </div>
                <p className="text-concrete-200 leading-relaxed">{active.solution}</p>
              </div>

              {/* Stat */}
              <div className="bg-concrete-800/50 border border-concrete-700 rounded-2xl p-6 text-center">
                <div className={`font-display text-5xl md:text-6xl bg-gradient-to-r ${active.color} bg-clip-text text-transparent`}>
                  {active.stats.value}
                </div>
                <p className="text-concrete-400 mt-2">{active.stats.label}</p>
              </div>
            </div>

            {/* Right: Features & Providers */}
            <div className="space-y-6">
              {/* Features */}
              <div className="bg-concrete-800/50 border border-concrete-700 rounded-2xl p-6">
                <h4 className="text-white font-heading text-lg mb-4">Features</h4>
                <ul className="space-y-3">
                  {active.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${active.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-concrete-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Providers */}
              <div className="bg-concrete-800/50 border border-concrete-700 rounded-2xl p-6">
                <h4 className="text-white font-heading text-lg mb-4">Empfohlene Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {active.providers.map((provider, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1.5 rounded-lg ${active.bgColor} ${active.borderColor} border text-sm text-white`}
                    >
                      {provider}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className={`bg-gradient-to-r ${active.color} rounded-2xl p-6 text-center`}>
                <p className="text-white/90 mb-4">
                  Im E-Book erkläre ich dir Schritt für Schritt, wie du das einrichtest.
                </p>
                <a
                  href="/checkout"
                  className="inline-flex items-center gap-2 bg-white text-concrete-900 font-heading px-6 py-3 rounded-xl hover:bg-white/90 transition-colors"
                >
                  Anleitung im Starter Kit
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
