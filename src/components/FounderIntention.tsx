import Reveal from "./Reveal";

export default function FounderIntention() {
  return (
    <section className="section-sage py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span
            aria-hidden
            className="mx-auto mb-6 block h-px w-16 bg-sage/50"
          />
          <p className="mb-6 text-xs tracking-widest-plus uppercase text-sage-deep">
            Our Intention
          </p>
          <blockquote className="font-display text-3xl font-light leading-snug text-[#22201c] md:text-5xl">
            &ldquo;Whosoever comes here must go back connected to the Divine
            Energy and be a Light unto oneself.&rdquo;
          </blockquote>
          <p className="mt-6 text-xs tracking-widest-plus uppercase text-[#8a8375]">
            Sarvadaman Banerji — Founder
          </p>
        </Reveal>
      </div>
    </section>
  );
}
