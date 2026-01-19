import type { Metadata } from "next";
import "@/styles/globals.css";
import { MetaPixel } from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: "KI im Bau Starter Kit | Für Nachunternehmer",
  description:
    "Das komplette Starter Kit für Nachunternehmer: E-Book (300+ Seiten), 50+ Prompts, Tool-Vergleich & Checklisten. Spare 40% deiner Arbeitszeit mit KI.",
  keywords: [
    "KI",
    "Bau",
    "Nachunternehmer",
    "Subunternehmer",
    "Ausschreibung",
    "Angebot",
    "E-Book",
    "ChatGPT",
    "Baubranche",
  ],
  authors: [{ name: "Clarence Johnson" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "KI im Bau Starter Kit | Für Nachunternehmer",
    description:
      "Das komplette Starter Kit für Nachunternehmer: E-Book (300+ Seiten), 50+ Prompts, Tool-Vergleich & Checklisten.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <MetaPixel />
        {children}
        {/* Subtle Noise Overlay for Texture */}
        <div className="noise-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
