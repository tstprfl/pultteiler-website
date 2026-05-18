"use client";
import Link from "next/link";
import { C } from "@/lib/colors";
import { NAV } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ background: C.bg, color: C.text, padding: "72px 32px 40px", borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <img src="/images/Klammer_2.png" alt="Pultteiler Klammer" style={{ width: 44, height: 44, objectFit: "contain", borderRadius: 4 }}/>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, color: C.text, letterSpacing: "0.05em" }}>PULTTEILER</span>
          </div>
          <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.textMuted, lineHeight: 1.7 }}>Direkt vom Hersteller. Der bewährte<br/>Pultteiler für Schultische —<br/>europaweit. Seit über 40 Jahren.</p>
        </div>
        <div>
          <h4 style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: C.textMuted, marginBottom: 20 }}>SEITEN</h4>
          {NAV.map(n => <Link key={n.id} href={n.href} style={{ display: "block", fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.text, padding: "5px 0", textDecoration: "none" }}>{n.label}</Link>)}
        </div>
        <div>
          <h4 style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: C.textMuted, marginBottom: 20 }}>KONTAKT</h4>
          <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.text, lineHeight: 2 }}>Schulmittel Blaschegg<br/>Michael Blaschegg<br/>Stücklbachstraße 13, 4813 Altmünster<br/><a href="mailto:blaschegg@traunseenet.at" style={{ color: C.accent, textDecoration: "none" }}>blaschegg@traunseenet.at</a><br/>+43 (0) 676 935 40 33<br/>+43 (0) 699 129 613 70</p>
        </div>
      </div>
      <div style={{ maxWidth: 1280, margin: "48px auto 0", borderTop: `1px solid ${C.border}`, paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
        <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 12, color: C.textMuted }}>© {new Date().getFullYear()} Schulmittel Blaschegg</span>
        <div style={{ display: "flex", gap: 20 }}>
          {[{ href: "/impressum", label: "Impressum" }, { href: "/agb", label: "AGB" }, { href: "/datenschutz", label: "Datenschutz" }].map(l => (
            <Link key={l.href} href={l.href} style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 12, color: C.textMuted, textDecoration: "underline" }}>{l.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
