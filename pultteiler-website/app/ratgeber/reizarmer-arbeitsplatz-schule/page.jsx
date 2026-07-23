import Link from "next/link";
import ArticleLayout, { A } from "@/components/ArticleLayout";
import { ARTICLES } from "@/lib/articles";

const meta = { ...ARTICLES.find((a) => a.slug === "reizarmer-arbeitsplatz-schule"), short: "Reizarmer Arbeitsplatz", imgAlt: "Schüler arbeitet konzentriert an einem reizarm gestalteten Arbeitsplatz mit Sichtschutz" };

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
        { href: "/volksschule", label: "Pultteiler für die Volksschule & Primarstufe" },
        { href: "/ratgeber/sichtschutz-klassenarbeit", label: "Sichtschutz für die Klassenarbeit: faire Prüfungsbedingungen schaffen" },
        { href: "/angebot", label: "Unverbindliches Angebot für Ihre Schule anfordern" },
      ]}
    >
      <p style={A.p}>
        Ein volles Klassenzimmer ist ein Feuerwerk an Reizen: 25 Kinder in Bewegung, Stimmen, raschelnde Hefte, bunte Wände, das Fenster zum Pausenhof. Die meisten Kinder blenden das aus. Manche können das nicht — Kinder mit <strong style={A.strong}>ADHS</strong>, aus dem <strong style={A.strong}>Autismus-Spektrum</strong> oder schlicht mit hoher Ablenkbarkeit. Für sie entscheidet die Lernumgebung darüber, ob ihr Können auf dem Papier ankommt. Ein <strong style={A.strong}>reizarmer Arbeitsplatz in der Schule</strong> ist eine der wirksamsten und zugleich günstigsten Unterstützungen.
      </p>

      <h2 style={A.h2}>WAS „REIZARM" KONKRET BEDEUTET</h2>
      <p style={A.p}>
        Reizarm heißt nicht reizlos — es geht nicht um Isolation, sondern um <strong style={A.strong}>Dosierung</strong>: weniger visuelle Bewegung im Blickfeld, weniger direkte Sichtlinien zu anderen Kindern, ein klar begrenzter eigener Bereich. Der Effekt ist gut belegt: Weniger konkurrierende Reize bedeuten mehr Arbeitsgedächtnis für die eigentliche Aufgabe. In der sonderpädagogischen Praxis gehören Reizabschirmungen deshalb seit Langem zum Standardrepertoire — vom „Lernbüro" bis zur Studierkabine.
      </p>

      <h2 style={A.h2}>DIE HÜRDE IM SCHULALLTAG: STIGMATISIERUNG</h2>
      <p style={A.p}>
        Die beste Maßnahme scheitert, wenn sie das Kind ausstellt. Ein Sondertisch in der Ecke, eine auffällige Kabine, ein „Du gehst jetzt nach hinten" — all das markiert. Kinder spüren das sofort, und viele lehnen Hilfen ab, die sie sichtbar zum Sonderfall machen.
      </p>
      <p style={A.p}>
        Der praktikabelste Ausweg: eine Reizabschirmung verwenden, <strong style={A.strong}>die alle Kinder ohnehin kennen</strong>. Wo der Sichtschutz bei jeder <Link href="/ratgeber/sichtschutz-klassenarbeit" style={A.a}>Klassenarbeit</Link> selbstverständlich auf allen Tischen steht, ist er kein Stigma — sondern ein vertrautes Werkzeug. Wenn ein Kind ihn auch in der Stillarbeit nutzt, ist das dann so unauffällig wie ein Kopfhörer in der Freiarbeit.
      </p>

      <h2 style={A.h2}>SO RICHTEN SCHULEN REIZARME ARBEITSPLÄTZE EIN — OHNE UMBAU</h2>
      <h3 style={A.h3}>1. Mit dem vorhandenen Sichtschutz arbeiten</h3>
      <p style={A.p}>
        Eine <Link href="/ratgeber/trennwand-schultisch-pruefung" style={A.a}>Trennwand mit Klammersystem</Link> verwandelt jeden normalen Schultisch in Sekunden in einen reizarmen Arbeitsplatz — und zurück. Kein Möbelkauf, kein fester Platz, keine bauliche Maßnahme. Das Kind bleibt an seinem Platz, in seiner Sitzordnung, neben seinen Freunden.
      </p>
      <h3 style={A.h3}>2. Platzwahl mitdenken</h3>
      <p style={A.p}>
        Reizarm wird ein Platz auch durch Position: nicht direkt am Fenster zum Pausenhof, nicht an der Tür, Blickrichtung zur Wand oder Tafel statt in die Klasse. Sichtschutz plus kluge Platzwahl deckt die meisten Bedürfnisse bereits ab.
      </p>
      <h3 style={A.h3}>3. Rituale statt Ausnahmen</h3>
      <p style={A.p}>
        Am besten funktioniert der reizarme Arbeitsplatz als <strong style={A.strong}>Angebot für alle</strong>: „Wer heute seine Ruhe braucht, holt sich einen Teiler." In vielen Klassen greifen dann regelmäßig auch Kinder ohne Diagnose zu — und das Angebot normalisiert sich vollständig. Sonderpädagoginnen und -pädagogen können den Teiler zusätzlich gezielt in Förderplänen verankern.
      </p>

      <h2 style={A.h2}>WORAUF BEI DER AUSSTATTUNG ACHTEN?</h2>
      <ul style={A.ul}>
        <li style={A.li}><strong style={A.strong}>Neutrale Optik:</strong> ruhige, einfarbige Flächen ohne Muster — die Wand soll Reize schlucken, nicht erzeugen. Dezente Farben wie Grau fügen sich unauffällig ins Klassenzimmer.</li>
        <li style={A.li}><strong style={A.strong}>Vom Kind selbst bedienbar:</strong> Aufbau ohne Werkzeug und ohne Hilfe — Selbstständigkeit ist Teil der Förderung.</li>
        <li style={A.li}><strong style={A.strong}>Altersgerechte Höhe:</strong> 50×30 cm in der <Link href="/volksschule" style={A.a}>Primarstufe</Link>, 50×40 cm ab der <Link href="/sekundarstufe" style={A.a}>Sekundarstufe</Link> — hoch genug zum Abschirmen, niedrig genug für den Kontakt zur Lehrkraft.</li>
        <li style={A.li}><strong style={A.strong}>Doppelnutzen:</strong> Dieselben Teiler sichern die Klassenarbeiten — die Anschaffung trägt sich über zwei Einsatzzwecke.</li>
      </ul>

      <h2 style={A.h2}>WAS DER REIZARME ARBEITSPLATZ NICHT IST</h2>
      <p style={A.p}>
        Ein Sichtschutz ersetzt weder Diagnostik noch Therapie oder sonderpädagogische Förderung — er ist eine <strong style={A.strong}>Umgebungsanpassung</strong>, die Barrieren senkt, damit vorhandene Fähigkeiten sichtbar werden. Genau das macht ihn im Sinne der Inklusion wertvoll: Er verändert die Umgebung, nicht das Kind.
      </p>

      <h2 style={A.h2}>FAZIT</h2>
      <p style={{ ...A.p, marginBottom: 0 }}>
        Ein reizarmer Arbeitsplatz gehört zu den einfachsten wirksamen Maßnahmen im inklusiven Unterricht: ein Sichtschutz, den alle kennen, ein durchdachter Platz, ein Ritual ohne Stigma. Schulen, die ihre Teiler ohnehin für Prüfungen anschaffen, haben die Ausstattung dafür bereits im Haus. Gerne beraten wir Sie zur passenden Ausstattung — <Link href="/angebot" style={A.a}>fordern Sie ein unverbindliches Angebot an</Link>.
      </p>
    </ArticleLayout>
  );
}
