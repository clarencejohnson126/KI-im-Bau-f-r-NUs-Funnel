"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, MapPin, Lightbulb, ArrowUpRight, X } from "lucide-react";
import { copy } from "../../content/copy";
import { ScrollReveal } from "./ui/ScrollReveal";
import { AnimatedCounter } from "./ui/AnimatedCounter";

const projectImages = [
  "/images/bau/st-vincentius-klinik.png",
  "/images/bau/omniturm-frankfurt.png",
  "/images/bau/leiq-fassade.png",
  "/images/bau/turley-baracks.png",
];

export function RealProjects() {
  const { author } = copy;
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl object-contain"
              />
              <p className="text-white text-center mt-4 text-lg">{selectedImage.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    <section className="relative py-20 md:py-32 bg-gradient-to-b from-concrete-950 to-concrete-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Header */}
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <Building2 className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-400 font-medium">
              Echte Erfahrung, echte Projekte
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            Die Projekte, die mich geprägt haben
          </h2>
          <p className="text-xl text-concrete-400 max-w-3xl mx-auto">
            13 Jahre Baustelle. Nicht vom Schreibtisch. Mitten drin.
          </p>
        </ScrollReveal>

        {/* Hero Image Grid */}
        <ScrollReveal className="mb-12">
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/images/bau/skyscraper-projects.png"
              alt="Großprojekte - Hochhäuser in Frankfurt"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-concrete-950 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-wrap items-center gap-4">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-lg font-heading">
                  Omniturm Frankfurt
                </span>
                <span className="text-white/80">190m Höhe | Deutschlands höchstes Hybridhochhaus</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {author.projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="bg-concrete-800/50 border border-concrete-700 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all group"
                whileHover={{ y: -5 }}
              >
                {/* Project Image - Clickable */}
                <div
                  className="h-48 relative overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage({
                    src: projectImages[index % projectImages.length],
                    alt: project.name
                  })}
                >
                  <Image
                    src={projectImages[index % projectImages.length]}
                    alt={project.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-concrete-900 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/50 flex items-center justify-center backdrop-blur-sm"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-orange-400" />
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-orange-500/80 text-white px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-sm">
                      Klicken zum Vergrößern
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl md:text-2xl text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-concrete-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Lesson Learned */}
                  <div className="bg-orange-500/10 border-l-4 border-orange-500 rounded-r-lg p-4">
                    <div className="flex items-start gap-2">
                      <Lightbulb className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-orange-400 font-medium mb-1">
                          Was ich gelernt habe:
                        </p>
                        <p className="text-concrete-300 text-sm">
                          {project.lesson}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Summary Box */}
        <ScrollReveal>
          <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/30 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-concrete-900/50 rounded-2xl p-6"
              >
                <p className="font-display text-5xl text-orange-400 mb-2">
                  <AnimatedCounter end={13} suffix="+" />
                </p>
                <p className="text-concrete-400">Jahre Bauerfahrung</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-concrete-900/50 rounded-2xl p-6"
              >
                <p className="font-display text-5xl text-orange-400 mb-2">
                  <AnimatedCounter end={190} suffix="m" />
                </p>
                <p className="text-concrete-400">Höchstes Projekt (Omniturm)</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-concrete-900/50 rounded-2xl p-6"
              >
                <p className="font-display text-5xl text-orange-400 mb-2">
                  <AnimatedCounter end={14} suffix="M€" />
                </p>
                <p className="text-concrete-400">Größtes Gewerk (Leiq Fassade)</p>
              </motion.div>
            </div>

            <div className="text-center">
              <p className="text-xl text-concrete-300 max-w-2xl mx-auto">
                Dieses Wissen ist in jede Seite des E-Books eingeflossen. Keine Theorie – nur das, was auf der Baustelle funktioniert.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
    </>
  );
}
