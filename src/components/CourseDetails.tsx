import Image from "next/image";
import RevealImage from "./RevealImage";
import Reveal from "./Reveal";
import DailySchedule from "./DailySchedule";
import CoversCarousel from "./CoversCarousel";
import { shimmerPlaceholder } from "@/lib/placeholder";
import { COURSES, type Course } from "@/lib/courses";
import { getNextBatchLabel } from "@/lib/calendar";

const APPLY_HREF =
  "https://lighthousekrishna.com/course-registration/yoga-teacher-training/";

const CHAPTERS = [
  {
    id: "ytt",
    eyebrow: "Yoga Teacher Training",
    title: "Become a Certified Yoga Teacher",
    intro:
      "100-Hour (15 days) or 200-Hour (20 days). Affiliated with Yoga Alliance International and the World Yoga Federation. Completers can become a Certified Yoga Teacher (CYT).",
    slugs: ["100-hour-ytt", "200-hour-ytt"],
    scheduleSlug: "200-hour-ytt",
    scheduleNote:
      "A day of practice, learning and contemplation. Tentative outline — subject to change.",
    dualCertNote:
      "Dual certification (YAI + WYF) is available for the 200-Hour course only, subject to an extra payment.",
    img: "/practice-asana.jpg",
    alt: "Yoga asana class in the Light House hall",
  },
  {
    id: "yrt",
    eyebrow: "Yoga Retreat",
    title: "A slower day by the Ganges",
    intro:
      "15-day or 20-day retreats at the same place. Free mornings for contemplation and nature walks; afternoons of Ashtanga Vinyasa, philosophy and meditation. Certificate of appreciation on completion.",
    slugs: ["15-day-retreat", "20-day-retreat"],
    scheduleSlug: "15-day-retreat",
    scheduleNote:
      "Relaxed pace with open mornings. Tentative outline — subject to change.",
    dualCertNote: null,
    img: "/practice-terrace.jpg",
    alt: "Meditation on the terrace overlooking the valley",
  },
] as const;

function CourseSummary({ course }: { course: Course }) {
  const date = getNextBatchLabel(course);
  return (
    <div className="border border-[#22201c]/10 bg-[#f7f4ee] p-6 md:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-xl font-light md:text-2xl">{course.title}</h3>
        {date && (
          <span className="text-[10px] tracking-widest-plus uppercase text-[#a9762d]">
            {date}
          </span>
        )}
      </div>
      <div className="mt-4 space-y-3">
        {course.paragraphs.map((p) => (
          <p key={p} className="text-sm leading-relaxed text-[#57534a]">
            {p}
          </p>
        ))}
      </div>
      {course.stats.length > 0 && (
        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[#22201c]/10 pt-5">
          {course.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-xl font-light md:text-2xl">{stat.value}</p>
              <p className="mt-1 text-[10px] leading-relaxed text-[#8a8375]">{stat.label}</p>
            </div>
          ))}
        </div>
      )}
      {course.pricing.length > 0 && (
        <div className="mt-6 border-t border-[#22201c]/10 pt-5">
          <p className="mb-3 text-[10px] tracking-widest-plus uppercase text-[#8a8375]">Fee</p>
          <div className="space-y-2">
            {course.pricing.map((row) => (
              <div key={row.label} className="flex items-baseline justify-between text-sm">
                <span className="text-[#57534a]">{row.label}</span>
                <span className="text-[#22201c]">{row.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {course.inclusions && course.inclusions.length > 0 && (
        <div className="mt-6 border-t border-[#22201c]/10 pt-5">
          <p className="mb-3 text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
            What&rsquo;s Included — {course.title}
          </p>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {course.inclusions.map((item) => (
              <li key={item} className="text-sm text-[#57534a]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function CourseDetails() {
  return (
    <section className="min-w-0 py-8 md:py-12">
      {CHAPTERS.map((chapter) => {
        const courses = chapter.slugs
          .map((slug) => COURSES.find((c) => c.slug === slug))
          .filter((c): c is Course => Boolean(c));
        const scheduleCourse = COURSES.find((c) => c.slug === chapter.scheduleSlug);

        return (
          <div
            key={chapter.id}
            id={chapter.id}
            className="scroll-mt-28 border-t border-[#22201c]/10 py-16 md:py-24"
          >
            <div className="mx-auto max-w-[1600px] px-6 md:px-10">
              <Reveal>
                <p className="text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
                  {chapter.eyebrow}
                </p>
                <h2 className="font-display mt-3 max-w-2xl text-4xl font-light leading-snug md:text-5xl">
                  {chapter.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#57534a]">
                  {chapter.intro}
                </p>
              </Reveal>

              {courses.map((course, i) => {
                const isLast = i === courses.length - 1;
                const showCovers =
                  course.highlights.length > 0 && (chapter.id === "ytt" || isLast);

                return (
                  <div key={course.slug} className={i === 0 ? "mt-10 md:mt-14" : "mt-16 md:mt-24"}>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                      <Reveal delay={80} className={i > 0 ? "hidden md:block" : undefined}>
                        <RevealImage className="relative aspect-[4/3] bg-[#e7e2d6]">
                          <Image
                            src={chapter.img}
                            alt={chapter.alt}
                            fill
                            quality={90}
                            sizes="(min-width: 768px) 50vw, 100vw"
                            placeholder="blur"
                            blurDataURL={shimmerPlaceholder(1200, 900)}
                            className="object-cover"
                          />
                        </RevealImage>
                      </Reveal>
                      <Reveal delay={100}>
                        <CourseSummary course={course} />
                      </Reveal>
                    </div>

                    {chapter.dualCertNote && isLast && (
                      <Reveal delay={120}>
                        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-[#8a8375]">
                          {chapter.dualCertNote}
                        </p>
                      </Reveal>
                    )}

                    {showCovers && (
                      <div className="mt-12 md:mt-16 md:text-center">
                        <p className="mb-4 text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
                          Covers
                        </p>
                        <h4 className="font-display max-w-lg text-2xl font-light leading-snug md:mx-auto md:text-3xl">
                          {chapter.id === "ytt" ? (
                            <>What You&rsquo;ll Learn — {course.title}</>
                          ) : (
                            <>What You&rsquo;ll Learn</>
                          )}
                        </h4>
                        <div className="mt-8 max-w-xl text-left md:max-w-none">
                          <CoversCarousel items={course.highlights} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {scheduleCourse?.schedule && (
                <div className="mt-12 md:mt-16 md:text-center">
                  <p className="mb-4 text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
                    Daily Schedule
                  </p>
                  <h4 className="font-display max-w-lg text-2xl font-light leading-snug md:mx-auto md:text-3xl">
                    A day at Light House
                  </h4>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-[#57534a] md:mx-auto">
                    {chapter.scheduleNote}
                  </p>
                  <div className="mt-8 max-w-2xl text-left md:mx-auto">
                    <DailySchedule schedule={scheduleCourse.schedule} />
                  </div>
                </div>
              )}

              <Reveal className="mt-12 text-center md:mt-16">
                <a
                  href={APPLY_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-conversion="apply"
                  className="inline-block border border-[#33456a] px-6 py-3 text-xs tracking-widest-plus uppercase text-[#33456a] transition-colors hover:bg-[#33456a] hover:text-[#f7f4ee]"
                >
                  Apply
                </a>
              </Reveal>
            </div>
          </div>
        );
      })}
    </section>
  );
}
