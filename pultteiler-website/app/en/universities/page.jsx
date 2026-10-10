import AudienceLayout, { faqJsonLd } from "@/components/AudienceLayout";
import { YEARS, CONTACT } from "@/lib/site";
import { alternatesFor } from "@/lib/i18n";
import { UI_EN, OG_EN } from "@/lib/en";

export const metadata = {
  title: { absolute: "Exam Desk Dividers for Universities | Pultteiler" },
  description:
    "Desk dividers for written exams in lecture halls and exam centres: large quantities, tool-free set-up, direct from the manufacturer.",
  alternates: alternatesFor("/en/universities"),
  openGraph: OG_EN,
};

const FAQ = [
  {
    q: "Can you supply several hundred dividers for large exams?",
    a: "Yes. We supply universities and exam centres in large quantities. As the manufacturer we produce to demand and can also assemble cases with more than 12 dividers. Request an individual quote with the quantity you need and we will calculate it for your project.",
  },
  {
    q: "How quickly can large quantities be set up before an exam?",
    a: "The plug-in system needs no tools: attach the clamp, insert the panel. A practised team can equip even large lecture halls in moments, as each divider is in place with a single movement. After the exam the dividers are stored compactly in stackable wooden cases.",
  },
  {
    q: "Do the dividers fit lecture hall folding desks and lab benches?",
    a: "The permanently elastic clamp holds on all desktops up to 3 cm thick, including most lecture hall writing surfaces, seminar desks and lab benches. The Medical University of Innsbruck uses our dividers in its laboratories, among other places. For special desk formats we are happy to check suitability in advance, with a sample delivery on request.",
  },
  {
    q: "Which references do you have in higher education?",
    a: `Our dividers are used in exams at the Medical University of Innsbruck, among others. In total we have supplied several hundred educational institutions in Austria, Germany and Switzerland for over ${YEARS} years, from primary schools to universities.`,
  },
  {
    q: "Do you deliver outside Austria, Germany and Switzerland?",
    a: "Yes, on request. Tell us your country, the quantity and your preferred date. We will check delivery and terms for your country and send you an individual written quote.",
  },
];

export default function Page() {
  return (
    <div lang="en">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ)) }} />
      <AudienceLayout
        ui={UI_EN}
        overline="For universities, colleges and exam centres"
        h1={<>Privacy screens for exams in lecture halls and exam centres</>}
        intro="When hundreds of students write at the same time, invigilators need equipment they can rely on. Our desk dividers secure written exams in lecture halls, seminar rooms and exam centres. In large quantities, direct from the manufacturer, in use at the Medical University of Innsbruck, among others."
        img="/images/kurhaus-saal-totale.jpg"
        imgAlt="Exam hall in the Kurhaus Bad Krozingen, every desk fitted with Pultteiler dividers"
        situation={{
          title: "The challenge of large exams",
          paragraphs: [
            "Entrance tests, module exams, state examinations: at universities, written exams decide on study places and degrees. The requirements for preventing cheating and for legal certainty are correspondingly high. At the same time, candidates sit closer together in lecture halls than in any classroom.",
            "Leaving every second seat empty halves the room capacity. Preparing several versions of an exam multiplies the marking effort and remains open to challenge. The more economical solution is a privacy screen right at the workplace. With the Pultteiler you use the full room capacity while every exam variant stays secure against cheating.",
            "As the manufacturer we deliver the quantities you need, calculate per project and supply spare parts for years to come. The Medical University of Innsbruck relies on our dividers for its exams, right into its laboratories.",
          ],
        }}
        benefits={{
          title: "Why universities choose the Pultteiler",
          items: [
            { title: "Large quantities from the factory", text: "As the manufacturer we produce to demand, from a single exam room to fully equipped exam centres. Calculated per project." },
            { title: "Full room capacity", text: "No empty seats in between, no multiple exam versions: every workplace becomes exam-ready and the room stays fully usable." },
            { title: "Set up in moments", text: "Tool-free plug-in system: every divider stands in moments. Even large lecture halls are equipped quickly by a small team, and cleared just as fast." },
            { title: "Space-saving storage", text: "12 systems per stackable wooden case, larger cases on request. Hundreds of dividers are stored compactly until the next exam date." },
            { title: "Reference: Medical University of Innsbruck", text: "In exam use at the Medical University of Innsbruck, from the lecture hall to the laboratory. Further references are available on request." },
            { title: "Fits your procurement", text: "Written quote for your purchasing department, clear delivery and invoicing terms for your country. Austria, Germany and Switzerland: purchase on invoice." },
          ],
        }}
        faq={FAQ}
        ctaTitle="Plan your next large exam with us"
        ctaSub={`Send us the quantity and date and we will reply soon with an individual quote. You can also write to us directly at ${CONTACT.email}.`}
      />
    </div>
  );
}
