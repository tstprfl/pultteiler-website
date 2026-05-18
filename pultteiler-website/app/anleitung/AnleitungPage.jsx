"use client";
import { C } from "@/lib/colors";
import { Reveal, Heading, Btn } from "@/components/ui";

export default function AnleitungPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Heading overline="AUFBAUANLEITUNG" title={"SO FUNKTIONIERT DER PULTTEILER\nAUFBAU IN 3 SCHRITTEN"} sub="Teilerplatte und Pultklammer — in wenigen Handgriffen aufgestellt." align="center"/>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              { nr: "01", title: "KLAMMER AUFSTECKEN", text: "Stecken Sie die Klammer aus dauerelastischem Kunststoff einfach auf die Tischkante. Sie passt auf alle gängigen Schultische mit einer Tischplattenstärke bis 3 cm — auch auf Schrägtische." },
              { nr: "02", title: "TEILERPLATTE EINSETZEN", text: "Setzen Sie die Teilerplatte in die Klammer ein. Die Platte rastet sicher ein und steht sofort stabil." },
            ].map((s, i) => (
              <Reveal key={i} delay={(i + 1) * 0.1}>
                <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "40px 36px", transition: "border-color 0.3s" }} onMouseEnter={e => e.currentTarget.style.borderColor = C.accent} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, color: C.accent, lineHeight: 1 }}>SCHRITT {s.nr}</span>
                  <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: C.text, margin: "12px 0 16px" }}>{s.title}</h2>
                  <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 15, color: C.textMuted, lineHeight: 1.7, margin: 0 }}>{s.text}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, display: "grid", gridTemplateColumns: "1.2fr 1fr", overflow: "hidden", transition: "border-color 0.3s" }} className="prod-card" onMouseEnter={e => e.currentTarget.style.borderColor = C.accent} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, color: C.accent, lineHeight: 1 }}>SCHRITT 03</span>
                  <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: C.text, margin: "12px 0 16px" }}>FERTIG — KONZENTRIERT ARBEITEN</h2>
                  <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 15, color: C.textMuted, lineHeight: 1.7, margin: 0 }}>Der Pultteiler steht stabil und schafft einen eigenen, abgeschirmten Arbeitsplatz. Nach der Prüfung einfach abnehmen und zurück in den Holzkoffer.</p>
                </div>
                <div style={{ background: C.bgElevated, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: 16, minHeight: 240 }}>
                  <img src="/images/koffer-gelb.jpg" alt="Holzkoffer mit Pultteilern" style={{ width: "100%", height: "100%", objectFit: "contain", maxHeight: 240, display: "block" }}/>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.35}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginTop: 2 }} className="contact-g">
              {["Passt auf alle gängigen Schultische mit einer Tischplattenstärke bis 3 cm. Die Klammer aus dauerelastischem Kunststoff hinterlässt keine Spuren am Tisch.", "Nach dem Einsatz kommen alle Pultteiler zurück in den mitgelieferten Holzkoffer — platzsparend und sofort bereit für den nächsten Einsatz."].map((t, i) => (
                <div key={i} style={{ background: `${C.green}08`, border: `1px solid ${C.green}25`, padding: "32px 28px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 32, height: 32, background: `${C.green}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke={C.green} strokeWidth="2" strokeLinecap="square"/></svg>
                  </div>
                  <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.65, margin: 0 }}>{t}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div style={{ marginTop: 56, textAlign: "center" }}>
              <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 16, color: C.textMuted, marginBottom: 24 }}>Überzeugt? Bestellen Sie den Pultteiler direkt vom Hersteller.</p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}><Btn href="/produkte">ZUM SHOP</Btn><Btn href="/kontakt" variant="secondary">KONTAKT AUFNEHMEN →</Btn></div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
