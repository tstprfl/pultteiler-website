import ProduktePage from "@/app/produkte/ProduktePage";
import { OG_EN } from "@/lib/en";
import { alternatesFor } from "@/lib/i18n";
import { SHOPS, productJsonLd } from "@/lib/shop";

// Englischer Shop für die Schweiz, gleich aufgebaut wie /produkte/schweiz
export const metadata = {
  title: { absolute: "Pultteiler for Switzerland: Sets and Prices" },
  description:
    "Pultteiler sets for Switzerland: desk dividers in wooden cases of 12 systems from the manufacturer, tax-free and duty-free, purchase on invoice.",
  alternates: alternatesFor(SHOPS.CH.pathEn, "/en/products"),
  openGraph: OG_EN,
};

const jsonLd = productJsonLd(SHOPS.CH, true);

export default function Page() {
  return (
    <div lang="en">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProduktePage land="CH" lang="en" />
    </div>
  );
}
