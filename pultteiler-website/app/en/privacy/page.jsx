import PrivacyPage from "./PrivacyPage";
import { alternatesFor } from "@/lib/i18n";
import { OG_EN } from "@/lib/en";

export const metadata = {
  title: { absolute: "Privacy Policy (Translation) | Pultteiler" },
  description: "English convenience translation of the privacy policy of Schulmittel Blaschegg. Only the German version is legally binding.",
  alternates: alternatesFor("/en/privacy"),
  openGraph: OG_EN,
};

export default function Page() {
  return <PrivacyPage />;
}
