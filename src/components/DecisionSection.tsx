"use client";

import React from "react";
import { ArrowRight, X, Check, Zap } from "lucide-react";
import { Button } from "./ui/Button";
import { copy } from "../../content/copy";

export function DecisionSection() {
  const { product } = copy;

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-concrete-900 to-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-1/2 h-1/2 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            Du hast jetzt zwei Optionen
          </h2>
          <p className="text-xl text-concrete-400">
            Die Entscheidung liegt bei dir.
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Option 1 - Status Quo */}
          <div className="bg-concrete-800/50 border border-red-500/30 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                  <X className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <p className="text-red-400 text-sm font-medium uppercase tracking-wider">
                    Option 1
                  </p>
                  <h3 className="font-display text-xl text-white">
                    Weitermachen wie bisher
                  </h3>
                </div>
              </div>

              <ul className="space-y-4 text-concrete-400">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Jeden Abend Tagesberichte tippen</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Jedes Angebot von Hand schreiben</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Nachträge verpassen und Geld verlieren</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Der Konkurrenz hinterherlaufen</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>50-60 Stunden Wochen ohne Ende</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-red-500/20">
                <p className="text-concrete-500 text-sm">
                  Kosten: 10.000-50.000 € pro Jahr an verpassten Nachträgen + unbezahlbarer Stress
                </p>
              </div>
            </div>
          </div>

          {/* Option 2 - KI nutzen */}
          <div className="bg-gradient-to-br from-green-500/10 to-concrete-800/50 border-2 border-green-500/50 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-green-400 text-sm font-medium uppercase tracking-wider">
                    Option 2
                  </p>
                  <h3 className="font-display text-xl text-white">
                    KI für dich arbeiten lassen
                  </h3>
                </div>
              </div>

              <ul className="space-y-4 text-concrete-300">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Tagesberichte in 5 statt 30 Minuten</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Angebote 9x schneller erstellen</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>70-80% Nachtrags-Erfolgsquote</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Der Konkurrenz einen Schritt voraus</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>10-15 Stunden pro Woche zurückgewinnen</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-green-500/20">
                <p className="text-green-400 text-sm font-medium">
                  Investition: Einmalig 47 € → ROI nach einem erkannten Nachtrag
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="/checkout">
            <Button variant="primary" size="lg" className="group">
              <Zap className="w-5 h-5 mr-2" />
              Ich wähle Option 2 – Jetzt für {product.pricing.current} sichern
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <p className="mt-4 text-concrete-500 text-sm">
            14-Tage Geld-zurück-Garantie • Kein Risiko
          </p>
        </div>
      </div>
    </section>
  );
}
