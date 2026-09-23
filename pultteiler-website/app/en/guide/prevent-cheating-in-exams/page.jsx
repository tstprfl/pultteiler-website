import Link from "next/link";
import ArticleLayout, { A } from "@/components/ArticleLayout";
import { articleEn } from "@/lib/articles-en";
import { alternatesFor } from "@/lib/i18n";
import { OG_EN } from "@/lib/en";

const meta = { ...articleEn("prevent-cheating-in-exams"), short: "Prevent copying", imgAlt: "Classroom with privacy dividers during a test" };

export const metadata = {
  title: { absolute: `${meta.seoTitle} | Pultteiler` },
  description: meta.description,
  alternates: alternatesFor(meta.path),
  openGraph: OG_EN,
};

export default function Page() {
  return (
    <ArticleLayout
      lang="en"
      meta={meta}
      related={[
        { href: "/en/guide/privacy-screens-for-exams", label: "Privacy screens for class tests: creating fair exam conditions" },
        { href: "/en/guide/desk-dividers-for-exams", label: "Desk dividers for exams: what really matters" },
        { href: "/en/primary-schools", label: "Pultteiler for primary schools" },
      ]}
    >
      <p style={A.p}>
        Every teacher knows the dilemma: in a test, each child should show what they can do on their own, but the seating arrangement in the classroom practically invites copying. Over the years schools have developed many countermeasures. We compare the <strong style={A.strong}>seven most common methods to prevent copying in class tests</strong>, honestly, with their effort and side effects.
      </p>

      <h2 style={A.h2}>METHOD 1: GROUP A / GROUP B, TWO VERSIONS</h2>
      <p style={A.p}>
        The classic: two versions of the test, distributed in a chessboard pattern. It works against direct copying, but the price is high: <strong style={A.strong}>double preparation, double sources of error, harder comparability</strong> when grading. And anyone sitting near someone with the same version (in the row behind) will still copy.
      </p>

      <h2 style={A.h2}>METHOD 2: SPLIT THE CLASS, TWO SITTINGS</h2>
      <p style={A.p}>
        Half the class writes, the other half is supervised elsewhere. Maximum control, but <strong style={A.strong}>double teaching time, a supervision problem for those waiting</strong>, and the second group may already know the questions. With scarce staff resources, unrealistic for most schools.
      </p>

      <h2 style={A.h2}>METHOD 3: STRICT SEATING PLAN AND SINGLE DESKS</h2>
      <p style={A.p}>
        Pull the desks apart, leave every second seat empty. It works <strong style={A.strong}>if the room is big enough</strong>. Usually it is not: 25 children then need two rooms (and two supervisors). On top of that come 10 minutes of moving furniture before and after the test, with the unrest that goes with it.
      </p>

      <h2 style={A.h2}>METHOD 4: STRICTER SUPERVISION</h2>
      <p style={A.p}>
        Walking the rows, eye contact, warnings. Effective in the short term, but exhausting for everyone: the teacher spends 60 minutes as a guard instead of a point of contact, the atmosphere becomes tense, and a practised sideways glance still goes unnoticed. <strong style={A.strong}>Mistrust as a permanent state</strong> is the highest educational price on this list.
      </p>

      <h2 style={A.h2}>METHOD 5: DIGITAL TESTS WITH RANDOMISED QUESTIONS</h2>
      <p style={A.p}>
        In digital tests the order of questions and answer options can be randomised. Good where testing is digital anyway, but the paper test remains the standard in most subjects (and is often required). On screen, too: <strong style={A.strong}>a glance at the neighbour's monitor needs a privacy screen</strong>. Randomisation alone is not enough.
      </p>

      <h2 style={A.h2}>METHOD 6: EXAM HALL OR GYM</h2>
      <p style={A.p}>
        Large rooms with wide spacing, the model for centralised school-leaving exams and many final exams. Easy to organise for the four or five big dates a year, <strong style={A.strong}>logistically impossible for the 30 or more regular tests in a school year</strong> (room booking, carrying desks, supervision rotas).
      </p>

      <h2 style={A.h2}>METHOD 7: PRIVACY SCREEN AT THE DESK</h2>
      <p style={A.p}>
        The most direct solution: a <Link href="/en/guide/desk-dividers-for-exams" style={A.a}>desk divider</Link> that interrupts the line of sight to the neighbour's paper. The class stays together, in its own room, with a single version of the test. Only the opportunity to copy is gone.
      </p>
      <ul style={A.ul}>
        <li style={A.li}><strong style={A.strong}>Effort:</strong> a one-off purchase, then 2 to 3 minutes of set-up by the class itself</li>
        <li style={A.li}><strong style={A.strong}>Effect:</strong> physical rather than an appeal: the sideways glance hits a wall, the same in every test</li>
        <li style={A.li}><strong style={A.strong}>Side effects:</strong> positive, a calmer exam atmosphere. Outside exams the dividers can be used as a <Link href="/en/guide/low-distraction-workspace" style={A.a}>low-distraction workspace</Link></li>
        <li style={A.li}><strong style={A.strong}>Limits:</strong> replaces neither supervision nor phone rules. It prevents copying from the neighbour, not the crib sheet</li>
      </ul>

      <h2 style={A.h2}>THE COMPARISON AT A GLANCE</h2>
      <ul style={A.ul}>
        <li style={A.li}><strong style={A.strong}>Recurring effort per exam:</strong> two versions, split classes, room changes and moving furniture cost time again with <em>every</em> test. The privacy screen costs money once and three minutes after that.</li>
        <li style={A.li}><strong style={A.strong}>Fairness and atmosphere:</strong> stricter supervision and suspicion strain relationships. A privacy screen for everyone treats everyone the same.</li>
        <li style={A.li}><strong style={A.strong}>Effectiveness:</strong> only physical measures (distance or privacy screens) reliably remove the opportunity, and a privacy screen does not need a second room.</li>
      </ul>

      <h2 style={A.h2}>CONCLUSION</h2>
      <p style={{ ...A.p, marginBottom: 0 }}>
        The methods are not mutually exclusive, but in terms of effort versus effect the privacy screen at the desk comes out ahead: bought once, ready in minutes for every test, with no extra effort for preparation, rooms or staff. What makes a good system is covered in our <Link href="/en/guide/desk-dividers-for-exams" style={A.a}>buyer's guide to desk dividers</Link>.
      </p>
    </ArticleLayout>
  );
}
