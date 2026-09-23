import GalleryPage from "./GalleryPage";
import { alternatesFor } from "@/lib/i18n";
import { OG_EN } from "@/lib/en";

export const metadata = {
  title: { absolute: "References: Pultteiler at Schools and Universities" },
  description: "The Pultteiler in exam use: impressions from primary schools, secondary schools, computer rooms, an exam hall and the Medical University of Innsbruck.",
  alternates: alternatesFor("/en/gallery"),
  openGraph: OG_EN,
};

export default function Page() {
  return <GalleryPage />;
}
