import GaleriePage from "./GaleriePage";
import { alternatesFor } from "@/lib/i18n";
export const metadata = {
  title: { absolute: "Referenzen: Pultteiler an Schulen und Universitäten" },
  description: "Der Pultteiler im Prüfungseinsatz: Eindrücke aus Volksschulen, Gymnasien, EDV-Räumen und von der MedUni Innsbruck.",
  alternates: alternatesFor("/galerie"),
};
export default function Page() { return <GaleriePage />; }
