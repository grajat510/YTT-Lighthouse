import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms summary for Light House Yoga Teacher Training and Retreat programmes.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-28 md:px-10">
      <Reveal>
        <p className="mb-4 text-xs tracking-widest-plus uppercase text-[#8a8375]">Legal</p>
        <h1 className="font-display text-4xl font-light md:text-5xl">Terms</h1>
        <p className="mt-4 text-sm text-[#8a8375]">
          Summary aligned with Light House programme guidelines. Full course terms
          apply at registration.
        </p>
      </Reveal>

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-[#57534a]">
        <section>
          <h2 className="font-display text-xl text-[#22201c]">Programmes</h2>
          <p className="mt-3">
            This site describes Yoga Teacher Training (100-Hour / 200-Hour) and Yoga
            Retreats (15-Day / 20-Day) at Light House, Rishikesh. Fees, dates and
            inclusions shown here may change; the official registration form and
            confirmation from Light House are authoritative.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-[#22201c]">Fees and refunds</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Course fees are non-refundable — register after visa and flight are confirmed.</li>
            <li>A 25% advance confirms your place; the remaining 75% is due before the course begins.</li>
            <li>
              If you withdraw, re-admission may be possible within a 3-month window, with
              your advance adjusted accordingly.
            </li>
            <li>
              If Light House cancels a programme, you may attend one of the next three
              sessions or receive a full refund.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl text-[#22201c]">Conduct</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Attendance is mandatory at programme activities.</li>
            <li>
              Meat, fish, eggs, coffee, alcohol, tobacco and drugs are forbidden. Tea is
              permitted.
            </li>
            <li>Modest clothing is required; sleeveless tops and shorts are not permitted.</li>
            <li>Phones and laptops only during breaks and in your room; no gadgets in the yoga hall.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl text-[#22201c]">Contact</h2>
          <p className="mt-3">
            Please send queries only through WhatsApp: +91 6395891689 · Mobile: +91
            7535012041 ·{" "}
            <a href="mailto:lighthousekrishna@gmail.com" className="underline">
              lighthousekrishna@gmail.com
            </a>
            . See also our{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
