import { C } from "@/lib/colors";
import { CONTACT } from "@/lib/site";

// Muster-Widerrufsbelehrung und Muster-Widerrufsformular nach Anhang I Teil A und B FAGG
// (Fassung VerbRÄG 2026, BGBl. I Nr. 59/2026, gültig für Verträge ab 1.10.2026), wörtlich übernommen.
// Gewählte Gestaltungshinweise: [1] lit. c (mehrere Waren, getrennt geliefert), [2] Kontaktdaten, [3] Online-Widerrufsfunktion,
// [4] Zurückbehaltung bis zur Rücksendung, [5] a) Rücksendung an uns, b) Käufer trägt unmittelbare Rücksendekosten, c) Wertverlust.
// Quelle: RIS, Bundesrecht konsolidiert, FAGG Anhang I, abgerufen 6.11.2026.
export const WIDERRUF_URL = "https://www.pultteiler.eu/vertrag-widerrufen";

const f = { fontFamily: "'Source Sans 3 Variable', sans-serif" };

export default function Widerrufsbelehrung({ headingLevel = "h2", withForm = true }) {
  const H = headingLevel;
  const h = { fontFamily: "'Archivo Variable', sans-serif", fontWeight: 600, fontSize: 22, color: C.text, margin: "28px 0 12px" };
  const p = { ...f, fontSize: 15, color: "#3A4A4A", lineHeight: 1.75, margin: "0 0 16px" };
  const firm = `${CONTACT.company}, ${CONTACT.person}, ${CONTACT.street}, ${CONTACT.city}, ${CONTACT.country}, Telefon ${CONTACT.phone1}, E-Mail ${CONTACT.email}`;
  return (
    <div>
      <H style={{ ...h, marginTop: 0 }}>Widerrufsbelehrung</H>
      <p style={{ ...p, fontSize: 13, color: C.textMuted }}>Gilt für Verbraucher im Sinne des Konsumentenschutzgesetzes (KSchG).</p>
      <H style={h}>Widerrufsrecht</H>
      <p style={p}>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
      <p style={p}>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Ware in Besitz genommen haben bzw. hat.</p>
      <p style={p}>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns ({firm}) mittels einer eindeutigen Erklärung (z. B. mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist. Sie können Ihr Widerrufsrecht auch online unter <a href="/vertrag-widerrufen" style={{ color: C.accentText }}>www.pultteiler.eu/vertrag-widerrufen</a> ausüben. Wenn Sie diese Online-Funktion nutzen, übermitteln wir Ihnen auf einem dauerhaften Datenträger (z. B. durch eine E-Mail) unverzüglich eine Eingangsbestätigung mit Informationen zum Inhalt der Widerrufserklärung sowie dem Datum und der Uhrzeit ihres Eingangs.</p>
      <p style={p}>Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p>
      <H style={h}>Folgen des Widerrufs</H>
      <p style={p}>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet. Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.</p>
      <p style={p}>Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns ({CONTACT.company}, {CONTACT.street}, {CONTACT.city}, {CONTACT.country}) zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.</p>
      <p style={p}>Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.</p>
      <p style={p}>Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.</p>
      <H style={h}>Ausschluss des Widerrufsrechts</H>
      <p style={p}>Das Widerrufsrecht besteht nicht bei Verträgen über Waren, die nach Kundenspezifikationen angefertigt werden oder eindeutig auf die persönlichen Bedürfnisse zugeschnitten sind (§ 18 Abs. 1 Z 3 FAGG), etwa Sonderanfertigungen wie Koffer mit abweichender Teileranzahl.</p>
      {withForm && <MusterWiderrufsformular headingLevel={H}/>}
    </div>
  );
}

export function MusterWiderrufsformular({ headingLevel = "h2" }) {
  const H = headingLevel;
  const p = { ...f, fontSize: 15, color: "#3A4A4A", lineHeight: 1.75, margin: "0 0 10px" };
  return (
    <div style={{ border: `1px solid ${C.border}`, background: C.bgElevated, padding: "24px 26px", marginTop: 28, borderRadius: 6 }}>
      <H style={{ fontFamily: "'Archivo Variable', sans-serif", fontWeight: 600, fontSize: 22, color: C.text, margin: "0 0 10px" }}>Muster-Widerrufsformular</H>
      <p style={{ ...p, fontStyle: "italic" }}>(Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück)</p>
      <ul style={{ ...p, paddingLeft: 20, margin: "0 0 10px" }}>
        <li style={{ marginBottom: 8 }}>An {CONTACT.company}, {CONTACT.person}, {CONTACT.street}, {CONTACT.city}, {CONTACT.country}, E-Mail: {CONTACT.email}:</li>
        <li style={{ marginBottom: 8 }}>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)</li>
        <li style={{ marginBottom: 8 }}>Bestellt am (*)/erhalten am (*)</li>
        <li style={{ marginBottom: 8 }}>Name des/der Verbraucher(s)</li>
        <li style={{ marginBottom: 8 }}>Anschrift des/der Verbraucher(s)</li>
        <li style={{ marginBottom: 8 }}>Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)</li>
        <li style={{ marginBottom: 8 }}>Datum</li>
      </ul>
      <p style={{ ...p, fontSize: 13, margin: 0 }}>(*) Unzutreffendes streichen.</p>
    </div>
  );
}
