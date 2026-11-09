"use client";
import Link from "next/link";
import { C } from "@/lib/colors";
import { SCHOOLS_TEXT, YEARS, CONTACT } from "@/lib/site";
import Img from "@/components/Img";

const COLS = [
  {
    title: "Für Ihre Schule",
    links: [
      { href: "/volksschule", label: "Volksschule & Primarstufe" },
      { href: "/sekundarstufe", label: "Sekundarstufe & Gymnasium" },
      { href: "/hochschulen", label: "Hochschulen & Prüfungszentren" },
      { href: "/produkte", label: "Online-Shop" },
    ],
  },
  {
    title: "Ratgeber",
    links: [
      { href: "/ratgeber/sichtschutz-klassenarbeit", label: "Sichtschutz für Klassenarbeiten" },
      { href: "/ratgeber/trennwand-schultisch-pruefung", label: "Trennwand für den Schultisch" },
      { href: "/ratgeber/abschreiben-verhindern-schularbeit", label: "Abschreiben verhindern" },
      { href: "/ratgeber/reizarmer-arbeitsplatz-schule", label: "Reizarmer Arbeitsplatz" },
      { href: "/ratgeber", label: "Alle Artikel" },
    ],
  },
  {
    title: "Service",
    links: [
      { href: "/anleitung", label: "So funktioniert's" },
      { href: "/galerie", label: "Referenzen & Galerie" },
      { href: "/versand", label: "Versand & Rückgabe" },
      { href: "/ueber-uns", label: "Über uns" },
      { href: "/kontakt", label: "Kontakt" },
      { href: "/vertrag-widerrufen", label: "Vertrag widerrufen" },
    ],
  },
];

const LEGAL_DE = [{ href: "/impressum", label: "Impressum" }, { href: "/agb", label: "AGB" }, { href: "/widerrufsbelehrung", label: "Widerrufsbelehrung" }, { href: "/gewaehrleistung", label: "Gewährleistung" }, { href: "/datenschutz", label: "Datenschutz" }];

export default function Footer() {
  const cols = COLS;
  return (
    <footer style={{ background: C.bg, color: C.text, padding: "72px 32px 40px", borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <Img sizes="44px" src="/images/Klammer_2.png" alt="Pultteiler Klammer" loading="lazy" style={{ width: 44, height: 44, objectFit: "contain", borderRadius: 4 }}/>
            <span style={{ fontFamily: "'Archivo Variable', sans-serif", fontWeight: 600, fontSize: 22, color: C.text, letterSpacing: "0.05em" }}>Pultteiler</span>
          </div>
              <p style={{ fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 13, color: C.textMuted, lineHeight: 1.7 }}>Der bewährte Sichtschutz für Schultische, direkt vom Produzenten, seit über {YEARS} Jahren. {SCHOOLS_TEXT}.</p>
              <p style={{ fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 13, fontWeight: 600, color: C.text, marginTop: 12 }}>✓ Kauf auf Rechnung</p>
        </div>
        {cols.map(col => (
          <div key={col.title}>
            <h2 style={{ fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", color: C.textMuted, margin: "0 0 20px" }}>{col.title}</h2>
            {col.links.map(l => <Link key={l.href} href={l.href} style={{ display: "block", fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 13, color: C.text, padding: "5px 0", textDecoration: "none" }}>{l.label}</Link>)}
          </div>
        ))}
        <div>
          <h2 style={{ fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", color: C.textMuted, margin: "0 0 20px" }}>Kontakt</h2>
          <p style={{ fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 13, color: C.text, lineHeight: 2 }}>Schulmittel Blaschegg<br/>Michael Blaschegg<br/>Stücklbachstraße 13, 4813 Altmünster<br/><a href="mailto:blaschegg@traunseenet.at" style={{ color: C.accentText, textDecoration: "none" }}>blaschegg@traunseenet.at</a><br/><a href={CONTACT.tel1} style={{ color: C.text, textDecoration: "none", fontWeight: 600 }}>{CONTACT.phone1}</a><br/><span style={{ color: C.textMuted }}>Zusatznummer: </span><a href={CONTACT.tel2} style={{ color: C.text, textDecoration: "none", fontWeight: 600 }}>{CONTACT.phone2}</a><br/><span style={{ color: C.textMuted }}>Festnetz: </span><a href={CONTACT.tel3} style={{ color: C.text, textDecoration: "none", fontWeight: 600 }}>{CONTACT.phone3}</a></p>
        </div>
      </div>
      <div className="footer-legal" style={{ maxWidth: 1280, margin: "48px auto 0", borderTop: `1px solid ${C.border}`, paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
        <span style={{ fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 12, color: C.textMuted }}>© {new Date().getFullYear()} Schulmittel Blaschegg</span>
        <div style={{ display: "flex", gap: 20 }}>
          {LEGAL_DE.map(l => (
            <Link key={l.href} href={l.href} style={{ fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 12, color: C.textMuted, textDecoration: "underline" }}>{l.label}</Link>
          ))}
          <Link href="/vertrag-widerrufen" style={{ fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 13, fontWeight: 700, color: C.accentText, textDecoration: "underline" }}>Vertrag widerrufen</Link>
        </div>
      </div>
    </footer>
  );
}
