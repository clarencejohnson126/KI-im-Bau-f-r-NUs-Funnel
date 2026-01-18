"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, MessageCircle, Sparkles, RotateCcw, ChevronRight } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

const faqs = [
  {
    category: "Allgemein",
    color: "from-orange-500 to-amber-500",
    questions: [
      {
        q: "Brauche ich technische Vorkenntnisse?",
        a: "Nein. Das E-Book ist bewusst für Praktiker geschrieben, nicht für IT-Experten. Wenn du eine E-Mail schreiben kannst, kannst du auch KI nutzen. Ich erkläre jeden Schritt mit Screenshots und einfacher Sprache. Die meisten Leser sind zwischen 45-60 Jahren alt.",
      },
      {
        q: "Funktioniert das auch für meinen Betrieb?",
        a: "Das Starter Kit ist speziell für Nachunternehmer im Bau entwickelt: Trockenbauer, Estrichleger, Maler, Gerüstbauer, Metallbauer, Reinigungsfirmen im Bau. Die Beispiele und Prompts sind alle aus echten Bauprojekten. Wenn du mit GUs arbeitest und Ausschreibungen, Nachträge, Tagesberichte kennst – dann ist das für dich.",
      },
      {
        q: "Wie schnell sehe ich Ergebnisse?",
        a: "Die ersten Ergebnisse siehst du sofort. Du kannst heute noch eine Ausschreibung mit KI analysieren oder einen Tagesbericht per Spracheingabe erstellen. Die meisten Nutzer berichten von 5-10 gesparten Stunden in der ersten Woche.",
      },
    ],
  },
  {
    category: "Technik & Tools",
    color: "from-blue-500 to-cyan-500",
    questions: [
      {
        q: "Welche KI-Tools brauche ich?",
        a: "Du brauchst nur einen KI-Chatbot – ich empfehle Claude von Anthropic (20$/Monat) oder ChatGPT Plus (20$/Monat). Im E-Book vergleiche ich alle Tools ausführlich. Für den Start reicht auch die kostenlose Version.",
      },
      {
        q: "Ist das DSGVO-konform?",
        a: "Ja, wenn du es richtig machst. Im E-Book gibt es ein ganzes Kapitel zu Datenschutz und DSGVO. Ich zeige dir, welche Daten du eingeben darfst, welche nicht, und wie du KI nutzt, ohne Kundenverträge zu verletzen. Claude hat Server in der EU.",
      },
      {
        q: "Muss ich programmieren können?",
        a: "Absolut nicht. Alles funktioniert über normale Texteingabe – du tippst oder sprichst, die KI antwortet. Keine Programmierung, keine technischen Setups, keine Installation. Browser öffnen, loslegen.",
      },
    ],
  },
  {
    category: "Kaufen & Lieferung",
    color: "from-green-500 to-emerald-500",
    questions: [
      {
        q: "Wie erhalte ich das Produkt?",
        a: "Sofort nach dem Kauf erhältst du eine E-Mail mit Download-Links. Du lädst das E-Book als PDF herunter, plus alle Bonus-Materialien (Prompts, Checklisten, Vorlagen). Alles digital, sofort verfügbar, kein Warten.",
      },
      {
        q: "Gibt es eine Geld-zurück-Garantie?",
        a: "Ja, 14 Tage. Wenn das Starter Kit nicht hält, was es verspricht – volle Erstattung, keine Fragen. Ich bin überzeugt, dass es funktioniert. Und wenn nicht, will ich dein Geld nicht.",
      },
      {
        q: "Sind Updates inklusive?",
        a: "Ja. KI entwickelt sich schnell weiter. Wenn ich das E-Book aktualisiere oder neue Prompts hinzufüge, bekommst du die Updates kostenlos per E-Mail.",
      },
    ],
  },
];

interface FAQFlipCardProps {
  question: string;
  answer: string;
  color: string;
  index: number;
}

function FAQFlipCard({ question, answer, color, index }: FAQFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-[220px] cursor-pointer group"
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
        {/* Front - Question */}
        <div
          className="absolute inset-0 bg-concrete-800/80 border-2 border-concrete-700 rounded-2xl overflow-hidden group-hover:border-orange-500/50 transition-colors"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="p-6 h-full flex flex-col">
            {/* Question mark icon */}
            <motion.div
              className={`p-3 rounded-xl bg-gradient-to-br ${color} w-fit mb-4`}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <HelpCircle className="w-5 h-5 text-white" />
            </motion.div>

            {/* Question */}
            <h4 className="font-heading text-lg text-white mb-auto leading-snug">
              {question}
            </h4>

            {/* Flip hint */}
            <div className="pt-4 border-t border-concrete-700/50">
              <motion.div
                className="flex items-center gap-2 text-concrete-500 text-sm"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <RotateCcw className="w-4 h-4" />
                Antwort anzeigen
              </motion.div>
            </div>

            {/* Gradient accent */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color}`} />
          </div>
        </div>

        {/* Back - Answer */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color} rounded-2xl overflow-hidden`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="p-6 h-full flex flex-col text-white">
            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5" />
              <span className="font-heading text-sm">Antwort</span>
            </div>

            {/* Answer */}
            <div className="flex-1 overflow-auto">
              <p className="text-white/90 text-sm leading-relaxed">
                {answer}
              </p>
            </div>

            {/* Back hint */}
            <div className="pt-3 border-t border-white/20 mt-auto">
              <motion.div
                className="flex items-center gap-2 text-white/70 text-sm"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <RotateCcw className="w-4 h-4" />
                Zurück zur Frage
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function FAQAnimated() {
  const [activeCategory, setActiveCategory] = useState(faqs[0].category);
  const activeData = faqs.find((f) => f.category === activeCategory)!;

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-concrete-950 to-concrete-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.3, 1, 1.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-400 font-medium">
              Häufige Fragen
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4 tracking-tight">
            Noch Fragen?
          </h2>
          <p className="text-xl text-concrete-400">
            Klicke auf eine Karte, um die Antwort zu sehen
          </p>
        </ScrollReveal>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {faqs.map((category) => (
            <motion.button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`relative px-5 py-3 rounded-xl font-medium transition-all overflow-hidden ${
                activeCategory === category.category
                  ? "text-white"
                  : "bg-concrete-800 text-concrete-400 hover:bg-concrete-700"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {activeCategory === category.category && (
                <motion.div
                  layoutId="activeTab"
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl`}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative flex items-center gap-2">
                {category.category}
                {activeCategory === category.category && (
                  <ChevronRight className="w-4 h-4" />
                )}
              </span>
            </motion.button>
          ))}
        </div>

        {/* FAQ Flip Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-3 gap-5"
          >
            {activeData.questions.map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <FAQFlipCard
                  question={faq.q}
                  answer={faq.a}
                  color={activeData.color}
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Still have questions? */}
        <ScrollReveal delay={0.3} className="mt-12">
          <motion.div
            className="bg-concrete-800/50 border border-concrete-700 rounded-2xl p-8 text-center relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute top-4 right-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-orange-500/20" />
            </motion.div>

            <div className="relative">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 rounded-2xl mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <MessageCircle className="w-8 h-8 text-orange-400" />
              </motion.div>
              <h3 className="font-heading text-xl text-white mb-2">
                Noch eine Frage?
              </h3>
              <p className="text-concrete-400 mb-4">
                Schreib mir direkt – ich antworte persönlich innerhalb von 24 Stunden.
              </p>
              <motion.a
                href="mailto:thinkbig@rebelz-ai.com"
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4" />
                thinkbig@rebelz-ai.com
              </motion.a>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
