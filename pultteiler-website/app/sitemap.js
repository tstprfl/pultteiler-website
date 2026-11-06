import { ARTICLES } from "@/lib/articles";

// Letzte inhaltliche Änderung je Seite (<lastmod> in der Sitemap).
// Bei jeder inhaltlichen Änderung einer Seite hier das Datum anpassen: Google nutzt lastmod nur,
// solange es verlässlich ist. Seiten ohne Eintrag erscheinen ohne lastmod.
// Erstbefüllung aus der Git-Historie der jeweiligen Seitendateien, Stand 2026-10-01.
const LASTMOD = {
  "/": "2026-10-23",
  "/volksschule": "2026-10-10",
  "/sekundarstufe": "2026-10-10",
  "/hochschulen": "2026-10-10",
  "/produkte": "2026-10-23",
  "/produkte/schweiz": "2026-10-23",
  "/ratgeber": "2026-10-10",
  "/ratgeber/studien-abschreiben-pruefung": "2026-10-10",
  "/ratgeber/sichtschutz-klassenarbeit": "2026-10-10",
  "/ratgeber/trennwand-schultisch-pruefung": "2026-10-10",
  "/ratgeber/abschreiben-verhindern-schularbeit": "2026-10-10",
  "/ratgeber/reizarmer-arbeitsplatz-schule": "2026-10-10",
  "/anleitung": "2026-10-10",
  "/galerie": "2026-10-10",
  "/ueber-uns": "2026-10-10",
  "/kontakt": "2026-09-29",
  "/datenschutz": "2026-11-06",
  "/agb": "2026-11-06",
  "/impressum": "2026-11-06",
  "/versand": "2026-11-06",
  "/widerrufsbelehrung": "2026-11-06",
  "/vertrag-widerrufen": "2026-11-06",
};

export default function sitemap() {
  const base = "https://www.pultteiler.eu";
  const pages = [
    { path: "/", changeFrequency: "monthly", priority: 1.0 },
    { path: "/volksschule", changeFrequency: "monthly", priority: 0.9 },
    { path: "/sekundarstufe", changeFrequency: "monthly", priority: 0.9 },
    { path: "/hochschulen", changeFrequency: "monthly", priority: 0.9 },
    { path: "/produkte", changeFrequency: "monthly", priority: 0.9 },
    { path: "/produkte/schweiz", changeFrequency: "monthly", priority: 0.8 },
    { path: "/ratgeber", changeFrequency: "monthly", priority: 0.8 },
    ...ARTICLES.map((a) => ({ path: `/ratgeber/${a.slug}`, changeFrequency: "yearly", priority: 0.7 })),
    { path: "/anleitung", changeFrequency: "yearly", priority: 0.7 },
    { path: "/galerie", changeFrequency: "yearly", priority: 0.6 },
    { path: "/ueber-uns", changeFrequency: "yearly", priority: 0.6 },
    { path: "/versand", changeFrequency: "yearly", priority: 0.7 },
    { path: "/kontakt", changeFrequency: "yearly", priority: 0.8 },
    { path: "/impressum", changeFrequency: "yearly", priority: 0.3 },
    { path: "/agb", changeFrequency: "yearly", priority: 0.3 },
    { path: "/datenschutz", changeFrequency: "yearly", priority: 0.3 },
    { path: "/widerrufsbelehrung", changeFrequency: "yearly", priority: 0.3 },
    { path: "/vertrag-widerrufen", changeFrequency: "yearly", priority: 0.3 },
  ];
  return pages.map(({ path, ...p }) => ({
    url: path === "/" ? base : `${base}${path}`,
    ...p,
    ...(LASTMOD[path] && { lastModified: LASTMOD[path] }),
  }));
}
