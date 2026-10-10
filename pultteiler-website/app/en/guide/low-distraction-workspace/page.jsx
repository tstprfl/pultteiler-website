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
        A full classroom is a firework of stimuli: 25 children moving, voices, rustling exercise books, colourful walls, the window to the playground. That is part of learning together. But when it comes to writing a text, finishing a calculation or going deep into a task, every child benefits from a quiet place. A <strong style={A.strong}>low-distraction workspace at school</strong> is one of the simplest and at the same time cheapest ways to support concentration, using a desk divider that many schools already have in house.
      </p>

      <h2 style={A.h2}>What “low-distraction” means in practice</h2>
      <p style={A.p}>
        Low-distraction does not mean stimulus-free. It is not about shutting off but about <strong style={A.strong}>dosage</strong>: less visual movement in the field of view, fewer direct lines of sight to other children, a clearly defined area of one's own. The effect is well documented: fewer competing stimuli mean more attention for the actual task. That is why quiet workplaces, from the reading corner to the silent-work desk, have long been part of everyday life in many schools.
      </p>

      <h2 style={A.h2}>A familiar tool instead of a special solution</h2>
      <p style={A.p}>
        A low-distraction workspace works best when it is set up with something <strong style={A.strong}>that all children already know</strong>. Where the divider stands on every desk as a matter of course in every <Link href="/en/guide/privacy-screens-for-exams" style={A.a}>class test</Link>, it is a familiar tool. If a child also uses it during silent work, that is as natural as headphones during independent work.
      </p>

      <h2 style={A.h2}>How schools set up low-distraction workspaces without renovation</h2>
      <h3 style={A.h3}>1. Work with the dividers you have</h3>
      <p style={A.p}>
        A <Link href="/en/guide/desk-dividers-for-exams" style={A.a}>divider with a clamp system</Link> turns any normal school desk into a low-distraction workspace in moments, and back again. No new furniture, no fixed place, no building work. The child stays at their place, in their seating arrangement, next to their friends.
      </p>
      <h3 style={A.h3}>2. Think about where the child sits</h3>
      <p style={A.p}>
        Position also makes a place low-distraction: not right by the window to the playground, not by the door, facing the wall or board instead of the class. A privacy screen plus a well-chosen place already covers most needs.
      </p>
      <h3 style={A.h3}>3. Rituals instead of exceptions</h3>
      <p style={A.p}>
        The low-distraction workspace works best as <strong style={A.strong}>an offer for everyone</strong>: “Anyone who needs some quiet today can take a divider.” In many classes, very different children then use it regularly, and the offer becomes completely normal. Teachers can also build the divider firmly into silent-work phases.
      </p>

      <h2 style={A.h2}>What to look for in the equipment</h2>
      <ul style={A.ul}>
        <li style={A.li}><strong style={A.strong}>Neutral look:</strong> calm, plain surfaces without patterns. The screen should absorb stimuli, not create them. Subtle colours such as grey blend in unobtrusively.</li>
        <li style={A.li}><strong style={A.strong}>Usable by the child alone:</strong> set-up without tools and without help. The children arrange their own place independently.</li>
        <li style={A.li}><strong style={A.strong}>Age-appropriate height:</strong> 50×30 cm in <Link href="/en/primary-schools" style={A.a}>primary school</Link>, 50×40 cm from <Link href="/en/secondary-schools" style={A.a}>secondary school</Link>. High enough to screen off, low enough to keep contact with the teacher.</li>
        <li style={A.li}><strong style={A.strong}>Dual use:</strong> the same dividers secure class tests, so the purchase pays for itself through two uses.</li>
      </ul>

      <h2 style={A.h2}>Conclusion</h2>
      <p style={{ ...A.p, marginBottom: 0 }}>
        A low-distraction workspace is one of the simplest effective measures for focused work: a divider everyone knows, a well-chosen place, a fixed ritual. Schools that buy dividers for exams anyway already have the equipment in house. We are happy to advise you on the right equipment: <Link href="/en/quote" style={A.a}>request a non-binding quote</Link>.
      </p>
    </ArticleLayout>
  );
}
