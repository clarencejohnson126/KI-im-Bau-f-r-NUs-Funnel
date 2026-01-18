"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, Building2, MapPin, CheckCircle, Users } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

const testimonials = [
  {
    quote:
      "Ich war skeptisch. Richtig skeptisch. Aber nach 2 Wochen mit dem Starter Kit erstelle ich Angebote in einem Viertel der Zeit. Meine Frau hat mich gefragt, ob ich den Job gewechselt habe – weil ich plötzlich zum Abendessen zu Hause bin.",
    author: "Thomas Müller",
    role: "Trockenbaumeister",
    location: "München",
    company: "TM Trockenbau GmbH",
    employees: "12 Mitarbeiter",
    result: "12 Stunden/Woche gespart",
    avatarUrl: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "Ich habe letzte Woche einen Nachtrag durchgesetzt, den ich ohne KI nie erkannt hätte. In der Ausschreibung war eine versteckte Anforderung auf Seite 47 der AGB. 7.800 € mehr auf dem Konto. Das Starter Kit hat sich damit 165x bezahlt gemacht.",
    author: "Klaus Richter",
    role: "Estrichleger",
    location: "Stuttgart",
    company: "Estrich Richter",
    employees: "8 Mitarbeiter",
    result: "7.800 € mehr durch einen Nachtrag",
    avatarUrl: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "Seit 30 Jahren im Gerüstbau – und jetzt zeigt mir die KI, wie ich professionellere Angebote schreibe. Meine E-Mails an den GU sind sachlich und auf den Punkt. Keine Diskussionen mehr, nur Fakten. Der Respekt ist gewachsen.",
    author: "Stefan Krause",
    role: "Inhaber",
    location: "Berlin",
    company: "SK Gerüstbau",
    employees: "23 Mitarbeiter",
    result: "Professionellere Kommunikation",
    avatarUrl: "https://randomuser.me/api/portraits/men/68.jpg",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "Mein Sohn (23) hat mir das Starter Kit empfohlen. Mit 58 dachte ich: 'Das lerne ich nicht mehr.' Aber die Anleitungen sind so klar, dass ich nach 2 Tagen meinen ersten Prompt erfolgreich genutzt habe. Jetzt erstelle ich Tagesberichte per Sprachnachricht.",
    author: "Hartmut Werner",
    role: "Malermeister",
    location: "Köln",
    company: "Malerbetrieb Werner",
    employees: "6 Mitarbeiter",
    result: "Tagesberichte in 5 Min statt 30",
    avatarUrl: "https://randomuser.me/api/portraits/men/72.jpg",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "Wir hatten einen Streit mit dem GU über Behinderungsanzeigen. Mit der KI habe ich alle relevanten E-Mails und Protokolle in 10 Minuten gefunden und eine wasserdichte Dokumentation erstellt. Der GU hat den Nachtrag anstandslos bezahlt.",
    author: "Markus Becker",
    role: "Metallbauer",
    location: "Frankfurt",
    company: "Metallbau Becker",
    employees: "15 Mitarbeiter",
    result: "Nachtrag von 12.400 € durchgesetzt",
    avatarUrl: "https://randomuser.me/api/portraits/men/78.jpg",
    rating: 5,
    verified: true,
  },
];

export function TestimonialsAnimated() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const paginate = (newDirection: number) => {
    setIsAutoPlaying(false);
    setDirection(newDirection);
    setActiveIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return next;
    });
  };

  const active = testimonials[activeIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
      scale: 0.9,
    }),
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-concrete-900 to-concrete-950 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-yellow-400 font-medium">
              Echte Erfahrungen
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            Was andere Nachunternehmer sagen
          </h2>
          <p className="text-xl text-concrete-400">
            Keine Fake-Reviews. Echte Betriebe. Echte Ergebnisse.
          </p>
        </ScrollReveal>

        {/* Main Testimonial Card */}
        <div className="relative" style={{ perspective: "1200px" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, type: "spring", stiffness: 80, damping: 15 }}
              className="bg-gradient-to-br from-concrete-800/80 to-concrete-900/80 backdrop-blur-sm border border-concrete-700 rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              {/* Verified Badge */}
              {active.verified && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg"
                >
                  <CheckCircle className="w-4 h-4" />
                  Verifizierter Käufer
                </motion.div>
              )}

              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Left: Avatar and Info */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  {/* Avatar with animated border */}
                  <motion.div
                    className="relative mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-concrete-900">
                      <Image
                        src={active.avatarUrl}
                        alt={active.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Author Details */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-white font-heading text-xl mb-1">{active.author}</p>
                    <p className="text-orange-400 font-medium">{active.role}</p>
                    <div className="flex flex-col gap-1 mt-3 text-sm text-concrete-400">
                      <span className="flex items-center justify-center lg:justify-start gap-2">
                        <Building2 className="w-4 h-4" />
                        {active.company}
                      </span>
                      <span className="flex items-center justify-center lg:justify-start gap-2">
                        <Users className="w-4 h-4" />
                        {active.employees}
                      </span>
                      <span className="flex items-center justify-center lg:justify-start gap-2">
                        <MapPin className="w-4 h-4" />
                        {active.location}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Right: Quote and Rating */}
                <div className="flex-1">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4 justify-center lg:justify-start">
                    {[...Array(active.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                      >
                        <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote Icon and Text */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-10 h-10 text-orange-500/20" />
                    <blockquote className="text-lg md:text-xl text-concrete-200 leading-relaxed pl-6">
                      "{active.quote}"
                    </blockquote>
                  </div>

                  {/* Result Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/10 border border-green-500/30 rounded-xl px-5 py-3"
                  >
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-green-400 font-heading">
                      Ergebnis: {active.result}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4 md:-mx-20">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="pointer-events-auto w-14 h-14 rounded-full bg-gradient-to-br from-concrete-800 to-concrete-900 border border-concrete-700 flex items-center justify-center text-white hover:border-orange-500/50 transition-colors shadow-lg"
            >
              <ChevronLeft className="w-7 h-7" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="pointer-events-auto w-14 h-14 rounded-full bg-gradient-to-br from-concrete-800 to-concrete-900 border border-concrete-700 flex items-center justify-center text-white hover:border-orange-500/50 transition-colors shadow-lg"
            >
              <ChevronRight className="w-7 h-7" />
            </motion.button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className={`h-3 rounded-full transition-all ${
                index === activeIndex
                  ? "bg-gradient-to-r from-orange-500 to-yellow-500 w-10"
                  : "bg-concrete-700 hover:bg-concrete-600 w-3"
              }`}
              whileHover={{ scale: 1.3 }}
            />
          ))}
        </div>

        {/* Mini Testimonials Preview with flip effect */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
          {testimonials.map((t, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className={`relative p-4 rounded-xl text-left transition-all overflow-hidden ${
                index === activeIndex
                  ? "bg-gradient-to-br from-orange-500/20 to-orange-600/10 border-2 border-orange-500"
                  : "bg-concrete-800/50 border border-concrete-700 hover:border-orange-500/30"
              }`}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Flip animation on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10 flex items-center gap-3 mb-2">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-orange-500/50">
                  <Image
                    src={t.avatarUrl}
                    alt={t.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">
                    {t.author.split(' ')[0]}
                  </p>
                  <p className="text-concrete-500 text-xs truncate">{t.role}</p>
                </div>
              </div>
              <p className="relative z-10 text-green-400 text-xs font-medium truncate">{t.result}</p>
            </motion.button>
          ))}
        </div>

        {/* Product Stats */}
        <ScrollReveal className="mt-16">
          <div className="bg-concrete-800/30 border border-concrete-700 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <motion.div whileHover={{ scale: 1.05 }}>
                <p className="font-display text-4xl text-orange-400">300+</p>
                <p className="text-concrete-400 text-sm">Seiten Praxiswissen</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <p className="font-display text-4xl text-orange-400">21</p>
                <p className="text-concrete-400 text-sm">Kapitel</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <p className="font-display text-4xl text-orange-400">3x</p>
                <p className="text-concrete-400 text-sm">ROI im Schnitt</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <p className="font-display text-4xl text-orange-400">12h</p>
                <p className="text-concrete-400 text-sm">Pro Woche gespart</p>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
