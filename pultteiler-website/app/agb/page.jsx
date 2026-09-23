import AgbPage from "./AgbPage";
import { alternatesFor } from "@/lib/i18n";
export const metadata = { alternates: alternatesFor("/agb"), title: "AGB", description: "Allgemeine Geschäftsbedingungen von Schulmittel Blaschegg." };
export default function Page() { return <AgbPage />; }
