import Reveal from "./Reveal";

export default function FounderIntention() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="mb-6 text-xs tracking-widest-plus uppercase text-[#8a8375]">
          Our Intention
        </p>
        <blockquote className="font-display text-2xl font-light leading-snug text-[#22201c] md:text-4xl">
          &ldquo;Whosoever comes here must go back connected to the Divine
          Energy and be a Light unto oneself.&rdquo;
        </blockquote>
        <p className="mt-6 text-xs tracking-widest-plus uppercase text-[#8a8375]">
          Sarvadaman Banerji — Founder
        </p>
      </Reveal>
    </section>
  );
}
