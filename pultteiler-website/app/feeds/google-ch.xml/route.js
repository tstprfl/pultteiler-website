import { SHOPS, merchantFeed } from "@/lib/shop";

// Google-Merchant-Feed für die Schweiz (steuerfreie Preise), beim Build aus lib/data.js erzeugt.
// Eigene IDs mit Endung -ch, damit sie sich nicht mit dem Feed für Österreich und Deutschland überschneiden.
export const dynamic = "force-static";

export function GET() {
  return new Response(merchantFeed(SHOPS.CH, "-ch"), { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
