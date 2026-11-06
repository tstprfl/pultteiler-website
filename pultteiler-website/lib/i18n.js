// Metadaten-Hilfe: canonical der Seite. Die englische Fassung wurde im November 2026 abgeschaltet,
// daher keine hreflang-Angaben mehr. Regionalseiten (z.B. /produkte/schweiz) übergeben ihren eigenen Pfad.
export function alternatesFor(path) {
  return { canonical: path };
}
