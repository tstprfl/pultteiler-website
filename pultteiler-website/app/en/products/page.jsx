import { C } from "@/lib/colors";
import { SETS } from "@/lib/data";
import { SETS_EN, OG_EN } from "@/lib/en";
import { alternatesFor } from "@/lib/i18n";
import { Badge, Btn } from "@/components/ui";
import Img from "@/components/Img";

export const metadata = {
  title: { absolute: "Pultteiler Desk Dividers: Sets from the Manufacturer" },
  description:
    "Exam desk dividers in wooden cases of 12 systems, direct from the Austrian manufacturer. Delivery to other countries on request.",
  alternates: alternatesFor("/en/products"),
  openGraph: OG_EN,
};

const t = {
  h2: { fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(28px, 4vw, 40px)", color: C.text, margin: "0 0 24px", letterSpacing: "0.03em" },
  body: { fontFamily: "'Inter Tight', sans-serif", fontSize: 16, color: C.textMuted, lineHeight: 1.6, maxWidth: 640, margin: 0 },
  small: { fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.6, margin: "0 0 20px" },
};

const FEATURES = [
  { title: "TOOL-FREE PLUG-IN SYSTEM", text: "Attach the clamp to the desk edge, insert the panel. Fits all common desks up to 3 cm thick." },
  { title: "12 SYSTEMS PER CASE", text: "Each wooden case holds 12 complete dividers: stackable, easy to carry, compact in storage. Larger cases on request." },
  { title: "DURABLE", text: "High-quality materials for years of daily use. Spare parts can be reordered individually." },
];

export default function Page() {
  return (
    <div lang="en" style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ marginBottom: 16 }}><Badge>PRODUCTS</Badge></div>
            <h1 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "clamp(38px, 5.5vw, 64px)", color: C.text, margin: "0 0 16px", letterSpacing: "0.03em", lineHeight: 1 }}>PULTTEILER DESK DIVIDERS</h1>
            <p style={t.body}>Privacy screens for school and exam desks, direct from the manufacturer in Austria. Every wooden case contains 12 complete systems. Prices and delivery are quoted individually for your country.</p>
          </div>

          <h2 style={t.h2}>CASE SETS</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 56 }}>
            {SETS.map((p) => {
              const en = SETS_EN[p.id];
              return (
                <div key={p.id} className="prod-card" style={{ background: C.bgCard, border: `1px solid ${C.border}`, display: "grid", gridTemplateColumns: "260px 1fr", overflow: "hidden" }}>
                  <div style={{ borderRight: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", padding: 16, background: C.bgElevated }}>
                    <Img sizes="300px" src={p.img} alt={en.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "contain", maxHeight: 200, display: "block" }}/>
                  </div>
                  <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 26, color: C.text, margin: "0 0 8px" }}>{en.name}</h3>
                    <p style={t.small}>{en.desc}</p>
                    <div><Btn href="/en/quote">REQUEST A QUOTE →</Btn></div>
                  </div>
                </div>
              );
            })}
          </div>

          <h2 style={t.h2}>WHAT MAKES THE PULTTEILER DIFFERENT</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 2, marginBottom: 56 }}>
            {FEATURES.map((f) => (
              <div key={f.title} style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "28px 26px" }}>
                <h3 style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 15, fontWeight: 700, letterSpacing: "0.06em", color: C.text, margin: "0 0 10px" }}>{f.title}</h3>
                <p style={{ ...t.small, margin: 0 }}>{f.text}</p>
              </div>
            ))}
          </div>

          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "28px 32px" }}>
            <h3 style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 15, fontWeight: 700, letterSpacing: "0.06em", color: C.text, margin: "0 0 10px" }}>ORDERING FROM AUSTRIA, GERMANY OR SWITZERLAND?</h3>
            <p style={t.small}>Prices, delivery terms and direct ordering on invoice are available in our online shop (in German).</p>
            <Btn href="/produkte" variant="secondary">GO TO THE ONLINE SHOP</Btn>
          </div>
        </div>
      </section>
    </div>
  );
}
