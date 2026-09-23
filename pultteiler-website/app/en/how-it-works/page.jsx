import HowItWorksPage from "./HowItWorksPage";
import { alternatesFor } from "@/lib/i18n";
import { OG_EN } from "@/lib/en";

export const metadata = {
  title: { absolute: "How the Pultteiler Works: Tool-Free Set-Up" },
  description: "Set-up guide for the Pultteiler: push the clamp onto the desktop, insert the panel. The privacy screen stands in seconds, without any tools.",
  alternates: alternatesFor("/en/how-it-works"),
  openGraph: OG_EN,
};

export default function Page() {
  return <HowItWorksPage />;
}
