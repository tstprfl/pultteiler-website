import TermsPage from "./TermsPage";
import { alternatesFor } from "@/lib/i18n";
import { OG_EN } from "@/lib/en";

export const metadata = {
  title: { absolute: "Terms and Conditions (Translation) | Pultteiler" },
  description: "English convenience translation of the general terms and conditions of Schulmittel Blaschegg. Only the German version is legally binding.",
  alternates: alternatesFor("/en/terms"),
  openGraph: OG_EN,
};

export default function Page() {
  return <TermsPage />;
}
