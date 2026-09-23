import QuotePage from "./QuotePage";
import { alternatesFor } from "@/lib/i18n";
import { OG_EN } from "@/lib/en";

export const metadata = {
  title: { absolute: "Request a Quote for Exam Desk Dividers | Pultteiler" },
  description:
    "Request a non-binding quote for Pultteiler desk dividers. Delivery to other countries on request, direct from the manufacturer.",
  alternates: alternatesFor("/en/quote"),
  openGraph: OG_EN,
};

export default function Page() {
  return <QuotePage />;
}
