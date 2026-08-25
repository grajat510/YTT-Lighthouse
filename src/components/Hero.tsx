import { getImageProps } from "next/image";
import Reveal from "./Reveal";

const APPLY_HREF =
  "https://lighthousekrishna.com/course-registration/yoga-teacher-training/";

const HERO_ALT = "Light House, on the banks of the Ganges in Rishikesh";

export default function Hero() {
  const common = { alt: HERO_ALT, sizes: "100vw", quality: 90 as const };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    src: "/hero-v4.jpg",
    width: 1920,
    height: 1080,
  });
  const {
    props: { srcSet: mobile, className: _className, style, ...img },
  } = getImageProps({
    ...common,
    src: "/hero-v2.jpg",
    width: 1080,
    height: 1350,
  });

  return (
    <section id="top" className="pt-20">
      <div className="relative h-[calc(100svh-5rem)] min-h-[480px] w-full overflow-hidden">
        <picture>
          <source media="(min-width: 768px)" srcSet={desktop} />
          <img
            {...img}
            alt={HERO_ALT}
            srcSet={mobile}
            fetchPriority="high"
            decoding="async"
            className="img-subtle animate-video-fade-in absolute inset-0 h-full w-full object-cover"
            style={{ ...style, objectFit: "cover" }}
          />
        </picture>

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 px-6 pb-10 md:px-10 md:pb-16">
          <Reveal>
            <p className="mb-3 text-xs tracking-widest-plus uppercase text-[#f7f4ee]/90">
              Rishikesh, on the Ganges
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display max-w-3xl text-5xl font-light leading-[1.1] text-[#f7f4ee] md:text-7xl">
              Yoga Teacher Training and Retreats at Light House
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#f7f4ee]/85 md:text-base">
              A mind-blowing yoga place.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#ytt"
                className="inline-block border border-[#f7f4ee] bg-[#f7f4ee] px-6 py-3 text-xs tracking-widest-plus uppercase text-[#22201c] transition-colors hover:bg-transparent hover:text-[#f7f4ee]"
              >
                Yoga Teacher Training
              </a>
              <a
                href="#yrt"
                className="inline-block border border-[#f7f4ee] px-6 py-3 text-xs tracking-widest-plus uppercase text-[#f7f4ee] transition-colors hover:bg-[#f7f4ee] hover:text-[#22201c]"
              >
                Yoga Retreat
              </a>
              <a
                href={APPLY_HREF}
                target="_blank"
                rel="noopener noreferrer"
                data-conversion="apply"
                className="inline-block px-4 py-3 text-xs tracking-widest-plus uppercase text-[#f7f4ee]/80 underline decoration-[#f7f4ee]/40 underline-offset-4 transition-colors hover:text-[#f7f4ee]"
              >
                Apply
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
