"use client";
import dynamic from "next/dynamic";
import { C } from "@/lib/colors";
import { Reveal, Heading, Btn } from "@/components/ui";
import Img from "@/components/Img";

// 3D-Animation nur im Browser laden (WebGL), mit Platzhalter in gleicher Größe gegen Layoutsprünge
const AufbauAnimation = dynamic(() => import("@/components/AufbauAnimation"), {
  ssr: false,
  loading: () => <div style={{ aspectRatio: "16 / 10", background: C.bgElevated, border: `1px solid ${C.border}` }} />,
});

const STEPS = [
  { nr: "Schritt 01", title: "Klammer aufstecken", text: "Die Klammer aus dauerelastischem Kunststoff seitlich auf die Tischkante schieben. Sie passt auf alle gängigen Schultische mit einer Plattenstärke bis 3 cm, auch auf Schrägtische." },
  { nr: "Schritt 02", title: "Teilerplatte einsetzen", text: "Die Platte von oben aufsetzen. Ihr Schlitz rastet in der Klammer ein, die Platte steht sofort stabil." },
];

export default function AnleitungPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Heading as="h1" overline="Aufbauanleitung" title={"So funktioniert der Pultteiler\nAufbau in 2 Schritten"} sub="Teilerplatte und Pultklammer: in wenigen Handgriffen aufgestellt." align="center"/>
          <Reveal>
            <AufbauAnimation steps={STEPS} label="Animation: Die Klammer wird seitlich auf die Tischkante geschoben, die Teilerplatte von oben eingesetzt."/>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 2 }}>
            <Reveal delay={0.1}>
              <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, display: "grid", gridTemplateColumns: "1.2fr 1fr", overflow: "hidden", transition: "border-color 0.3s" }} className="prod-card" onMouseEnter={e => e.currentTarget.style.borderColor = C.accent} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <h2 style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 28, color: C.text, margin: "0 0 16px" }}>Nach der Prüfung</h2>
                  <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 15, color: C.textMuted, lineHeight: 1.7, margin: 0 }}>Einfach abnehmen und zurück in den mitgelieferten Holzkoffer. Platzsparend verstaut und sofort bereit für den nächsten Einsatz.</p>
                </div>
                <div style={{ background: C.bgElevated, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: 16, minHeight: 240 }}>
                  <Img sizes="(max-width: 768px) 100vw, 480px" src="/images/koffer-gelb.jpg" alt="Holzkoffer mit Pultteilern" style={{ width: "100%", height: "100%", objectFit: "contain", maxHeight: 240, display: "block" }}/>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginTop: 2 }} className="contact-g">
              {["Passt auf alle gängigen Schultische mit einer Tischplattenstärke bis 3 cm. Die Klammer aus dauerelastischem Kunststoff hinterlässt keine Spuren am Tisch.", "Ohne Werkzeug, ohne Schrauben, ohne Klebeflächen. Aufbau und Abbau der Trennwand sind in wenigen Augenblicken erledigt."].map((t, i) => (
                <div key={i} style={{ background: `${C.green}08`, border: `1px solid ${C.green}25`, padding: "32px 28px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 32, height: 32, background: `${C.green}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke={C.green} strokeWidth="2" strokeLinecap="square"/></svg>
                  </div>
                  <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.65, margin: 0 }}>{t}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ marginTop: 56, textAlign: "center" }}>
              <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 16, color: C.textMuted, marginBottom: 24 }}>Überzeugt? Bestellen Sie den Pultteiler direkt vom Hersteller.</p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}><Btn href="/produkte">Zum Shop</Btn><Btn href="/kontakt" variant="secondary">Kontakt aufnehmen →</Btn></div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
