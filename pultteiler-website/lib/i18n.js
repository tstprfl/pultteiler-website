// Englische Testversion (International): nur drei Seiten.
// Paare deutsch ↔ englisch — genutzt von Sprachumschalter, hreflang-Angaben und Sitemap.
// Neue englische Seite? Hier eintragen UND unter app/en/<pfad>/page.jsx anlegen.
export const PAGE_PAIRS = [
  { de: "/hochschulen", en: "/en/universities" },
  { de: "/produkte", en: "/en/products" },
  { de: "/angebot", en: "/en/quote" },
];

export const EN_START = "/en/universities";

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
  { id: "universities", label: "UNIVERSITIES & EXAM CENTRES", href: "/en/universities" },
  { id: "products", label: "PRODUCTS", href: "/en/products" },
];
