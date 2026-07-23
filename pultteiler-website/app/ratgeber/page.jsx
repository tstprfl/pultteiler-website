import Link from "next/link";
import { C } from "@/lib/colors";
import { ARTICLES } from "@/lib/articles";

export const metadata = {
  title: "Ratgeber für Schulen — Sichtschutz, Prüfungen & Konzentration",
  description:
    "Praxiswissen für Schulen: Abschreiben bei Klassenarbeiten verhindern, Trennwände für Schultische richtig auswählen, reizarme Arbeitsplätze für ADHS und Inklusion einrichten.",
  alternates: { canonical: "/ratgeber" },
};

export default function Page() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.accent, background: `${C.accent}15`, padding: "5px 12px", display: "inline-block" }}>PRAXISWISSEN</span>
          <h1 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "clamp(38px, 5.5vw, 64px)", color: C.text, lineHeight: 1, margin: "20px 0 14px", letterSpacing: "0.02em" }}>RATGEBER FÜR SCHULEN</h1>
          <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 16, color: C.textMuted, lineHeight: 1.7, maxWidth: 620, margin: "0 0 48px" }}>
            Faire Prüfungen, konzentriertes Arbeiten, reizarme Lernumgebungen: gesammeltes Praxiswissen aus über 40 Jahren Zusammenarbeit mit Schulen in Österreich, Deutschland und der Schweiz.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))", gap: 2 }}>
            {ARTICLES.map((a) => (
              <Link key={a.slug} href={`/ratgeber/${a.slug}`} style={{ background: C.bgCard, border: `1px solid ${C.border}`, textDecoration: "none", display: "flex", flexDirection: "column" }}>
                <div style={{ height: 200, overflow: "hidden", borderBottom: `1px solid ${C.border}` }}>
                  <img src={a.img} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
                </div>
                <div style={{ padding: "26px 28px 30px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 26, color: C.text, margin: "0 0 10px", lineHeight: 1.08, letterSpacing: "0.02em" }}>{a.title}</h2>
                  <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.65, margin: "0 0 18px", flex: 1 }}>{a.teaser}</p>
                  <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: C.accent }}>ARTIKEL LESEN →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
