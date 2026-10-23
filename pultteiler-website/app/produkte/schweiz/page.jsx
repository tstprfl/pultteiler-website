import ProduktePage from "../ProduktePage";
import { alternatesFor } from "@/lib/i18n";
import { SHOPS, SHOP_CH_PATH, productJsonLd } from "@/lib/shop";

// Shop für die Schweiz: eigene Adresse, damit Google die steuerfreien Schweizer Preise schon in der ausgelieferten Seite findet
export const metadata = {
  title: { absolute: "Pultteiler Schweiz: Sets und Preise vom Hersteller" },
  description:
    "Pultteiler-Sets für die Schweiz: Trennwände für Schultische im Holzkoffer (12 Systeme) vom Hersteller, steuerfrei und unverzollt, Kauf auf Rechnung.",
  alternates: { ...alternatesFor("/produkte"), canonical: SHOP_CH_PATH },
};

const jsonLd = productJsonLd(SHOPS.CH);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProduktePage land="CH" />
    </>
  );
}
