"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Building2, Award, BookOpen } from "lucide-react";
import { copy } from "../../content/copy";
import { ScrollReveal } from "./ui/ScrollReveal";

export function Author() {
  const { author } = copy;

  return (
    <section className="bg-gradient-to-b from-white to-concrete-100 py-16 md:py-24 overflow-hidden">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-concrete-900 to-concrete-950 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/5 rounded-full blur-2xl" />

              <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
                {/* Author Image */}
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative">
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-orange-500/30 shadow-2xl">
                      <Image
                        src="/images/bau/author-clarence.png"
                        alt="Clarence Johnson - Autor"
                        width={256}
                        height={256}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    {/* Badge */}
                    <div className="absolute -bottom-3 -right-3 bg-orange-500 text-white px-4 py-2 rounded-xl font-heading text-sm shadow-lg">
                      13 Jahre Bauerfahrung
                    </div>
                  </div>
                </motion.div>

              {/* Author Info */}
              <div className="text-center lg:text-left flex-1">
                <span className="inline-block text-sm font-medium text-orange-400 uppercase tracking-wider mb-2">
                  Über den Autor
                </span>
                <h2 className="text-3xl md:text-4xl font-display text-white mt-2 mb-2">
                  {author.name}
                </h2>
                <p className="text-orange-400 font-heading text-lg mb-4">
                  {author.tagline}
                </p>
                <p className="text-concrete-300 leading-relaxed mb-6 text-lg">
                  {author.bio}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-concrete-800/50 rounded-xl p-4 text-center">
                    <Building2 className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                    <p className="text-2xl font-display text-white">+10</p>
                    <p className="text-concrete-500 text-xs">Bauprojekte</p>
                  </div>
                  <div className="bg-concrete-800/50 rounded-xl p-4 text-center">
                    <Award className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                    <p className="text-2xl font-display text-white">13</p>
                    <p className="text-concrete-500 text-xs">Jahre Erfahrung</p>
                  </div>
                  <div className="bg-concrete-800/50 rounded-xl p-4 text-center">
                    <BookOpen className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                    <p className="text-2xl font-display text-white">300+</p>
                    <p className="text-concrete-500 text-xs">Seiten im E-Book</p>
                  </div>
                </div>

                {/* Credentials */}
                <ul className="space-y-2">
                  {author.credentials.map((credential, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-concrete-300 justify-center lg:justify-start"
                    >
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{credential}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
