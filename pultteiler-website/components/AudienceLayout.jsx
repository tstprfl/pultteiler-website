// Server-Komponente: gemeinsames Layout der drei Zielgruppen-Seiten
// (Volksschule, Sekundarstufe, Hochschulen). Reines HTML/CSS — kein Client-JS,
// damit die Seiten schnell laden und sauber indexiert werden.
import { C } from "@/lib/colors";
import { COUNTRY_INFO, SCHOOLS_TEXT_SHORT, YEARS } from "@/lib/site";
import { Btn } from "@/components/ui";

const f = {
  overline: { fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.accent, background: `${C.accent}15`, padding: "5px 12px", display: "inline-block" },
  h1: { fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "clamp(40px, 6vw, 76px)", color: C.text, lineHeight: 0.98, margin: "24px 0 24px", letterSpacing: "0.02em" },
  h2: { fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "clamp(30px, 4.5vw, 48px)", color: C.text, margin: "0 0 16px", letterSpacing: "0.03em", lineHeight: 1 },
  h3: { fontFamily: "'Inter Tight', sans-serif", fontSize: 15, fontWeight: 700, letterSpacing: "0.06em", color: C.text, margin: "0 0 10px" },
  body: { fontFamily: "'Inter Tight', sans-serif", fontSize: 16, color: C.textMuted, lineHeight: 1.75, margin: "0 0 18px" },
  small: { fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.65, margin: 0 },
};

export default function AudienceLayout({ overline, h1, intro, img, imgAlt, situation, benefits, products, faq, ctaTitle, ctaSub }) {
  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero */}
      <section style={{ padding: "88px 32px 72px", background: C.bg }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div className="hero-g" style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 56, alignItems: "center" }}>
            <div>
              <span style={f.overline}>{overline}</span>
              <h1 style={f.h1}>{h1}</h1>
              <p style={{ ...f.body, fontSize: 17, maxWidth: 560 }}>{intro}</p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 28 }}>
                <Btn href="/angebot">ANGEBOT ANFORDERN →</Btn>
                <Btn href="/produkte" variant="secondary">ZUM SHOP</Btn>
              </div>
              <p style={{ ...f.small, marginTop: 24, fontWeight: 600, color: C.text }}>
                ✓ Kauf auf Rechnung&nbsp;&nbsp;·&nbsp;&nbsp;✓ Direkt vom Hersteller&nbsp;&nbsp;·&nbsp;&nbsp;✓ {SCHOOLS_TEXT_SHORT}&nbsp;&nbsp;·&nbsp;&nbsp;✓ Seit über {YEARS} Jahren
              </p>
            </div>
            <div style={{ overflow: "hidden", border: `1px solid ${C.border}`, background: C.bgCard }}>
              <img src={img} alt={imgAlt} loading="eager" style={{ width: "100%", height: 380, objectFit: "cover", display: "block" }}/>
            </div>
          </div>
        </div>
      </section>

      {/* Kaufsituation */}
      <section style={{ padding: "80px 32px", background: C.bgCard, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={f.h2}>{situation.title}</h2>
          {situation.paragraphs.map((p, i) => <p key={i} style={f.body}>{p}</p>)}
        </div>
      </section>

      {/* Vorteile */}
      <section style={{ padding: "80px 32px", background: C.bg }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <h2 style={{ ...f.h2, marginBottom: 40 }}>{benefits.title}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: 2 }}>
            {benefits.items.map((b, i) => (
              <div key={i} style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "32px 28px" }}>
                <h3 style={f.h3}>{b.title}</h3>
                <p style={f.small}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produktempfehlung */}
      <section style={{ padding: "80px 32px", background: C.bgCard, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <h2 style={{ ...f.h2, marginBottom: 8 }}>{products.title}</h2>
          <p style={{ ...f.body, maxWidth: 640 }}>{products.sub}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: 2, marginTop: 32 }}>
            {products.items.map((p, i) => (
              <div key={i} style={{ background: C.bg, border: `1px solid ${C.border}`, display: "flex", flexDirection: "column" }}>
                <div style={{ background: C.bgElevated, borderBottom: `1px solid ${C.border}`, height: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
                  <img src={p.img} alt={p.name} loading="lazy" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}/>
                </div>
                <div style={{ padding: "24px 26px 30px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: C.text, margin: "0 0 8px" }}>{p.name}</h3>
                  <p style={{ ...f.small, marginBottom: 16, flex: 1 }}>{p.desc}</p>
                  {p.price && <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 30, color: C.text, marginBottom: 4 }}>{p.price}</div>}
                  {p.note && <p style={{ ...f.small, fontSize: 12, marginBottom: 16 }}>{p.note}</p>}
                  <div><Btn href={p.href || "/produkte"} variant={p.primary ? "primary" : "secondary"}>{p.cta || "ZUM SHOP"}</Btn></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestellung & Länderhinweise */}
      <section style={{ padding: "80px 32px", background: C.bg, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <h2 style={{ ...f.h2, marginBottom: 8 }}>SO EINFACH BESTELLEN SCHULEN BEI UNS</h2>
          <p style={{ ...f.body, maxWidth: 640 }}>Kein Kreditkarten-Checkout, keine Vorkasse: Sie bestellen per Anfrage oder direkt im Shop — und zahlen bequem auf Rechnung, wie es Schulen und Schulerhalter gewohnt sind.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 2, marginTop: 32 }}>
            {COUNTRY_INFO.map((c) => (
              <div key={c.code} style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "28px 26px" }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{c.flag}</div>
                <h3 style={f.h3}>{c.name.toUpperCase()}</h3>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {c.lines.map((l, i) => <li key={i} style={{ ...f.small, padding: "4px 0" }}>— {l}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 32px", background: C.bgCard, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ ...f.h2, marginBottom: 32 }}>HÄUFIGE FRAGEN</h2>
          {faq.map((item, i) => (
            <details key={i} style={{ background: C.bg, border: `1px solid ${C.border}`, marginBottom: 2, padding: "0 26px" }}>
              <summary style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 15, fontWeight: 600, color: C.text, padding: "20px 0", cursor: "pointer", listStylePosition: "inside" }}>{item.q}</summary>
              <p style={{ ...f.body, fontSize: 15, paddingBottom: 20 }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "88px 32px", background: C.bg, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <h2 style={f.h2}>{ctaTitle}</h2>
          <p style={{ ...f.body, maxWidth: 560, margin: "0 auto 32px" }}>{ctaSub}</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Btn href="/angebot">ANGEBOT ANFORDERN →</Btn>
            <Btn href="/kontakt" variant="secondary">KONTAKT</Btn>
          </div>
        </div>
      </section>
    </div>
  );
}

// Hilfsfunktion: FAQ-Daten → FAQPage-JSON-LD (für <script type="application/ld+json">)
export function faqJsonLd(faq) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
