// ═══════════════════════════════════════════════════════════════════════════
// ZENTRALE SEITEN-DATEN — Vertrauenssignale, Zielgruppen, Länderinfos
//
// ⚠️  PLATZHALTER-HINWEIS:
//     Alles was mit [PLATZHALTER] markiert ist oder "Mustermann"/"Musterstadt"
//     enthält, bitte vor dem Livegang durch echte Daten ersetzen.
//     Diese Datei ist die EINZIGE Stelle, an der diese Werte gepflegt werden.
// ═══════════════════════════════════════════════════════════════════════════

// [PLATZHALTER] Echte Anzahl der belieferten Schulen eintragen (nur Zahl/Text):
export const SCHOOLS_COUNT = "300";

export const YEARS = "40";

// [PLATZHALTER] Echte Kundenzitate mit echten Namen/Schulen einsetzen.
// Zitate nur mit Einverständnis der zitierten Person veröffentlichen!
export const TESTIMONIALS = [
  {
    quote: "[PLATZHALTER ZITAT 1 — z. B.: Seit wir die Pultteiler bei Schularbeiten einsetzen, ist das Thema Abschreiben bei uns kein Thema mehr. Aufbau in zwei Minuten, die Kinder akzeptieren es völlig selbstverständlich.]",
    name: "Dir. Maria Mustermann",
    role: "Direktorin",
    school: "Volksschule Musterstadt (AT)",
  },
  {
    quote: "[PLATZHALTER ZITAT 2 — z. B.: Wir nutzen die Teiler seit Jahren für alle Klassenarbeiten der Unter- und Mittelstufe. Robust, schnell aufgebaut und die Ersatzteile kommen zuverlässig.]",
    name: "OStR Max Mustermann",
    role: "Lehrer, Fachschaft Mathematik",
    school: "Gymnasium Musterstadt (DE)",
  },
  {
    quote: "[PLATZHALTER ZITAT 3 — z. B.: Für unsere schriftlichen Prüfungen mit über 200 Teilnehmenden brauchen wir eine Lösung, die in kürzester Zeit steht. Der Pultteiler leistet das seit Jahren.]",
    name: "Mag. Erika Musterfrau",
    role: "Prüfungskoordination",
    school: "Hochschule Musterstadt (AT)",
  },
  {
    quote: "[PLATZHALTER ZITAT 4 — z. B.: Einzelne Kinder mit erhöhtem Ablenkungsrisiko arbeiten mit dem Teiler deutlich ruhiger und konzentrierter — auch außerhalb von Prüfungen.]",
    name: "Petra Musterfrau",
    role: "Sonderpädagogin",
    school: "Grundschule Musterdorf (CH)",
  },
];

// Länderspezifische Liefer- & Steuerhinweise (echte Daten aus dem Bestand)
export const COUNTRY_INFO = [
  {
    code: "AT",
    flag: "🇦🇹",
    name: "Österreich",
    lines: [
      "Kauf auf Rechnung — keine Vorkasse, keine Kreditkarte",
      "E-Rechnung für Bundesschulen mit Ihrer EKG-Nummer",
      "Koffer-Sets versandkostenfrei",
    ],
  },
  {
    code: "DE",
    flag: "🇩🇪",
    name: "Deutschland",
    lines: [
      "Kauf auf Rechnung — keine Vorkasse, keine Kreditkarte",
      "Steuerfreie Lieferung mit Ihrer deutschen UID-Nummer",
      "Deutsches Bankkonto für die Zahlung vorhanden",
    ],
  },
  {
    code: "CH",
    flag: "🇨🇭",
    name: "Schweiz",
    lines: [
      "Kauf auf Rechnung — keine Vorkasse, keine Kreditkarte",
      "Steuerfreie, unverzollte Lieferung — Endpreis ohne Zollgebühren",
      "Lieferung immer inklusive",
    ],
  },
];

// Die drei Zielgruppen — genutzt von Startseite, Navigation und Zielgruppen-Seiten
export const AUDIENCES = [
  {
    id: "volksschule",
    href: "/volksschule",
    navLabel: "VOLKSSCHULE & PRIMARSTUFE",
    title: "Volksschule & Primarstufe",
    heading: "PULTTEILER FÜR DIE VOLKSSCHULE",
    teaser: "Sichtschutz für die ersten Schularbeiten — kindgerechte Höhe (50×30 cm), in zwei Minuten aufgebaut, ein Koffer pro Klasse.",
    img: "/images/klassenzimmer.png",
    imgAlt: "Pultteiler im Klassenzimmer einer Volksschule",
  },
  {
    id: "sekundarstufe",
    href: "/sekundarstufe",
    navLabel: "SEKUNDARSTUFE & GYMNASIUM",
    title: "Sekundarstufe & Gymnasium",
    teaser: "Trennwände für Schularbeiten, Klassenarbeiten und Tests ab dem 6. Schuljahr — höhere Platten (50×40 cm), robust für den Dauereinsatz.",
    heading: "PULTTEILER FÜR DIE SEKUNDARSTUFE",
    img: "/images/pultteiler-einsatz.jpg",
    imgAlt: "Pultteiler im EDV-Raum einer weiterführenden Schule",
  },
  {
    id: "hochschulen",
    href: "/hochschulen",
    navLabel: "HOCHSCHULEN & PRÜFUNGSZENTREN",
    title: "Hochschulen & Prüfungszentren",
    teaser: "Große Stückzahlen für Hörsäle und Prüfungszentren — individuelle Angebote, Referenz MedUni Innsbruck, Lieferung europaweit.",
    heading: "PULTTEILER FÜR HOCHSCHULEN & PRÜFUNGSZENTREN",
    img: "/images/meduni-innsbruck_2.jpeg",
    imgAlt: "Pultteiler im Prüfungseinsatz an der MedUni Innsbruck",
  },
];

export const CONTACT = {
  company: "Schulmittel Blaschegg",
  person: "Michael Blaschegg",
  street: "Stücklbachstraße 13",
  city: "4813 Altmünster",
  country: "Österreich",
  email: "blaschegg@traunseenet.at",
  phone1: "+43 (0) 676 935 40 33",
  phone2: "+43 (0) 699 129 613 70",
  uid: "ATU37758404",
};
