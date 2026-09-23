// Englische Texte der Testversion. Inhaltlich deckungsgleich mit den deutschen Seiten;
// für andere Länder werden bewusst keine Preise oder Lieferbedingungen zugesagt (nur "auf Anfrage").
import { YEARS, CONTACT } from "@/lib/site";

export const COUNTRIES_EN = [
  {
    code: "AT",
    flag: "🇦🇹",
    name: "Austria",
    lines: [
      "Purchase on invoice, no prepayment, no credit card",
      "E-invoice for federal schools with your EKG number",
      "Case sets delivered free of charge",
    ],
  },
  {
    code: "DE",
    flag: "🇩🇪",
    name: "Germany",
    lines: [
      "Purchase on invoice, no prepayment, no credit card",
      "Tax-free delivery with your German VAT ID",
      "German bank account available for payment",
    ],
  },
  {
    code: "CH",
    flag: "🇨🇭",
    name: "Switzerland",
    lines: [
      "Purchase on invoice, no prepayment, no credit card",
      "Tax-free, duty-free delivery: the quoted price is your final price",
      "Delivery always included",
    ],
  },
  {
    code: "INT",
    flag: "🌍",
    name: "Other countries",
    lines: [
      "Delivery on request",
      "We check shipping and terms for your country",
      "You receive an individual written quote",
    ],
  },
];

export const UI_EN = {
  quoteHref: "/en/quote",
  quoteCta: "REQUEST A QUOTE →",
  shopHref: "/en/products",
  shopCta: "VIEW PRODUCTS",
  contactHref: "/en/contact",
  contactCta: "CONTACT US",
  trust: ["Direct from the manufacturer", "Several hundred schools in AT, DE and CH", `For over ${YEARS} years`, "Delivery to other countries on request"],
  orderTitle: "HOW ORDERING WORKS",
  orderSub: "No credit card checkout: you send us a request and receive a written quote. In Austria, Germany and Switzerland you pay on invoice after delivery.",
  countries: COUNTRIES_EN,
  faqTitle: "FREQUENTLY ASKED QUESTIONS",
};

// Englische Bezeichnungen der Sets (Reihenfolge und id wie SETS in lib/data.js)
export const SETS_EN = {
  "gelb-vs": { name: "SET A: YELLOW, UP TO SCHOOL YEAR 5", desc: "1 wooden case with 12 divider panels (50×30 cm) and 12 clamps. Recommended up to school year 5." },
  "gelb-ms": { name: "SET B: YELLOW, FROM SCHOOL YEAR 6", desc: "1 wooden case with 12 divider panels (50×40 cm) and 12 clamps. Recommended from school year 6." },
  "grau-ms": { name: "SET B: GREY, FROM SCHOOL YEAR 6", desc: "1 wooden case with 12 divider panels (50×40 cm) and 12 clamps. Recommended from school year 6." },
};

// openGraph der englischen Seiten (Next.js ersetzt openGraph je Seite komplett, daher vollständig)
export const OG_EN = {
  type: "website",
  locale: "en_GB",
  siteName: "Pultteiler",
  images: [{ url: "/images/kurhaus-saal-totale.jpg", alt: "Exam hall with Pultteiler desk dividers on every desk" }],
};

// Galerie (gleiche Bilder und Reihenfolge wie GALLERY in lib/data.js)
export const GALLERY_EN = [
  { src: "/images/kurhaus-saal-totale.jpg", label: "KURHAUS BAD KROZINGEN: EXAM HALL" },
  { src: "/images/kurhaus-tischreihe.jpg", label: "KURHAUS BAD KROZINGEN: ROW OF DESKS" },
  { src: "/images/kurhaus-klammer-detail.jpg", label: "KURHAUS BAD KROZINGEN: CLAMP ON THE DESK EDGE" },
  { src: "/images/kurhaus-blick-buehne.jpg", label: "KURHAUS BAD KROZINGEN: VIEW TOWARDS THE STAGE" },
  { src: "/images/klassenzimmer.png", label: "IN USE IN THE CLASSROOM" },
  { src: "/images/meduni-innsbruck_2.jpeg", label: "MEDICAL UNIVERSITY OF INNSBRUCK: LABORATORY" },
  { src: "/images/pultteiler-einsatz.jpg", label: "COMPUTER ROOM WITH PULTTEILER" },
  { src: "/images/meduni-innsbruck_1.jpeg", label: "MEDICAL UNIVERSITY OF INNSBRUCK: CLOSE-UP" },
  { src: "/images/pultteiler-uni.png", label: "UNIVERSITY LECTURE HALL" },
  { src: "/images/pultteiler-2.jpg", label: "PULTTEILER IN A LARGE ROOM" },
  { src: "/images/nahaufnahme.jpeg", label: "CLOSE-UP OF THE DIVIDERS" },
];

// Zielgruppen (Startseite), Gegenstück zu AUDIENCES in lib/site.js
export const AUDIENCES_EN = [
  { id: "primary", href: "/en/primary-schools", title: "Primary schools", teaser: "Privacy screens for the first tests: child-friendly height (50×30 cm), set up in two minutes, one case per class.", img: "/images/klassenzimmer.png", imgAlt: "Pultteiler in a primary school classroom" },
  { id: "secondary", href: "/en/secondary-schools", title: "Secondary schools", teaser: "Dividers for tests and exams from school year 6: taller panels (50×40 cm), robust for constant use.", img: "/images/pultteiler-einsatz.jpg", imgAlt: "Pultteiler in the computer room of a secondary school" },
  { id: "universities", href: "/en/universities", title: "Universities and exam centres", teaser: "Large quantities for lecture halls and exam centres: individual quotes, reference Medical University of Innsbruck, delivery across Europe.", img: "/images/kurhaus-saal-totale.jpg", imgAlt: "Exam hall in the Kurhaus Bad Krozingen, every desk fitted with Pultteiler dividers" },
];
