import VertragWiderrufenPage from "./VertragWiderrufenPage";
import { alternatesFor } from "@/lib/i18n";

export const metadata = {
  title: "Vertrag widerrufen",
  description: "Online-Widerruf für Verbraucher: Kauf bei pultteiler.eu binnen 14 Tagen widerrufen, mit Eingangsbestätigung.",
  alternates: alternatesFor("/vertrag-widerrufen"),
};

export default function Page() { return <VertragWiderrufenPage />; }
