import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "AGB | KI im Bau Starter Kit",
};

export default function AGBPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück zur Startseite
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>

        <div className="prose prose-gray max-w-none">
          <h2>§ 1 Geltungsbereich</h2>
          <p>
            (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB")
            gelten für alle Verträge, die zwischen [Ihr Name / Firmenname]
            (nachfolgend "Anbieter") und dem Kunden (nachfolgend "Käufer") über
            den Kauf digitaler Produkte geschlossen werden.
          </p>
          <p>
            (2) Maßgeblich ist die zum Zeitpunkt des Vertragsschlusses gültige
            Fassung der AGB.
          </p>
          <p>
            (3) Abweichende Bedingungen des Käufers werden nicht anerkannt, es
            sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich
            zu.
          </p>

          <h2>§ 2 Vertragsgegenstand</h2>
          <p>
            (1) Gegenstand des Vertrages ist der Verkauf digitaler Produkte,
            insbesondere E-Books, PDF-Dokumente, Vorlagen und Video-Trainings
            zum Download.
          </p>
          <p>
            (2) Die wesentlichen Merkmale der Produkte ergeben sich aus der
            jeweiligen Produktbeschreibung auf der Website.
          </p>

          <h2>§ 3 Vertragsschluss</h2>
          <p>
            (1) Die Darstellung der Produkte auf der Website stellt kein
            rechtlich bindendes Angebot, sondern eine Aufforderung zur
            Bestellung dar.
          </p>
          <p>
            (2) Der Kaufvertrag kommt zustande, indem der Käufer:
          </p>
          <ul>
            <li>das gewünschte Produkt in den Warenkorb legt,</li>
            <li>den Bestellvorgang durchläuft,</li>
            <li>die Zahlungsdaten eingibt und</li>
            <li>die Bestellung durch Klicken auf den Kaufen-Button absendet.</li>
          </ul>
          <p>
            (3) Mit Absenden der Bestellung gibt der Käufer ein verbindliches
            Angebot zum Kauf ab. Der Vertrag kommt mit der Annahme durch den
            Anbieter zustande, die durch Zusendung einer Bestellbestätigung per
            E-Mail erfolgt.
          </p>

          <h2>§ 4 Preise und Zahlung</h2>
          <p>
            (1) Alle angegebenen Preise sind Endpreise und enthalten die
            gesetzliche Umsatzsteuer, sofern nicht anders angegeben.
          </p>
          <p>
            (2) Die Zahlung erfolgt über den Zahlungsdienstleister Stripe.
            Akzeptiert werden Kreditkarten, Debitkarten, Apple Pay und Google
            Pay.
          </p>
          <p>
            (3) Die Zahlung ist sofort mit Bestellung fällig.
          </p>

          <h2>§ 5 Lieferung digitaler Produkte</h2>
          <p>
            (1) Die Lieferung der digitalen Produkte erfolgt unmittelbar nach
            Zahlungseingang durch Bereitstellung eines Download-Links per E-Mail
            sowie auf der Bestätigungsseite.
          </p>
          <p>
            (2) Der Download-Link ist für einen angemessenen Zeitraum gültig.
            Der Käufer ist verpflichtet, die Dateien nach dem Kauf
            herunterzuladen und lokal zu speichern.
          </p>
          <p>
            (3) Bei technischen Problemen mit dem Download kann sich der Käufer
            an den Kundenservice wenden.
          </p>

          <h2>§ 6 Nutzungsrechte</h2>
          <p>
            (1) Mit vollständiger Bezahlung erhält der Käufer ein einfaches,
            nicht übertragbares Nutzungsrecht an den erworbenen digitalen
            Produkten für den persönlichen Gebrauch.
          </p>
          <p>
            (2) Eine Weitergabe, Vervielfältigung, Verbreitung oder öffentliche
            Zugänglichmachung der Inhalte ist nicht gestattet.
          </p>
          <p>
            (3) Das Urheberrecht und alle sonstigen Rechte an den Produkten
            verbleiben beim Anbieter.
          </p>

          <h2>§ 7 Widerrufsrecht</h2>
          <p>
            <strong>Widerrufsbelehrung für digitale Inhalte</strong>
          </p>
          <p>
            <strong>Widerrufsrecht</strong>
            <br />
            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
            diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn
            Tage ab dem Tag des Vertragsabschlusses.
          </p>
          <p>
            Um Ihr Widerrufsrecht auszuüben, müssen Sie uns ([Ihr Name /
            Firmenname], [Adresse], [E-Mail]) mittels einer eindeutigen Erklärung
            (z.B. ein mit der Post versandter Brief oder E-Mail) über Ihren
            Entschluss, diesen Vertrag zu widerrufen, informieren.
          </p>
          <p>
            <strong>Folgen des Widerrufs</strong>
            <br />
            Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen,
            die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen
            vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über
            Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese
            Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der
            ursprünglichen Transaktion eingesetzt haben.
          </p>
          <p>
            <strong>14-Tage Geld-zurück-Garantie</strong>
            <br />
            Zusätzlich zum gesetzlichen Widerrufsrecht bieten wir eine 14-Tage
            Geld-zurück-Garantie. Wenn Sie mit dem Produkt nicht zufrieden sind,
            erstatten wir Ihnen den Kaufpreis ohne Wenn und Aber zurück. Eine
            kurze E-Mail an uns genügt.
          </p>

          <h2>§ 8 Gewährleistung</h2>
          <p>
            (1) Es gelten die gesetzlichen Gewährleistungsrechte.
          </p>
          <p>
            (2) Der Anbieter gewährleistet, dass die digitalen Produkte frei von
            Sach- und Rechtsmängeln sind und die in der Produktbeschreibung
            angegebenen Eigenschaften aufweisen.
          </p>

          <h2>§ 9 Haftung</h2>
          <p>
            (1) Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung
            des Lebens, des Körpers oder der Gesundheit sowie für Vorsatz und
            grobe Fahrlässigkeit.
          </p>
          <p>
            (2) Im Übrigen ist die Haftung auf den vertragstypischen,
            vorhersehbaren Schaden begrenzt.
          </p>
          <p>
            (3) Die Haftung für den Verlust von Daten ist auf den typischen
            Wiederherstellungsaufwand beschränkt, der bei regelmäßiger und
            gefahrentsprechender Anfertigung von Sicherungskopien eingetreten
            wäre.
          </p>

          <h2>§ 10 Datenschutz</h2>
          <p>
            Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer
            Datenschutzerklärung, die unter{" "}
            <Link
              href="/datenschutz"
              className="text-orange-600 hover:text-orange-700"
            >
              /datenschutz
            </Link>{" "}
            abrufbar ist.
          </p>

          <h2>§ 11 Schlussbestimmungen</h2>
          <p>
            (1) Es gilt das Recht der Bundesrepublik Deutschland unter
            Ausschluss des UN-Kaufrechts.
          </p>
          <p>
            (2) Ist der Käufer Kaufmann, juristische Person des öffentlichen
            Rechts oder öffentlich-rechtliches Sondervermögen, ist
            Gerichtsstand für alle Streitigkeiten aus Vertragsverhältnissen
            zwischen den Parteien der Sitz des Anbieters.
          </p>
          <p>
            (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
            werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
          </p>

          <p className="text-sm text-gray-500 mt-8">
            Stand: Januar 2024
          </p>
        </div>
      </div>
    </main>
  );
}
