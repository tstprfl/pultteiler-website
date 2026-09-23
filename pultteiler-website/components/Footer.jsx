"use client";
import Link from "next/link";
import { C } from "@/lib/colors";
import { SCHOOLS_TEXT, YEARS } from "@/lib/site";
import { usePathname } from "next/navigation";
import Img from "@/components/Img";
import { isEnPath } from "@/lib/i18n";

const COLS = [
  {
    title: "FÜR IHRE SCHULE",
    links: [
      { href: "/volksschule", label: "Volksschule & Primarstufe" },
      { href: "/sekundarstufe", label: "Sekundarstufe & Gymnasium" },
      { href: "/hochschulen", label: "Hochschulen & Prüfungszentren" },
      { href: "/angebot", label: "Angebot anfordern" },
      { href: "/produkte", label: "Online-Shop" },
    ],
  },
  {
    title: "RATGEBER",
    links: [
      { href: "/ratgeber/sichtschutz-klassenarbeit", label: "Sichtschutz für die Klassenarbeit" },
      { href: "/ratgeber/trennwand-schultisch-pruefung", label: "Trennwand für den Schultisch" },
      { href: "/ratgeber/abschreiben-verhindern-schularbeit", label: "Abschreiben verhindern" },
      { href: "/ratgeber/reizarmer-arbeitsplatz-schule", label: "Reizarmer Arbeitsplatz" },
      { href: "/ratgeber", label: "Alle Artikel" },
    ],
  },
  {
    title: "SERVICE",
    links: [
      { href: "/anleitung", label: "So funktioniert's" },
      { href: "/galerie", label: "Referenzen & Galerie" },
      { href: "/versand", label: "Versand & Rückgabe" },
      { href: "/ueber-uns", label: "Über uns" },
      { href: "/kontakt", label: "Kontakt" },
    ],
  },
];

// Englische Testseiten: nur die drei englischen Seiten, Rechtstexte bleiben deutsch
const COLS_EN = [
  {
    title: "PULTTEILER",
    links: [
      { href: "/en/universities", label: "Universities & exam centres" },
      { href: "/en/products", label: "Products" },
      { href: "/en/quote", label: "Request a quote" },
      { href: "/", label: "Deutsche Website" },
    ],
  },
];
const LEGAL_DE = [{ href: "/impressum", label: "Impressum" }, { href: "/agb", label: "AGB" }, { href: "/datenschutz", label: "Datenschutz" }];
const LEGAL_EN = [{ href: "/impressum", label: "Imprint (German)" }, { href: "/agb", label: "Terms (German)" }, { href: "/datenschutz", label: "Privacy (German)" }];

export default function Footer() {
  const en = isEnPath(usePathname());
  const cols = en ? COLS_EN : COLS;
  return (
    <footer style={{ background: C.bg, color: C.text, padding: "72px 32px 40px", borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <Img sizes="44px" src="/images/Klammer_2.png" alt="Pultteiler Klammer" loading="lazy" style={{ width: 44, height: 44, objectFit: "contain", borderRadius: 4 }}/>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, color: C.text, letterSpacing: "0.05em" }}>PULTTEILER</span>
          </div>
          {en ? (
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.textMuted, lineHeight: 1.7 }}>Proven privacy screens for school and exam desks, direct from the manufacturer for over {YEARS} years. Delivery to other countries on request.</p>
          ) : (
            <>
              <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.textMuted, lineHeight: 1.7 }}>Der bewährte Sichtschutz für Schultische — direkt vom Produzenten, seit über {YEARS} Jahren. {SCHOOLS_TEXT}.</p>
              <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, fontWeight: 600, color: C.text, marginTop: 12 }}>✓ Kauf auf Rechnung</p>
            </>
          )}
        </div>
        {cols.map(col => (
          <div key={col.title}>
            <h4 style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: C.textMuted, marginBottom: 20 }}>{col.title}</h4>
            {col.links.map(l => <Link key={l.href} href={l.href} style={{ display: "block", fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.text, padding: "5px 0", textDecoration: "none" }}>{l.label}</Link>)}
          </div>
        ))}
        <div>
          <h4 style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: C.textMuted, marginBottom: 20 }}>{en ? "CONTACT" : "KONTAKT"}</h4>
          <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.text, lineHeight: 2 }}>Schulmittel Blaschegg<br/>Michael Blaschegg<br/>Stücklbachstraße 13, 4813 Altmünster{en ? ", Austria" : ""}<br/><a href="mailto:blaschegg@traunseenet.at" style={{ color: C.accent, textDecoration: "none" }}>blaschegg@traunseenet.at</a><br/>+43 (0) 676 935 40 33<br/>+43 (0) 699 129 613 70</p>
        </div>
      </div>
      <div style={{ maxWidth: 1280, margin: "48px auto 0", borderTop: `1px solid ${C.border}`, paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
        <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 12, color: C.textMuted }}>© {new Date().getFullYear()} Schulmittel Blaschegg</span>
        <div style={{ display: "flex", gap: 20 }}>
          {(en ? LEGAL_EN : LEGAL_DE).map(l => (
            <Link key={l.href} href={l.href} style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 12, color: C.textMuted, textDecoration: "underline" }}>{l.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
