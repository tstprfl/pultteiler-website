import ContactPage from "./ContactPage";
import { alternatesFor } from "@/lib/i18n";
import { OG_EN } from "@/lib/en";

export const metadata = {
  title: { absolute: "Contact: Schulmittel Blaschegg | Pultteiler" },
  description: "Contact Schulmittel Blaschegg by form, email or phone. Advice on privacy dividers for schools, universities and exam centres.",
  alternates: alternatesFor("/en/contact"),
  openGraph: OG_EN,
};

export default function Page() {
  return <ContactPage />;
}
