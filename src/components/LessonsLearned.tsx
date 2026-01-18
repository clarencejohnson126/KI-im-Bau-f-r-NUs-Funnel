"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, AlertTriangle, Users, Target, Shield, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

export function LessonsLearned() {
  const lessons = [
    {
      icon: AlertTriangle,
      number: 1,
      title: "Bau ist kein Technikproblem. Bau ist ein Systemproblem.",
      description:
        "Die meisten Bauprojekte scheitern nicht an fehlendem Fachwissen. Die Handwerker können ihr Fach. Die Ingenieure können rechnen. Die Architekten können planen. Projekte scheitern an fehlender Kommunikation, lückenhafter Dokumentation, zu späten Nachträgen und eskalierenden Konflikten.",
    },
    {
      icon: Users,
      number: 2,
      title: "Nachunternehmer verlieren systematisch",
      description:
        "Ich habe mit hunderten Nachunternehmern gearbeitet. Die meisten waren fachlich stark. Trotzdem haben viele systematisch Geld verloren. Nicht weil sie schlecht gearbeitet haben – sondern weil Nachträge zu spät kamen, Dokumentation lückenhaft war und Behinderungen nicht angezeigt wurden.",
    },
    {
      icon: Target,
      number: 3,
      title: "Der Auftraggeber ist professioneller organisiert",
      description:
        "Generalunternehmer und Bauträger haben Systeme. Sie haben Prozesse. Sie haben Leute, die den ganzen Tag nichts anderes machen als Nachträge zu prüfen, Dokumentation zu fordern, Fristen zu setzen. Die meisten Nachunternehmer haben das nicht. Das ist kein fairer Kampf.",
    },
    {
      icon: Shield,
      number: 4,
      title: "Struktur schlägt Talent",
      description:
        "Die besten Nachunternehmer, mit denen ich gearbeitet habe, waren nicht die mit den besten Handwerkern. Sie waren die mit den besten Prozessen: Tagesberichte kamen pünktlich, Nachträge waren wasserdicht dokumentiert, Kommunikation war professionell. Organisation schlägt Preis. Immer.",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-concrete-900 to-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Header with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12 md:mb-16">
          {/* Left: Image */}
          <ScrollReveal>
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/images/bau/meine-geschichte.png"
                alt="Meine Geschichte - 13 Jahre Bauerfahrung"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-lg font-heading text-sm">
                  13 Jahre Erfahrung
                </span>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Right: Header */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-400 font-medium">
                13 Jahre Erfahrung destilliert
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
              4 Lektionen, die in keinem Lehrbuch stehen
            </h2>
            <p className="text-xl text-concrete-400">
              Was ich auf der Baustelle wirklich gelernt habe – und warum KI der Schlüssel ist.
            </p>
          </ScrollReveal>
        </div>

        {/* Lessons */}
        <div className="space-y-6">
          {lessons.map((lesson, index) => {
            const Icon = lesson.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-concrete-800/50 border border-concrete-700 rounded-2xl p-6 md:p-8 hover:border-orange-500/50 transition-all group"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-start gap-6">
                    {/* Number & Icon */}
                    <div className="flex-shrink-0">
                      <motion.div
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-mono text-orange-400">
                          Lektion {lesson.number}
                        </span>
                        <ArrowRight className="w-4 h-4 text-orange-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl text-white mb-3">
                        {lesson.title}
                      </h3>
                      <p className="text-concrete-400 leading-relaxed">
                        {lesson.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom callout */}
        <ScrollReveal className="mt-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-center text-white relative overflow-hidden">
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-heading mb-4">
                Diese Lektionen sind der Grund, warum KI für Nachunternehmer so wichtig ist:
              </p>
              <p className="text-orange-100 text-lg">
                KI gibt dir die Struktur und Geschwindigkeit, die du brauchst, um auf Augenhöhe mit dem GU zu arbeiten.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
