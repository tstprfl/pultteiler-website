// Server-Komponente: Layout für Ratgeber-Artikel. Reines HTML/CSS für schnelle
// Ladezeit und saubere Indexierung. Enthält Article-JSON-LD und Breadcrumbs.
import Link from "next/link";
import { C } from "@/lib/colors";
import { SCHOOLS_TEXT, YEARS } from "@/lib/site";
import { Btn } from "@/components/ui";
import Img from "@/components/Img";

// Typografie für Artikel-Inhalte — in den Artikel-Dateien wiederverwenden
export const A = {
  h2: { fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "clamp(26px, 3.5vw, 36px)", color: C.text, margin: "44px 0 14px", letterSpacing: "0.03em", lineHeight: 1.05 },
  h3: { fontFamily: "'Inter Tight', sans-serif", fontSize: 17, fontWeight: 700, color: C.text, margin: "28px 0 10px" },
  p: { fontFamily: "'Inter Tight', sans-serif", fontSize: 16, color: "#3A4A4A", lineHeight: 1.8, margin: "0 0 18px" },
  ul: { fontFamily: "'Inter Tight', sans-serif", fontSize: 16, color: "#3A4A4A", lineHeight: 1.8, margin: "0 0 18px", paddingLeft: 24 },
  li: { marginBottom: 8 },
  a: { color: C.accent, textDecoration: "underline" },
  strong: { color: C.text },
};

// Beschriftungen je Sprache; englische Artikel liegen unter /en/guide/<slug>
const T = {
  de: { home: "/", homeLabel: "Start", index: "/ratgeber", indexLabel: "Ratgeber", badge: "RATGEBER FÜR SCHULEN", updated: "Aktualisiert am", locale: "de-AT",
        byline: (y) => `Schulmittel Blaschegg — Hersteller seit über ${y} Jahren`, ctaTitle: "SICHTSCHUTZ DIREKT VOM HERSTELLER",
        ctaText: (y) => `${SCHOOLS_TEXT} arbeiten mit dem Pultteiler — seit über ${y} Jahren, direkt vom Produzenten, Kauf auf Rechnung.`,
        quote: "/angebot", quoteCta: "ANGEBOT ANFORDERN →", shop: "/produkte", shopCta: "ZUM SHOP", related: "WEITERLESEN", relatedAria: "Weiterführende Artikel" },
  en: { home: "/en", homeLabel: "Home", index: "/en/guide", indexLabel: "Guide", badge: "GUIDE FOR SCHOOLS", updated: "Updated", locale: "en-GB",
        byline: (y) => `Schulmittel Blaschegg, manufacturer for over ${y} years`, ctaTitle: "PRIVACY SCREENS DIRECT FROM THE MANUFACTURER",
        ctaText: (y) => `Several hundred schools in Austria, Germany and Switzerland work with the Pultteiler, direct from the manufacturer for over ${y} years. Delivery to other countries on request.`,
        quote: "/en/quote", quoteCta: "REQUEST A QUOTE →", shop: "/en/products", shopCta: "VIEW PRODUCTS", related: "READ MORE", relatedAria: "Related articles" },
};

export function articleJsonLd({ title, description, slug, date, path }, lang = "de") {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    inLanguage: lang,
    mainEntityOfPage: `https://www.pultteiler.eu${path || `/ratgeber/${slug}`}`,
    author: { "@type": "Organization", name: "Schulmittel Blaschegg" },
    publisher: { "@type": "Organization", name: "Schulmittel Blaschegg", url: "https://www.pultteiler.eu" },
  };
}

export default function ArticleLayout({ meta, children, related = [], lang = "de" }) {
  const t = T[lang];
  return (
    <div style={{ paddingTop: 72 }} lang={lang === "en" ? "en" : undefined}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(meta, lang)) }} />
      <article style={{ padding: "72px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: 24 }}>
            <ol style={{ display: "flex", gap: 8, listStyle: "none", margin: 0, padding: 0, fontFamily: "'Inter Tight', sans-serif", fontSize: 12, color: C.textMuted, flexWrap: "wrap" }}>
              <li><Link href={t.home} style={{ color: C.textMuted, textDecoration: "none" }}>{t.homeLabel}</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href={t.index} style={{ color: C.textMuted, textDecoration: "none" }}>{t.indexLabel}</Link></li>
              <li aria-hidden="true">›</li>
              <li style={{ color: C.text }} aria-current="page">{meta.short || meta.title}</li>
            </ol>
          </nav>

          <header>
            <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.accent, background: `${C.accent}15`, padding: "5px 12px", display: "inline-block" }}>{t.badge}</span>
            <h1 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "clamp(34px, 5vw, 56px)", color: C.text, lineHeight: 1.02, margin: "20px 0 14px", letterSpacing: "0.02em" }}>{meta.title}</h1>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.textMuted, margin: "0 0 32px" }}>
              <time dateTime={meta.date}>{t.updated} {new Date(meta.date + "T12:00:00").toLocaleDateString(t.locale, { day: "numeric", month: "long", year: "numeric" })}</time> · {t.byline(YEARS)}
            </p>
          </header>

          {meta.img && (
            <div style={{ overflow: "hidden", border: `1px solid ${C.border}`, background: C.bgCard, marginBottom: 36 }}>
              <Img sizes="(max-width: 900px) 100vw, 900px" src={meta.img} alt={meta.imgAlt || meta.title} style={{ width: "100%", height: 340, objectFit: "cover", display: "block" }}/>
            </div>
          )}

          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "44px 44px 36px" }} className="article-body">
            {children}
          </div>

          {/* CTA-Box */}
          <aside style={{ background: C.dark, padding: "36px 40px", marginTop: 2 }}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: C.white, margin: "0 0 8px", letterSpacing: "0.03em" }}>{t.ctaTitle}</h2>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, margin: "0 0 24px" }}>
              {t.ctaText(YEARS)}
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={t.quote} style={{ background: C.accent, color: C.white, padding: "13px 28px", fontFamily: "'Inter Tight', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textDecoration: "none", display: "inline-block" }}>{t.quoteCta}</a>
              <a href={t.shop} style={{ background: "transparent", color: C.white, border: "1.5px solid rgba(255,255,255,0.35)", padding: "13px 28px", fontFamily: "'Inter Tight', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textDecoration: "none", display: "inline-block" }}>{t.shopCta}</a>
            </div>
          </aside>

          {/* Weiterführende Links */}
          {related.length > 0 && (
            <nav aria-label={t.relatedAria} style={{ marginTop: 48 }}>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: C.text, margin: "0 0 16px", letterSpacing: "0.03em" }}>{t.related}</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 2 }}>
                {related.map((r) => (
                  <Link key={r.href} href={r.href} style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "20px 24px", textDecoration: "none", display: "block" }}>
                    <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, fontWeight: 600, color: C.text, lineHeight: 1.5 }}>{r.label} →</span>
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </article>
    </div>
  );
}
