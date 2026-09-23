import HomePage from "./HomePage";
import { YEARS } from "@/lib/site";

export const metadata = {
  title: { absolute: "Pultteiler — Sichtschutz für Schultische bei Klassenarbeiten & Prüfungen" },
  description: `Sichtschutz für Schultische: verhindert Abschreiben bei Schularbeiten und Prüfungen. Direkt vom Hersteller, seit über ${YEARS} Jahren. Kauf auf Rechnung.`,
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomePage />;
}
