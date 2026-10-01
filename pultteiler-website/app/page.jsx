import HomePage from "./HomePage";
import { YEARS } from "@/lib/site";
import { alternatesFor } from "@/lib/i18n";

export const metadata = {
  title: { absolute: "Pultteiler: Trennwände und Sichtschutz für die Schule" },
  description: `Trennwände und Sichtschutz für Schultische gegen Abschreiben bei Klassenarbeiten und Prüfungen. Seit über ${YEARS} Jahren vom Hersteller, Kauf auf Rechnung.`,
  alternates: alternatesFor("/"),
};

export default function Page() {
  return <HomePage />;
}
