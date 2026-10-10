import Link from "next/link";
import ArticleLayout, { A } from "@/components/ArticleLayout";
import { articleEn } from "@/lib/articles-en";
import { alternatesFor } from "@/lib/i18n";
import { OG_EN } from "@/lib/en";

const meta = { ...articleEn("research-on-copying-in-exams"), short: "Research on copying", imgAlt: "Exam hall with desk dividers on every desk" };

export const metadata = {
  title: { absolute: `${meta.seoTitle} | Pultteiler` },
  description: meta.description,
  alternates: alternatesFor(meta.path),
  openGraph: OG_EN,
};

const ext = { ...A.a, wordBreak: "break-word" };

export default function Page() {
  return (
    <ArticleLayout
      lang="en"
      meta={meta}
      related={[
        { href: "/en/guide/prevent-cheating-in-exams", label: "How to prevent copying in class tests: 7 methods compared" },
        { href: "/en/guide/desk-dividers-for-exams", label: "Desk dividers for exams: what really matters" },
        { href: "/en/universities", label: "Desk dividers for lecture halls and exam centres" },
      ]}
    >
      <p style={A.p}>
        How much copying actually happens in exams, and where exactly does it take place? Researchers at universities in the United States and Germany have answered these questions using answer patterns from real exams. The results are strikingly consistent: <strong style={A.strong}>students copy from the person sitting next to them</strong>, and as soon as the line of sight to the neighbour's paper is gone, the problem almost disappears. This article summarises the key studies and what they mean for using a desk divider.
      </p>

      <h2 style={A.h2}>How copying can be measured at all</h2>
      <p style={A.p}>
        Surveys underestimate the issue because hardly anyone likes to admit copying. The more recent studies therefore take a different route: in multiple-choice exams they compare how similar the answers of seat neighbours are with the similarity between people sitting far apart. <strong style={A.strong}>Identical wrong answers</strong> are especially telling. Two students with the same correct answer may simply both have studied. Two students with the same mistake have very probably looked at each other's paper.
      </p>

      <h2 style={A.h2}>Four studies, one pattern</h2>

      <h3 style={A.h3}>1. Field experiment with university students (Cagala, Glogowsky, Rincke 2024)</h3>
      <p style={A.p}>
        Three economists compared answer similarity between seat neighbours and non-neighbours in an exam, published in the Journal of Human Resources. Under normal supervision, <strong style={A.strong}>at least 7.7% of the pairs sitting next to each other</strong> copied from one another. There was no sign of copying between front and back neighbours: copying runs along the row. Pairs of academically weaker students copied more often. Close monitoring eliminated copying. A side note worth knowing: an honesty declaration students had to sign did not reduce copying but doubled it.
      </p>

      <h3 style={A.h3}>2. 242 students, one midterm (Levitt and Lin 2015)</h3>
      <p style={A.p}>
        Economist Steven Levitt, known for the book Freakonomics, and Ming-Jen Lin analysed the exams of an introductory science course at a top American university. In the midterm with free choice of seats they found evidence of copying by <strong style={A.strong}>at least 10% of the 242 students</strong>. For the final exam, seats were assigned at random and supervision was increased: afterwards almost nothing of the anomalies remained. The authors could rule out studying together as an explanation, because they knew who had originally wanted to sit next to whom.
      </p>

      <h3 style={A.h3}>3. Random seat assignment compared (Fendler, Yates, Godbey 2018)</h3>
      <p style={A.p}>
        Three researchers at Georgia State University designed an exam so that copying could be measured directly. One group chose their seats freely, the other was assigned seats at random. The result was a <strong style={A.strong}>significant decline in measured copying</strong> with assigned seats. The authors stress that this measured actual behaviour for the first time, instead of relying on anonymous self-reports.
      </p>

      <h3 style={A.h3}>4. The classic: distance and test forms (Houston 1976)</h3>
      <p style={A.p}>
        As early as 1976, John P. Houston examined in two experiments in the Journal of Educational Psychology how copying in multiple-choice exams depends on the spacing between students and the use of alternate test forms. A follow-up study in 1986 also looked at the role of acquaintance and free versus assigned seating. The topic has been researched for fifty years, and the levers have remained the same: proximity, line of sight, choice of seat.
      </p>

      <h2 style={A.h2}>What the studies have in common</h2>
      <ul style={A.ul}>
        <li style={A.li}><strong style={A.strong}>Copying is a neighbour phenomenon.</strong> It happens between direct seat neighbours, not across rows.</li>
        <li style={A.li}><strong style={A.strong}>The scale is relevant.</strong> Depending on the study, 8% to 10% of students were involved, and that at universities with adult participants.</li>
        <li style={A.li}><strong style={A.strong}>Opportunity decides.</strong> Every effective countermeasure removes the opportunity: distance, assigned seats, close monitoring. Appeals and declarations achieve nothing.</li>
      </ul>

      <h2 style={A.h2}>What this means for desk dividers</h2>
      <p style={A.p}>
        As far as our research shows, there is no study that has examined desk dividers themselves. The existing research, however, describes exactly the mechanism a divider addresses: the <strong style={A.strong}>open line of sight to the neighbour's paper</strong>. Distance and assigned seats work because they interrupt this line of sight. Both come at a cost in everyday school life: distance needs a larger room or a split class, assigned seats need organising before every test, close monitoring ties up the teacher.
      </p>
      <p style={A.p}>
        A <Link href="/en/guide/desk-dividers-for-exams" style={A.a}>desk divider</Link> interrupts the line of sight without changing rooms, splitting the class or rearranging the seating plan. It is up in moments, the class stays together, and the teacher can remain a point of contact rather than a guard. Which other methods work in practice and what they cost is covered in our <Link href="/en/guide/prevent-cheating-in-exams" style={A.a}>comparison of seven methods against copying</Link>.
      </p>

      <h2 style={A.h2}>Aside: screening and concentration</h2>
      <p style={A.p}>
        On the question of whether a screen at the desk also helps with focused work, there is an older study: in 1981 Robert Johnson at the University of Tennessee observed six easily distracted primary school children working with and without a desk screen. Among the third graders, on-task behaviour and completed work increased; among the fifth graders little changed. The sample is small and the results cannot be generalised to all children. As an indication, however, the finding matches what schools tell us about the <Link href="/en/guide/low-distraction-workspace" style={A.a}>low-distraction workspace</Link>.
      </p>

      <h2 style={A.h2}>Conclusion</h2>
      <p style={A.p}>
        The research agrees: copying in exams is above all a question of opportunity, and the opportunity is the seat neighbour. Whoever interrupts the line of sight to the neighbour's paper solves the problem at its root. The desk divider is the way to do this with the least effort. We are happy to advise you on the right equipment: <Link href="/en/quote" style={A.a}>request a non-binding quote</Link>.
      </p>

      <h2 style={A.h2}>Sources</h2>
      <ul style={{ ...A.ul, fontSize: 14, marginBottom: 0 }}>
        <li style={A.li}>Cagala, T., Glogowsky, U., Rincke, J. (2024): Detecting and Preventing Cheating in Exams: Evidence from a Field Experiment. Journal of Human Resources 59(1), 210–241. <a href="https://jhr.uwpress.org/content/59/1/210" target="_blank" rel="noopener noreferrer" style={ext}>jhr.uwpress.org</a></li>
        <li style={A.li}>Levitt, S. D., Lin, M.-J. (2015): Catching Cheating Students. NBER Working Paper 21628. <a href="https://www.nber.org/papers/w21628" target="_blank" rel="noopener noreferrer" style={ext}>nber.org</a></li>
        <li style={A.li}>Fendler, R. J., Yates, M. C., Godbey, J. M. (2018): Observing and Deterring Social Cheating on College Exams. International Journal for the Scholarship of Teaching and Learning 12(1), Art. 4. <a href="https://eric.ed.gov/?id=EJ1172223" target="_blank" rel="noopener noreferrer" style={ext}>eric.ed.gov</a></li>
        <li style={A.li}>Houston, J. P. (1976): Amount and Loci of Classroom Answer Copying, Spaced Seating, and Alternate Test Forms. Journal of Educational Psychology 68(6), 729–735. <a href="https://eric.ed.gov/?id=EJ156029" target="_blank" rel="noopener noreferrer" style={ext}>eric.ed.gov</a></li>
        <li style={A.li}>Houston, J. P. (1986): Classroom Answer Copying: Roles of Acquaintanceship and Free Versus Assigned Seating. Journal of Educational Psychology 78(3), 230–232.</li>
        <li style={A.li}>Johnson, R. W. (1981): The Effects of Study Carrels on the Behavior and Academic Performance of Distractible Elementary School Children. Dissertation, University of Tennessee. <a href="https://trace.tennessee.edu/entities/publication/7de42620-c8be-4716-914d-10612c880cca" target="_blank" rel="noopener noreferrer" style={ext}>trace.tennessee.edu</a></li>
      </ul>
    </ArticleLayout>
  );
}
