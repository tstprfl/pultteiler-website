import Link from "next/link";
import ArticleLayout, { A } from "@/components/ArticleLayout";
import { articleEn } from "@/lib/articles-en";
import { alternatesFor } from "@/lib/i18n";
import { OG_EN } from "@/lib/en";

const meta = { ...articleEn("low-distraction-workspace"), short: "Low-distraction workspace", imgAlt: "Student working with concentration at a low-distraction workspace with a privacy screen" };

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
        { href: "/en/primary-schools", label: "Pultteiler for primary schools" },
        { href: "/en/guide/privacy-screens-for-exams", label: "Privacy screens for class tests: creating fair exam conditions" },
        { href: "/en/quote", label: "Request a non-binding quote for your school" },
      ]}
    >
      <p style={A.p}>
        A full classroom is a firework of stimuli: 25 children moving, voices, rustling exercise books, colourful walls, the window to the playground. Most children filter this out. Some cannot: children with <strong style={A.strong}>ADHD</strong>, on the <strong style={A.strong}>autism spectrum</strong> or simply highly distractible. For them, the learning environment decides whether their ability makes it onto the paper. A <strong style={A.strong}>low-distraction workspace at school</strong> is one of the most effective and at the same time cheapest forms of support.
      </p>

      <h2 style={A.h2}>WHAT “LOW-DISTRACTION” MEANS IN PRACTICE</h2>
      <p style={A.p}>
        Low-distraction does not mean stimulus-free. It is not about isolation but about <strong style={A.strong}>dosage</strong>: less visual movement in the field of view, fewer direct lines of sight to other children, a clearly defined area of one's own. The effect is well documented: fewer competing stimuli mean more working memory for the actual task. In special needs education, screening off stimuli has therefore long been part of the standard repertoire, from learning offices to study carrels.
      </p>

      <h2 style={A.h2}>THE HURDLE IN EVERYDAY SCHOOL LIFE: STIGMA</h2>
      <p style={A.p}>
        The best measure fails if it puts the child on display. A special desk in the corner, a conspicuous booth, a “you go to the back now”: all of this singles a child out. Children sense it immediately, and many refuse support that visibly marks them as a special case.
      </p>
      <p style={A.p}>
        The most practical way out is to use a screen <strong style={A.strong}>that all children already know</strong>. Where the privacy screen stands on every desk as a matter of course in every <Link href="/en/guide/privacy-screens-for-exams" style={A.a}>class test</Link>, it is not a stigma but a familiar tool. If a child also uses it during silent work, that is as unremarkable as headphones during independent work.
      </p>

      <h2 style={A.h2}>HOW SCHOOLS SET UP LOW-DISTRACTION WORKSPACES WITHOUT RENOVATION</h2>
      <h3 style={A.h3}>1. Work with the privacy screens you have</h3>
      <p style={A.p}>
        A <Link href="/en/guide/desk-dividers-for-exams" style={A.a}>divider with a clamp system</Link> turns any normal school desk into a low-distraction workspace in seconds, and back again. No new furniture, no fixed place, no building work. The child stays at their place, in their seating arrangement, next to their friends.
      </p>
      <h3 style={A.h3}>2. Think about where the child sits</h3>
      <p style={A.p}>
        Position also makes a place low-distraction: not right by the window to the playground, not by the door, facing the wall or board instead of the class. A privacy screen plus a well-chosen place already covers most needs.
      </p>
      <h3 style={A.h3}>3. Rituals instead of exceptions</h3>
      <p style={A.p}>
        The low-distraction workspace works best as <strong style={A.strong}>an offer for everyone</strong>: “Anyone who needs some quiet today can take a divider.” In many classes, children without a diagnosis then regularly use it too, and the offer becomes completely normal. Special needs teachers can also anchor the divider specifically in support plans.
      </p>

      <h2 style={A.h2}>WHAT TO LOOK FOR IN THE EQUIPMENT</h2>
      <ul style={A.ul}>
        <li style={A.li}><strong style={A.strong}>Neutral look:</strong> calm, plain surfaces without patterns. The screen should absorb stimuli, not create them. Subtle colours such as grey blend in unobtrusively.</li>
        <li style={A.li}><strong style={A.strong}>Usable by the child alone:</strong> set-up without tools and without help. Independence is part of the support.</li>
        <li style={A.li}><strong style={A.strong}>Age-appropriate height:</strong> 50×30 cm in <Link href="/en/primary-schools" style={A.a}>primary school</Link>, 50×40 cm from <Link href="/en/secondary-schools" style={A.a}>secondary school</Link>. High enough to screen off, low enough to keep contact with the teacher.</li>
        <li style={A.li}><strong style={A.strong}>Dual use:</strong> the same dividers secure class tests, so the purchase pays for itself through two uses.</li>
      </ul>

      <h2 style={A.h2}>WHAT A LOW-DISTRACTION WORKSPACE IS NOT</h2>
      <p style={A.p}>
        A privacy screen replaces neither diagnosis nor therapy or special needs support. It is an <strong style={A.strong}>adjustment of the environment</strong> that lowers barriers so that existing abilities become visible. That is exactly what makes it valuable for inclusion: it changes the environment, not the child.
      </p>

      <h2 style={A.h2}>CONCLUSION</h2>
      <p style={{ ...A.p, marginBottom: 0 }}>
        A low-distraction workspace is one of the simplest effective measures in inclusive teaching: a privacy screen everyone knows, a well-chosen place, a ritual without stigma. Schools that buy dividers for exams anyway already have the equipment in house. We are happy to advise you on the right equipment: <Link href="/en/quote" style={A.a}>request a non-binding quote</Link>.
      </p>
    </ArticleLayout>
  );
}
