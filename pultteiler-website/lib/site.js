// ═══════════════════════════════════════════════════════════════════════════
// ZENTRALE SEITEN-DATEN — Vertrauenssignale, Zielgruppen, Länderinfos
//
// ⚠️  PLATZHALTER-HINWEIS:
//     Alles was mit [PLATZHALTER] markiert ist oder "Mustermann"/"Musterstadt"
//     enthält, bitte vor dem Livegang durch echte Daten ersetzen.
//     Diese Datei ist die EINZIGE Stelle, an der diese Werte gepflegt werden.
// ═══════════════════════════════════════════════════════════════════════════

// Belegbar über Rechnungen — bewusst ohne exakte Zahl formuliert:
export const SCHOOLS_TEXT = "Mehrere hundert Schulen in Österreich, Deutschland und der Schweiz";
export const SCHOOLS_TEXT_SHORT = "Mehrere hundert Schulen in AT, DE & CH";

export const YEARS = "40";

// Kundenzitate: aktuell leer — die Zitat-Sektion auf der Startseite blendet
// sich automatisch aus, solange hier keine Einträge stehen.
// Echte (auch anonyme) Zitate später einfach so eintragen:
//   {
//     quote: "Wortlaut des Zitats …",
//     role: "Direktorin",                       // Funktion
//     school: "Volksschule in Oberösterreich",  // Schultyp + Region/Land
//     name: "",                                 // optional — leer lassen für anonym
//   },
// Wichtig: Nur echte Zitate mit Einverständnis der zitierten Person verwenden.
export const TESTIMONIALS = [];

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
