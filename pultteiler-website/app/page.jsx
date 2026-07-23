import HomePage from "./HomePage";
import { YEARS } from "@/lib/site";

export const metadata = {
  title: "Pultteiler — Sichtschutz für Schultische bei Klassenarbeiten & Prüfungen",
  description: `Der bewährte Sichtschutz für Schultische: verhindert Abschreiben bei Schularbeiten, Klassenarbeiten und Prüfungen — und schafft reizarme Arbeitsplätze. Direkt vom Produzenten, mehrere hundert Schulen in AT, DE & CH, seit über ${YEARS} Jahren. Kauf auf Rechnung.`,
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomePage />;
}
