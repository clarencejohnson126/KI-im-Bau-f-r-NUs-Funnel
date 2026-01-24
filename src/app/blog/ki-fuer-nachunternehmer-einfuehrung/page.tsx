import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { TLDRBox } from "@/components/blog/TLDRBox";
import { BlogImage } from "@/components/blog/BlogImage";
import { AnimatedCounter } from "@/components/blog/AnimatedCounter";
import { StaggeredList } from "@/components/blog/StaggeredList";
import { FAQSection } from "@/components/blog/FAQSection";

export const metadata: Metadata = {
  title: "KI für Nachunternehmer: Warum du 2026 nicht mehr drumrum kommst | KI-Bauunternehmer",
  description:
    "Die Baubranche hat Digitalisierung verschlafen. Jetzt kommt KI. Hier ist, warum das für Nachunternehmer eine einmalige Chance ist - und was passiert, wenn du sie verpasst.",
  keywords: [
    "KI Nachunternehmer",
    "KI Baubranche",
    "Automatisierung Bau",
    "ChatGPT Bau",
    "Digitalisierung Handwerk",
  ],
  openGraph: {
    title: "KI für Nachunternehmer: Warum du 2026 nicht mehr drumrum kommst",
    description:
      "Die Baubranche hat Digitalisierung verschlafen. Jetzt kommt KI. Hier ist, warum das für Nachunternehmer eine einmalige Chance ist.",
    type: "article",
    locale: "de_DE",
    publishedTime: "2026-01-24",
    authors: ["Clarence Johnson"],
    images: ["/Blog/Artikel 1/header.png"],
  },
  alternates: {
    canonical: "https://ki-bauunternehmer.de/blog/ki-fuer-nachunternehmer-einfuehrung",
  },
};

const faqItems = [
  {
    question: "Brauche ich technisches Wissen für KI?",
    answer:
      "Nein. Wenn du WhatsApp bedienen kannst, kannst du ChatGPT bedienen. Es ist ein Textfeld, in das du reinschreibst, was du brauchst. Die KI antwortet. Fertig.",
  },
  {
    question: "Was kostet KI für Nachunternehmer?",
    answer:
      "ChatGPT Plus oder Claude Pro kosten je 20€ im Monat. Damit deckst du 90% der Anwendungsfälle ab. Rechne das gegen die Zeit, die du sparst - das amortisiert sich am ersten Tag.",
  },
  {
    question: "Ersetzt KI meine Mitarbeiter?",
    answer:
      "Nein. KI ersetzt keine Handwerker auf der Baustelle. Sie ersetzt den Papierkram danach. Deine Leute können das tun, wofür du sie bezahlst: arbeiten. Nicht dokumentieren.",
  },
  {
    question: "Ist das legal? Was ist mit Datenschutz?",
    answer:
      "Ja, es ist legal. Bei sensiblen Kundendaten solltest du die Enterprise-Versionen nutzen (die speichern nichts). Für Angebote, Aufmaße und interne Prozesse ist die normale Version kein Problem.",
  },
  {
    question: "Wie lange dauert es, KI zu lernen?",
    answer:
      "Eine Woche für die Basics. Einen Monat, bis es sitzt. Die meisten Nachunternehmer, mit denen ich arbeite, haben nach 2-3 Wochen ihre ersten Workflows automatisiert.",
  },
];

// JSON-LD for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "KI für Nachunternehmer: Warum du 2026 nicht mehr drumrum kommst",
  description:
    "Die Baubranche hat Digitalisierung verschlafen. Jetzt kommt KI. Hier ist, warum das für Nachunternehmer eine einmalige Chance ist.",
  author: {
    "@type": "Person",
    name: "Clarence Johnson",
  },
  datePublished: "2026-01-24",
  publisher: {
    "@type": "Organization",
    name: "KI-Bauunternehmer",
    url: "https://ki-bauunternehmer.de",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://ki-bauunternehmer.de/blog/ki-fuer-nachunternehmer-einfuehrung",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="min-h-screen">
        {/* Header with Parallax Image */}
        <BlogHeader
          title="KI FÜR NACHUNTERNEHMER: WARUM DU 2026 NICHT MEHR DRUMRUM KOMMST"
          description="Die Baubranche hat Digitalisierung verschlafen. Jetzt kommt KI. Hier ist, warum das für Nachunternehmer eine einmalige Chance ist - und was passiert, wenn du sie verpasst."
          date="2026-01-24"
          author="Clarence Johnson"
          readingTime="8 Min. Lesezeit"
          category="KI & Automatisierung"
          headerImage="/Blog/Artikel 1/header.png"
          headerImageAlt="Deutscher Bauunternehmer mit KI-Interface auf einer Baustelle"
        />

        {/* TL;DR Box */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <TLDRBox>
            KI ist kein Hype - es ist ein Werkzeug. Für Nachunternehmer bedeutet das:
            Angebote in 20 statt 120 Minuten, Aufmaße ohne Wochenend-Schichten,
            automatische Dokumentation. Wer jetzt anfängt, hat in 12 Monaten einen
            Vorsprung, den die Konkurrenz nicht mehr aufholt.
          </TLDRBox>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Intro */}
          <section className="prose-section">
            <p className="text-lg text-concrete-300 leading-relaxed mb-6">
              Ich war 13 Jahre in der Baubranche. Trockenbau, Elektro, die ganze
              Palette. Und ich habe eines gelernt: Die Branche liebt es, Dinge zu
              ignorieren, bis es zu spät ist.
            </p>
            <p className="text-lg text-concrete-300 leading-relaxed mb-6">
              Digitalisierung? <em>"Brauchen wir nicht, läuft doch."</em>
            </p>
            <p className="text-lg text-concrete-300 leading-relaxed mb-6">
              Dann kam Corona und plötzlich war jeder am Scramble.
            </p>
            <p className="text-lg text-concrete-300 leading-relaxed mb-8">
              Jetzt passiert das Gleiche mit KI. Nur schneller. Und die
              Konsequenzen sind härter.
            </p>
          </section>

          {/* Die unbequeme Wahrheit */}
          <section className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl text-white mb-6">
              DIE UNBEQUEME WAHRHEIT
            </h2>

            <p className="text-lg text-concrete-300 leading-relaxed mb-6">
              Du verbringst{" "}
              <span className="text-orange-400 font-bold">
                <AnimatedCounter end={40} suffix="-" className="inline" />
                <AnimatedCounter end={60} suffix="%" className="inline" />
              </span>{" "}
              deiner Zeit mit Verwaltung. Nicht auf der Baustelle. Nicht mit
              Kunden. Mit Papierkram.
            </p>

            {/* Chart Image */}
            <BlogImage
              src="/Blog/Artikel 1/chart.png"
              alt="Kreisdiagramm: 45% Verwaltung, 35% Eigentliche Arbeit, 20% Koordination"
              caption="Arbeitstag eines deutschen Subunternehmers - 45% gehen für Verwaltung drauf"
            />

            <ul className="space-y-2 text-concrete-300 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <span>Angebote schreiben</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <span>Aufmaße dokumentieren</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <span>E-Mails beantworten</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <span>Nachträge formulieren</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <span>Rechnungen erstellen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <span>Den ganzen Mist, den der GU von dir will</span>
              </li>
            </ul>

            <p className="text-lg text-concrete-300 leading-relaxed mb-6">
              Das ist keine Vermutung. Das sind Zahlen aus Gesprächen mit über 50
              Nachunternehmern in den letzten zwei Jahren.
            </p>

            <p className="text-xl text-white font-semibold mb-6">
              40-60% deiner Arbeitszeit. Für Bürokram.
            </p>

            <p className="text-lg text-concrete-300 leading-relaxed">
              Und während du Freitagabend Excel-Tabellen ausfüllst, sitzt deine
              Familie ohne dich am Tisch.
            </p>
          </section>

          {/* Was KI wirklich ist */}
          <section className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl text-white mb-6">
              WAS KI WIRKLICH IST (UND WAS NICHT)
            </h2>

            <p className="text-lg text-concrete-300 leading-relaxed mb-6">
              Vergiss die Terminator-Filme. Vergiss die Tech-Bros auf LinkedIn,
              die von "Revolution" faseln.
            </p>

            <p className="text-lg text-concrete-300 leading-relaxed mb-6">
              KI ist ein Werkzeug. Wie eine Bohrmaschine. Nur halt für Kopfarbeit.
            </p>

            <p className="text-lg text-concrete-300 leading-relaxed mb-8">
              Du gibst ihr eine Aufgabe. Sie erledigt sie. Schneller und oft
              besser als du es von Hand könntest.
            </p>

            {/* Workflow Image */}
            <BlogImage
              src="/Blog/Artikel 1/workflow.png"
              alt="KI-Workflow: Problem → Input → Processing → Output"
              caption="So funktioniert KI in der Praxis: Chaos rein, Struktur raus"
            />

            {/* Was KI kann / Was KI nicht kann */}
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <h3 className="flex items-center gap-2 text-green-400 font-bold mb-4">
                  <Check className="w-5 h-5" />
                  Was KI kann
                </h3>
                <StaggeredList
                  items={[
                    "Deine chaotischen Notizen in saubere Dokumente verwandeln",
                    "Angebote aus LVs extrahieren und vorstrukturieren",
                    "E-Mails formulieren, die nicht nach Grundschule klingen",
                    "Nachträge rechtssicher begründen",
                    "Stundenzettel auswerten und zusammenfassen",
                  ]}
                  className="space-y-2"
                  itemClassName="text-concrete-300"
                />
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <h3 className="flex items-center gap-2 text-red-400 font-bold mb-4">
                  <X className="w-5 h-5" />
                  Was KI nicht kann
                </h3>
                <StaggeredList
                  items={[
                    "Auf der Baustelle arbeiten",
                    "Entscheidungen treffen (das musst du)",
                    "Beziehungen zu Kunden aufbauen",
                    "Denken (sie simuliert es nur, und zwar verdammt gut)",
                  ]}
                  className="space-y-2"
                  itemClassName="text-concrete-300"
                  staggerDelay={0.15}
                />
              </div>
            </div>
          </section>

          {/* Konkrete Zahlen */}
          <section className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl text-white mb-6">
              KONKRETE ZAHLEN, KEINE VERSPRECHEN
            </h2>

            <p className="text-lg text-concrete-300 leading-relaxed mb-8">
              Hier ist, was Nachunternehmer mir berichten, nachdem sie KI drei
              Monate genutzt haben:
            </p>

            <div className="space-y-6">
              {/* Angebote */}
              <div className="bg-concrete-900/50 border border-concrete-800 rounded-xl p-6">
                <h3 className="text-white font-bold text-lg mb-3">Angebote:</h3>
                <div className="grid grid-cols-2 gap-4 text-concrete-300">
                  <div>
                    <span className="text-concrete-500">Vorher:</span> 2-3 Stunden
                  </div>
                  <div>
                    <span className="text-concrete-500">Nachher:</span>{" "}
                    <span className="text-orange-400">30-45 Minuten</span>
                  </div>
                </div>
                <div className="mt-2 text-green-400 font-semibold">
                  Ersparnis: ~70%
                </div>
              </div>

              {/* Aufmaße */}
              <div className="bg-concrete-900/50 border border-concrete-800 rounded-xl p-6">
                <h3 className="text-white font-bold text-lg mb-3">
                  Aufmaße dokumentieren:
                </h3>
                <div className="grid grid-cols-2 gap-4 text-concrete-300">
                  <div>
                    <span className="text-concrete-500">Vorher:</span> 45 Minuten
                  </div>
                  <div>
                    <span className="text-concrete-500">Nachher:</span>{" "}
                    <span className="text-orange-400">15 Minuten</span>
                  </div>
                </div>
                <div className="mt-2 text-green-400 font-semibold">
                  Ersparnis: ~65%
                </div>
              </div>

              {/* Nachträge */}
              <div className="bg-concrete-900/50 border border-concrete-800 rounded-xl p-6">
                <h3 className="text-white font-bold text-lg mb-3">Nachträge:</h3>
                <div className="grid grid-cols-2 gap-4 text-concrete-300">
                  <div>
                    <span className="text-concrete-500">Vorher:</span> "Ach, lass
                    gut sein"
                  </div>
                  <div>
                    <span className="text-concrete-500">Nachher:</span>{" "}
                    <span className="text-orange-400">15 Min fertig</span>
                  </div>
                </div>
                <div className="mt-2 text-green-400 font-semibold">
                  Ergebnis:{" "}
                  <AnimatedCounter end={3500} prefix="+" suffix="€" /> mehr auf dem
                  Konto
                </div>
              </div>
            </div>
          </section>

          {/* Warum gerade jetzt */}
          <section className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl text-white mb-6">
              WARUM GERADE JETZT?
            </h2>

            <p className="text-lg text-concrete-300 leading-relaxed mb-4">
              2023 war ChatGPT noch ein Spielzeug. Lustig, aber nicht zuverlässig
              genug für echte Arbeit.
            </p>
            <p className="text-lg text-concrete-300 leading-relaxed mb-4">
              2024 wurde es brauchbar. Die Fehlerquote sank. Die Geschwindigkeit
              stieg.
            </p>
            <p className="text-lg text-concrete-300 leading-relaxed mb-6">
              2026? Die Tools sind ausgereift. Sie verstehen Kontext. Sie machen
              weniger Fehler als der durchschnittliche Bürokaufmann.
            </p>

            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 mb-6">
              <p className="text-xl text-white font-bold">
                Das Fenster ist jetzt.
              </p>
            </div>

            <p className="text-lg text-concrete-300 leading-relaxed">
              In zwei Jahren wird jeder Nachunternehmer KI nutzen - oder er wird
              nicht mehr Nachunternehmer sein. Die Margen sind zu dünn, der
              Wettbewerb zu hart.
            </p>
            <p className="text-lg text-white font-semibold mt-4">
              Wer jetzt anfängt, hat einen Vorsprung. Wer wartet, spielt
              Aufholjagd.
            </p>
          </section>

          {/* Die drei größten Fehler */}
          <section className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl text-white mb-6">
              DIE DREI GRÖSSTEN FEHLER, DIE ICH SEHE
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl text-orange-400 font-bold mb-3">
                  Fehler 1: "Ich probier das mal schnell aus"
                </h3>
                <p className="text-concrete-300 leading-relaxed mb-2">
                  Du öffnest ChatGPT, tippst "Schreib mir ein Angebot", bekommst
                  Müll zurück und denkst: "Taugt nichts."
                </p>
                <p className="text-concrete-300 leading-relaxed">
                  <strong className="text-white">Falsch.</strong> KI ist wie ein
                  neuer Mitarbeiter. Du musst ihr sagen, was du willst. Genau. Mit
                  Kontext. Mit Beispielen.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-orange-400 font-bold mb-3">
                  Fehler 2: "Das ersetzt mein Denken"
                </h3>
                <p className="text-concrete-300 leading-relaxed">
                  KI macht keine Entscheidungen für dich. Sie liefert Entwürfe. Du
                  prüfst. Du korrigierst. Du unterschreibst. Wer blind übernimmt,
                  was die KI ausspuckt, fliegt auf die Schnauze. Garantiert.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-orange-400 font-bold mb-3">
                  Fehler 3: "Ich warte, bis es einfacher wird"
                </h3>
                <p className="text-concrete-300 leading-relaxed">
                  Es wird nicht einfacher. Es wird nur voller. Wer heute anfängt,
                  lernt in Ruhe. Wer in zwei Jahren anfängt, lernt unter Druck.
                </p>
              </div>
            </div>
          </section>

          {/* Die Entscheidung */}
          <section className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl text-white mb-6">
              DIE ENTSCHEIDUNG LIEGT BEI DIR
            </h2>

            <p className="text-lg text-concrete-300 leading-relaxed mb-4">
              Du kannst diesen Artikel schließen und weitermachen wie bisher.
              Freitagabend Excel, Samstag Nachträge, Sonntag Angebote.
            </p>
            <p className="text-lg text-concrete-300 leading-relaxed mb-6">
              Oder du probierst es aus. 20€ im Monat. Eine Stunde Einarbeitung.
              Und dann schauen wir, ob sich dein Feierabend nach vorne verschiebt.
            </p>
            <p className="text-xl text-white font-semibold">
              Die Baubranche hat Digitalisierung verschlafen. KI ist die zweite
              Chance.
            </p>
            <p className="text-xl text-orange-400 font-bold mt-2">
              Diesmal würde ich aufwachen.
            </p>
          </section>

          {/* FAQ Section */}
          <FAQSection items={faqItems} />

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-concrete-800">
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/30 rounded-2xl p-8 text-center">
              <h2 className="font-display text-2xl md:text-3xl text-white mb-4">
                BEREIT FÜR DEN KOMPLETTEN WERKZEUGKASTEN?
              </h2>
              <p className="text-concrete-300 mb-8 max-w-xl mx-auto">
                Das KI im Bau Starter Kit enthält 50+ fertige Prompts, die du
                sofort einsetzen kannst. Plus 300 Seiten E-Book, Tool-Vergleiche
                und Checklisten.
              </p>
              <Link
                href="/checkout"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
              >
                Starter Kit ansehen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>

          {/* Next Article Teaser */}
          <section className="mt-12">
            <p className="text-concrete-500 text-sm mb-2">Nächster Artikel:</p>
            <Link
              href="/blog/angebote-schneller-erstellen-ki"
              className="group block bg-concrete-900/50 border border-concrete-800 hover:border-orange-500/50 rounded-xl p-6 transition-colors"
            >
              <h3 className="text-white font-bold text-lg group-hover:text-orange-400 transition-colors">
                Angebote schneller erstellen: Wie KI dir den Freitagabend zurückgibt
              </h3>
              <p className="text-concrete-400 mt-2">
                2-3 Stunden pro Angebot? Mit KI sind es 30 Minuten.
              </p>
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}
