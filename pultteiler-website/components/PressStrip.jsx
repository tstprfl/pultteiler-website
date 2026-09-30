// Startseiten-Abschnitt „Zu sehen bei“: Medien, in deren Berichten Pultteiler im Foto zu sehen sind.
// Bewusst als Textwortmarken statt Logos (Markenrecht) und mit ehrlicher Fußnote (keine Berichterstattung über das Produkt).
// Daten und Texte in lib/presse.js.
import { C } from "@/lib/colors";
import { Reveal } from "@/components/ui";
import { PRESSE, PRESSE_T, formatDate } from "@/lib/presse";

const font = "'Inter Tight', sans-serif";

export default function PressStrip({ lang = "de" }) {
  const t = PRESSE_T[lang] || PRESSE_T.de;
  return (
    <section aria-labelledby="press-title" style={{ padding: "64px 32px", background: C.bgCard, borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <h2 id="press-title" style={{ fontFamily: font, fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.textMuted, margin: "0 0 10px" }}>{t.title}</h2>
          <p style={{ fontFamily: font, fontSize: 15, color: C.textMuted, margin: 0 }}>{t.sub}</p>
        </div>
        <Reveal>
          {/* Drei Kacheln je Zeile, eine unvollständige letzte Zeile wird zentriert; am Handy eine Kachel je Zeile (globals.css) */}
          <div className="press-g" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2 }}>
            {PRESSE.map((m) => (
              <div key={m.id} style={{ flex: "0 0 calc((100% - 4px) / 3)", minWidth: 0, background: C.bg, border: `1px solid ${C.border}`, padding: "30px 20px 26px", textAlign: "center" }}>
                {m.logo ? (
                  <img src={m.logo} alt={m.name} style={{ height: 36, width: "auto", display: "block", margin: "0 auto" }}/>
                ) : (
                  <div style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 3vw, 38px)", letterSpacing: "0.04em", color: C.text, lineHeight: 1 }}>{m.name}</div>
                )}
                <ul style={{ listStyle: "none", margin: "16px 0 0", padding: 0, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "6px 16px" }}>
                  {m.articles.map((a) => (
                    <li key={a.url}>
                      <a href={a.url} target="_blank" rel="noopener noreferrer" title={`${t.open}: ${a.title}`} aria-label={`${m.name}, ${formatDate(a.date, lang)}: ${a.title}`}
                         style={{ fontFamily: font, fontSize: 13, fontWeight: 600, color: C.accentText, textDecoration: "underline", textUnderlineOffset: 3 }}>
                        <time dateTime={a.date}>{formatDate(a.date, lang)}</time>{a.label ? ` · ${a.label[lang] || a.label.de}` : ""} →
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
        <p style={{ fontFamily: font, fontSize: 12, color: C.textMuted, textAlign: "center", margin: "20px 0 0", lineHeight: 1.6 }}>{t.note}</p>
      </div>
    </section>
  );
}
