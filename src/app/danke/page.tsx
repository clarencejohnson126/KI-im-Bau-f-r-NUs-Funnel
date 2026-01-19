"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { trackPurchase } from "@/lib/meta-pixel";
import Link from "next/link";
import {
  CheckCircle2,
  Download,
  Mail,
  ArrowRight,
  FileText,
  BookOpen,
  Grid3X3,
  CheckSquare,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { copy } from "../../../content/copy";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { thankYou } = copy;
  const hasFiredPurchase = useRef(false);

  // Fire Meta Pixel Purchase event once on page load
  useEffect(() => {
    if (!hasFiredPurchase.current && sessionId) {
      trackPurchase({
        content_name: "KI im Bau Starter Kit",
        currency: "EUR",
        // Value is not available client-side, Meta will still track the conversion
      });
      hasFiredPurchase.current = true;
    }
  }, [sessionId]);

  const downloadItems = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "E-Book: KI im Bau für Nachunternehmer (300+ Seiten)",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Interaktives Flipbook (HTML5 mit Animation)",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Kompakt-Präsentation (60 Seiten)",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Prompt-Sammlung (50+ Prompts)",
    },
    {
      icon: <Grid3X3 className="w-5 h-5" />,
      title: "Tool-Vergleichsmatrix",
    },
    {
      icon: <CheckSquare className="w-5 h-5" />,
      title: "5 Checklisten zum Ausdrucken",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {thankYou.headline}
          </h1>
          <p className="text-xl text-gray-600">{thankYou.subheadline}</p>
        </div>

        {/* Downloads Section */}
        <Card variant="elevated" padding="lg" className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Download className="w-6 h-6 text-orange-500" />
            <h2 className="text-xl font-bold text-gray-900">
              {thankYou.downloads.headline}
            </h2>
          </div>

          <div className="space-y-3 mb-6">
            {downloadItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                  {item.icon}
                </div>
                <span className="font-medium text-gray-900">{item.title}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <a href="/downloads/KI-im-Bau-Starter-Kit.zip" download className="block">
              <Button variant="primary" size="lg" fullWidth>
                <Download className="w-5 h-5 mr-2" />
                Starter Kit herunterladen (PDF, Prompts, Checklisten)
              </Button>
            </a>
            <a href="https://drive.google.com/file/d/1Uag-CD5k-SFLFBfFmgLfHj-F_sjJ3BYO/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="secondary" size="lg" fullWidth>
                <Layers className="w-5 h-5 mr-2" />
                Interaktives Flipbook herunterladen (HTML5)
              </Button>
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-4 text-center">
            Die Download-Links wurden auch an deine E-Mail gesendet.
          </p>
        </Card>

        {/* Next Steps */}
        <Card variant="bordered" className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {thankYou.nextSteps.headline}
          </h2>

          <div className="space-y-6">
            {thankYou.nextSteps.steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Support */}
        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <Mail className="w-8 h-8 text-gray-400 mx-auto mb-3" />
          <h3 className="font-semibold text-gray-900 mb-2">
            {thankYou.support.headline}
          </h3>
          <p className="text-gray-600 text-sm">{thankYou.support.description}</p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
          >
            Zurück zur Startseite
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function DankePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
          <div className="text-gray-600">Wird geladen...</div>
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
