export const SETS = [
  { id: "gelb-vs", name: "SET A — GELB — BIS 5. SCHULJAHR", short: "Set A Gelb", desc: "1 Holzkoffer mit 12 Teilerplatten (50×30 cm) und 12 Klammern. Empfohlen bis zum 5. Schuljahr.", priceAT: 241, priceCH: 238, tag: "", color: "#C08B2D", img: "/images/koffer-gelb.jpg" },
  { id: "gelb-ms", name: "SET B — GELB — AB 6. SCHULJAHR", short: "Set B Gelb", desc: "1 Holzkoffer mit 12 Teilerplatten (50×40 cm) und 12 Klammern. Empfohlen ab dem 6. Schuljahr.", priceAT: 255, priceCH: 252, tag: "", color: "#C08B2D", img: "/images/koffer-gelb.jpg" },
  { id: "grau-ms", name: "SET B — GRAU — AB 6. SCHULJAHR", short: "Set B Grau", desc: "1 Holzkoffer mit 12 Teilerplatten (50×40 cm) und 12 Klammern. Empfohlen ab dem 6. Schuljahr.", priceAT: 255, priceCH: 252, tag: "", color: "#777", img: "/images/koffer-grau.jpg" },
];

export const PARTS = [
  { id: "klammer-2", name: "KLAMMER (2 STÜCK)", short: "2x Klammer", desc: "Hochwertige, dauerelastische Klammer im Doppelpack.", priceAT: 19.40, tag: "ERSATZTEIL", color: "#C08B2D", img: "/images/Klammer_1.png" },
  { id: "platte-a", name: "TEILERPLATTE A GELB — 50×30 CM", short: "Platte A gelb klein", desc: "Einzelne Ersatzplatte, bis 5. Schulstufe. Aus hochwertigem Kunststoff.", priceAT: 8.90, tag: "ERSATZTEIL", color: "#C08B2D", img: "/images/pultteiler_gelb.png" },
  { id: "platte-b-gelb", name: "TEILERPLATTE B GELB — 50×40 CM", short: "Platte B gelb groß", desc: "Einzelne Ersatzplatte, ab 5. Schulstufe. Aus hochwertigem Kunststoff.", priceAT: 9.90, tag: "ERSATZTEIL", color: "#C08B2D", img: "/images/pultteiler_gelb.png" },
  { id: "platte-b-grau", name: "TEILERPLATTE B GRAU — 50×40 CM", short: "Platte B grau groß", desc: "Einzelne Ersatzplatte, ab 5. Schulstufe. Aus hochwertigem Kunststoff.", priceAT: 9.90, tag: "ERSATZTEIL", color: "#777", img: "/images/pultteiler_grau.png" },
  { id: "koffer-leer", name: "KOFFER OHNE INHALT", short: "Holzkoffer leer", desc: "Leerer Holzkoffer als Ersatz. Material: Holz.", priceAT: 43.20, tag: "ERSATZTEIL", color: "#C08B2D", img: "/images/Koffer_1.png" },
];

export const GALLERY = [
  { src: "/images/klassenzimmer.png", label: "KLASSENZIMMER IM EINSATZ", cat: "PRAXIS" },
  { src: "/images/meduni-innsbruck_2.jpeg", label: "MEDUNI INNSBRUCK — LABOR", cat: "HOCHSCHULE" },
  { src: "/images/pultteiler-einsatz.jpg", label: "EDV-RAUM MIT PULTTEILER", cat: "PRAXIS" },
  { src: "/images/meduni-innsbruck_1.jpeg", label: "MEDUNI INNSBRUCK — NAHAUFNAHME", cat: "HOCHSCHULE" },
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
