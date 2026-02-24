"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  ArrowLeft,
  Download,
  Mail,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { copy } from "../../../content/copy";

export default function CheckoutPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { product } = copy;

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !email.includes("@")) {
      setError("Bitte gib eine gültige E-Mail-Adresse ein.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        window.location.href = "/danke";
      } else {
        setError(data.error || "Etwas ist schiefgelaufen. Bitte versuche es erneut.");
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Download error:", err);
      setError("Etwas ist schiefgelaufen. Bitte versuche es erneut.");
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Übersicht
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - What you get */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Dein kostenloses Starter Kit
            </h1>

            {/* Main Product */}
            <Card variant="bordered" className="mb-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                  <Image
                    src="/images/bau/ki-bau-cover.png"
                    alt="KI & Bau E-Book"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">
                    {product.headline}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    E-Book (300+ Seiten) + Prompts + Checklisten
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-lg font-bold text-green-600">
                      Kostenlos
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      {product.pricing.original}
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* What's included */}
            <Card variant="bordered" className="bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-4">Das bekommst du:</h3>
              <div className="space-y-3">
                {[
                  "E-Book: 300+ Seiten Praxiswissen",
                  "50+ fertige Copy & Paste Prompts",
                  "Tool-Vergleichsmatrix (ChatGPT, Claude, Gemini, Grok)",
                  "5 Praxis-Checklisten zum Ausdrucken",
                  "Kompakt-Präsentation (60 Seiten)",
                  "Interaktives Flipbook (HTML5)",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>100% kostenlos</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-green-500" />
                <span>Sofort-Download</span>
              </div>
            </div>
          </div>

          {/* Right Column - Email Form */}
          <div>
            <Card variant="elevated" padding="lg">
              <div className="flex items-center gap-2 mb-6">
                <Mail className="w-5 h-5 text-orange-500" />
                <h2 className="text-xl font-bold text-gray-900">
                  Kostenlos herunterladen
                </h2>
              </div>

              <p className="text-gray-600 mb-6">
                Gib deine E-Mail-Adresse ein und erhalte sofort Zugang zum kompletten Starter Kit.
                Die Download-Links werden dir auch per E-Mail zugeschickt.
              </p>

              {/* Email Form */}
              <form onSubmit={handleDownload}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Deine E-Mail-Adresse
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="max@beispiel.de"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-gray-900"
                    required
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isLoading}
                  className="text-xl py-5"
                >
                  {isLoading ? (
                    "Wird geladen..."
                  ) : (
                    <>
                      <Download className="w-5 h-5 mr-2" />
                      Jetzt kostenlos herunterladen
                    </>
                  )}
                </Button>
              </form>

              {/* Legal */}
              <p className="text-xs text-gray-500 text-center mt-4">
                Mit dem Download akzeptierst du unsere{" "}
                <Link href="/datenschutz" className="underline hover:text-gray-700">
                  Datenschutzerklärung
                </Link>
                . Wir senden dir die Download-Links per E-Mail.
                Kein Spam, kein Abo.
              </p>

              {/* Free Badge */}
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 text-green-700">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">
                    100% kostenlos – kein Haken
                  </span>
                </div>
                <p className="text-sm text-green-600 mt-1">
                  Kein Abo, keine versteckten Kosten. Einfach herunterladen und loslegen.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
