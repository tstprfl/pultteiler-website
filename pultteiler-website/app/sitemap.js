import { ARTICLES } from "@/lib/articles";

export default function sitemap() {
  const base = "https://www.pultteiler.eu";
  const pages = [
    { url: base, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/volksschule`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/sekundarstufe`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/hochschulen`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/produkte`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/angebot`, changeFrequency: "yearly", priority: 0.9 },
    { url: `${base}/ratgeber`, changeFrequency: "monthly", priority: 0.8 },
    ...ARTICLES.map((a) => ({ url: `${base}/ratgeber/${a.slug}`, changeFrequency: "yearly", priority: 0.7 })),
    { url: `${base}/anleitung`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/galerie`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/ueber-uns`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/versand`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/kontakt`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/impressum`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/agb`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/datenschutz`, changeFrequency: "yearly", priority: 0.3 },
  ];
  return pages.map(p => ({ ...p, lastModified: new Date() }));
}
