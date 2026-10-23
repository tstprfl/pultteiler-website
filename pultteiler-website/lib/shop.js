// Shop-Daten je Lieferland für Produktdaten (JSON-LD) und Google-Merchant-Feeds.
// Österreich und Deutschland teilen sich /produkte (Preise inkl. 20% USt), die Schweiz hat eigene Preise auf /produkte/schweiz;
// englisch gleich aufgebaut unter /en/products und /en/products/switzerland.
// Versand und Rückgabe gemäß /versand und AGB; bei Änderungen dort auch hier anpassen.
import { SETS, PARTS, SHIPPING } from "@/lib/data";
import { localizeProduct } from "@/lib/en";

export const BASE_URL = "https://www.pultteiler.eu";
export const SHOP_CH_PATH = "/produkte/schweiz";

export const SHOPS = {
  ATDE: { path: "/produkte", pathEn: "/en/products", countries: ["AT", "DE"], price: (p) => p.priceAT, vatIncluded: true, products: [...SETS, ...PARTS] },
  CH: { path: SHOP_CH_PATH, pathEn: "/en/products/switzerland", countries: ["CH"], price: (p) => p.priceCH ?? p.priceAT, vatIncluded: false, products: [...SETS, ...PARTS] },
};

const returnPolicy = (countries, en) => ({
  "@type": "MerchantReturnPolicy",
  applicableCountry: countries,
  returnPolicyCountry: "AT",
  returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: 14,
  returnMethod: "https://schema.org/ReturnByMail",
  returnFees: "https://schema.org/ReturnFeesCustomerResponsibility",
  merchantReturnLink: `${BASE_URL}${en ? "/en/shipping" : "/versand"}`,
});

// Produktdaten der Koffer-Sets für die Shop-Seite eines Lieferlands (en: englische Seite)
export function productJsonLd(shop, en = false) {
  const shippingDetails = shop.countries.map((country) => ({
    "@type": "OfferShippingDetails",
    shippingRate: { "@type": "MonetaryAmount", value: SHIPPING[country].toFixed(2), currency: "EUR" },
    shippingDestination: { "@type": "DefinedRegion", addressCountry: country },
  }));
  return {
    "@context": "https://schema.org",
    "@graph": SETS.map((p) => localizeProduct(p, en)).map((s) => ({
      "@type": "Product",
      name: s.name,
      description: s.desc,
      sku: s.id,
      image: `${BASE_URL}${s.img}`,
      brand: { "@type": "Brand", name: "Pultteiler" },
      offers: {
        "@type": "Offer",
        price: shop.price(s).toFixed(2),
        priceCurrency: "EUR",
        priceSpecification: { "@type": "UnitPriceSpecification", price: shop.price(s).toFixed(2), priceCurrency: "EUR", valueAddedTaxIncluded: shop.vatIncluded },
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        url: `${BASE_URL}${en ? shop.pathEn : shop.path}`,
        seller: { "@type": "Organization", name: "Schulmittel Blaschegg" },
        shippingDetails,
        hasMerchantReturnPolicy: returnPolicy(shop.countries, en),
      },
    })),
  };
}

const xml = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Google-Merchant-Feed (RSS 2.0) eines Lieferlands. Versandkosten und Lieferzeiten kommen aus den Versandregeln im Merchant Center.
export function merchantFeed(shop, suffix = "") {
  const isSet = (p) => SETS.some((s) => s.id === p.id);
  const items = shop.products.map((p) => {
    const title = isSet(p)
      ? `Pultteiler Trennwände für Schultische, ${p.name}, 12 Systeme im Holzkoffer`
      : `Pultteiler Ersatzteil: ${p.name}`;
    const desc = `${p.desc} Direkt vom Hersteller, Kauf auf Rechnung.${shop.vatIncluded ? "" : " Lieferung steuerfrei und unverzollt."}`;
    return `    <item>
      <g:id>${xml(p.id + suffix)}</g:id>
      <g:title>${xml(title)}</g:title>
      <g:description>${xml(desc)}</g:description>
      <g:link>${BASE_URL}${shop.path}#${xml(p.id)}</g:link>
      <g:image_link>${BASE_URL}${xml(p.img)}</g:image_link>
      <g:availability>in_stock</g:availability>
      <g:price>${shop.price(p).toFixed(2)} EUR</g:price>
      <g:condition>new</g:condition>
      <g:brand>Pultteiler</g:brand>
      <g:identifier_exists>no</g:identifier_exists>
      <g:product_type>${isSet(p) ? "Koffer-Sets" : "Ersatzteile"}</g:product_type>
    </item>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Pultteiler ${shop.countries.join(" und ")}</title>
    <link>${BASE_URL}${shop.path}</link>
    <description>Pultteiler-Sets${shop.products.length > SETS.length ? " und Ersatzteile" : ""} für ${shop.countries.join(" und ")}</description>
${items.join("\n")}
  </channel>
</rss>
`;
}
