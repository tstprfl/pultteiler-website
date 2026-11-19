// Vergibt die Bestellnummer: Jahr, Tag, Monat (Wiener Zeit) und eine je Tag bei 01 beginnende Nummer,
// z.B. 2026191101 (erste Bestellung am 19.11.2026), 2026191102 (zweite), 2026201101 (erste am 20.11.2026).
// Ab der 100. Bestellung eines Tages wird die Nummer dreistellig.
// Der Zähler liegt in Upstash Redis (Vercel Marketplace). Die Integration setzt die Umgebungsvariablen
// KV_REST_API_URL / KV_REST_API_TOKEN (bzw. UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN).
// Ohne Zähler antwortet die Route mit 503; der Warenkorb vergibt dann eine Ersatznummer, die Bestellung geht trotzdem raus.
export const dynamic = "force-dynamic";

const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

function heuteWien() {
  const teile = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Vienna", year: "numeric", month: "2-digit", day: "2-digit" })
    .formatToParts(new Date())
    .reduce((acc, p) => ({ ...acc, [p.type]: p.value }), {});
  return { datum: `${teile.year}${teile.day}${teile.month}` };
}

export async function POST() {
  if (!REDIS_URL || !REDIS_TOKEN) return Response.json({ error: "Zähler nicht eingerichtet" }, { status: 503 });
  const { datum } = heuteWien();
  try {
    const res = await fetch(`${REDIS_URL}/incr/bestellnummer:${datum}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${REDIS_TOKEN}` },
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Redis ${res.status}`);
    const { result } = await res.json();
    const lfd = Number(result);
    if (!Number.isInteger(lfd) || lfd < 1) throw new Error("Ungültiger Zählerstand");
    return Response.json({ orderNr: `${datum}${String(lfd).padStart(2, "0")}` }, { headers: { "Cache-Control": "no-store" } });
  } catch (e) {
    console.error("Bestellnummer konnte nicht vergeben werden:", e);
    return Response.json({ error: "Zähler nicht erreichbar" }, { status: 503 });
  }
}
