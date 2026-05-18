"use client";
import { C } from "@/lib/colors";
import { Heading } from "@/components/ui";

const s = { fontFamily: "'Inter Tight', sans-serif", fontSize: 15, color: "#5A6B6B", lineHeight: 1.75, margin: "0 0 20px" };
const h = { fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: "#1A2A2A", margin: "40px 0 16px" };

export default function ImpressumPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Heading overline="RECHTLICHES" title="IMPRESSUM"/>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "48px 40px" }}>
            <h2 style={{ ...h, marginTop: 0 }}>ANGABEN GEM. § 5 ECG</h2>
            <p style={s}><strong>Schulmittel Blaschegg</strong><br/>Michael Blaschegg<br/>Herstellung von sonstigen Kunststoffwaren a.n.g.</p>
            <h2 style={h}>FIRMENSITZ</h2>
            <p style={s}>Stücklbachstraße 13<br/>4813 Altmünster<br/>Österreich</p>
            <h2 style={h}>KONTAKTDATEN</h2>
            <p style={s}>E-Mail: <a href="mailto:blaschegg@traunseenet.at" style={{ color: C.accent, textDecoration: "none" }}>blaschegg@traunseenet.at</a><br/>Telefon:<br/>+43 (0) 676 935 40 33<br/>+43 (0) 699 129 613 70</p>
            <h2 style={h}>UNTERNEHMENSDATEN</h2>
            <p style={s}>Umsatzsteueridentifikationsnummer: ATU37758404<br/>Unternehmensregister: R013F6512<br/>Gewerbebehörde: BH Gmunden<br/>Mitglied der Wirtschaftskammer Österreich</p>
            <h2 style={h}>BANKVERBINDUNGEN</h2>
            <p style={s}><strong>Österreich:</strong><br/>IBAN: AT88 3451 0000 0202 6441<br/>BIC: RZOOAT2L510</p>
            <p style={s}><strong>Deutschland:</strong><br/>IBAN: DE22 7105 0000 0000 1254 68<br/>BIC: BYLADEM1BGL</p>
          </div>
        </div>
      </section>
    </div>
  );
}
