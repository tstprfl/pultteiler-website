import Link from "next/link";
import ArticleLayout, { A } from "@/components/ArticleLayout";
import { ARTICLES } from "@/lib/articles";
import { alternatesFor } from "@/lib/i18n";

const meta = { ...ARTICLES.find((a) => a.slug === "reizarmer-arbeitsplatz-schule"), short: "Reizarmer Arbeitsplatz", imgAlt: "Schüler arbeitet konzentriert an einem reizarm gestalteten Arbeitsplatz mit Sichtschutz" };

export const metadata = {
  title: meta.seoTitle || meta.title,
  description: meta.description,
  alternates: alternatesFor("/ratgeber/reizarmer-arbeitsplatz-schule"),
};

export default function Page() {
  return (
    <ArticleLayout
      meta={meta}
      related={[
        { href: "/volksschule", label: "Pultteiler für die Volksschule & Primarstufe" },
        { href: "/ratgeber/sichtschutz-klassenarbeit", label: "Sichtschutz für Klassenarbeiten: faire Prüfungsbedingungen schaffen" },
        { href: "/angebot", label: "Unverbindliches Angebot für Ihre Schule anfordern" },
      ]}
    >
      <p style={A.p}>
        Ein volles Klassenzimmer ist ein Feuerwerk an Reizen: 25 Kinder in Bewegung, Stimmen, raschelnde Hefte, bunte Wände, das Fenster zum Pausenhof. Beim gemeinsamen Lernen gehört das dazu. Wenn es aber darum geht, einen Text zu schreiben, eine Aufgabe zu Ende zu rechnen oder sich in eine Sache zu vertiefen, hilft jedem Kind ein ruhiger Platz. Ein <strong style={A.strong}>reizarmer Arbeitsplatz in der Schule</strong> ist eine der einfachsten und zugleich günstigsten Möglichkeiten, Konzentration zu fördern, mit einer Trennwand, die viele Schulen ohnehin im Haus haben.
      </p>

      <h2 style={A.h2}>Was „reizarm" konkret bedeutet</h2>
      <p style={A.p}>
        Reizarm heißt nicht reizlos. Es geht nicht um Abschottung, sondern um <strong style={A.strong}>Dosierung</strong>: weniger visuelle Bewegung im Blickfeld, weniger direkte Sichtlinien zu anderen Kindern, ein klar begrenzter eigener Bereich. Der Effekt ist gut belegt: Weniger konkurrierende Reize bedeuten mehr Aufmerksamkeit für die eigentliche Aufgabe. Deshalb gehören ruhige Arbeitsplätze, von der Leseecke bis zum Stillarbeitstisch, in vielen Schulen längst zum Alltag.
      </p>

      <h2 style={A.h2}>Ein vertrautes Werkzeug statt einer Sonderlösung</h2>
      <p style={A.p}>
        Am besten funktioniert ein reizarmer Arbeitsplatz, wenn er mit etwas eingerichtet wird, <strong style={A.strong}>das alle Kinder ohnehin kennen</strong>. Wo die Trennwand bei jeder <Link href="/ratgeber/sichtschutz-klassenarbeit" style={A.a}>Klassenarbeit</Link> selbstverständlich auf allen Tischen steht, ist sie ein vertrautes Werkzeug. Wenn ein Kind sie auch in der Stillarbeit nutzt, ist das so selbstverständlich wie ein Kopfhörer in der Freiarbeit.
      </p>

      <h2 style={A.h2}>So richten Schulen reizarme Arbeitsplätze ein, ohne Umbau</h2>
      <h3 style={A.h3}>1. Mit der vorhandenen Trennwand arbeiten</h3>
      <p style={A.p}>
        Eine <Link href="/ratgeber/trennwand-schultisch-pruefung" style={A.a}>Trennwand mit Klammersystem</Link> verwandelt jeden normalen Schultisch in wenigen Augenblicken in einen reizarmen Arbeitsplatz und wieder zurück. Kein Möbelkauf, kein fester Platz, keine bauliche Maßnahme. Das Kind bleibt an seinem Platz, in seiner Sitzordnung, neben seinen Freunden.
      </p>
      <h3 style={A.h3}>2. Platzwahl mitdenken</h3>
      <p style={A.p}>
        Reizarm wird ein Platz auch durch Position: nicht direkt am Fenster zum Pausenhof, nicht an der Tür, Blickrichtung zur Wand oder Tafel statt in die Klasse. Sichtschutz plus kluge Platzwahl deckt die meisten Bedürfnisse bereits ab.
      </p>
      <h3 style={A.h3}>3. Rituale statt Ausnahmen</h3>
      <p style={A.p}>
        Am besten funktioniert der reizarme Arbeitsplatz als <strong style={A.strong}>Angebot für alle</strong>: „Wer heute seine Ruhe braucht, holt sich einen Teiler." In vielen Klassen greifen dann regelmäßig ganz unterschiedliche Kinder zu, und das Angebot wird zur Selbstverständlichkeit. Lehrkräfte können die Trennwand zusätzlich fest in Stillarbeitsphasen einplanen.
      </p>

      <h2 style={A.h2}>Worauf bei der Ausstattung achten?</h2>
      <ul style={A.ul}>
        <li style={A.li}><strong style={A.strong}>Neutrale Optik:</strong> ruhige, einfarbige Flächen ohne Muster. Die Wand soll Reize schlucken, nicht erzeugen. Dezente Farben wie Grau fügen sich unauffällig ins Klassenzimmer.</li>
        <li style={A.li}><strong style={A.strong}>Vom Kind selbst bedienbar:</strong> Aufbau ohne Werkzeug und ohne Hilfe. Die Kinder richten sich ihren Platz selbstständig ein.</li>
        <li style={A.li}><strong style={A.strong}>Altersgerechte Höhe:</strong> 50×30 cm in der <Link href="/volksschule" style={A.a}>Primarstufe</Link>, 50×40 cm ab der <Link href="/sekundarstufe" style={A.a}>Sekundarstufe</Link>: hoch genug zum Abschirmen, niedrig genug für den Kontakt zur Lehrkraft.</li>
        <li style={A.li}><strong style={A.strong}>Doppelnutzen:</strong> Dieselben Teiler sichern die Klassenarbeiten, die Anschaffung trägt sich über zwei Einsatzzwecke.</li>
      </ul>

      <h2 style={A.h2}>Fazit</h2>
      <p style={{ ...A.p, marginBottom: 0 }}>
        Ein reizarmer Arbeitsplatz gehört zu den einfachsten wirksamen Maßnahmen für konzentriertes Arbeiten: eine Trennwand, die alle kennen, ein durchdachter Platz, ein festes Ritual. Schulen, die ihre Teiler ohnehin für Prüfungen anschaffen, haben die Ausstattung dafür bereits im Haus. Gerne beraten wir Sie zur passenden Ausstattung, <Link href="/angebot" style={A.a}>fordern Sie ein unverbindliches Angebot an</Link>.
      </p>
    </ArticleLayout>
  );
}
