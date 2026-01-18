# KI im Bau Starter Kit - Sales Funnel

Ein kompletter Sales Funnel für das digitale Produkt "KI im Bau Starter Kit" - gebaut mit Next.js 14+, Tailwind CSS und Stripe.

## Produkt

- **E-Book** (190+ Seiten, 21 Kapitel)
- **Prompt-Sammlung** (50+ fertige Prompts)
- **Tool-Vergleichsmatrix** (Claude, ChatGPT, Gemini, Grok)
- **5 Checklisten** (zum Ausdrucken)

**Preis:** 47 €

### Upsells
- **Bump Offer** (+19 €): Premium Vorlagen-Paket
- **Post-Purchase Upsell** (+97 €): KI-Kickstart Video-Training

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Payment:** Stripe Checkout
- **Deployment:** Vercel-ready
- **Fonts:** Inter

## Quick Start

### 1. Installation

```bash
cd funnel-nu-bau
npm install
```

### 2. Environment Variables

Kopiere `.env.example` zu `.env.local` und füge deine Stripe Keys ein:

```bash
cp .env.example .env.local
```

Dann bearbeite `.env.local`:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 3. Entwicklung starten

```bash
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

## Projektstruktur

```
funnel-nu-bau/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing Page
│   │   ├── checkout/page.tsx     # Checkout mit Bump Offer
│   │   ├── upsell/page.tsx       # Post-Purchase Upsell
│   │   ├── danke/page.tsx        # Thank You mit Downloads
│   │   ├── impressum/page.tsx    # Impressum
│   │   ├── datenschutz/page.tsx  # Datenschutzerklärung
│   │   ├── agb/page.tsx          # AGB
│   │   └── api/stripe/
│   │       ├── checkout/route.ts # Stripe Checkout Session
│   │       └── webhook/route.ts  # Stripe Webhook Handler
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── SolutionBridge.tsx
│   │   ├── ProductReveal.tsx
│   │   ├── Benefits.tsx
│   │   ├── Author.tsx
│   │   ├── Chapters.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── Guarantee.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── Footer.tsx
│   │   ├── StickyMobileCTA.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Accordion.tsx
│   │       └── PriceBox.tsx
│   ├── lib/
│   │   └── stripe.ts
│   └── styles/
│       └── globals.css
├── content/
│   ├── copy.ts                   # Alle Verkaufstexte
│   ├── faq.ts                    # FAQ Inhalte
│   └── testimonials.ts           # Testimonials
└── public/
    └── images/
```

## Stripe Setup

### 1. Produkte in Stripe anlegen

Erstelle folgende Produkte im [Stripe Dashboard](https://dashboard.stripe.com/products):

1. **KI im Bau Starter Kit** - 47,00 €
2. **Premium Vorlagen-Paket** - 19,00 €
3. **KI-Kickstart Video-Training** - 97,00 €

### 2. Webhook einrichten

1. Gehe zu Stripe Dashboard → Developers → Webhooks
2. Add endpoint: `https://deine-domain.de/api/stripe/webhook`
3. Events: `checkout.session.completed`, `payment_intent.succeeded`
4. Kopiere den Webhook Secret in `.env.local`

### 3. Testmodus

Verwende für Tests die Stripe Test-Karten:
- **Erfolgreiche Zahlung:** 4242 4242 4242 4242
- **Ablehnung:** 4000 0000 0000 0002

## Deployment (Vercel)

### 1. Repository erstellen

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <dein-repo>
git push -u origin main
```

### 2. Vercel Projekt erstellen

1. Gehe zu [vercel.com](https://vercel.com)
2. Importiere das Repository
3. Füge die Environment Variables hinzu
4. Deploy!

### 3. Webhook URL aktualisieren

Ändere den Stripe Webhook auf deine Produktions-URL:
`https://deine-domain.vercel.app/api/stripe/webhook`

## Anpassungen

### Texte ändern

Alle Verkaufstexte sind in `content/copy.ts` zentral gespeichert:

```typescript
export const copy = {
  hero: {
    headline: "40% deiner Arbeitszeit geht für Scheiß drauf",
    // ...
  },
  // ...
};
```

### Farben anpassen

Das Farbschema ist in `tailwind.config.ts` definiert:

```typescript
colors: {
  orange: { /* Primary CTA */ },
  gray: { /* Neutral */ },
}
```

### Preise ändern

Preise werden in `src/lib/stripe.ts` und `content/copy.ts` definiert.

## Rechtliche Seiten

**Wichtig:** Die rechtlichen Seiten (Impressum, Datenschutz, AGB) enthalten Platzhalter.
Ersetze `[Ihr Name / Firmenname]`, `[Adresse]`, etc. mit deinen echten Daten.

## Checklist vor Go-Live

- [ ] Stripe Produkte anlegen
- [ ] Environment Variables setzen
- [ ] Rechtliche Seiten ausfüllen (Impressum, Datenschutz, AGB)
- [ ] Testimonials mit echten Kundenstimmen ersetzen
- [ ] Produktbilder hinzufügen
- [ ] Download-Dateien hochladen
- [ ] Webhook einrichten und testen
- [ ] Testbestellung durchführen
- [ ] Mobile Ansicht testen
- [ ] SEO Meta Tags prüfen

## Support

Bei Fragen: support@ki-im-bau.de

---

Erstellt für das KI im Bau Projekt.
