import ShippingPage from "./ShippingPage";
import { alternatesFor } from "@/lib/i18n";
import { OG_EN } from "@/lib/en";

export const metadata = {
  title: { absolute: "Shipping and Returns to AT, DE, CH | Pultteiler" },
  description: "Case sets delivered free to Austria and Germany, duty-free to Switzerland, other countries on request. 14-day right of withdrawal for consumers.",
  alternates: alternatesFor("/en/shipping"),
  openGraph: OG_EN,
};

export default function Page() {
  return <ShippingPage />;
}
