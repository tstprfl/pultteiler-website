import AngebotPage from "./AngebotPage";

export const metadata = {
  title: "Angebot anfordern — Pultteiler für Ihre Schule auf Rechnung",
  description:
    "Unverbindliches Angebot für Sichtschutz-Trennwände anfordern: Schulname, Menge und Land angeben — wir melden uns kurzfristig. Kauf auf Rechnung, E-Rechnung (AT), steuerfrei mit UID (DE), unverzollt (CH).",
  alternates: { canonical: "/angebot" },
};

export default function Page() {
  return <AngebotPage />;
}
