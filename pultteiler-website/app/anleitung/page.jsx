import AnleitungPage from "./AnleitungPage";
import { alternatesFor } from "@/lib/i18n";
export const metadata = {
  title: { absolute: "Aufbauanleitung: Pultteiler ohne Werkzeug aufbauen" },
  description: "Aufbauanleitung für den Pultteiler: Klammer auf die Tischplatte stecken, Platte einschieben. Der Sichtschutz steht in Sekunden, ganz ohne Werkzeug.",
  alternates: alternatesFor("/anleitung"),
};
export default function Page() { return <AnleitungPage />; }
