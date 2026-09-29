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
  quoteCta: "Request a quote →",
  shopHref: "/en/products",
  shopCta: "View products",
  contactHref: "/en/contact",
  contactCta: "Contact us",
  trust: ["Direct from the manufacturer", "Several hundred schools in AT, DE and CH", `For over ${YEARS} years`, "Delivery to other countries on request"],
  orderTitle: "How ordering works",
  orderSub: "No credit card checkout: you send us a request and receive a written quote. In Austria, Germany and Switzerland you pay on invoice after delivery.",
  countries: COUNTRIES_EN,
  faqTitle: "Frequently asked questions",
};

// Englische Bezeichnungen der Sets (Reihenfolge und id wie SETS in lib/data.js)
export const SETS_EN = {
  "gelb-vs": { name: "Set A: yellow, up to school year 5", desc: "1 wooden case with 12 divider panels (50×30 cm) and 12 clamps. Recommended up to school year 5." },
  "gelb-ms": { name: "Set B: yellow, from school year 6", desc: "1 wooden case with 12 divider panels (50×40 cm) and 12 clamps. Recommended from school year 6." },
  "grau-ms": { name: "Set B: grey, from school year 6", desc: "1 wooden case with 12 divider panels (50×40 cm) and 12 clamps. Recommended from school year 6." },
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
  { src: "/images/kurhaus-saal-totale.jpg", label: "Kurhaus Bad Krozingen", alt: "Exam hall at Kurhaus Bad Krozingen with Pultteiler dividers on every desk" },
  { src: "/images/kurhaus-tischreihe.jpg", label: "Kurhaus Bad Krozingen", alt: "Row of desks with Pultteiler dividers at Kurhaus Bad Krozingen" },
  { src: "/images/kurhaus-klammer-detail.jpg", label: "Kurhaus Bad Krozingen", alt: "Pultteiler clamp on the desk edge at Kurhaus Bad Krozingen" },
  { src: "/images/kurhaus-blick-buehne.jpg", label: "Kurhaus Bad Krozingen", alt: "View towards the stage across the exam desks at Kurhaus Bad Krozingen" },
  { src: "/images/klassenzimmer.png", label: "In use in the classroom" },
  { src: "/images/meduni-innsbruck_2.jpeg", label: "Medical University of Innsbruck", alt: "Pultteiler dividers in a laboratory at the Medical University of Innsbruck" },
  { src: "/images/pultteiler-einsatz.jpg", label: "Computer room with Pultteiler" },
  { src: "/images/meduni-innsbruck_1.jpeg", label: "Medical University of Innsbruck", alt: "Close-up of Pultteiler dividers at the Medical University of Innsbruck" },
  { src: "/images/pultteiler-uni.png", label: "University lecture hall" },
  { src: "/images/pultteiler-2.jpg", label: "Pultteiler in a large room" },
  { src: "/images/nahaufnahme.jpeg", label: "Close-up of the dividers" },
];

// Zielgruppen (Startseite), Gegenstück zu AUDIENCES in lib/site.js
export const AUDIENCES_EN = [
  { id: "primary", href: "/en/primary-schools", title: "Primary schools", teaser: "Privacy screens for the first tests: child-friendly height (50×30 cm), set up in two minutes, one case per class.", img: "/images/klassenzimmer.png", imgAlt: "Pultteiler in a primary school classroom" },
  { id: "secondary", href: "/en/secondary-schools", title: "Secondary schools", teaser: "Dividers for tests and exams from school year 6: taller panels (50×40 cm), robust for constant use.", img: "/images/pultteiler-einsatz.jpg", imgAlt: "Pultteiler in the computer room of a secondary school" },
  { id: "universities", href: "/en/universities", title: "Universities and exam centres", teaser: "Large quantities for lecture halls and exam centres: individual quotes, reference Medical University of Innsbruck, delivery across Europe.", img: "/images/kurhaus-saal-totale.jpg", imgAlt: "Exam hall in the Kurhaus Bad Krozingen, every desk fitted with Pultteiler dividers" },
];
