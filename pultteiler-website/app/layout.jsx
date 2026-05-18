import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ScrollToTop } from "@/components/ui";

export const metadata = {
  metadataBase: new URL("https://www.pultteiler.eu"),
  title: {
    default: "Pultteiler — Der bewährte Sichtschutz für Schultische",
    template: "%s — Pultteiler",
  },
  description: "Der Pultteiler ist der bewährte Sichtschutz für Schultische bei schriftlichen Prüfungen — europaweit. Einfaches Stecksystem, direkt vom Hersteller. Seit über 40 Jahren.",
  icons: { icon: "/images/Klammer_2.png" },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Pultteiler — Schulmittel Blaschegg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter+Tight:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
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
