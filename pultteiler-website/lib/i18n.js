// Englische Version (International). AGB und Datenschutz als unverbindliche Übersetzung, Impressum nur deutsch.
// Paare deutsch ↔ englisch — genutzt von Sprachumschalter, hreflang-Angaben und Sitemap.
// Neue englische Seite? Hier eintragen UND unter app/en/<pfad>/page.jsx anlegen. Änderungsdatum in app/sitemap.js (LASTMOD) eintragen.
export const PAGE_PAIRS = [
  { de: "/", en: "/en" },
  { de: "/volksschule", en: "/en/primary-schools" },
  { de: "/sekundarstufe", en: "/en/secondary-schools" },
  { de: "/hochschulen", en: "/en/universities" },
  { de: "/produkte", en: "/en/products" },
  { de: "/angebot", en: "/en/quote" },
  { de: "/ratgeber", en: "/en/guide" },
  { de: "/ratgeber/studien-abschreiben-pruefung", en: "/en/guide/research-on-copying-in-exams" },
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

// Regionale Zusatzseiten eines Seitenpaars (hreflang), z.B. der Schweizer Shop mit eigenen Preisen.
// base = deutsche Seite des Paars in PAGE_PAIRS; der Sprachumschalter wechselt zwischen de und en der Regionalseite.
export const REGIONAL_PAIRS = [
  { base: "/produkte", region: "CH", de: "/produkte/schweiz", en: "/en/products/switzerland" },
];

export const EN_START = "/en";

export const isEnPath = (pathname = "") => pathname === "/en" || pathname.startsWith("/en/");

// Ziel des Sprachumschalters: passende Seite der anderen Sprache, sonst deren Startseite
export function switchTarget(pathname = "") {
  const regional = REGIONAL_PAIRS.find((r) => r.de === pathname || r.en === pathname);
  if (regional) return isEnPath(pathname) ? regional.de : regional.en;
  if (isEnPath(pathname)) return PAGE_PAIRS.find((p) => p.en === pathname)?.de || "/";
  return PAGE_PAIRS.find((p) => p.de === pathname)?.en || EN_START;
}

// alternates für die Metadaten einer Seite (canonical + hreflang de/en/x-default, dazu regionale Seiten aus REGIONAL_PAIRS).
// Regionalseiten übergeben ihren eigenen Pfad als canonical und die Basisseite als base.
export function alternatesFor(path, base = path) {
  const pair = PAGE_PAIRS.find((p) => p.de === base || p.en === base);
  const regional = {};
  REGIONAL_PAIRS.filter((r) => r.base === pair.de).forEach((r) => {
    regional[`de-${r.region}`] = r.de;
    regional[`en-${r.region}`] = r.en;
  });
  return {
    canonical: path,
    languages: { de: pair.de, en: pair.en, ...regional, "x-default": pair.de },
  };
}

export const NAV_EN = [
  { id: "home", label: "Home", href: "/en" },
  {
    id: "school",
    label: "For your school",
    children: [
      { id: "primary", label: "Primary schools", href: "/en/primary-schools" },
      { id: "secondary", label: "Secondary schools", href: "/en/secondary-schools" },
      { id: "universities", label: "Universities & exam centres", href: "/en/universities" },
    ],
  },
  { id: "products", label: "Products", href: "/en/products" },
  { id: "guide", label: "Guide", href: "/en/guide" },
  { id: "how", label: "How it works", href: "/en/how-it-works" },
  { id: "about", label: "About us", href: "/en/about" },
  { id: "contact", label: "Contact", href: "/en/contact" },
];
