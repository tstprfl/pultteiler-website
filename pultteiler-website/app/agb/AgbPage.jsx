"use client";
import { C } from "@/lib/colors";
import { Heading } from "@/components/ui";

const s = { fontFamily: "'Inter Tight', sans-serif", fontSize: 15, color: "#5A6B6B", lineHeight: 1.75, margin: "0 0 20px" };
const h = { fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: "#1A2A2A", margin: "40px 0 16px" };

export default function AgbPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Heading overline="RECHTLICHES" title="ALLGEMEINE GESCHÄFTSBEDINGUNGEN"/>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "48px 40px" }}>
            <h2 style={{ ...h, marginTop: 0 }}>§ 1 GELTUNGSBEREICH</h2>
            <p style={s}>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Bestellungen, die über den Online-Shop auf pultteiler.eu an Schulmittel Blaschegg, Michael Blaschegg, Stücklbachstraße 13, 4813 Altmünster, Österreich (im Folgenden „Verkäufer") gerichtet werden. Abweichende Bedingungen des Käufers werden nicht anerkannt, es sei denn, der Verkäufer stimmt ihrer Geltung ausdrücklich schriftlich zu.</p>
            <h2 style={h}>§ 2 VERTRAGSABSCHLUSS</h2>
            <p style={s}>Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern eine unverbindliche Einladung zur Bestellung (invitatio ad offerendum) dar. Mit dem Absenden einer Bestellung gibt der Käufer ein verbindliches Angebot zum Kauf der im Warenkorb enthaltenen Produkte ab. Der Kaufvertrag kommt erst mit der Auftragsbestätigung per E-Mail durch den Verkäufer zustande.</p>
            <h2 style={h}>§ 3 PREISE UND ZAHLUNG</h2>
            <p style={s}>Alle angegebenen Preise für Lieferungen nach Österreich und Deutschland verstehen sich inklusive der gesetzlichen Umsatzsteuer. Für Lieferungen in die Schweiz gelten die im Shop ausgewiesenen steuerfreien Preise (unverzollt). Preisänderungen und Irrtümer vorbehalten.</p>
            <p style={s}>Die Zahlung erfolgt per Rechnung. Die Rechnung wird mit der Lieferung beigelegt oder per E-Mail zugestellt. Die Zahlungsfrist beträgt 14 Tage ab Rechnungsdatum, sofern nicht anders vereinbart.</p>
            <h2 style={h}>§ 4 LIEFERUNG UND VERSAND</h2>
            <p style={s}>Die Lieferung erfolgt an die vom Käufer angegebene Lieferadresse. Der Versand innerhalb von Österreich und Deutschland ist bei Bestellung eines Koffer-Sets kostenlos. Bei Bestellungen von Ersatzteilen (ohne Koffer-Set) fallen Versandkosten in Höhe von € 8,70 an. Lieferungen in die Schweiz erfolgen inklusive Lieferung, steuerfrei und unverzollt.</p>
            <p style={s}>Die Lieferzeit beträgt in der Regel 5–10 Werktage. Abweichende Lieferzeiten werden im Einzelfall kommuniziert.</p>
            <h2 style={h}>§ 5 WIDERRUFSRECHT FÜR VERBRAUCHER</h2>
            <p style={s}>Verbraucher im Sinne des Konsumentenschutzgesetzes (KSchG) haben das Recht, den Vertrag innerhalb von 14 Tagen ohne Angabe von Gründen zu widerrufen (§ 11 FAGG). Die Widerrufsfrist beginnt ab dem Tag, an dem der Käufer oder ein von ihm benannter Dritter die Ware in Besitz genommen hat.</p>
            <p style={s}>Um das Widerrufsrecht auszuüben, ist der Verkäufer mittels einer eindeutigen Erklärung (z.B. per E-Mail an <a href="mailto:blaschegg@traunseenet.at" style={{ color: C.accent, textDecoration: "none" }}>blaschegg@traunseenet.at</a>) über den Entschluss zum Widerruf zu informieren.</p>
            <p style={s}>Im Falle eines wirksamen Widerrufs sind die beiderseits empfangenen Leistungen zurückzugewähren. Die Ware ist unverzüglich und spätestens binnen 14 Tagen zurückzusenden. Die unmittelbaren Kosten der Rücksendung trägt der Käufer. Der Verkäufer erstattet den Kaufpreis unverzüglich, spätestens binnen 14 Tagen ab Erhalt der Widerrufserklärung.</p>
            <h2 style={h}>§ 6 EIGENTUMSVORBEHALT</h2>
            <p style={s}>Die gelieferte Ware bleibt bis zur vollständigen Bezahlung des Kaufpreises Eigentum des Verkäufers.</p>
            <h2 style={h}>§ 7 GEWÄHRLEISTUNG</h2>
            <p style={s}>Es gelten die gesetzlichen Gewährleistungsbestimmungen. Die Gewährleistungsfrist beträgt zwei Jahre ab Übergabe der Ware an den Käufer (§ 933 ABGB). Für Unternehmer beträgt die Gewährleistungsfrist ein Jahr, sofern nicht anders vereinbart.</p>
            <h2 style={h}>§ 8 HAFTUNG</h2>
            <p style={s}>Die Haftung des Verkäufers für leichte Fahrlässigkeit ist ausgeschlossen, soweit gesetzlich zulässig. Dies gilt nicht für Personenschäden oder für Verbrauchergeschäfte, bei denen zwingende gesetzliche Bestimmungen einer Haftungsbeschränkung entgegenstehen.</p>
            <h2 style={h}>§ 9 STEUERFREIE LIEFERUNG</h2>
            <p style={s}>Bei Lieferungen nach Deutschland kann auf Angabe einer gültigen UID-Nummer eine steuerfreie innergemeinschaftliche Lieferung erfolgen. Für österreichische Bundesschulen besteht die Möglichkeit der E-Rechnung.</p>
            <h2 style={h}>§ 10 ANWENDBARES RECHT UND GERICHTSSTAND</h2>
            <p style={s}>Es gilt ausschließlich österreichisches Recht unter Ausschluss des UN-Kaufrechts (CISG). Gerichtsstand ist das sachlich zuständige Gericht in Gmunden, Österreich. Für Verbraucher mit Wohnsitz in der EU gilt der Gerichtsstand am Wohnsitz des Verbrauchers.</p>
            <h2 style={h}>§ 11 SCHLUSSBESTIMMUNGEN</h2>
            <p style={{ ...s, marginBottom: 0 }}>Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Stand: April 2026.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
