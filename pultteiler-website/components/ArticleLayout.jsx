// Server-Komponente: Layout für Ratgeber-Artikel. Reines HTML/CSS für schnelle
// Ladezeit und saubere Indexierung. Enthält Article-JSON-LD und Breadcrumbs.
import Link from "next/link";
import { C } from "@/lib/colors";
import { SCHOOLS_COUNT, YEARS } from "@/lib/site";
import { Btn } from "@/components/ui";

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

export function articleJsonLd({ title, description, slug, date }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    inLanguage: "de",
    mainEntityOfPage: `https://www.pultteiler.eu/ratgeber/${slug}`,
    author: { "@type": "Organization", name: "Schulmittel Blaschegg" },
    publisher: { "@type": "Organization", name: "Schulmittel Blaschegg", url: "https://www.pultteiler.eu" },
  };
}

export default function ArticleLayout({ meta, children, related = [] }) {
  return (
    <div style={{ paddingTop: 72 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(meta)) }} />
      <article style={{ padding: "72px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: 24 }}>
            <ol style={{ display: "flex", gap: 8, listStyle: "none", margin: 0, padding: 0, fontFamily: "'Inter Tight', sans-serif", fontSize: 12, color: C.textMuted, flexWrap: "wrap" }}>
              <li><Link href="/" style={{ color: C.textMuted, textDecoration: "none" }}>Start</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/ratgeber" style={{ color: C.textMuted, textDecoration: "none" }}>Ratgeber</Link></li>
              <li aria-hidden="true">›</li>
              <li style={{ color: C.text }} aria-current="page">{meta.short || meta.title}</li>
            </ol>
          </nav>

          <header>
            <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.accent, background: `${C.accent}15`, padding: "5px 12px", display: "inline-block" }}>RATGEBER FÜR SCHULEN</span>
            <h1 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "clamp(34px, 5vw, 56px)", color: C.text, lineHeight: 1.02, margin: "20px 0 14px", letterSpacing: "0.02em" }}>{meta.title}</h1>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.textMuted, margin: "0 0 32px" }}>
              <time dateTime={meta.date}>Aktualisiert am {new Date(meta.date + "T12:00:00").toLocaleDateString("de-AT", { day: "numeric", month: "long", year: "numeric" })}</time> · Schulmittel Blaschegg — Hersteller seit über {YEARS} Jahren
            </p>
          </header>

          {meta.img && (
            <div style={{ overflow: "hidden", border: `1px solid ${C.border}`, background: C.bgCard, marginBottom: 36 }}>
              <img src={meta.img} alt={meta.imgAlt || meta.title} style={{ width: "100%", height: 340, objectFit: "cover", display: "block" }}/>
            </div>
          )}

          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "44px 44px 36px" }} className="article-body">
            {children}
          </div>

          {/* CTA-Box */}
          <aside style={{ background: C.dark, padding: "36px 40px", marginTop: 2 }}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: C.white, margin: "0 0 8px", letterSpacing: "0.03em" }}>SICHTSCHUTZ DIREKT VOM HERSTELLER</h2>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, margin: "0 0 24px" }}>
              Über {SCHOOLS_COUNT} Schulen in Österreich, Deutschland und der Schweiz arbeiten mit dem Pultteiler — seit über {YEARS} Jahren, Kauf auf Rechnung.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="/angebot" style={{ background: C.accent, color: C.white, padding: "13px 28px", fontFamily: "'Inter Tight', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textDecoration: "none", display: "inline-block" }}>ANGEBOT ANFORDERN →</a>
              <a href="/produkte" style={{ background: "transparent", color: C.white, border: "1.5px solid rgba(255,255,255,0.35)", padding: "13px 28px", fontFamily: "'Inter Tight', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textDecoration: "none", display: "inline-block" }}>ZUM SHOP</a>
            </div>
          </aside>

          {/* Weiterführende Links */}
          {related.length > 0 && (
            <nav aria-label="Weiterführende Artikel" style={{ marginTop: 48 }}>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: C.text, margin: "0 0 16px", letterSpacing: "0.03em" }}>WEITERLESEN</h2>
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
