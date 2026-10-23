// Preise AT/DE BRUTTO inkl. 20% USt (priceAT), Schweiz steuerfrei (priceCH).
// Schweizer Ersatzteilpreise (Oktober 2026) abgeleitet aus dem Verhältnis Schweiz zu Österreich der Koffer-Sets
// (237/261 und 249/275, Mittel rd. 0,907), auf 10 Cent gerundet. Mit deutscher UID-Nummer gilt der Nettopreis (brutto / 1,2).
// Preisliste Stand Oktober 2026. Versand je Paket und Lieferland (brutto) siehe SHIPPING, ab FREE_SHIPPING_SETS Koffer-Sets versandkostenfrei.
// Ersatzteile: perPackage = Stück, die in ein Paket passen. Mehr Stück ergeben ein weiteres Paket und damit eine weitere Versandpauschale.
// Koffer-Sets zählen als ein Paket je Bestellung (bis FREE_SHIPPING_SETS, danach frei), Ersatzteile werden daneben in eigene Pakete gerechnet.
export const VAT_RATE = 0.20;
export const SHIPPING = { AT: 10.00, DE: 12.00, CH: 25.00 };
export const FREE_SHIPPING_SETS = 3;

// Anzahl der Pakete einer Bestellung (Warenkorbzeilen mit id, qty und optional perPackage)
export function countPackages(items) {
  if (!items.length) return 0;
  const setIds = SETS.map(s => s.id);
  const hasSets = items.some(i => setIds.includes(i.id) && i.qty > 0);
  // Ersatzteile: jedes Teil belegt 1/perPackage eines Pakets, Summe aufgerundet
  const partsShare = items
    .filter(i => !setIds.includes(i.id))
    .reduce((s, i) => s + i.qty / (i.perPackage || 1), 0);
  const partsPackages = Math.ceil(partsShare - 1e-9);
  return Math.max(hasSets ? 1 : 0, partsPackages, 1);
}

export const SETS = [
  { id: "gelb-vs", name: "Set A Gelb, bis 5. Schuljahr", short: "Set A Gelb", desc: "1 Holzkoffer mit 12 Teilerplatten (50×30 cm) und 12 Klammern. Empfohlen bis zum 5. Schuljahr.", priceAT: 261, priceCH: 237, tag: "", color: "#C08B2D", img: "/images/set-gelb-montiert.jpg", moreImgs: ["/images/set-gelb.jpg"] },
  { id: "gelb-ms", name: "Set B Gelb, ab 6. Schuljahr", short: "Set B Gelb", desc: "1 Holzkoffer mit 12 Teilerplatten (50×40 cm) und 12 Klammern. Empfohlen ab dem 6. Schuljahr.", priceAT: 275, priceCH: 249, tag: "", color: "#C08B2D", img: "/images/set-gelb-montiert.jpg", moreImgs: ["/images/set-gelb.jpg"] },
  { id: "grau-ms", name: "Set B Grau, ab 6. Schuljahr", short: "Set B Grau", desc: "1 Holzkoffer mit 12 Teilerplatten (50×40 cm) und 12 Klammern. Empfohlen ab dem 6. Schuljahr.", priceAT: 275, priceCH: 249, tag: "", color: "#777", img: "/images/set-grau-montiert.jpg", moreImgs: ["/images/set-grau.jpg", "/images/set-koffer-offen.jpg"] },
];

export const PARTS = [
  { id: "klammer-2", name: "Klammer (2 Stück)", short: "2x Klammer", desc: "Hochwertige, dauerelastische Klammer im Doppelpack.", priceAT: 19.40, priceCH: 17.60, perPackage: 24, tag: "Ersatzteil", color: "#C08B2D", img: "/images/Klammer_1.png" },
  { id: "platte-a", name: "Teilerplatte A Gelb, 50×30 cm", short: "Platte A gelb klein", desc: "Einzelne Ersatzplatte, bis 5. Schulstufe. Aus hochwertigem Kunststoff.", priceAT: 9.30, priceCH: 8.40, perPackage: 12, tag: "Ersatzteil", color: "#C08B2D", img: "/images/pultteiler_gelb.png" },
  { id: "platte-b-gelb", name: "Teilerplatte B Gelb, 50×40 cm", short: "Platte B gelb groß", desc: "Einzelne Ersatzplatte, ab 5. Schulstufe. Aus hochwertigem Kunststoff.", priceAT: 10.30, priceCH: 9.30, perPackage: 12, tag: "Ersatzteil", color: "#C08B2D", img: "/images/pultteiler_gelb.png" },
  { id: "platte-b-grau", name: "Teilerplatte B Grau, 50×40 cm", short: "Platte B grau groß", desc: "Einzelne Ersatzplatte, ab 5. Schulstufe. Aus hochwertigem Kunststoff.", priceAT: 10.30, priceCH: 9.30, perPackage: 12, tag: "Ersatzteil", color: "#777", img: "/images/pultteiler_grau.png" },
  { id: "koffer-leer", name: "Koffer ohne Inhalt", short: "Holzkoffer leer", desc: "Leerer Holzkoffer als Ersatz. Material: Holz.", priceAT: 45.20, priceCH: 41.00, perPackage: 1, tag: "Ersatzteil", color: "#C08B2D", img: "/images/koffer-leer.png" },
];

export const GALLERY = [
  { src: "/images/kurhaus-saal-totale.jpg", label: "Kurhaus Bad Krozingen", alt: "Prüfungssaal im Kurhaus Bad Krozingen mit Pultteilern auf allen Tischen", cat: "Prüfungszentrum" },
  { src: "/images/kurhaus-tischreihe.jpg", label: "Kurhaus Bad Krozingen", alt: "Tischreihe mit Pultteilern im Kurhaus Bad Krozingen", cat: "Prüfungszentrum" },
  { src: "/images/kurhaus-klammer-detail.jpg", label: "Kurhaus Bad Krozingen", alt: "Pultteiler-Klammer an der Tischkante im Kurhaus Bad Krozingen", cat: "Detail" },
  { src: "/images/kurhaus-blick-buehne.jpg", label: "Kurhaus Bad Krozingen", alt: "Blick zur Bühne über die Prüfungstische im Kurhaus Bad Krozingen", cat: "Prüfungszentrum" },
  { src: "/images/klassenzimmer.png", label: "Klassenzimmer im Einsatz", cat: "Praxis" },
  { src: "/images/meduni-innsbruck_2.jpeg", label: "MedUni Innsbruck", alt: "Pultteiler im Labor der MedUni Innsbruck", cat: "Hochschule" },
  { src: "/images/pultteiler-einsatz.jpg", label: "EDV-Raum mit Pultteiler", cat: "Praxis" },
  { src: "/images/meduni-innsbruck_1.jpeg", label: "MedUni Innsbruck", alt: "Nahaufnahme der Pultteiler an der MedUni Innsbruck", cat: "Hochschule" },
  { src: "/images/pultteiler-uni.png", label: "Universität Hörsaal", cat: "Hochschule" },
  { src: "/images/pultteiler-2.jpg", label: "Pultteiler im Großraum", cat: "Referenz" },
  { src: "/images/nahaufnahme.jpeg", label: "Nahaufnahme Trennwände", cat: "Detail" },
];

export const NAV = [
  { id: "home", label: "Start", href: "/" },
  {
    id: "schule",
    label: "Für Ihre Schule",
    children: [
      { id: "volksschule", label: "Volksschule & Primarstufe", href: "/volksschule" },
      { id: "sekundarstufe", label: "Sekundarstufe & Gymnasium", href: "/sekundarstufe" },
      { id: "hochschulen", label: "Hochschulen & Prüfungszentren", href: "/hochschulen" },
    ],
  },
  { id: "produkte", label: "Shop", href: "/produkte" },
  { id: "ratgeber", label: "Ratgeber", href: "/ratgeber" },
  { id: "anleitung", label: "So funktioniert's", href: "/anleitung" },
  { id: "ueber-uns", label: "Über uns", href: "/ueber-uns" },
  { id: "kontakt", label: "Kontakt", href: "/kontakt" },
];

// Weitere Seiten (nur im Footer verlinkt)
export const NAV_SECONDARY = [
  { id: "galerie", label: "Referenzen & Galerie", href: "/galerie" },
  { id: "versand", label: "Versand & Rückgabe", href: "/versand" },
  { id: "angebot", label: "Angebot anfordern", href: "/angebot" },
];
