// Preise AT/DE BRUTTO inkl. 20% USt (priceAT), Schweiz steuerfrei (priceCH). Mit deutscher UID-Nummer gilt der Nettopreis (brutto / 1,2).
// Preisliste Stand Oktober 2026. Versand je Bestellung und Lieferland (brutto) siehe SHIPPING, ab FREE_SHIPPING_SETS Koffer-Sets versandkostenfrei.
export const VAT_RATE = 0.20;
export const SHIPPING = { AT: 10.00, DE: 12.00, CH: 25.00 };
export const FREE_SHIPPING_SETS = 3;

export const SETS = [
  { id: "gelb-vs", name: "Set A — Gelb — bis 5. Schuljahr", short: "Set A Gelb", desc: "1 Holzkoffer mit 12 Teilerplatten (50×30 cm) und 12 Klammern. Empfohlen bis zum 5. Schuljahr.", priceAT: 261, priceCH: 251, tag: "", color: "#C08B2D", img: "/images/koffer-gelb.jpg" },
  { id: "gelb-ms", name: "Set B — Gelb — ab 6. Schuljahr", short: "Set B Gelb", desc: "1 Holzkoffer mit 12 Teilerplatten (50×40 cm) und 12 Klammern. Empfohlen ab dem 6. Schuljahr.", priceAT: 275, priceCH: 272, tag: "", color: "#C08B2D", img: "/images/koffer-gelb.jpg" },
  { id: "grau-ms", name: "Set B — Grau — ab 6. Schuljahr", short: "Set B Grau", desc: "1 Holzkoffer mit 12 Teilerplatten (50×40 cm) und 12 Klammern. Empfohlen ab dem 6. Schuljahr.", priceAT: 275, priceCH: 272, tag: "", color: "#777", img: "/images/koffer-grau.jpg" },
];

export const PARTS = [
  { id: "klammer-2", name: "Klammer (2 Stück)", short: "2x Klammer", desc: "Hochwertige, dauerelastische Klammer im Doppelpack.", priceAT: 19.40, tag: "Ersatzteil", color: "#C08B2D", img: "/images/Klammer_1.png" },
  { id: "platte-a", name: "Teilerplatte A Gelb — 50×30 cm", short: "Platte A gelb klein", desc: "Einzelne Ersatzplatte, bis 5. Schulstufe. Aus hochwertigem Kunststoff.", priceAT: 9.30, tag: "Ersatzteil", color: "#C08B2D", img: "/images/pultteiler_gelb.png" },
  { id: "platte-b-gelb", name: "Teilerplatte B Gelb — 50×40 cm", short: "Platte B gelb groß", desc: "Einzelne Ersatzplatte, ab 5. Schulstufe. Aus hochwertigem Kunststoff.", priceAT: 10.30, tag: "Ersatzteil", color: "#C08B2D", img: "/images/pultteiler_gelb.png" },
  { id: "platte-b-grau", name: "Teilerplatte B Grau — 50×40 cm", short: "Platte B grau groß", desc: "Einzelne Ersatzplatte, ab 5. Schulstufe. Aus hochwertigem Kunststoff.", priceAT: 10.30, tag: "Ersatzteil", color: "#777", img: "/images/pultteiler_grau.png" },
  { id: "koffer-leer", name: "Koffer ohne Inhalt", short: "Holzkoffer leer", desc: "Leerer Holzkoffer als Ersatz. Material: Holz.", priceAT: 45.20, tag: "Ersatzteil", color: "#C08B2D", img: "/images/Koffer_1.png" },
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
