import VersandPage from "./VersandPage";
import { alternatesFor } from "@/lib/i18n";
export const metadata = {
  title: "Versand und Rückgabe nach AT, DE, CH",
  description: "Koffer-Sets versandkostenfrei nach Österreich und Deutschland, unverzollt in die Schweiz, E-Rechnung für Bundesschulen. 14 Tage Widerrufsrecht.",
  alternates: alternatesFor("/versand"),
};
export default function Page() { return <VersandPage />; }
