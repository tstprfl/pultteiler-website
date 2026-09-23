import HomePage from "./HomePage";
import { YEARS } from "@/lib/site";
import { alternatesFor } from "@/lib/i18n";

export const metadata = {
  title: { absolute: "Pultteiler — Sichtschutz für Schultische bei Klassenarbeiten & Prüfungen" },
  description: `Sichtschutz für Schultische: verhindert Abschreiben bei Schularbeiten und Prüfungen. Direkt vom Hersteller, seit über ${YEARS} Jahren. Kauf auf Rechnung.`,
  alternates: alternatesFor("/"),
};

export default function Page() {
  return <HomePage />;
}
