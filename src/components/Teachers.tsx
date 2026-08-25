"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { shimmerPlaceholder } from "@/lib/placeholder";

const TEACHERS = [
  {
    name: "Sarvadaman Banerji",
    role: "Founder — Krishnaji",
    bio: "Enlightened at the age of 36, Krishnaji has lived in awareness and meditation for over thirty years. He built Light House with one clear intention: whosoever comes here must go back connected to the Divine Energy and be a Light unto oneself. He teaches the art of spontaneous meditation (Cosmutation).",
    img: "/teacher-krishnaji-official.jpg",
  },
  {
    name: "Alankrita Banerjee",
    role: "Programme Director, YTT and YRT",
    bio: "Has conducted over 100 meditation and stress-management workshops for international groups, institutions and corporates, and authored five books on the philosophies of life. Specialises in Yogic Philosophy and Kundalini Yoga.",
    img: "/teacher-ankita-official.jpg",
  },
  {
    name: "Rajat Purwal",
    role: "Lead Trainer",
    bio: "Holds a degree in Yoga and postgraduate studies in Yogacharya, with specialised knowledge in Naturopathy. Trained extensively in Hatha and Ashtanga yoga, with teachings kept aligned to modern advancements in the practice.",
    img: "/teacher-rajat.jpg",
  },
  {
    name: "Vikash Bisht",
    role: "Yoga Instructor",
    bio: "Holds a B.P.Ed in Physical Education, a PG Diploma, and an MA in Yogic Science, with ERYT 500-hour certification from Yoga Alliance USA. Trained in acupressure, naturopathy and yoga therapy, specialising in Hatha yoga.",
    img: "/teacher-vikas-official.jpg",
  },
];

function TeacherCard({
  teacher,
}: {
  teacher: (typeof TEACHERS)[number];
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      aria-pressed={flipped}
      aria-label={`${teacher.name}, ${teacher.role}. ${flipped ? "Hide" : "Show"} message.`}
      onClick={() => setFlipped((value) => !value)}
      className={`teacher-flip w-full cursor-pointer text-left ${flipped ? "is-flipped" : ""}`}
    >
      <div className="relative aspect-[9/16]">
        <div className="teacher-flip-inner absolute inset-0">
          <div className="teacher-flip-face absolute inset-0 overflow-hidden bg-[#e7e2d6]">
            <Image
              src={teacher.img}
              alt={teacher.name}
              fill
              draggable={false}
              quality={90}
              sizes="(min-width: 768px) 25vw, 70vw"
              placeholder="blur"
              blurDataURL={shimmerPlaceholder(540, 960)}
              className="object-cover select-none [-webkit-user-drag:none] [-webkit-touch-callout:none]"
            />
          </div>
          <div className="teacher-flip-face teacher-flip-back absolute inset-0 flex flex-col justify-center bg-[#33456a] px-5 py-8 sm:px-6">
            <p className="text-[10px] tracking-widest-plus uppercase text-[#f7f4ee]/70">
              {teacher.role}
            </p>
            <h3 className="font-display mt-3 text-2xl font-light leading-snug text-[#f7f4ee] md:text-3xl">
              {teacher.name}
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-[#f7f4ee]/90">
              {teacher.bio}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}

export default function Teachers() {
  return (
    <section className="min-w-0 py-16 md:py-20">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal>
          <p className="mb-4 text-xs tracking-widest-plus uppercase text-[#8a8375]">
            Our Teachers
          </p>
          <h2 className="font-display max-w-lg text-4xl font-light leading-snug md:text-5xl">
            Meet your teachers
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#57534a]">
            Hover or tap a photo to read the founder and teachers&rsquo; messages.
          </p>
        </Reveal>
      </div>

      <div className="no-scrollbar mx-auto mt-12 flex max-w-[1600px] min-w-0 items-start gap-8 overflow-x-auto overscroll-x-contain touch-pan-x touch-pan-y pb-2 pl-6 pr-6 md:mt-16 md:gap-10 md:pl-10 md:pr-10">
        {TEACHERS.map((teacher, i) => (
          <Reveal
            key={teacher.name}
            delay={(i % 4) * 100}
            className="w-[220px] shrink-0 sm:w-[260px] md:w-[280px]"
          >
            <TeacherCard teacher={teacher} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
