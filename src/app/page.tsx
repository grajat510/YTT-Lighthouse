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
      <StickyMobileCta />
      <div className="h-20 md:hidden" aria-hidden />
    </>
  );
}
