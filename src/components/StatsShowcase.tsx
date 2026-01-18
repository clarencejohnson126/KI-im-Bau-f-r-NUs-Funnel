"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Clock, Euro, FileText, Zap } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { AnimatedCounter } from "./ui/AnimatedCounter";
import { DrillIcon, HardHatIcon, RulerIcon, HammerIcon, ExcavatorIcon, CableDrumIcon } from "./icons/ConstructionIcons";

const stats = [
  {
    icon: Clock,
    label: "Stunden gespart",
    value: 12,
    suffix: "h",
    sublabel: "pro Woche durchschnittlich",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    trend: "up",
  },
  {
    icon: Euro,
    label: "Nachträge gesichert",
    value: 7800,
    suffix: " €",
    sublabel: "durch einen gefundenen Nachtrag",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    trend: "up",
  },
  {
    icon: FileText,
    label: "Schneller analysieren",
    value: 10,
    suffix: "x",
    sublabel: "Ausschreibungen durcharbeiten",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    trend: "up",
  },
  {
    icon: Zap,
    label: "Weniger Admin",
    value: 75,
    suffix: "%",
    sublabel: "Zeit für Tagesberichte",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    trend: "down",
  },
];

const beforeAfter = [
  { task: "Ausschreibung analysieren", before: "3 Stunden", after: "10 Min", savings: "170 Min" },
  { task: "Angebot erstellen", before: "45 Min", after: "5 Min", savings: "40 Min" },
  { task: "Tagesbericht schreiben", before: "30 Min", after: "5 Min", savings: "25 Min" },
  { task: "E-Mail an GU", before: "15 Min", after: "2 Min", savings: "13 Min" },
  { task: "Nachtrag dokumentieren", before: "60 Min", after: "10 Min", savings: "50 Min" },
];

export function StatsShowcase() {
  return (
    <section className="relative py-20 md:py-32 bg-concrete-950 overflow-hidden">
      {/* Floating construction tools background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <motion.div
          className="absolute top-[10%] left-[5%]"
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <DrillIcon className="w-20 h-20" />
        </motion.div>
        <motion.div
          className="absolute top-[20%] right-[10%]"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        >
          <HardHatIcon className="w-24 h-24" />
        </motion.div>
        <motion.div
          className="absolute bottom-[30%] left-[8%]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <CableDrumIcon className="w-16 h-16" />
        </motion.div>
        <motion.div
          className="absolute bottom-[20%] right-[5%]"
          animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        >
          <ExcavatorIcon className="w-28 h-28" />
        </motion.div>
        <motion.div
          className="absolute top-[50%] right-[15%]"
          animate={{ rotate: [0, -30, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        >
          <HammerIcon className="w-16 h-16" />
        </motion.div>
        <motion.div
          className="absolute top-[40%] left-[12%]"
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <RulerIcon className="w-20 h-20" />
        </motion.div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400 font-medium">
              Messbare Ergebnisse
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            Die Zahlen sprechen für sich
          </h2>
          <p className="text-xl text-concrete-400">
            Echte Ergebnisse von Nachunternehmern wie dir
          </p>
        </ScrollReveal>

        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  className={`${stat.bgColor} border ${stat.borderColor} rounded-2xl p-6 text-center`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.bgColor} rounded-xl mb-4`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className={`font-display text-4xl md:text-5xl ${stat.color}`}>
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </span>
                    {stat.trend === "up" ? (
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    ) : (
                      <TrendingDown className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                  <p className="text-white font-heading text-lg">{stat.label}</p>
                  <p className="text-concrete-500 text-sm mt-1">{stat.sublabel}</p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Before/After Table */}
        <ScrollReveal>
          <div className="bg-concrete-800/50 border border-concrete-700 rounded-3xl overflow-hidden">
            <div className="p-6 border-b border-concrete-700">
              <h3 className="font-heading text-xl text-white text-center">
                Konkrete Zeitersparnis pro Aufgabe
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-concrete-900/50">
                    <th className="text-left text-concrete-400 font-medium py-4 px-6">Aufgabe</th>
                    <th className="text-center text-red-400 font-medium py-4 px-4">Ohne KI</th>
                    <th className="text-center text-green-400 font-medium py-4 px-4">Mit KI</th>
                    <th className="text-center text-orange-400 font-medium py-4 px-4">Ersparnis</th>
                  </tr>
                </thead>
                <tbody>
                  {beforeAfter.map((row, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-t border-concrete-700/50 hover:bg-concrete-800/30 transition-colors"
                    >
                      <td className="py-4 px-6 text-white">{row.task}</td>
                      <td className="py-4 px-4 text-center">
                        <span className="bg-red-500/10 text-red-400 px-3 py-1 rounded-lg text-sm">
                          {row.before}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-lg text-sm">
                          {row.after}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-lg font-heading">
                          -{row.savings}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-orange-500/10 border-t-2 border-orange-500">
                    <td className="py-4 px-6 text-white font-heading">Pro Woche (5 Tage)</td>
                    <td className="py-4 px-4 text-center text-red-400 font-heading">~25 Stunden</td>
                    <td className="py-4 px-4 text-center text-green-400 font-heading">~3 Stunden</td>
                    <td className="py-4 px-4 text-center">
                      <span className="bg-orange-500 text-white px-4 py-2 rounded-xl font-display text-lg">
                        22+ Stunden
                      </span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* ROI Calculator Preview */}
        <ScrollReveal delay={0.2} className="mt-12">
          <div className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 border-2 border-orange-500/30 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="font-display text-2xl md:text-3xl text-white mb-4">
              Das sind <span className="text-orange-400">88+ Stunden</span> pro Monat
            </h3>
            <p className="text-xl text-concrete-300 mb-6">
              Bei einem Stundensatz von 65 € = <span className="text-green-400 font-display text-2xl">5.720 € Wert</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="bg-concrete-800 rounded-xl px-6 py-3">
                <p className="text-concrete-400 text-sm">Deine Investition</p>
                <p className="text-white font-display text-2xl">47 €</p>
              </div>
              <div className="text-3xl">→</div>
              <div className="bg-green-500/20 border border-green-500/50 rounded-xl px-6 py-3">
                <p className="text-green-400 text-sm">ROI im ersten Monat</p>
                <p className="text-green-400 font-display text-2xl">121x</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
