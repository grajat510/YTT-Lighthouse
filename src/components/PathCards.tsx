import Image from "next/image";
import Reveal from "./Reveal";
import RevealImage from "./RevealImage";
import { shimmerPlaceholder } from "@/lib/placeholder";
import { COURSES } from "@/lib/courses";
import { getNextBatchLabel } from "@/lib/calendar";

const PATHS = [
  {
    id: "path-ytt",
    href: "#ytt",
    eyebrow: "Teach",
    title: "Yoga Teacher Training",
    body: "15 or 20 days. Asana, pranayama, philosophy, meditation. Certified Yoga Teacher (CYT). Dual certification available on the 200-Hour (extra).",
    img: "/practice-alignment.jpg",
    alt: "Hands-on yoga alignment instruction at Light House",
    slugs: ["100-hour-ytt", "200-hour-ytt"] as const,
    fromLabel: "From 675 EUR",
  },
  {
    id: "path-yrt",
    href: "#yrt",
    eyebrow: "Retreat",
    title: "Yoga Retreat",
    body: "15 or 20 days. Same place, slower mornings. Ashtanga Vinyasa, philosophy and meditation. Certificate of appreciation.",
    img: "/practice-nature.jpg",
    alt: "Outdoor yoga practice by the riverbed near Light House",
    slugs: ["15-day-retreat", "20-day-retreat"] as const,
    fromLabel: "From 630 EUR",
  },
];

export default function PathCards() {
  return (
    <section id="paths" className="mx-auto max-w-[1600px] px-6 pb-8 md:px-10 md:pb-12">
      <Reveal className="mb-10 text-center md:mb-14">
        <span className="mb-6 inline-block h-px w-16 bg-[#22201c]/25" />
        <h2 className="font-display text-2xl font-light md:text-3xl">
          Two paths, one place
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#57534a]">
          Choose teacher training or a retreat. Both are held at Light House on
          the Ganges.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        {PATHS.map((path, i) => {
          const next = path.slugs
            .map((slug) => COURSES.find((c) => c.slug === slug))
            .map((c) => (c ? getNextBatchLabel(c) : null))
            .find(Boolean);

          return (
            <Reveal key={path.id} delay={i * 100}>
              <a href={path.href} className="group block">
                <RevealImage className="relative aspect-[4/3] bg-[#e7e2d6]">
                  <Image
                    src={path.img}
                    alt={path.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    placeholder="blur"
                    blurDataURL={shimmerPlaceholder(1200, 900)}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </RevealImage>
                <p className="mt-5 text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
                  {path.eyebrow}
                </p>
                <h3 className="font-display mt-2 text-2xl font-light md:text-3xl">
                  {path.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#57534a]">
                  {path.body}
                </p>
                <p className="mt-4 text-xs tracking-widest-plus uppercase text-[#a9762d]">
                  {path.fromLabel}
                  {next ? ` · ${next}` : ""}
                </p>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
