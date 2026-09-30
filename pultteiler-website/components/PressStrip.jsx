// Startseiten-Abschnitt „Zu sehen bei“: Medien, in deren Berichten Pultteiler im Foto zu sehen sind.
// Bewusst als Textwortmarken statt Logos (Markenrecht) und mit ehrlicher Fußnote (keine Berichterstattung über das Produkt).
// Daten und Texte in lib/presse.js.
import { C } from "@/lib/colors";
import { Reveal, Heading } from "@/components/ui";
import { PRESSE, PRESSE_T, formatDate } from "@/lib/presse";

const font = "'Inter Tight', sans-serif";

// id="medien": Sprungziel der Hero-Zeile (#medien); scrollMarginTop hält Abstand zur fixen Navigation
export default function PressStrip({ lang = "de" }) {
  const t = PRESSE_T[lang] || PRESSE_T.de;
  return (
    <section id="medien" style={{ padding: "80px 32px 72px", background: C.bgCard, borderBottom: `1px solid ${C.border}`, scrollMarginTop: 80 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Heading overline={t.overline} title={t.title} sub={t.sub} align="center"/>
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
