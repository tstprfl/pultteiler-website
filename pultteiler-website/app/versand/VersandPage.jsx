"use client";
import { C } from "@/lib/colors";
import { Reveal, Heading, Btn } from "@/components/ui";

const s = { fontFamily: "'Inter Tight', sans-serif", fontSize: 15, color: "#5A6B6B", lineHeight: 1.75, margin: "0 0 20px" };
const h = { fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 24, color: "#1A2A2A", margin: "40px 0 16px" };
const bullet = (text) => <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: "#5A6B6B", lineHeight: 1.75, margin: "0 0 8px", paddingLeft: 16 }}>— {text}</p>;

export default function VersandPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Heading overline="Lieferung & Rückgabe" title="Versand & Rückgabe"/>
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 2, marginBottom: 2 }}>
              {[
                { icon: "🇦🇹", label: "Österreich", val: "€ 12,00 je Bestellung", sub: "netto — ab 3 Koffer-Sets kostenlos" },
                { icon: "🇩🇪", label: "Deutschland", val: "€ 12,00 je Bestellung", sub: "netto — ab 3 Koffer-Sets kostenlos" },
                { icon: "🇨🇭", label: "Schweiz", val: "€ 25,00 je Bestellung", sub: "steuerfrei & unverzollt — ab 3 Koffer-Sets kostenlos" },
                { icon: "🌍", label: "Andere Länder", val: "Auf Anfrage", sub: "Bitte kontaktieren Sie uns" },
              ].map((m, i) => (
                <div key={i} style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "28px 24px", textAlign: "center", transition: "border-color 0.3s" }} onMouseEnter={e => e.currentTarget.style.borderColor = C.accent} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>{m.icon}</div>
                  <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", color: C.textMuted, marginBottom: 8 }}>{m.label}</div>
                  <div style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 18, color: C.accent, marginBottom: 4 }}>{m.val}</div>
                  <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 12, color: C.textMuted }}>{m.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "48px 40px", marginTop: 2 }}>
            <h2 style={{ ...h, marginTop: 0 }}>1. Versandbedingungen</h2>
            <p style={s}>Wir versenden alle Bestellungen direkt ab Werk in Altmünster am Traunsee. Der Versand erfolgt mit einem zuverlässigen Paketdienstleister. Nach Eingang und Bearbeitung Ihrer Bestellung erhalten Sie eine Bestätigungs-E-Mail.</p>
            <h2 style={h}>2. Lieferzeiten</h2>
            <p style={s}>Die Lieferzeit beträgt in der Regel <strong>5–10 Werktage</strong> ab Auftragsbestätigung. Für Lieferungen in die Schweiz kann die Lieferzeit geringfügig länger ausfallen. Bei Lieferverzögerungen werden Sie von uns unverzüglich informiert.</p>
            <h2 style={h}>3. Versandkosten im Detail</h2>
            {bullet("Österreich & Deutschland: € 12,00 Versandpauschale je Bestellung (netto, zzgl. 20% USt) — für Koffer-Sets und Ersatzteile")}
            {bullet("Schweiz: € 25,00 Versandpauschale je Bestellung, steuerfrei und unverzollt")}
            {bullet("Ab 3 Koffer-Sets in einer Bestellung: versandkostenfrei in alle drei Länder")}
            {bullet("Andere Länder: Versandkosten auf Anfrage — bitte kontaktieren Sie uns")}
            <p style={s}>Alle Preise im Shop sind Nettopreise. Für Österreich und Deutschland kommt die gesetzliche Umsatzsteuer von 20% hinzu, sie wird im Warenkorb ausgewiesen.</p>
            <h2 style={h}>4. Lieferung in die Schweiz</h2>
            <p style={s}>Lieferungen in die Schweiz erfolgen <strong>steuerfrei und unverzollt</strong>. Der im Shop ausgewiesene Preis zuzüglich der Versandpauschale ist Ihr Endpreis — es fallen für Sie keine zusätzlichen Zollgebühren oder Einfuhrsteuern an.</p>
            <h2 style={h}>5. Steuerfreie Lieferung nach Deutschland</h2>
            <p style={s}>Unternehmen und Institutionen in Deutschland können bei Angabe einer gültigen deutschen UID-Nummer eine steuerfreie innergemeinschaftliche Lieferung in Anspruch nehmen. Ein deutsches Bankkonto für die Zahlung ist vorhanden.</p>
            <h2 style={h}>6. E-Rechnung für österreichische Bundesschulen</h2>
            <p style={s}>Für Schulen des Bundes in Österreich stellen wir E-Rechnungen aus. Bitte geben Sie Ihre EKG-Nummer im Bestellformular an.</p>
            <h2 style={h}>7. Widerrufsrecht & Rückgabe</h2>
            <p style={s}>Verbraucher im Sinne des Konsumentenschutzgesetzes haben das Recht, den Vertrag innerhalb von <strong>14 Tagen ohne Angabe von Gründen zu widerrufen</strong> (§ 11 FAGG). Die Frist beginnt mit dem Tag, an dem Sie oder ein von Ihnen benannter Dritter die Ware in Empfang genommen hat.</p>
            <p style={s}>Um Ihr Widerrufsrecht auszuüben, informieren Sie uns bitte per E-Mail an <a href="mailto:blaschegg@traunseenet.at" style={{ color: C.accent, textDecoration: "none" }}>blaschegg@traunseenet.at</a> oder per Post an: Schulmittel Blaschegg, Stücklbachstraße 13, 4813 Altmünster, Österreich.</p>
            <h2 style={h}>8. Rücksendung</h2>
            <p style={s}>Nach Ausübung des Widerrufsrechts senden Sie die Ware bitte unverzüglich und spätestens innerhalb von <strong>14 Tagen</strong> an unsere Adresse zurück.</p>
            <div style={{ background: C.bgElevated, border: `1px solid ${C.border}`, padding: "20px 24px", marginBottom: 20 }}>
              <p style={{ ...s, margin: 0 }}><strong>Schulmittel Blaschegg</strong><br/>Michael Blaschegg<br/>Stücklbachstraße 13<br/>4813 Altmünster<br/>Österreich</p>
            </div>
            <p style={s}>Die unmittelbaren Kosten der Rücksendung trägt der Käufer. Wir empfehlen die Rücksendung per <strong>Hermes</strong> — die Kosten betragen ca. <strong>€ 6,50</strong>.</p>
            <h2 style={h}>9. Rückerstattung</h2>
            <p style={s}>Nach Eingang des wirksamen Widerrufs erstatten wir den Kaufpreis unverzüglich, spätestens jedoch <strong>binnen 14 Tagen</strong>. Die Rückerstattung erfolgt über dasselbe Zahlungsmittel, das bei der ursprünglichen Transaktion verwendet wurde.</p>
            <h2 style={h}>10. Zustand der rückgesendeten Ware</h2>
            <p style={s}>Sie sind nur für einen etwaigen Wertverlust der Ware verantwortlich, der auf einen zur Prüfung der Beschaffenheit nicht notwendigen Umgang zurückzuführen ist.</p>
            <h2 style={h}>11. Ausnahmen vom Widerrufsrecht</h2>
            <p style={{ ...s, marginBottom: 0 }}>Das Widerrufsrecht gilt nicht für Waren, die nach Kundenspezifikation individuell angefertigt wurden. Für Fragen stehen wir unter <a href="mailto:blaschegg@traunseenet.at" style={{ color: C.accent, textDecoration: "none" }}>blaschegg@traunseenet.at</a> zur Verfügung.</p>
          </div>
          <Reveal delay={0.2}><div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}><Btn href="/produkte">Zum Shop</Btn><Btn href="/kontakt" variant="secondary">Fragen? Kontakt →</Btn></div></Reveal>
        </div>
      </section>
    </div>
  );
}
