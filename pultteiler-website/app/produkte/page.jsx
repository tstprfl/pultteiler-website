import ProduktePage from "./ProduktePage";
import { SETS, SHIPPING } from "@/lib/data";
import { alternatesFor } from "@/lib/i18n";

export const metadata = {
  title: { absolute: "Pultteiler kaufen: Sets und Preise vom Hersteller" },
  description:
    "Pultteiler-Sets: Trennwände für Schultische im Holzkoffer (12 Systeme) und Ersatzteile direkt vom Hersteller. Kauf auf Rechnung, Lieferung nach Österreich, Deutschland und in die Schweiz.",
  alternates: alternatesFor("/produkte"),
};

// Versand und Rückgabe gemäß /versand und AGB: Versandpauschale je Bestellung und Lieferland (AT/DE inkl. USt, CH steuerfrei),
// ab FREE_SHIPPING_SETS Koffer-Sets versandkostenfrei, 14 Tage Widerruf, Rücksendekosten trägt der Käufer.
// Bei Änderungen dort auch hier anpassen.
const shippingDetails = ["AT", "DE", "CH"].map((country) => ({
  "@type": "OfferShippingDetails",
  shippingRate: { "@type": "MonetaryAmount", value: SHIPPING[country].toFixed(2), currency: "EUR" },
  shippingDestination: { "@type": "DefinedRegion", addressCountry: country },
}));

const returnPolicy = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: ["AT", "DE", "CH"],
  returnPolicyCountry: "AT",
  returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: 14,
  returnMethod: "https://schema.org/ReturnByMail",
  returnFees: "https://schema.org/ReturnFeesCustomerResponsibility",
  merchantReturnLink: "https://www.pultteiler.eu/versand",
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@graph": SETS.map((s) => ({
    "@type": "Product",
    name: s.name,
    description: s.desc,
    sku: s.id,
    image: `https://www.pultteiler.eu${s.img}`,
    brand: { "@type": "Brand", name: "Pultteiler" },
    offers: {
      "@type": "Offer",
      price: s.priceAT.toFixed(2),
      priceCurrency: "EUR",
      priceSpecification: { "@type": "UnitPriceSpecification", price: s.priceAT.toFixed(2), priceCurrency: "EUR", valueAddedTaxIncluded: true },
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      url: "https://www.pultteiler.eu/produkte",
      seller: { "@type": "Organization", name: "Schulmittel Blaschegg" },
      shippingDetails,
      hasMerchantReturnPolicy: returnPolicy,
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
