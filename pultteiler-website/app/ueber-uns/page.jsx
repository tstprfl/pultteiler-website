import UeberUnsPage from "./UeberUnsPage";
import { alternatesFor } from "@/lib/i18n";
export const metadata = {
  title: "Über uns: Hersteller seit über 40 Jahren",
  description: "Schulmittel Blaschegg aus Altmünster: Hersteller des Pultteilers seit über 40 Jahren, Direktvertrieb an mehrere hundert Schulen in AT, DE und CH.",
  alternates: alternatesFor("/ueber-uns"),
};
export default function Page() { return <UeberUnsPage />; }
