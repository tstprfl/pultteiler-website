// Englische Version (International). AGB und Datenschutz als unverbindliche Übersetzung, Impressum nur deutsch.
// Paare deutsch ↔ englisch — genutzt von Sprachumschalter, hreflang-Angaben und Sitemap.
// Neue englische Seite? Hier eintragen UND unter app/en/<pfad>/page.jsx anlegen.
export const PAGE_PAIRS = [
  { de: "/", en: "/en" },
  { de: "/volksschule", en: "/en/primary-schools" },
  { de: "/sekundarstufe", en: "/en/secondary-schools" },
  { de: "/hochschulen", en: "/en/universities" },
  { de: "/produkte", en: "/en/products" },
  { de: "/angebot", en: "/en/quote" },
  { de: "/ratgeber", en: "/en/guide" },
  { de: "/ratgeber/sichtschutz-klassenarbeit", en: "/en/guide/privacy-screens-for-exams" },
  { de: "/ratgeber/trennwand-schultisch-pruefung", en: "/en/guide/desk-dividers-for-exams" },
  { de: "/ratgeber/abschreiben-verhindern-schularbeit", en: "/en/guide/prevent-cheating-in-exams" },
  { de: "/ratgeber/reizarmer-arbeitsplatz-schule", en: "/en/guide/low-distraction-workspace" },
  { de: "/anleitung", en: "/en/how-it-works" },
  { de: "/galerie", en: "/en/gallery" },
  { de: "/ueber-uns", en: "/en/about" },
  { de: "/versand", en: "/en/shipping" },
  { de: "/kontakt", en: "/en/contact" },
  { de: "/agb", en: "/en/terms" },
  { de: "/datenschutz", en: "/en/privacy" },
];

export const EN_START = "/en";

export const isEnPath = (pathname = "") => pathname === "/en" || pathname.startsWith("/en/");

// Ziel des Sprachumschalters: passende Seite der anderen Sprache, sonst deren Startseite
export function switchTarget(pathname = "") {
  if (isEnPath(pathname)) return PAGE_PAIRS.find((p) => p.en === pathname)?.de || "/";
  return PAGE_PAIRS.find((p) => p.de === pathname)?.en || EN_START;
}

// alternates für die Metadaten einer Seite (canonical + hreflang de/en/x-default)
export function alternatesFor(path) {
  const pair = PAGE_PAIRS.find((p) => p.de === path || p.en === path);
  return {
    canonical: path,
    languages: { de: pair.de, en: pair.en, "x-default": pair.de },
  };
}

export const NAV_EN = [
  { id: "home", label: "HOME", href: "/en" },
  {
    id: "school",
    label: "FOR YOUR SCHOOL",
    children: [
      { id: "primary", label: "PRIMARY SCHOOLS", href: "/en/primary-schools" },
      { id: "secondary", label: "SECONDARY SCHOOLS", href: "/en/secondary-schools" },
      { id: "universities", label: "UNIVERSITIES & EXAM CENTRES", href: "/en/universities" },
    ],
  },
  { id: "products", label: "PRODUCTS", href: "/en/products" },
  { id: "guide", label: "GUIDE", href: "/en/guide" },
  { id: "how", label: "HOW IT WORKS", href: "/en/how-it-works" },
  { id: "about", label: "ABOUT US", href: "/en/about" },
  { id: "contact", label: "CONTACT", href: "/en/contact" },
];
