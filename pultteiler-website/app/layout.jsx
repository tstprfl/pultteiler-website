// Schriften selbst gehostet (Fontsource), damit keine Verbindung zu Google-Servern entsteht
import "@fontsource-variable/archivo/wdth.css";   // Überschriften, Breitenachse (schmal gesetzt in globals.css)
import "@fontsource-variable/source-sans-3";       // Fließtext, Knöpfe, Beschriftungen
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { ScrollToTop } from "@/components/ui";
import LanguageHint from "@/components/LanguageHint";
import { YEARS, CONTACT } from "@/lib/site";

export const metadata = {
  metadataBase: new URL("https://www.pultteiler.eu"),
  title: {
    default: "Pultteiler: Sichtschutz für Schultische bei Klassenarbeiten und Prüfungen",
    template: "%s | Pultteiler",
  },
  description: `Sichtschutz für Schultische: verhindert Abschreiben bei Schularbeiten und Prüfungen. Direkt vom Hersteller, seit über ${YEARS} Jahren. Kauf auf Rechnung.`,
  icons: { icon: "/images/Klammer_2.png" },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Pultteiler | Schulmittel Blaschegg",
    images: [{ url: "/images/pultteiler-einsatz.jpg", alt: "Pultteiler: Sichtschutz-Trennwände auf Schultischen" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/pultteiler-einsatz.jpg"],
  },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Schulmittel Blaschegg",
  alternateName: "Pultteiler",
  url: "https://www.pultteiler.eu",
  logo: "https://www.pultteiler.eu/images/Klammer_2.png",
  description: `Hersteller von Pultteilern, Sichtschutz-Trennwänden für Schultische bei schriftlichen Prüfungen. Seit über ${YEARS} Jahren, mehrere hundert Schulen in Österreich, Deutschland und der Schweiz.`,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.street,
    addressLocality: "Altmünster",
    postalCode: "4813",
    addressCountry: "AT",
  },
  email: CONTACT.email,
  telephone: "+436769354033",
  vatID: CONTACT.uid,
  areaServed: ["AT", "DE", "CH"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}/>
      </head>
      <body>
        <CartProvider>
          <div style={{ background: "#E4F0F0", minHeight: "100vh", color: "#1A2A2A" }}>
            <Nav/>
            <main>{children}</main>
            <Footer/>
            <ScrollToTop/>
            {/* Vercel Web Analytics: Seitenaufrufe ohne Cookies und ohne personenbezogene Kennungen, daher ohne Einwilligungsbanner */}
            <Analytics/>
            <LanguageHint/>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
