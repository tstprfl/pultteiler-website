import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ScrollToTop } from "@/components/ui";
import { SCHOOLS_COUNT, YEARS, CONTACT } from "@/lib/site";

export const metadata = {
  metadataBase: new URL("https://www.pultteiler.eu"),
  title: {
    default: "Pultteiler — Sichtschutz für Schultische bei Klassenarbeiten & Prüfungen",
    template: "%s — Pultteiler",
  },
  description: `Sichtschutz-Trennwände für Schultische: Abschreiben bei Schularbeiten, Klassenarbeiten und Prüfungen verhindern. Direkt vom Hersteller, seit über ${YEARS} Jahren, über ${SCHOOLS_COUNT} Schulen in AT, DE & CH. Kauf auf Rechnung.`,
  icons: { icon: "/images/Klammer_2.png" },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Pultteiler — Schulmittel Blaschegg",
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
  description: `Hersteller von Pultteilern — Sichtschutz-Trennwänden für Schultische bei schriftlichen Prüfungen. Seit über ${YEARS} Jahren, über ${SCHOOLS_COUNT} Schulen in Österreich, Deutschland und der Schweiz.`,
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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter+Tight:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}/>
      </head>
      <body>
        <CartProvider>
          <div style={{ background: "#E4F0F0", minHeight: "100vh", color: "#1A2A2A" }}>
            <Nav/>
            <main>{children}</main>
            <Footer/>
            <ScrollToTop/>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
