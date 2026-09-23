import HomeEn from "./HomePageEn";
import { alternatesFor } from "@/lib/i18n";
import { OG_EN } from "@/lib/en";

export const metadata = {
  title: { absolute: "Pultteiler: Privacy Screens for School Desks and Exams" },
  description: "Desk dividers for fair tests and exams: prevent copying, tool-free set-up, direct from the Austrian manufacturer. Delivery to other countries on request.",
  alternates: alternatesFor("/en"),
  openGraph: OG_EN,
};

export default function Page() {
  return <HomeEn />;
}
