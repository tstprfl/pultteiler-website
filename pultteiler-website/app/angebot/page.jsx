import AngebotPage from "./AngebotPage";
import { alternatesFor } from "@/lib/i18n";

export const metadata = {
  title: "Angebot anfordern: Kauf auf Rechnung",
  description:
    "Unverbindliches Angebot für Sichtschutz-Trennwände anfordern. Kauf auf Rechnung, E-Rechnung (AT), steuerfrei mit UID (DE), unverzollt (CH).",
  alternates: alternatesFor("/angebot"),
};

export default function Page() {
  return <AngebotPage />;
}
