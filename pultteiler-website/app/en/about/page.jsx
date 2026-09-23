import AboutPage from "./AboutPage";
import { alternatesFor } from "@/lib/i18n";
import { OG_EN } from "@/lib/en";

export const metadata = {
  title: { absolute: "About Us: Manufacturer for Over 40 Years | Pultteiler" },
  description: "Schulmittel Blaschegg from Altmünster, Austria: manufacturer of the Pultteiler for over 40 years, supplying several hundred schools in AT, DE and CH.",
  alternates: alternatesFor("/en/about"),
  openGraph: OG_EN,
};

export default function Page() {
  return <AboutPage />;
}
