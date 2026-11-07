import { C } from "@/lib/colors";
import { alternatesFor } from "@/lib/i18n";
import { Heading } from "@/components/ui";
import Gewaehrleistungshinweis from "@/components/Gewaehrleistung";

export const metadata = {
  title: "Gesetzliche Gewährleistung",
  description: "Harmonisierte Mitteilung über das gesetzliche Gewährleistungsrecht für Bestellungen bei pultteiler.eu.",
  alternates: alternatesFor("/gewaehrleistung"),
};

export default function Page() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Heading as="h1" overline="Rechtliches" title="Gesetzliche Gewährleistung"/>
          <p style={{ fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 16, color: "#3A4A4A", lineHeight: 1.7, margin: "0 0 24px" }}>
            Für alle Bestellungen gilt die gesetzliche Gewährleistung. Die folgende Mitteilung ist gesetzlich vorgegeben (§ 4 Abs. 1 Z 12 FAGG). Bei einem Mangel erreichen Sie uns unter +43 (0) 676 935 40 33 oder blaschegg@traunseenet.at.
          </p>
          <Gewaehrleistungshinweis maxWidth={800}/>
        </div>
      </section>
    </div>
  );
}
