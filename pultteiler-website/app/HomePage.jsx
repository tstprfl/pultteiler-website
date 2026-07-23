"use client";
import Link from "next/link";
import { C } from "@/lib/colors";
import { SCHOOLS_COUNT, YEARS, TESTIMONIALS, COUNTRY_INFO, AUDIENCES } from "@/lib/site";
import { ARTICLES } from "@/lib/articles";
import { Reveal, Badge, Heading, Btn } from "@/components/ui";

export default function Home() {
  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 32px 80px", background: C.bg, position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1, width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 64, alignItems: "center" }} className="hero-g">
            <div>
              <Reveal><Badge>DIREKT VOM HERSTELLER — SEIT ÜBER {YEARS} JAHREN</Badge></Reveal>
              <Reveal delay={0.1}><h1 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "clamp(48px, 7vw, 96px)", color: C.text, lineHeight: 0.95, margin: "24px 0 28px" }}><span style={{ color: "#A01830" }}>PULTTEILER</span><br/>FÜR <span style={{ color: "#F0C645" }}>SCHULTISCHE.</span><br/><span style={{ color: C.textMuted, fontSize: "0.6em" }}>DER SICHTSCHUTZ FÜR FAIRE PRÜFUNGEN.</span></h1></Reveal>
              <Reveal delay={0.2}><p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 17, color: C.textMuted, lineHeight: 1.7, maxWidth: 520, margin: "0 0 40px" }}>Die bewährte Trennwand für Schultische bei Schularbeiten, Klassenarbeiten und Prüfungen: verhindert Abschreiben, schafft einen reizarmen Arbeitsplatz — und steht dank Stecksystem in zwei Minuten. Über {SCHOOLS_COUNT} Schulen in Österreich, Deutschland und der Schweiz vertrauen darauf. Passend für alle gängigen Schultische bis 3 cm Plattenstärke.</p></Reveal>
              <Reveal delay={0.3}><div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}><Btn href="/angebot">ANGEBOT ANFORDERN →</Btn><Btn href="/produkte" variant="secondary">ZUM SHOP</Btn></div></Reveal>
              <Reveal delay={0.35}><p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, fontWeight: 600, color: C.text, marginTop: 24 }}>✓ Kauf auf Rechnung — keine Kreditkarte, keine Vorkasse</p></Reveal>
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
              <Reveal delay={0.15}><div style={{ overflow: "hidden", border: `1px solid ${C.border}`, background: C.bgCard }}><img src="/images/meduni-innsbruck_2.jpeg" alt="Pultteiler im Prüfungseinsatz an der MedUni Innsbruck" style={{ width: "100%", height: 170, objectFit: "cover", display: "block" }}/></div></Reveal>
              <Reveal delay={0.25}><div style={{ overflow: "hidden", border: `1px solid ${C.border}`, background: C.bgCard }}><img src="/images/klassenzimmer.png" alt="Sichtschutz auf Schultischen im Klassenzimmer" loading="lazy" style={{ width: "100%", height: 170, objectFit: "cover", display: "block" }}/></div></Reveal>
              <Reveal delay={0.35}><div style={{ overflow: "hidden", border: `1px solid ${C.border}`, background: C.bgCard }}><img src="/images/pultteiler-einsatz.jpg" alt="Trennwände auf Schultischen im EDV-Raum" loading="lazy" style={{ width: "100%", height: 170, objectFit: "cover", display: "block" }}/></div></Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ VERTRAUENSBAND ═══ */}
      <section style={{ background: C.dark, padding: "56px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32 }}>
          {[
            { val: `${SCHOOLS_COUNT}+`, label: "SCHULEN IN AT, DE & CH" },
            { val: `${YEARS}+`, label: "JAHRE HERSTELLER-ERFAHRUNG" },
            { val: "100%", label: "DIREKTVERTRIEB — OHNE ZWISCHENHANDEL" },
            { val: "✓", label: "KAUF AUF RECHNUNG" },
          ].map((m, i) => (
            <Reveal key={i} delay={i * 0.08}><div style={{ textAlign: "center", padding: "8px 0" }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 52, color: "#F0C645", lineHeight: 1 }}>{m.val}</div>
              <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", color: "rgba(255,255,255,0.7)", marginTop: 10 }}>{m.label}</div>
            </div></Reveal>
          ))}
        </div>
      </section>

      {/* ═══ ZIELGRUPPEN ═══ */}
      <section style={{ padding: "96px 32px", background: C.bg }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Heading overline="FÜR IHRE SCHULE" title="DIE PASSENDE LÖSUNG FÜR JEDE SCHULSTUFE" sub="Volksschule, Sekundarstufe oder Großprüfung im Hörsaal — jede Kaufsituation ist anders. Wählen Sie Ihren Bereich:"/>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: 2 }}>
            {AUDIENCES.map((a, i) => (
              <Reveal key={a.id} delay={i * 0.08}>
                <Link href={a.href} style={{ background: C.bgCard, border: `1px solid ${C.border}`, textDecoration: "none", display: "flex", flexDirection: "column", height: "100%", transition: "border-color 0.3s" }} onMouseEnter={e => e.currentTarget.style.borderColor = C.accent} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                  <div style={{ height: 190, overflow: "hidden", borderBottom: `1px solid ${C.border}` }}>
                    <img src={a.img} alt={a.imgAlt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
                  </div>
                  <div style={{ padding: "26px 28px 30px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 26, color: C.text, margin: "0 0 10px", letterSpacing: "0.02em", lineHeight: 1.05 }}>{a.title.toUpperCase()}</h3>
                    <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.65, margin: "0 0 18px", flex: 1 }}>{a.teaser}</p>
                    <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: C.accent }}>MEHR ERFAHREN →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GRÜNDE ═══ */}
      <section style={{ padding: "96px 32px", background: C.bgCard, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Heading overline="WARUM PULTTEILER" title="GRÜNDE FÜR DEN PULTTEILER"/>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: 2 }}>
            {[
              { title: "FAIRE PRÜFUNGSBEDINGUNGEN", text: "Kein Abschreiben, keine Gruppenaufteilung, keine zwei Angaben. Alle Schüler schreiben gleichzeitig unter identischen Bedingungen." },
              { title: "STECKSYSTEM — KEIN WERKZEUG", text: "Die dauerelastische Klammer fixiert die Trennplatte schnell und einfach. Aufbau und Abbau gehen mühelos von der Hand." },
              { title: "REIZARMER ARBEITSPLATZ", text: "Auch außerhalb von Prüfungen im Einsatz: als ruhige Arbeitszone für Kinder mit Konzentrationsschwierigkeiten — bewährt im inklusiven Unterricht." },
              { title: "ROBUST & LANGLEBIG", text: "Hochwertige Materialien für jahrelangen Dauereinsatz im Schulalltag. Ersatzteile einzeln nachbestellbar." },
              { title: "KOMPAKTER HOLZKOFFER", text: "12 komplette Pultteilsysteme pro Koffer. Leicht zu transportieren, stapelbar, platzsparend im Materialraum. Auf Anfrage auch Koffer mit mehr als 12 Teilern." },
              { title: "EUROPAWEITER VERSAND", text: "Lieferung direkt vom Hersteller europaweit. Steuerfrei nach DE mit UID-Nummer, steuerfrei und unverzollt in die Schweiz." },
            ].map((u, i) => (
              <Reveal key={i} delay={i * 0.06}><div style={{ background: C.bg, border: `1px solid ${C.border}`, padding: "36px 32px", transition: "all 0.3s", cursor: "default", height: "100%" }} onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; }} onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; }}>
                <h3 style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", color: C.text, margin: "0 0 10px" }}>{u.title}</h3>
                <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.65, margin: 0 }}>{u.text}</p>
              </div></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ KUNDENSTIMMEN ═══ */}
      <section style={{ padding: "96px 32px", background: C.bg, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Heading overline="REFERENZEN" title="DAS SAGEN SCHULEN ÜBER DEN PULTTEILER" sub={`Über ${SCHOOLS_COUNT} Schulen in Österreich, Deutschland und der Schweiz arbeiten mit unseren Teilern — einige Stimmen:`}/>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: 2 }}>
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <figure style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "32px 30px", margin: 0, height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 44, color: C.accent, lineHeight: 0.6, marginBottom: 16 }}>„</div>
                  <blockquote style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.text, lineHeight: 1.7, margin: "0 0 20px", flex: 1 }}>{t.quote}</blockquote>
                  <figcaption>
                    <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, fontWeight: 700, color: C.text }}>{t.name}</div>
                    <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 12, color: C.textMuted }}>{t.role} · {t.school}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}><div style={{ marginTop: 32, textAlign: "center" }}><Btn href="/galerie" variant="secondary">REFERENZEN & EINSATZBILDER ANSEHEN →</Btn></div></Reveal>
        </div>
      </section>

      {/* ═══ LÄNDER / BESTELLUNG ═══ */}
      <section style={{ padding: "96px 32px", background: C.bgCard, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Heading overline="SCHULGERECHT BESTELLEN" title="KAUF AUF RECHNUNG — IN JEDEM LAND" sub="Kein Kreditkarten-Checkout: Sie bestellen per Anfrage oder im Shop und zahlen nach Lieferung auf Rechnung — so, wie Schulen und Schulerhalter es brauchen."/>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 2 }}>
            {COUNTRY_INFO.map((c, i) => (
              <Reveal key={c.code} delay={i * 0.08}>
                <div style={{ background: C.bg, border: `1px solid ${C.border}`, padding: "32px 30px", height: "100%" }}>
                  <div style={{ fontSize: 32, marginBottom: 10 }}>{c.flag}</div>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: C.text, margin: "0 0 14px", letterSpacing: "0.03em" }}>{c.name.toUpperCase()}</h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {c.lines.map((l, j) => <li key={j} style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.6, padding: "5px 0" }}>— {l}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RATGEBER-TEASER ═══ */}
      <section style={{ padding: "96px 32px", background: C.bg, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Heading overline="PRAXISWISSEN" title="RATGEBER FÜR SCHULEN" sub="Faire Prüfungen, Konzentration, reizarme Lernumgebungen — Wissen aus über 40 Jahren Schulpraxis:"/>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 2 }}>
            {ARTICLES.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.07}>
                <Link href={`/ratgeber/${a.slug}`} style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "28px 28px 30px", textDecoration: "none", display: "flex", flexDirection: "column", height: "100%", transition: "border-color 0.3s" }} onMouseEnter={e => e.currentTarget.style.borderColor = C.accent} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                  <h3 style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 15, fontWeight: 700, color: C.text, lineHeight: 1.45, margin: "0 0 12px" }}>{a.title}</h3>
                  <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.textMuted, lineHeight: 1.6, margin: "0 0 16px", flex: 1 }}>{a.teaser}</p>
                  <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: C.accent }}>LESEN →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ padding: "96px 32px", background: C.bgCard, borderTop: `1px solid ${C.border}` }}>
        <Reveal><div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <Heading overline="JETZT LOSLEGEN" title="BEREIT FÜR FAIRE PRÜFUNGEN?" align="center" sub="Fordern Sie ein unverbindliches Angebot für Ihre Schule an — oder bestellen Sie direkt im Shop. Kauf auf Rechnung, Lieferung in 5–10 Werktagen."/>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}><Btn href="/angebot">ANGEBOT ANFORDERN →</Btn><Btn href="/produkte" variant="secondary">ZUM SHOP</Btn></div>
        </div></Reveal>
      </section>
    </div>
  );
}
