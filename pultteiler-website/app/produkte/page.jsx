import ProduktePage from "./ProduktePage";
import { SETS } from "@/lib/data";

export const metadata = {
  title: "Pultteiler kaufen — Sets & Preise direkt vom Hersteller",
  description:
    "Pultteiler-Sets und Ersatzteile direkt vom Hersteller kaufen: Sichtschutz-Trennwände für Schultische im Holzkoffer (12 Systeme). Kauf auf Rechnung — Lieferung nach Österreich, Deutschland und in die Schweiz.",
  alternates: { canonical: "/produkte" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@graph": SETS.map((s) => ({
    "@type": "Product",
    name: s.name,
    description: s.desc,
    image: `https://www.pultteiler.eu${s.img}`,
    brand: { "@type": "Brand", name: "Pultteiler — Schulmittel Blaschegg" },
    offers: {
      "@type": "Offer",
      price: s.priceAT.toFixed(2),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://www.pultteiler.eu/produkte",
      seller: { "@type": "Organization", name: "Schulmittel Blaschegg" },
    },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <ProduktePage />
    </>
  );
}
