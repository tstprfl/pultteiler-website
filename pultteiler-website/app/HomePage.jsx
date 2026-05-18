"use client";
import Link from "next/link";
import { C } from "@/lib/colors";
import { Reveal, Badge, Heading, Btn } from "@/components/ui";

export default function Home() {
  return (
    <div>
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 32px 80px", background: C.bg, position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1, width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 64, alignItems: "center" }} className="hero-g">
            <div>
              <Reveal><Badge>SEIT ÜBER 40 JAHREN — DIREKT VOM HERSTELLER</Badge></Reveal>
              <Reveal delay={0.1}><h1 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "clamp(48px, 7vw, 96px)", color: C.text, lineHeight: 0.95, margin: "24px 0 28px" }}><span style={{ color: "#A01830" }}>PULTTEILER</span><br/>FÜR <span style={{ color: "#F0C645" }}>SCHULTISCHE.</span><br/><span style={{ color: C.textMuted, fontSize: "0.6em" }}>KONZENTRATION BRINGT LERNERFOLG.</span></h1></Reveal>
              <Reveal delay={0.2}><p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 17, color: C.textMuted, lineHeight: 1.7, maxWidth: 520, margin: "0 0 40px" }}>Der Pultteiler ist der bewährte Sichtschutz für Schultische bei schriftlichen Prüfungen — europaweit. Einfaches Stecksystem — Teilerplatte und Pultklammer sind schnell aufgebaut. Passend für alle gängigen Schultische mit einer Tischplattenstärke bis 3 cm.</p></Reveal>
              <Reveal delay={0.3}><div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}><Btn href="/produkte">ZUM SHOP</Btn><Btn href="/kontakt" variant="secondary">KONTAKT AUFNEHMEN →</Btn></div></Reveal>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Reveal delay={0.1}><div className="hero-plates" style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                <div style={{ width: 160, height: 100, background: "#F0C645", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 10, cursor: "default", boxShadow: "4px 6px 16px rgba(0,0,0,0.15)", transform: "rotate(-3deg)", border: "2px solid #D4AD2E" }}>
                  <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 9, fontWeight: 700, color: C.dark, lineHeight: 1.4, letterSpacing: "0.04em" }}>🇦🇹<br/>E-RECHNUNGEN<br/>FÜR BUNDES-<br/>SCHULEN<br/>MIT IHRER EKG</span>
                </div>
                <div style={{ width: 160, height: 100, background: "#F0C645", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 10, cursor: "default", boxShadow: "4px 6px 16px rgba(0,0,0,0.15)", transform: "rotate(2deg)", border: "2px solid #D4AD2E" }}>
                  <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 8, fontWeight: 700, color: C.dark, lineHeight: 1.4, letterSpacing: "0.04em" }}>🇩🇪<br/>MIT DEUTSCHER<br/>UID-NUMMER<br/>STEUERFREI<br/>DE-BANKKONTO<br/>VORHANDEN</span>
                </div>
                <div style={{ width: 160, height: 100, background: "#F0C645", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 10, cursor: "default", boxShadow: "4px 6px 16px rgba(0,0,0,0.15)", transform: "rotate(-1deg)", border: "2px solid #D4AD2E" }}>
                  <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 9, fontWeight: 700, color: C.dark, lineHeight: 1.4, letterSpacing: "0.04em" }}>🇨🇭<br/>STEUERFREIE<br/>UNVERZOLLTE<br/>LIEFERUNG IN<br/>DIE SCHWEIZ</span>
                </div>
              </div></Reveal>
              <Reveal delay={0.15}><div style={{ overflow: "hidden", border: `1px solid ${C.border}`, background: C.bgCard }}><img src="/images/meduni-innsbruck_2.jpeg" alt="Meduni Innsbruck Labor" style={{ width: "100%", height: 170, objectFit: "cover", display: "block" }}/></div></Reveal>
              <Reveal delay={0.25}><div style={{ overflow: "hidden", border: `1px solid ${C.border}`, background: C.bgCard }}><img src="/images/klassenzimmer.png" alt="Klassenzimmer im Einsatz" style={{ width: "100%", height: 170, objectFit: "cover", display: "block" }}/></div></Reveal>
              <Reveal delay={0.35}><div style={{ overflow: "hidden", border: `1px solid ${C.border}`, background: C.bgCard }}><img src="/images/pultteiler-einsatz.jpg" alt="EDV-Raum mit Pultteiler" style={{ width: "100%", height: 170, objectFit: "cover", display: "block" }}/></div></Reveal>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: C.bgCard, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: "48px 32px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32 }}>
          {[
            { val: "40+", label: "JAHRE ERFAHRUNG", icon: null },
            { val: null, label: "LIEFERUNG EUROPAWEIT", icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke={C.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg> },
            { val: null, label: "E-RECHNUNGEN FÜR BUNDESSCHULEN", icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke={C.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg> },
            { val: "✓", label: "DIREKT VOM HERSTELLER", icon: null },
          ].map((m, i) => (
            <Reveal key={i} delay={i * 0.08}><div style={{ textAlign: "center", padding: "12px 0" }}><div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, color: C.accent, lineHeight: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>{m.icon || m.val}</div><div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", color: C.textMuted, marginTop: 8 }}>{m.label}</div></div></Reveal>
          ))}
        </div>
      </section>
      <section style={{ padding: "96px 32px", background: C.bg }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Heading overline="WARUM PULTTEILER" title="GRÜNDE FÜR DEN PULTTEILER"/>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: 2 }}>
            {[
              { title: "FAIRE PRÜFUNGSBEDINGUNGEN", text: "Kein Abschreiben, keine Gruppenaufteilung. Alle Schüler schreiben gleichzeitig unter identischen Bedingungen." },
              { title: "STECKSYSTEM — KEIN WERKZEUG", text: "Die dauerelastische Klammer fixiert die Trennplatte schnell und einfach. Aufbau und Abbau gehen mühelos von der Hand." },
              { title: "ROBUST & LANGLEBIG", text: "Hochwertige Materialien für jahrelangen Dauereinsatz im Schulalltag. Ersatzteile einzeln nachbestellbar." },
              { title: "KOMPAKTER HOLZKOFFER", text: "12 komplette Pultteilsysteme pro Koffer. Leicht zu transportieren, stapelbar, platzsparend im Materialraum. Auf Anfrage sind auch Koffer mit mehr als 12 Teilern möglich." },
              { title: "EUROPAWEITER VERSAND", text: "Lieferung direkt vom Hersteller europaweit. Steuerfreie Lieferung nach DE mit UID-Nummer. Steuerfreie, unverzollte Lieferung in die Schweiz." },
              { title: "E-RECHNUNG FÜR BUNDESSCHULEN", text: "Wir versenden E-Rechnungen an Schulen des Bundes mit Ihrer EKG." },
            ].map((u, i) => (
              <Reveal key={i} delay={i * 0.06}><div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "36px 32px", transition: "all 0.3s", cursor: "default", height: "100%" }} onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.background = C.bgElevated; }} onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.bgCard; }}>
                <h3 style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", color: C.text, margin: "0 0 10px" }}>{u.title}</h3>
                <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.65, margin: 0 }}>{u.text}</p>
              </div></Reveal>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: "96px 32px", background: C.bgCard, borderTop: `1px solid ${C.border}` }}>
        <Reveal><div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <Heading overline="JETZT BESTELLEN" title="BEREIT FÜR IHRE BESTELLUNG?" align="center" sub="Bestellen Sie direkt über unseren Shop oder kontaktieren Sie uns für individuelle Angebote."/>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}><Btn href="/produkte">ZUM SHOP</Btn><Btn href="/kontakt" variant="secondary">KONTAKT</Btn></div>
        </div></Reveal>
      </section>
    </div>
  );
}
