import KontaktPage from "./KontaktPage";
import { alternatesFor } from "@/lib/i18n";
export const metadata = {
  title: "Kontakt: Schulmittel Blaschegg",
  description: "Kontakt zu Schulmittel Blaschegg per Formular, E-Mail oder Telefon. Beratung zu Sichtschutz-Trennwänden für Schulen in AT, DE und CH.",
  alternates: alternatesFor("/kontakt"),
};
export default function Page() { return <KontaktPage />; }
