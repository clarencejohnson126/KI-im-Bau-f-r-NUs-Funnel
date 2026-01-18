"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, FileText, ChevronRight } from "lucide-react";
import { Accordion, AccordionItem } from "./ui/Accordion";
import { copy } from "../../content/copy";
import { ScrollReveal } from "./ui/ScrollReveal";

export function Chapters() {
  const { chapters } = copy;

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-concrete-950 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-concrete-700 to-transparent" />
        <motion.div
          className="absolute bottom-1/3 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Header */}
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-400 font-medium">
              Inhaltsverzeichnis
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            {chapters.headline}
          </h2>
          <p className="text-xl text-concrete-400 max-w-3xl mx-auto">
            {chapters.subheadline}
          </p>
        </ScrollReveal>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: Book Preview Image */}
          <ScrollReveal className="lg:col-span-2">
            <motion.div
              className="sticky top-24"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/bau/dokumentation.png"
                  alt="KI im Bau E-Book Vorschau"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-concrete-900/90 backdrop-blur-sm rounded-xl p-4 border border-concrete-700">
                    <div className="flex items-center gap-3 mb-3">
                      <FileText className="w-6 h-6 text-orange-400" />
                      <span className="text-white font-heading">E-Book Details</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-concrete-500">Seiten</p>
                        <p className="text-white font-medium">300+</p>
                      </div>
                      <div>
                        <p className="text-concrete-500">Kapitel</p>
                        <p className="text-white font-medium">21</p>
                      </div>
                      <div>
                        <p className="text-concrete-500">Teile</p>
                        <p className="text-white font-medium">7</p>
                      </div>
                      <div>
                        <p className="text-concrete-500">Format</p>
                        <p className="text-white font-medium">PDF</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Right: Chapters Accordion */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <div className="bg-concrete-900/50 border border-concrete-700 rounded-2xl p-6 md:p-8">
                <Accordion>
                  {chapters.parts.map((part, partIndex) => (
                    <AccordionItem
                      key={partIndex}
                      title={part.title}
                      defaultOpen={partIndex === 0}
                    >
                      <ul className="space-y-3 pl-2">
                        {part.chapters.map((chapter, chapterIndex) => (
                          <motion.li
                            key={chapterIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: chapterIndex * 0.05 }}
                            className="flex items-start gap-3 text-concrete-300 group"
                          >
                            <ChevronRight className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                            <span className="group-hover:text-white transition-colors">{chapter}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </ScrollReveal>

            {/* Bottom CTA */}
            <ScrollReveal className="mt-6">
              <div className="bg-gradient-to-r from-orange-500/20 to-amber-500/10 border border-orange-500/30 rounded-xl p-6 text-center">
                <p className="text-concrete-300 mb-2">
                  <span className="font-display text-2xl text-orange-400">300+ Seiten</span>{" "}
                  geballtes Wissen für deinen Erfolg
                </p>
                <p className="text-concrete-500 text-sm">
                  Inkl. 50+ Prompts, Checklisten und Tool-Vergleiche
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
