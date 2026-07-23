import HomePage from "./HomePage";
import { SCHOOLS_COUNT, YEARS } from "@/lib/site";

export const metadata = {
  title: "Pultteiler — Sichtschutz für Schultische bei Klassenarbeiten & Prüfungen",
  description: `Der bewährte Sichtschutz für Schultische: verhindert Abschreiben bei Schularbeiten, Klassenarbeiten und Prüfungen — und schafft reizarme Arbeitsplätze. Direkt vom Hersteller, über ${SCHOOLS_COUNT} Schulen in AT, DE & CH, seit über ${YEARS} Jahren. Kauf auf Rechnung.`,
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomePage />;
}
