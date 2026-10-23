import ProduktePage from "./ProduktePage";
import { alternatesFor } from "@/lib/i18n";
import { SHOPS, productJsonLd } from "@/lib/shop";

export const metadata = {
  title: { absolute: "Pultteiler kaufen: Sets und Preise vom Hersteller" },
  description:
    "Pultteiler-Sets: Trennwände für Schultische im Holzkoffer (12 Systeme) und Ersatzteile direkt vom Hersteller. Kauf auf Rechnung, Lieferung nach Österreich, Deutschland und in die Schweiz.",
  alternates: alternatesFor("/produkte"),
};

// Produktdaten nur für Österreich und Deutschland; die Schweiz hat eigene Preise auf /produkte/schweiz
const jsonLd = productJsonLd(SHOPS.ATDE);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProduktePage land="ATDE" />
    </>
  );
}
