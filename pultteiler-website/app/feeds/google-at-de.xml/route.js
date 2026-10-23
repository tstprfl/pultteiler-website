import { SHOPS, merchantFeed } from "@/lib/shop";

// Google-Merchant-Feed für Österreich und Deutschland, beim Build aus lib/data.js erzeugt
export const dynamic = "force-static";

export function GET() {
  return new Response(merchantFeed(SHOPS.ATDE), { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
