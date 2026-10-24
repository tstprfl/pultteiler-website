"use client";
import { C } from "@/lib/colors";
import { Heading } from "@/components/ui";

const s = { fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 15, color: "#5A6B6B", lineHeight: 1.75, margin: "0 0 20px" };
const h = { fontFamily: "'Archivo Variable', sans-serif", fontWeight: 600, fontSize: 24, color: "#1A2A2A", margin: "40px 0 16px" };

export default function DatenschutzPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Heading as="h1" overline="Rechtliches" title="Datenschutzerklärung"/>
          <div className="card-pad" style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "48px 40px" }}>
            <h2 style={{ ...h, marginTop: 0 }}>1. Verantwortlicher</h2>
            <p style={s}>Schulmittel Blaschegg<br/>Michael Blaschegg<br/>Stücklbachstraße 13, 4813 Altmünster, Österreich<br/>E-Mail: <a href="mailto:blaschegg@traunseenet.at" style={{ color: C.accentText, textDecoration: "none" }}>blaschegg@traunseenet.at</a><br/>Telefon: +43 (0) 676 935 40 33</p>

            <h2 style={h}>2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p style={s}>Wir erheben und verarbeiten personenbezogene Daten nur im Rahmen der geltenden Datenschutzgesetze, insbesondere der EU-Datenschutz-Grundverordnung (DSGVO) und des österreichischen Datenschutzgesetzes (DSG). Personenbezogene Daten werden nur erhoben, wenn Sie uns diese freiwillig mitteilen, z.B. bei einer Bestellung, Kontaktanfrage oder Registrierung.</p>

            <h2 style={h}>3. Zweck der Datenverarbeitung</h2>
            <p style={s}>Ihre personenbezogenen Daten werden für folgende Zwecke verarbeitet:</p>
            <p style={{ ...s, paddingLeft: 16 }}>— Abwicklung von Bestellungen und Lieferungen (Art. 6 Abs. 1 lit. b DSGVO)<br/>— Beantwortung von Kontaktanfragen (Art. 6 Abs. 1 lit. b DSGVO)<br/>— Rechnungsstellung und buchhalterische Dokumentation (Art. 6 Abs. 1 lit. c DSGVO)<br/>— Ausstellung von E-Rechnungen an österreichische Bundesschulen (Art. 6 Abs. 1 lit. c DSGVO)</p>

            <h2 style={h}>4. Weitergabe von Daten an Dritte</h2>
            <p style={s}>Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, soweit dies zur Vertragserfüllung erforderlich ist (z.B. Übermittlung der Lieferadresse an den Paketdienstleister) oder eine gesetzliche Verpflichtung besteht. Darüber hinaus werden Ihre Daten nicht an Dritte weitergegeben.</p>

            <h2 style={h}>5. EmailJS (E-Mail-Versand)</h2>
            <p style={s}>Für den Versand von Bestell- und Kontaktbestätigungen nutzen wir den Dienst EmailJS (emailjs.com). Dabei werden die von Ihnen eingegebenen Daten (Name, E-Mail-Adresse, Bestelldaten) über die Server von EmailJS verarbeitet, um E-Mails zuzustellen. EmailJS verarbeitet Daten gemäß seiner eigenen Datenschutzrichtlinie. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).</p>

            <h2 style={h}>6. Hosting (Vercel)</h2>
            <p style={s}>Diese Website wird bei Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet. Beim Besuch der Website werden automatisch technische Daten (IP-Adresse, Browsertyp, Zugriffszeit) in Server-Logfiles erfasst. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren Bereitstellung der Website). Vercel ist unter dem EU-US Data Privacy Framework zertifiziert.</p>

            <h2 style={h}>7. Schriftarten</h2>
            <p style={s}>Die auf dieser Website verwendeten Schriftarten (Archivo, Source Sans 3) sind lokal eingebunden und werden zusammen mit der Website von unserem Hosting-Anbieter ausgeliefert. Es wird keine Verbindung zu Servern von Google oder anderen Schriftarten-Anbietern hergestellt.</p>

            <h2 style={h}>8. Cookies und Einwilligung</h2>
            <p style={s}>Technisch notwendige Speichervorgänge (zum Beispiel der Inhalt des Warenkorbs, das gewählte Lieferland und Ihre Cookie-Entscheidung) erfolgen im lokalen Speicher Ihres Browsers und sind für den Betrieb der Website erforderlich (§ 165 Abs. 3 TKG 2021). Dafür ist keine Einwilligung nötig.</p>
            <p style={s}>Cookies zur Reichweitenmessung (Google Analytics, siehe Punkt 9) setzen wir nur, wenn Sie im Cookie-Banner auf „Akzeptieren“ klicken. Ohne Ihre Zustimmung wird kein Analyse-Skript geladen und kein Cookie gesetzt; die Website bleibt voll nutzbar. Sie können Ihre Entscheidung jederzeit über den Link „Cookie-Einstellungen“ am Ende jeder Seite ändern oder widerrufen. Bei einem Widerruf werden die gesetzten Analyse-Cookies gelöscht und die Messung beendet.</p>

            <h2 style={h}>9. Google Analytics (Reichweitenmessung)</h2>
            <p style={s}>Mit Ihrer Einwilligung nutzen wir Google Analytics 4, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“). Google Analytics verwendet Cookies, die eine Analyse der Nutzung der Website ermöglichen. Dabei werden Informationen über Ihre Nutzung (aufgerufene Seiten, Verweildauer, ungefährer Standort auf Basis der gekürzten IP-Adresse, Gerätetyp, Browser, Herkunftsquelle) an Server von Google übertragen und dort verarbeitet. Google Analytics 4 speichert keine vollständigen IP-Adressen; die IP-Adresse wird nach Google-Angaben vor der Speicherung gekürzt und nur zur groben Standortbestimmung verwendet.</p>
            <p style={s}>Zweck: statistische Auswertung der Nutzung, um die Website zu verbessern. Rechtsgrundlage: Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 165 Abs. 3 TKG 2021). Gesetzte Cookies: „_ga“ und „_ga_5G0ZPC3RRQ“ (Unterscheidung von Besuchern, Laufzeit bis zu 2 Jahre). Speicherdauer bei Google Analytics: Ereignisdaten 2 Monate, nutzerbezogene Daten 14 Monate. Google-Signale, Werbefunktionen und die Weitergabe an Google Ads sind deaktiviert.</p>
            <p style={s}>Google kann die Daten in die USA übermitteln. Google LLC ist nach dem EU-US Data Privacy Framework zertifiziert; ergänzend gelten die Standardvertragsklauseln der EU-Kommission. Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: C.accentText, textDecoration: "none" }}>policies.google.com/privacy</a> und <a href="https://support.google.com/analytics/answer/6004245" target="_blank" rel="noopener noreferrer" style={{ color: C.accentText, textDecoration: "none" }}>Google-Hinweise zu Analytics und Datenschutz</a>. Sie können die Erfassung zusätzlich mit dem <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: C.accentText, textDecoration: "none" }}>Browser-Add-on zur Deaktivierung von Google Analytics</a> verhindern.</p>

            <h2 style={h}>10. Speicherdauer</h2>
            <p style={s}>Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Bestelldaten werden entsprechend der steuerrechtlichen Aufbewahrungspflicht (7 Jahre gem. § 132 BAO) gespeichert.</p>

            <h2 style={h}>11. Ihre Rechte</h2>
            <p style={s}>Sie haben gemäß DSGVO folgende Rechte:</p>
            <p style={{ ...s, paddingLeft: 16 }}>— Recht auf Auskunft (Art. 15 DSGVO)<br/>— Recht auf Berichtigung (Art. 16 DSGVO)<br/>— Recht auf Löschung (Art. 17 DSGVO)<br/>— Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)<br/>— Recht auf Datenübertragbarkeit (Art. 20 DSGVO)<br/>— Widerspruchsrecht (Art. 21 DSGVO)</p>
            <p style={s}>Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <a href="mailto:blaschegg@traunseenet.at" style={{ color: C.accentText, textDecoration: "none" }}>blaschegg@traunseenet.at</a></p>

            <h2 style={h}>12. Beschwerderecht</h2>
            <p style={s}>Sie haben das Recht, eine Beschwerde bei der zuständigen Datenschutzbehörde einzureichen:</p>
            <p style={s}>Österreichische Datenschutzbehörde<br/>Barichgasse 40–42, 1030 Wien<br/><a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" style={{ color: C.accentText, textDecoration: "none" }}>www.dsb.gv.at</a></p>

            <h2 style={h}>13. Änderungen</h2>
            <p style={{ ...s, marginBottom: 0 }}>Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um den aktuellen rechtlichen Anforderungen zu entsprechen. Stand: Oktober 2026.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
