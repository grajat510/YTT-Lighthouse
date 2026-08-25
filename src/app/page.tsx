import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FounderIntention from "@/components/FounderIntention";
import PathCards from "@/components/PathCards";
import CourseDetails from "@/components/CourseDetails";
import ExperienceCarousel from "@/components/ExperienceCarousel";
import Teachers from "@/components/Teachers";
import WhyLighthouse from "@/components/WhyLighthouse";
import ProgrammeDirector from "@/components/ProgrammeDirector";
import Accreditations from "@/components/Accreditations";
import Faq from "@/components/Faq";
import StickyMobileCta from "@/components/StickyMobileCta";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Light House — Yoga Teacher Training & Retreats, Rishikesh",
  description:
    "Yoga Teacher Training (100 & 200 Hour) and Yoga Retreats (15 & 20 Day) at Light House on the Ganges, Rishikesh. Founded by Sarvadaman Banerji.",
};

const SEASONAL_ITEMS = [
  {
    img: "/practice-asana.jpg",
    alt: "Asana practice in the Light House yoga hall",
    eyebrow: "Curriculum",
    title: "Asana Practice",
    description:
      "Ashtanga Vinyasa and Hatha yoga, with careful alignment for safe practice and teaching.",
    href: "/#ytt",
  },
  {
    img: "/practice-pranayama.jpg",
    alt: "Students practicing pranayama at Light House",
    eyebrow: "Curriculum",
    title: "Pranayama",
    description:
      "Breath techniques and Shatkarma cleansing as part of the teacher-training day.",
    href: "/#ytt",
  },
  {
    img: "/curriculum-philosophy.jpg",
    alt: "Yoga philosophy study at Light House",
    eyebrow: "Curriculum",
    title: "Yoga Philosophy",
    description:
      "Indian philosophy, the Bhagavad Gita and Ashtavakra Gita, and the living wisdom of the tradition.",
    href: "/#ytt",
  },
  {
    img: "/practice-meditation.jpg",
    alt: "Group meditation session at Light House",
    eyebrow: "Curriculum",
    title: "Meditation",
    description:
      "Daily sitting practice, including Cosmutation — spontaneous meditation taught by Krishnaji.",
    href: "/#yrt",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <FounderIntention />
      <PathCards />
      <CourseDetails />
      <ExperienceCarousel
        id="curriculum"
        heading="The Curriculum"
        description="Comprehensive instruction in Yogasanas and alignment, Yoga Anatomy, Pranayama, Mudras, Bandhas, and Yoga Philosophy."
        items={SEASONAL_ITEMS}
      />
      <WhyLighthouse />
      <Teachers />
      <ProgrammeDirector />
      <Accreditations />
      <Faq />
      <section className="mx-auto max-w-[1600px] px-6 pb-16 md:px-10 md:pb-24">
        <Reveal>
          <p className="mb-4 text-xs tracking-widest-plus uppercase text-[#8a8375]">
            Also at Light House
          </p>
          <h2 className="font-display max-w-lg text-4xl font-light leading-snug md:text-5xl">
            MTC and PANKH
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#57534a]">
            After YTT or YRT, you may stay on for the Master&rsquo;s Training
            Course (MTC): five days of Cosmutation with Krishnaji, offered as an
            add-on when he is available, with an extra fee of 275 EUR / 299 USD.
            There is also Karma Yoga at PANKH, the creative school founded by
            Alankrita Banerjee, where you can volunteer in seva with food and
            accommodation included.
          </p>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#8a8375]">
            Extra charges in brief: dual certification on the 200-Hour YTT is an
            additional payment. Air conditioning is ₹500 (~$6 USD) per room, per
            day, shared among occupants.
          </p>
        </Reveal>
      </section>
      <StickyMobileCta />
      <div className="h-20 md:hidden" aria-hidden />
    </>
  );
}
