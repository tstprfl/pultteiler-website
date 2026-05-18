"use client";
import { C } from "@/lib/colors";
import { Heading } from "@/components/ui";

const s = { fontFamily: "'Inter Tight', sans-serif", fontSize: 15, color: "#5A6B6B", lineHeight: 1.75, margin: "0 0 20px" };
const h = { fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: "#1A2A2A", margin: "40px 0 16px" };

export default function DatenschutzPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Heading overline="RECHTLICHES" title="DATENSCHUTZERKLÄRUNG"/>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "48px 40px" }}>
            <h2 style={{ ...h, marginTop: 0 }}>1. VERANTWORTLICHER</h2>
            <p style={s}>Schulmittel Blaschegg<br/>Michael Blaschegg<br/>Stücklbachstraße 13, 4813 Altmünster, Österreich<br/>E-Mail: <a href="mailto:blaschegg@traunseenet.at" style={{ color: C.accent, textDecoration: "none" }}>blaschegg@traunseenet.at</a><br/>Telefon: +43 (0) 676 935 40 33</p>

            <h2 style={h}>2. ERHEBUNG UND VERARBEITUNG PERSONENBEZOGENER DATEN</h2>
            <p style={s}>Wir erheben und verarbeiten personenbezogene Daten nur im Rahmen der geltenden Datenschutzgesetze, insbesondere der EU-Datenschutz-Grundverordnung (DSGVO) und des österreichischen Datenschutzgesetzes (DSG). Personenbezogene Daten werden nur erhoben, wenn Sie uns diese freiwillig mitteilen, z.B. bei einer Bestellung, Kontaktanfrage oder Registrierung.</p>

            <h2 style={h}>3. ZWECK DER DATENVERARBEITUNG</h2>
            <p style={s}>Ihre personenbezogenen Daten werden für folgende Zwecke verarbeitet:</p>
            <p style={{ ...s, paddingLeft: 16 }}>— Abwicklung von Bestellungen und Lieferungen (Art. 6 Abs. 1 lit. b DSGVO)<br/>— Beantwortung von Kontaktanfragen (Art. 6 Abs. 1 lit. b DSGVO)<br/>— Rechnungsstellung und buchhalterische Dokumentation (Art. 6 Abs. 1 lit. c DSGVO)<br/>— Ausstellung von E-Rechnungen an österreichische Bundesschulen (Art. 6 Abs. 1 lit. c DSGVO)</p>

            <h2 style={h}>4. WEITERGABE VON DATEN AN DRITTE</h2>
            <p style={s}>Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, soweit dies zur Vertragserfüllung erforderlich ist (z.B. Übermittlung der Lieferadresse an den Paketdienstleister) oder eine gesetzliche Verpflichtung besteht. Darüber hinaus werden Ihre Daten nicht an Dritte weitergegeben.</p>

            <h2 style={h}>5. EMAILJS — E-MAIL-VERSAND</h2>
            <p style={s}>Für den Versand von Bestell- und Kontaktbestätigungen nutzen wir den Dienst EmailJS (emailjs.com). Dabei werden die von Ihnen eingegebenen Daten (Name, E-Mail-Adresse, Bestelldaten) über die Server von EmailJS verarbeitet, um E-Mails zuzustellen. EmailJS verarbeitet Daten gemäß seiner eigenen Datenschutzrichtlinie. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).</p>

            <h2 style={h}>6. HOSTING — VERCEL</h2>
            <p style={s}>Diese Website wird bei Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet. Beim Besuch der Website werden automatisch technische Daten (IP-Adresse, Browsertyp, Zugriffszeit) in Server-Logfiles erfasst. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren Bereitstellung der Website). Vercel ist unter dem EU-US Data Privacy Framework zertifiziert.</p>

            <h2 style={h}>7. GOOGLE FONTS</h2>
            <p style={s}>Diese Website verwendet Google Fonts zur einheitlichen Darstellung von Schriftarten. Die Schriftarten werden direkt von Google-Servern geladen. Dabei wird Ihre IP-Adresse an Google übermittelt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen finden Sie in der Datenschutzerklärung von Google.</p>

            <h2 style={h}>8. COOKIES</h2>
            <p style={s}>Diese Website verwendet keine Tracking-Cookies und kein Webanalyse-Tool. Es werden keine Daten zu Werbezwecken erhoben. Technisch notwendige Cookies können für die Funktionalität der Website eingesetzt werden.</p>

            <h2 style={h}>9. SPEICHERDAUER</h2>
            <p style={s}>Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Bestelldaten werden entsprechend der steuerrechtlichen Aufbewahrungspflicht (7 Jahre gem. § 132 BAO) gespeichert.</p>

            <h2 style={h}>10. IHRE RECHTE</h2>
            <p style={s}>Sie haben gemäß DSGVO folgende Rechte:</p>
            <p style={{ ...s, paddingLeft: 16 }}>— Recht auf Auskunft (Art. 15 DSGVO)<br/>— Recht auf Berichtigung (Art. 16 DSGVO)<br/>— Recht auf Löschung (Art. 17 DSGVO)<br/>— Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)<br/>— Recht auf Datenübertragbarkeit (Art. 20 DSGVO)<br/>— Widerspruchsrecht (Art. 21 DSGVO)</p>
            <p style={s}>Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <a href="mailto:blaschegg@traunseenet.at" style={{ color: C.accent, textDecoration: "none" }}>blaschegg@traunseenet.at</a></p>

            <h2 style={h}>11. BESCHWERDERECHT</h2>
            <p style={s}>Sie haben das Recht, eine Beschwerde bei der zuständigen Datenschutzbehörde einzureichen:</p>
            <p style={s}>Österreichische Datenschutzbehörde<br/>Barichgasse 40–42, 1030 Wien<br/><a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" style={{ color: C.accent, textDecoration: "none" }}>www.dsb.gv.at</a></p>

            <h2 style={h}>12. ÄNDERUNGEN</h2>
            <p style={{ ...s, marginBottom: 0 }}>Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um den aktuellen rechtlichen Anforderungen zu entsprechen. Stand: April 2026.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
