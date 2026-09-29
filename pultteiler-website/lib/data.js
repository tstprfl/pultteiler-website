// Alle Preise NETTO. AT/DE: zzgl. 20% USt (priceAT), Schweiz: steuerfrei (priceCH).
// Preisliste Stand Oktober 2026. Versand je Bestellung siehe SHIPPING, ab FREE_SHIPPING_SETS Koffer-Sets versandkostenfrei.
export const VAT_RATE = 0.20;
export const SHIPPING = { AT: 12.00, CH: 25.00 };
export const FREE_SHIPPING_SETS = 3;

export const SETS = [
  { id: "gelb-vs", name: "SET A — GELB — BIS 5. SCHULJAHR", short: "Set A Gelb", desc: "1 Holzkoffer mit 12 Teilerplatten (50×30 cm) und 12 Klammern. Empfohlen bis zum 5. Schuljahr.", priceAT: 235, priceCH: 270, tag: "", color: "#C08B2D", img: "/images/koffer-gelb.jpg" },
  { id: "gelb-ms", name: "SET B — GELB — AB 6. SCHULJAHR", short: "Set B Gelb", desc: "1 Holzkoffer mit 12 Teilerplatten (50×40 cm) und 12 Klammern. Empfohlen ab dem 6. Schuljahr.", priceAT: 249, priceCH: 295, tag: "", color: "#C08B2D", img: "/images/koffer-gelb.jpg" },
  { id: "grau-ms", name: "SET B — GRAU — AB 6. SCHULJAHR", short: "Set B Grau", desc: "1 Holzkoffer mit 12 Teilerplatten (50×40 cm) und 12 Klammern. Empfohlen ab dem 6. Schuljahr.", priceAT: 249, priceCH: 295, tag: "", color: "#777", img: "/images/koffer-grau.jpg" },
];

export const PARTS = [
  { id: "klammer-2", name: "KLAMMER (2 STÜCK)", short: "2x Klammer", desc: "Hochwertige, dauerelastische Klammer im Doppelpack.", priceAT: 21.00, tag: "ERSATZTEIL", color: "#C08B2D", img: "/images/Klammer_1.png" },
  { id: "platte-a", name: "TEILERPLATTE A GELB — 50×30 CM", short: "Platte A gelb klein", desc: "Einzelne Ersatzplatte, bis 5. Schulstufe. Aus hochwertigem Kunststoff.", priceAT: 9.50, tag: "ERSATZTEIL", color: "#C08B2D", img: "/images/pultteiler_gelb.png" },
  { id: "platte-b-gelb", name: "TEILERPLATTE B GELB — 50×40 CM", short: "Platte B gelb groß", desc: "Einzelne Ersatzplatte, ab 5. Schulstufe. Aus hochwertigem Kunststoff.", priceAT: 10.00, tag: "ERSATZTEIL", color: "#C08B2D", img: "/images/pultteiler_gelb.png" },
  { id: "platte-b-grau", name: "TEILERPLATTE B GRAU — 50×40 CM", short: "Platte B grau groß", desc: "Einzelne Ersatzplatte, ab 5. Schulstufe. Aus hochwertigem Kunststoff.", priceAT: 10.00, tag: "ERSATZTEIL", color: "#777", img: "/images/pultteiler_grau.png" },
  { id: "koffer-leer", name: "KOFFER OHNE INHALT", short: "Holzkoffer leer", desc: "Leerer Holzkoffer als Ersatz. Material: Holz.", priceAT: 42.00, tag: "ERSATZTEIL", color: "#C08B2D", img: "/images/Koffer_1.png" },
];

export const GALLERY = [
  { src: "/images/kurhaus-saal-totale.jpg", label: "KURHAUS BAD KROZINGEN", alt: "Prüfungssaal im Kurhaus Bad Krozingen mit Pultteilern auf allen Tischen", cat: "PRÜFUNGSZENTRUM" },
  { src: "/images/kurhaus-tischreihe.jpg", label: "KURHAUS BAD KROZINGEN", alt: "Tischreihe mit Pultteilern im Kurhaus Bad Krozingen", cat: "PRÜFUNGSZENTRUM" },
  { src: "/images/kurhaus-klammer-detail.jpg", label: "KURHAUS BAD KROZINGEN", alt: "Pultteiler-Klammer an der Tischkante im Kurhaus Bad Krozingen", cat: "DETAIL" },
  { src: "/images/kurhaus-blick-buehne.jpg", label: "KURHAUS BAD KROZINGEN", alt: "Blick zur Bühne über die Prüfungstische im Kurhaus Bad Krozingen", cat: "PRÜFUNGSZENTRUM" },
  { src: "/images/klassenzimmer.png", label: "KLASSENZIMMER IM EINSATZ", cat: "PRAXIS" },
  { src: "/images/meduni-innsbruck_2.jpeg", label: "MEDUNI INNSBRUCK", alt: "Pultteiler im Labor der MedUni Innsbruck", cat: "HOCHSCHULE" },
  { src: "/images/pultteiler-einsatz.jpg", label: "EDV-RAUM MIT PULTTEILER", cat: "PRAXIS" },
  { src: "/images/meduni-innsbruck_1.jpeg", label: "MEDUNI INNSBRUCK", alt: "Nahaufnahme der Pultteiler an der MedUni Innsbruck", cat: "HOCHSCHULE" },
  { src: "/images/pultteiler-uni.png", label: "UNIVERSITÄT HÖRSAAL", cat: "HOCHSCHULE" },
  { src: "/images/pultteiler-2.jpg", label: "PULTTEILER IM GROSSRAUM", cat: "REFERENZ" },
  { src: "/images/nahaufnahme.jpeg", label: "NAHAUFNAHME TRENNWÄNDE", cat: "DETAIL" },
];

export const NAV = [
  { id: "home", label: "START", href: "/" },
  {
    id: "schule",
    label: "FÜR IHRE SCHULE",
    children: [
      { id: "volksschule", label: "VOLKSSCHULE & PRIMARSTUFE", href: "/volksschule" },
      { id: "sekundarstufe", label: "SEKUNDARSTUFE & GYMNASIUM", href: "/sekundarstufe" },
      { id: "hochschulen", label: "HOCHSCHULEN & PRÜFUNGSZENTREN", href: "/hochschulen" },
    ],
  },
  { id: "produkte", label: "SHOP", href: "/produkte" },
  { id: "ratgeber", label: "RATGEBER", href: "/ratgeber" },
  { id: "anleitung", label: "SO FUNKTIONIERT'S", href: "/anleitung" },
  { id: "ueber-uns", label: "ÜBER UNS", href: "/ueber-uns" },
  { id: "kontakt", label: "KONTAKT", href: "/kontakt" },
];

// Weitere Seiten (nur im Footer verlinkt)
export const NAV_SECONDARY = [
  { id: "galerie", label: "REFERENZEN & GALERIE", href: "/galerie" },
  { id: "versand", label: "VERSAND & RÜCKGABE", href: "/versand" },
  { id: "angebot", label: "ANGEBOT ANFORDERN", href: "/angebot" },
];
