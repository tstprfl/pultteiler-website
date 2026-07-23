import Link from "next/link";
import ArticleLayout, { A } from "@/components/ArticleLayout";
import { ARTICLES } from "@/lib/articles";

const meta = { ...ARTICLES.find((a) => a.slug === "abschreiben-verhindern-schularbeit"), short: "Abschreiben verhindern", imgAlt: "Klassenraum mit Sichtschutz-Trennwänden während einer Schularbeit" };

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `/ratgeber/${meta.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout
      meta={meta}
      related={[
        { href: "/ratgeber/sichtschutz-klassenarbeit", label: "Sichtschutz für die Klassenarbeit: faire Prüfungsbedingungen schaffen" },
        { href: "/ratgeber/trennwand-schultisch-pruefung", label: "Trennwand für den Schultisch: Worauf es bei Prüfungen ankommt" },
        { href: "/volksschule", label: "Pultteiler für die Volksschule" },
      ]}
    >
      <p style={A.p}>
        Jede Lehrkraft kennt das Dilemma: Bei der Schularbeit soll jedes Kind zeigen, was es selbst kann — aber die Sitzordnung im Klassenzimmer lädt zum Abschreiben geradezu ein. Über die Jahre haben Schulen viele Gegenmittel entwickelt. Wir vergleichen die <strong style={A.strong}>sieben gängigsten Methoden, Abschreiben bei der Schularbeit zu verhindern</strong> — ehrlich, mit Aufwand und Nebenwirkungen.
      </p>

      <h2 style={A.h2}>METHODE 1: GRUPPE A / GRUPPE B — ZWEI ANGABEN</h2>
      <p style={A.p}>
        Der Klassiker: zwei Aufgabenversionen, schachbrettartig verteilt. Wirkt gegen direktes Abschreiben — aber der Preis ist hoch: <strong style={A.strong}>doppelte Vorbereitung, doppelte Fehlerquellen, erschwerte Vergleichbarkeit</strong> bei der Benotung. Und wer neben jemandem mit derselben Gruppe sitzt (in der Reihe dahinter), schaut trotzdem ab.
      </p>

      <h2 style={A.h2}>METHODE 2: KLASSE TEILEN — ZWEI DURCHGÄNGE</h2>
      <p style={A.p}>
        Die halbe Klasse schreibt, die andere Hälfte wird anderweitig betreut. Maximale Kontrolle — aber <strong style={A.strong}>doppelte Unterrichtszeit, Betreuungsproblem für die Wartenden</strong>, und die zweite Gruppe kennt die Aufgaben womöglich schon. In Zeiten knapper Personalressourcen für die meisten Schulen unrealistisch.</p>

      <h2 style={A.h2}>METHODE 3: STRENGER SITZPLAN & EINZELTISCHE</h2>
      <p style={A.p}>
        Tische auseinanderziehen, jeden zweiten Platz freilassen. Funktioniert — <strong style={A.strong}>wenn der Raum groß genug ist</strong>. Meist ist er es nicht: 25 Kinder brauchen dann zwei Räume (und zwei Aufsichten). Dazu kommen 10 Minuten Möbelrücken vor und nach der Arbeit — Unruhe inklusive.
      </p>

      <h2 style={A.h2}>METHODE 4: VERSCHÄRFTE AUFSICHT</h2>
      <p style={A.p}>
        Durch die Reihen gehen, Blickkontakt, Ermahnungen. Kurzfristig wirksam, aber anstrengend für alle: Die Lehrkraft ist 60 Minuten Überwachungspersonal statt Ansprechperson, die Atmosphäre wird angespannt — und ein geübter Seitenblick bleibt trotzdem unbemerkt. <strong style={A.strong}>Misstrauen als Dauerzustand</strong> ist pädagogisch der teuerste Preis auf dieser Liste.
      </p>

      <h2 style={A.h2}>METHODE 5: DIGITALE PRÜFUNGSFORMATE MIT ZUFALLSFRAGEN</h2>
      <p style={A.p}>
        Bei digitalen Tests können Fragenreihenfolge und Antwortoptionen randomisiert werden. Gut, wo ohnehin digital geprüft wird — aber die Schularbeit auf Papier bleibt in den meisten Fächern der Standard (und ist rechtlich oft vorgegeben). Zudem gilt auch am Bildschirm: <strong style={A.strong}>Der Blick zum Nachbarmonitor braucht einen Sichtschutz</strong>, Randomisierung allein reicht nicht.
      </p>

      <h2 style={A.h2}>METHODE 6: PRÜFUNGSRAUM / TURNSAAL</h2>
      <p style={A.p}>
        Große Räume mit weiten Abständen — das Modell der Zentralmatura und vieler Abschlussprüfungen. Für die vier, fünf großen Termine im Jahr gut organisierbar, <strong style={A.strong}>für die 30+ normalen Schularbeiten eines Schuljahres logistisch nicht machbar</strong> (Raumbelegung, Tische schleppen, Aufsichtspläne).
      </p>

      <h2 style={A.h2}>METHODE 7: SICHTSCHUTZ AM SCHULTISCH</h2>
      <p style={A.p}>
        Die direkteste Lösung: eine <Link href="/ratgeber/trennwand-schultisch-pruefung" style={A.a}>Trennwand am Schultisch</Link>, die die Sichtlinie zum Nachbarblatt unterbricht. Die Klasse bleibt zusammen, im eigenen Raum, mit einer einzigen Angabe — nur die Gelegenheit zum Abschreiben ist weg.
      </p>
      <ul style={A.ul}>
        <li style={A.li}><strong style={A.strong}>Aufwand:</strong> einmalige Anschaffung, danach 2–3 Minuten Aufbau durch die Klasse selbst</li>
        <li style={A.li}><strong style={A.strong}>Wirkung:</strong> physisch statt appellativ — der Seitenblick läuft ins Leere, bei jeder Arbeit gleich</li>
        <li style={A.li}><strong style={A.strong}>Nebenwirkungen:</strong> positiv — ruhigere Prüfungsatmosphäre; die Teiler sind außerhalb der Prüfung als <Link href="/ratgeber/reizarmer-arbeitsplatz-schule" style={A.a}>reizarmer Arbeitsplatz</Link> nutzbar</li>
        <li style={A.li}><strong style={A.strong}>Grenzen:</strong> ersetzt weder Aufsicht noch Handyregeln — verhindert das Abschreiben vom Nachbarn, nicht den Spickzettel</li>
      </ul>

      <h2 style={A.h2}>DER VERGLEICH IM ÜBERBLICK</h2>
      <ul style={A.ul}>
        <li style={A.li}><strong style={A.strong}>Wiederkehrender Aufwand pro Prüfung:</strong> Zwei Angaben, Klassenteilung, Raumwechsel und Möbelrücken kosten bei <em>jeder</em> Arbeit aufs Neue Zeit. Der Sichtschutz kostet einmal Geld und danach drei Minuten.</li>
        <li style={A.li}><strong style={A.strong}>Fairness & Klima:</strong> Verschärfte Aufsicht und Verdächtigungen belasten die Beziehung. Ein Sichtschutz für alle behandelt alle gleich.</li>
        <li style={A.li}><strong style={A.strong}>Wirksamkeit:</strong> Nur physische Maßnahmen (Abstand oder Sichtschutz) beseitigen die Gelegenheit zuverlässig — und Sichtschutz braucht dafür keinen zweiten Raum.</li>
      </ul>

      <h2 style={A.h2}>FAZIT</h2>
      <p style={{ ...A.p, marginBottom: 0 }}>
        Die Methoden schließen einander nicht aus — aber in der Aufwand-Wirkung-Bilanz liegt der Sichtschutz am Schultisch vorn: einmal angeschafft, bei jeder Schularbeit in Minuten einsatzbereit, ohne Mehraufwand für Vorbereitung, Räume oder Personal. Was ein gutes System auszeichnet, lesen Sie in unserer <Link href="/ratgeber/trennwand-schultisch-pruefung" style={A.a}>Kaufberatung für Trennwände</Link>.
      </p>
    </ArticleLayout>
  );
}
