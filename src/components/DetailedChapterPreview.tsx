"use client";

import React, { useState } from "react";
import { Book, ChevronDown, ChevronUp, Check, Clock, FileText } from "lucide-react";
import { copy } from "../../content/copy";

export function DetailedChapterPreview() {
  const { chapters } = copy;
  const [expandedPart, setExpandedPart] = useState<number | null>(0);

  const partDetails = [
    {
      title: "Teil 1: Grundlagen",
      chapters: ["Wer ich bin", "Die Realität – 40% deiner Zeit", "Was KI kann und was nicht", "So funktioniert KI", "Die Tools"],
      description: "Die Basis: Verstehe, was KI für Nachunternehmer bedeutet und welche Tools du wirklich brauchst.",
      readingTime: "45 Min",
      keyInsight: "Warum Claude für Dokumentenanalyse 10.550 € gefunden hat, die ChatGPT übersehen hat."
    },
    {
      title: "Teil 2: Vorbereitung",
      chapters: ["Datenschutz & Sicherheit"],
      description: "DSGVO-konform arbeiten: Was du mit Firmendaten machen darfst und was nicht.",
      readingTime: "15 Min",
      keyInsight: "Die 3 Regeln für sichere KI-Nutzung mit Kundendaten."
    },
    {
      title: "Teil 3: Projektanbahnung",
      chapters: ["Ausschreibungen analysieren", "Aufmaße erstellen", "Angebote schreiben"],
      description: "Von der Ausschreibung zum Angebot: So holst du mehr Aufträge in weniger Zeit.",
      readingTime: "60 Min",
      keyInsight: "Wie du Ausschreibungen in 10 Minuten statt 3 Stunden verstehst."
    },
    {
      title: "Teil 4: Projektabwicklung",
      chapters: ["Dokumentation", "Submittals", "Kommunikation", "Nachträge"],
      description: "Das Herzstück: Dokumentation, Nachträge und Kommunikation – professionell und effizient.",
      readingTime: "90 Min",
      keyInsight: "Wie du Nachträge wasserdicht dokumentierst und von 30-50% auf 70-80% Erfolgsquote kommst."
    },
    {
      title: "Teil 5: Büro & Verwaltung",
      chapters: ["Stundenzettel", "Finanzen", "Projektanalyse", "Dashboards", "Team"],
      description: "Der Bürokram: Automatisiere das, was dich jeden Tag Zeit kostet.",
      readingTime: "75 Min",
      keyInsight: "Wie du ein Dashboard baust, das dir zeigt, wo es in deinen Projekten brennt."
    },
    {
      title: "Teil 6: Umsetzung",
      chapters: ["30-Tage-Aktionsplan", "Die häufigsten Fehler"],
      description: "Vom Lesen zum Machen: Dein konkreter Plan für die ersten 30 Tage.",
      readingTime: "30 Min",
      keyInsight: "Die 10 Fehler, die 90% aller KI-Anfänger machen – und wie du sie vermeidest."
    },
    {
      title: "Teil 7: Ausblick",
      chapters: ["Die Zukunft der Baubranche"],
      description: "Wohin die Reise geht: Was in den nächsten 2-5 Jahren auf dich zukommt.",
      readingTime: "15 Min",
      keyInsight: "Warum die nächsten 24 Monate entscheiden, wer im Markt bleibt."
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-concrete-50 to-white" />

      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-2 mb-6">
            <Book className="w-4 h-4 text-orange-600" />
            <span className="text-sm text-orange-700 font-medium">
              300+ Seiten, 21 Kapitel
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-concrete-900 mb-4 tracking-tight">
            Was dich im E-Book erwartet
          </h2>
          <p className="text-xl text-concrete-600">
            Klicke auf einen Teil, um die Details zu sehen
          </p>
        </div>

        {/* Parts Accordion */}
        <div className="space-y-4">
          {partDetails.map((part, index) => (
            <div
              key={index}
              className={`bg-white border-2 rounded-2xl overflow-hidden transition-all ${
                expandedPart === index
                  ? "border-orange-500 shadow-lg"
                  : "border-concrete-200 hover:border-concrete-300"
              }`}
            >
              {/* Header */}
              <button
                onClick={() =>
                  setExpandedPart(expandedPart === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      expandedPart === index
                        ? "bg-orange-500 text-white"
                        : "bg-concrete-100 text-concrete-500"
                    }`}
                  >
                    <span className="font-display text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <h3
                      className={`font-heading text-lg md:text-xl ${
                        expandedPart === index
                          ? "text-orange-600"
                          : "text-concrete-800"
                      }`}
                    >
                      {part.title}
                    </h3>
                    <p className="text-concrete-500 text-sm">
                      {part.chapters.length} Kapitel
                    </p>
                  </div>
                </div>
                <div
                  className={`p-2 rounded-lg ${
                    expandedPart === index
                      ? "bg-orange-100 text-orange-600"
                      : "bg-concrete-100 text-concrete-500"
                  }`}
                >
                  {expandedPart === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {/* Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedPart === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-concrete-600 mb-4">{part.description}</p>

                  {/* Chapters List */}
                  <div className="bg-concrete-50 rounded-xl p-4 mb-4">
                    <p className="text-sm text-concrete-500 mb-3 font-medium">
                      Kapitel in diesem Teil:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {part.chapters.map((chapter, chapterIndex) => (
                        <div
                          key={chapterIndex}
                          className="flex items-center gap-2 text-concrete-700 text-sm"
                        >
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{chapter}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-concrete-500 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>Lesezeit: {part.readingTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-600 text-sm">
                      <FileText className="w-4 h-4" />
                      <span className="font-medium">
                        Key Insight: {part.keyInsight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Summary */}
        <div className="mt-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-center text-white">
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div>
              <p className="font-display text-3xl md:text-4xl">7</p>
              <p className="text-orange-100 text-sm">Teile</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl">21</p>
              <p className="text-orange-100 text-sm">Kapitel</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl">300+</p>
              <p className="text-orange-100 text-sm">Seiten</p>
            </div>
          </div>
          <p className="text-lg text-orange-100">
            Alles Schritt für Schritt erklärt. Kein Vorwissen nötig.
          </p>
        </div>
      </div>
    </section>
  );
}
