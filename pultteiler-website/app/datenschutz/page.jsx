import DatenschutzPage from "./DatenschutzPage";
import { alternatesFor } from "@/lib/i18n";
export const metadata = { alternates: alternatesFor("/datenschutz"), title: "Datenschutz", description: "Datenschutzerklärung von pultteiler.eu." };
export default function Page() { return <DatenschutzPage />; }
