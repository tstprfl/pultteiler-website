import Link from "next/link";
import ArticleLayout, { A } from "@/components/ArticleLayout";
import { ARTICLES } from "@/lib/articles";

const meta = { ...ARTICLES.find((a) => a.slug === "trennwand-schultisch-pruefung"), short: "Trennwand für den Schultisch", imgAlt: "Nahaufnahme einer Trennwand mit Klammerbefestigung auf einem Schultisch" };

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
        { href: "/hochschulen", label: "Trennwände für Hochschulen & Prüfungszentren" },
        { href: "/anleitung", label: "So funktioniert das Stecksystem" },
      ]}
    >
      <p style={A.p}>
        Wer für die eigene Schule eine <strong style={A.strong}>Trennwand für den Schultisch</strong> anschafft, trifft eine Entscheidung für viele Jahre: Ein guter Klassensatz übersteht hunderte Prüfungen. Umso wichtiger, vor dem Kauf die richtigen Fragen zu stellen. Diese Kaufberatung fasst zusammen, worauf es in der Praxis ankommt — von der Befestigung bis zur Ersatzteilfrage.
      </p>

      <h2 style={A.h2}>BEFESTIGUNG: DER WICHTIGSTE UNTERSCHIED</h2>
      <p style={A.p}>
        Trennwände für Prüfungen gibt es in drei Bauarten — und die Befestigung entscheidet über den Alltagsnutzen:
      </p>
      <ul style={A.ul}>
        <li style={A.li}><strong style={A.strong}>Stellwände (freistehend):</strong> Aufsteller aus Karton oder Kunststoff, die lose auf dem Tisch stehen. Günstig, aber kippanfällig — ein Stoß mit dem Ellbogen, und die Wand liegt auf dem Nachbarblatt. Bei Kartonvarianten leidet zudem die Haltbarkeit.</li>
        <li style={A.li}><strong style={A.strong}>Geschraubte Systeme:</strong> Fest montierte Trennwände sind stabil, machen den Tisch aber dauerhaft zum Prüfungstisch — für normale Unterrichtsräume unpraktisch, Montageaufwand pro Prüfung inakzeptabel.</li>
        <li style={A.li}><strong style={A.strong}>Klammersysteme (gesteckt):</strong> Eine elastische Klammer greift die Tischplatte, die Trennplatte wird eingeschoben. Steht fest wie montiert, ist aber in Sekunden auf- und abgebaut — der Standard für den Prüfungseinsatz, seit Jahrzehnten bewährt.</li>
      </ul>
      <p style={A.p}>
        Wichtig bei Klammersystemen: die <strong style={A.strong}>Tischplattenstärke</strong> prüfen. Gängige Klammern fassen Platten bis 3 cm — das deckt praktisch alle Schultische ab, auch Tische in EDV-Räumen und die meisten Hörsaal-Schreibflächen.
      </p>

      <h2 style={A.h2}>GRÖSSE: AUF DIE ALTERSSTUFE ABSTIMMEN</h2>
      <p style={A.p}>
        Die Trennwand muss die Sichtlinie zum Nachbarblatt unterbrechen — die hängt von der Sitzhöhe ab:
      </p>
      <ul style={A.ul}>
        <li style={A.li}><strong style={A.strong}>Bis zum 5. Schuljahr: 50×30 cm.</strong> Reicht bei der Sitzhöhe jüngerer Kinder völlig aus und wirkt nicht einschüchternd — die Lehrkraft behält freien Blick auf jedes Kind.</li>
        <li style={A.li}><strong style={A.strong}>Ab dem 6. Schuljahr: 50×40 cm.</strong> Jugendliche sitzen höher und beugen sich weiter — die höhere Platte verdeckt das Blatt auch dann zuverlässig.</li>
      </ul>
      <p style={A.p}>
        Für gemischte Einsätze (etwa Prüfungszentren mit Erwachsenen) ist die 40er-Höhe die richtige Wahl. Mehr dazu auf unseren Seiten für die <Link href="/volksschule" style={A.a}>Volksschule</Link>, die <Link href="/sekundarstufe" style={A.a}>Sekundarstufe</Link> und für <Link href="/hochschulen" style={A.a}>Hochschulen &amp; Prüfungszentren</Link>.
      </p>

      <h2 style={A.h2}>MATERIAL & HALTBARKEIT</h2>
      <p style={A.p}>
        Schulmaterial lebt hart. Kartonwände sind nach einem Schuljahr durchgesessen, geknickt oder beschrieben. Bewährt haben sich <strong style={A.strong}>bruchfeste Kunststoffplatten</strong>: abwischbar, verwindungssteif, unempfindlich gegen Feuchtigkeit. Bei den Klammern zählt Dauerelastizität — sie müssen nach dem tausendsten Aufstecken noch genauso greifen wie am ersten Tag.
      </p>
      <p style={A.p}>
        Ebenso wichtig: <strong style={A.strong}>Ersatzteile einzeln nachkaufen können.</strong> Geht eine Platte verloren oder eine Klammer kaputt, sollte nicht der ganze Satz unbrauchbar werden. Fragen Sie vor dem Kauf, ob Platten, Klammern und Aufbewahrung einzeln lieferbar sind — bei Herstellern mit eigener Fertigung ist das üblich, bei Handelsware oft nicht.
      </p>

      <h2 style={A.h2}>LAGERUNG & LOGISTIK</h2>
      <p style={A.p}>
        Ein unterschätzter Punkt: Wohin mit 25 Trennwänden zwischen den Prüfungen? Praktisch sind <strong style={A.strong}>stapelbare Koffer mit je 12 kompletten Systemen</strong> — sie passen in jeden Materialraum, sind von einer Person tragbar und machen den Klassensatz „ausleihbar": Der Koffer wandert dorthin, wo gerade geprüft wird.
      </p>

      <h2 style={A.h2}>CHECKLISTE FÜR DIE BESCHAFFUNG</h2>
      <ul style={A.ul}>
        <li style={A.li}>Klammersystem statt loser Aufsteller — steht fest, ohne Montage</li>
        <li style={A.li}>Plattenhöhe passend zur Altersstufe (30 cm Primarstufe / 40 cm ab Sekundarstufe)</li>
        <li style={A.li}>Klammer passt auf Ihre Tischplattenstärke (bis 3 cm = Standard)</li>
        <li style={A.li}>Bruchfester Kunststoff statt Karton</li>
        <li style={A.li}>Ersatzteile einzeln nachbestellbar</li>
        <li style={A.li}>Kompakte, stapelbare Aufbewahrung</li>
        <li style={A.li}>Kauf auf Rechnung möglich (schulkonforme Beschaffung)</li>
      </ul>

      <h2 style={A.h2}>FAZIT</h2>
      <p style={{ ...A.p, marginBottom: 0 }}>
        Die beste Trennwand für den Schultisch ist die, die nach fünf Jahren Dauereinsatz noch selbstverständlich funktioniert: gesteckt statt gestellt, Kunststoff statt Karton, Ersatzteile statt Neukauf. Wie sich der Sichtschutz konkret auf die Prüfungssituation auswirkt, lesen Sie im Beitrag <Link href="/ratgeber/sichtschutz-klassenarbeit" style={A.a}>Sichtschutz für die Klassenarbeit</Link>.
      </p>
    </ArticleLayout>
  );
}
