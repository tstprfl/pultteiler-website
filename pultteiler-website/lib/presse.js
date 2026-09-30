// Medienberichte, in deren Fotos Pultteiler bei der Zentralmatura zu sehen sind.
// Genutzt vom Startseiten-Abschnitt „Zu sehen bei“ (components/PressStrip.jsx), DE und EN.
// Wichtig: In keinem dieser Berichte wird Pultteiler genannt, das Produkt ist nur im Foto zu sehen.
// Deshalb keine Formulierung wie „bekannt aus“ und keine Medienlogos ohne schriftliche Freigabe.
// Liegt eine Freigabe vor: Logo nach public/images legen und hier im Feld `logo` eintragen.
export const PRESSE = [
  {
    id: "orf",
    name: "ORF",
    logo: null,
    articles: [
      { date: "2024-06-05", label: { de: "News", en: "News" }, title: "VWA-Pflicht: Abschaffung „geht an Problem vorbei“", url: "https://orf.at/stories/3359744/" },
      { date: "2026-05-05", label: { de: "Österreich", en: "Austria" }, title: "Auftakt zur Zentralmatura mit Deutsch", url: "https://oesterreich.orf.at/stories/3352760/" },
      { date: "2026-05-05", label: { de: "Tirol", en: "Tyrol" }, title: "Zentralmatura startet mit Deutsch", url: "https://tirol.orf.at/stories/3352847/" },
    ],
  },
  {
    id: "ooen",
    name: "OÖNachrichten",
    logo: null,
    articles: [
      { date: "2017-05-06", title: "Lernen in letzter Sekunde für Matura: „Gehirn überlisten“", url: "https://www.nachrichten.at/oberoesterreich/lernen-in-letzter-sekunde-fuer-matura-gehirn-ueberlisten;art4,2559274" },
      { date: "2017-05-30", title: "Zentralmatura: Weniger Fünfer in den Berufsbildenden Schulen", url: "https://www.nachrichten.at/oberoesterreich/zentralmatura-weniger-fuenfer-in-den-berufsbildenden-schulen;art4,2580368" },
      { date: "2018-05-29", title: "Ist die Mathematik-Zentralmatura zu schwierig?", url: "https://www.nachrichten.at/oberoesterreich/ist-die-mathematik-zentralmatura-zu-schwierig;art4,2908466" },
    ],
  },
  {
    id: "noen",
    name: "NÖN",
    logo: null,
    articles: [
      { date: "2026-05-04", title: "Für 7.600 NÖ-Jugendliche startet morgen die Zentralmatura", url: "https://www.noen.at/niederoesterreich/politik/reife-und-diplompruefung-fuer-7-600-noe-jugendliche-startet-morgen-die-zentralmatura-521292932" },
    ],
  },
  {
    id: "salzburg24",
    name: "Salzburg24",
    logo: null,
    articles: [
      { date: "2026-05-05", title: "Matura-Startschuss für 3.000 junge Salzburger", url: "https://www.salzburg24.at/news/salzburg/matura-startschuss-fuer-3000-junge-salzburger-art-324780" },
    ],
  },
  {
    id: "vienna",
    name: "VIENNA.AT",
    logo: null,
    articles: [
      { date: "2025-02-19", title: "Start der Zentralmatura 2026 und 2027 jeweils am 5. Mai", url: "https://www.vienna.at/start-of-the-central-matura-2026-and-2027-on-may/9225808" },
    ],
  },
];

// Medien als Aufzählung, z. B. „ORF, OÖNachrichten, NÖN, Salzburg24 und VIENNA.AT“ (für die Hero-Zeile)
export function presseNamen(lang = "de") {
  const n = PRESSE.map((m) => m.name);
  return `${n.slice(0, -1).join(", ")} ${lang === "en" ? "and" : "und"} ${n[n.length - 1]}`;
}

export const PRESSE_T = {
  de: {
    overline: "Zu sehen bei",
    title: "Pultteiler in Berichten zur Zentralmatura",
    sub: "Auf den Fotos dieser Berichte stehen Pultteiler auf den Prüfungstischen, 2017 bis 2026.",
    note: "Die Links führen zu den jeweiligen Medien.",
    open: "Bericht öffnen",
    hero: `Bei der Zentralmatura im Einsatz: zu sehen bei ${presseNamen("de")}`,
  },
  en: {
    overline: "As seen in",
    title: "Pultteiler in reports on the Matura exams",
    sub: "The photos in these reports show Pultteiler dividers on the exam desks, 2017 to 2026.",
    note: "The links open the respective media sites.",
    open: "Open report",
    hero: `In use at Austria's Matura exams: as seen in ${presseNamen("en")}`,
  },
};

const MONTHS = {
  de: ["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
};

// Deterministische Datumsausgabe (gleich auf Server und Client), z. B. „6. Mai 2017“ / „6 May 2017“
export function formatDate(iso, lang = "de") {
  const [y, m, d] = iso.split("-").map(Number);
  return lang === "en" ? `${d} ${MONTHS.en[m - 1]} ${y}` : `${d}. ${MONTHS.de[m - 1]} ${y}`;
}
