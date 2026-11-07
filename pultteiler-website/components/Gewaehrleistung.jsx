import { C } from "@/lib/colors";

// Harmonisierte Mitteilung über das gesetzliche Gewährleistungsrecht nach § 4 Abs 1 Z 12 FAGG, Anhang II
// (BGBl. I Nr. 59/2026, gilt für Verträge ab 27.9.2026). Die Grafik ist unverändert aus dem amtlichen PDF im RIS
// übernommen (I_59_2026_Anlage_II.pdf, Seite 1, Farbfassung). Laut Erläuterung (1) ist keines der Elemente editierbar,
// bei Online-Verträgen muss sie farbig sein (Erläuterung 5). Daher als Bild eingebunden, nicht nachgebaut.
export const GEWAEHRLEISTUNG_IMG = "/images/gesetzliche-gewaehrleistung.jpg";

// Wortlaut der Grafik als Alternativtext für Screenreader
export const GEWAEHRLEISTUNG_ALT = "Gesetzliche Gewährleistung. Mindestens zwei Jahre gesetzliche Gewährleistung der Vertragsmäßigkeit für Waren, die in der Europäischen Union verkauft werden. Verbraucherinnen und Verbraucher können ihre Rechte im Rahmen des gesetzlichen Gewährleistungsrechts geltend machen, z. B. wenn die Waren nicht der Beschreibung entsprechen, nicht bestimmungsgemäß funktionieren. Verkäufer haften für jede Vertragswidrigkeit, die zum Zeitpunkt der Lieferung der Waren bestand und innerhalb des Zeitraums der gesetzlichen Gewährleistung erkennbar wird. Verkäufer müssen in solchen Fällen Folgendes anbieten: kostenlose Nachbesserung oder kostenlose Ersatzlieferung, in bestimmten Fällen eine Preisminderung oder eine vollständige Erstattung des Kaufpreises. In einigen Ländern gilt ein längerer Zeitraum für die gesetzliche Gewährleistung. Für gebrauchte Waren kann ein kürzerer Zeitraum gelten, jedoch nicht weniger als ein Jahr. Für weitere Informationen zu Ihren Rechten in einem bestimmten Land scannen Sie den nachstehenden QR-Code oder fragen Sie den Verkäufer. europa.eu/youreurope/garantien. Was ist zu tun, wenn Sie vertragswidrige Waren erhalten? 1. Melden Sie dem Verkäufer das Problem so bald wie möglich. 2. Legen Sie einen Kaufnachweis vor, z. B. die Quittung, Rechnung oder einen Kontoauszug. Verkäufer und Hersteller können auch gewerbliche Garantien gewähren, die unabhängig von der gesetzlichen Gewährleistung gelten. Diese GARAN-Kennzeichnung zeigt beispielsweise, dass der Hersteller eine gewerbliche Haltbarkeitsgarantie ohne zusätzliche Kosten gewährt, die die gesamte Ware abdeckt.";

export default function Gewaehrleistungshinweis({ maxWidth = 640, caption = true }) {
  return (
    <figure style={{ margin: 0, maxWidth }}>
      <a href={GEWAEHRLEISTUNG_IMG} target="_blank" rel="noopener" style={{ display: "block", border: `1px solid ${C.border}`, background: "#FFFFFF", lineHeight: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- amtliche Grafik unverändert ausliefern, keine Neukodierung */}
        <img src={GEWAEHRLEISTUNG_IMG} alt={GEWAEHRLEISTUNG_ALT} width={1221} height={1672} loading="lazy" style={{ width: "100%", height: "auto", display: "block" }}/>
      </a>
      {caption && (
        <figcaption style={{ fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.5, marginTop: 8 }}>
          Harmonisierte Mitteilung über das gesetzliche Gewährleistungsrecht (Anhang II FAGG). Zum Vergrößern antippen.
        </figcaption>
      )}
    </figure>
  );
}
