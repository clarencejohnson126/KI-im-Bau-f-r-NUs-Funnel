"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Check, RefreshCcw, Mail } from "lucide-react";
import { copy } from "../../content/copy";
import { ScrollReveal } from "./ui/ScrollReveal";

export function Guarantee() {
  const { guarantee } = copy;

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-black to-concrete-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 rounded-3xl blur-sm opacity-40" />

              <div className="relative bg-gradient-to-br from-concrete-900 to-concrete-950 border border-green-500/30 rounded-3xl p-8 md:p-12 text-center">
                {/* Shield Icon */}
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <ShieldCheck className="w-10 h-10 text-white" />
                </motion.div>

                {/* Title */}
                <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                  {guarantee.headline}
                </h2>

                {/* Description */}
                <p className="text-concrete-300 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                  {guarantee.description}
                </p>

                {/* Guarantee Points */}
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="bg-concrete-800/50 border border-concrete-700 rounded-xl p-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <RefreshCcw className="w-5 h-5 text-green-400" />
                    </div>
                    <p className="text-white font-medium">14 Tage</p>
                    <p className="text-concrete-500 text-sm">Rückgaberecht</p>
                  </div>
                  <div className="bg-concrete-800/50 border border-concrete-700 rounded-xl p-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Check className="w-5 h-5 text-green-400" />
                    </div>
                    <p className="text-white font-medium">100%</p>
                    <p className="text-concrete-500 text-sm">Geld-zurück</p>
                  </div>
                  <div className="bg-concrete-800/50 border border-concrete-700 rounded-xl p-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Mail className="w-5 h-5 text-green-400" />
                    </div>
                    <p className="text-white font-medium">Schnell</p>
                    <p className="text-concrete-500 text-sm">Abwicklung</p>
                  </div>
                </div>

                {/* Note */}
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <p className="text-green-400 font-heading">
                    {guarantee.note}
                  </p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
