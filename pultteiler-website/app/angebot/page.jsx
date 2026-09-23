import AngebotPage from "./AngebotPage";

export const metadata = {
  title: "Angebot anfordern: Kauf auf Rechnung",
  description:
    "Unverbindliches Angebot für Sichtschutz-Trennwände anfordern. Kauf auf Rechnung, E-Rechnung (AT), steuerfrei mit UID (DE), unverzollt (CH).",
  alternates: { canonical: "/angebot" },
};

export default function Page() {
  return <AngebotPage />;
}
