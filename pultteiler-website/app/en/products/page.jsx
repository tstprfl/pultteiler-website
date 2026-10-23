import ProduktePage from "@/app/produkte/ProduktePage";
import { OG_EN } from "@/lib/en";
import { alternatesFor } from "@/lib/i18n";
import { SHOPS, productJsonLd } from "@/lib/shop";

// Englischer Shop, gleich aufgebaut wie /produkte (Preise für Österreich und Deutschland, Schweiz unter /en/products/switzerland)
export const metadata = {
  title: { absolute: "Pultteiler Desk Dividers: Sets from the Manufacturer" },
  description:
    "Exam desk dividers in wooden cases of 12 systems plus spare parts, from the manufacturer. Purchase on invoice, delivery to Austria, Germany and Switzerland.",
  alternates: alternatesFor("/en/products"),
  openGraph: OG_EN,
};

const jsonLd = productJsonLd(SHOPS.ATDE, true);

export default function Page() {
  return (
    <div lang="en">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProduktePage land="ATDE" lang="en" />
    </div>
  );
}
