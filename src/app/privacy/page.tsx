import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Light House Yoga Teacher Training and Retreats landing page.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-28 md:px-10">
      <Reveal>
        <p className="mb-4 text-xs tracking-widest-plus uppercase text-[#8a8375]">Legal</p>
        <h1 className="font-display text-4xl font-light md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-[#8a8375]">Last updated: August 2026</p>
      </Reveal>

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-[#57534a]">
        <section>
          <h2 className="font-display text-xl text-[#22201c]">Who we are</h2>
          <p className="mt-3">
            This website promotes Yoga Teacher Training (YTT) and Yoga Retreats (YRT) at
            Light House, Plot 96, Nirmal-C, Tehri Visthapith, Rishikesh, Uttarakhand
            249204, India. Contact:{" "}
            <a href="mailto:lighthousekrishna@gmail.com" className="underline">
              lighthousekrishna@gmail.com
            </a>
            , +91 9058729492.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-[#22201c]">Information we collect</h2>
          <p className="mt-3">
            When you click Apply, you leave this site and complete registration on
            lighthousekrishna.com. That form collects the details they request for
            enrolment. We may also receive standard analytics data (pages viewed,
            device type, approximate location, referral source, and advertising
            click identifiers such as gclid) when Google Analytics or Google Ads tags
            are active.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-[#22201c]">How we use information</h2>
          <p className="mt-3">
            To respond to course enquiries, measure advertising performance, improve
            this landing page, and communicate about YTT and YRT programmes. We do not
            sell personal information.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-[#22201c]">Cookies and advertising</h2>
          <p className="mt-3">
            Cookies or similar technologies may be used for analytics and conversion
            measurement for Google Ads. You can control cookies through your browser
            settings. Ads may use remarketing audiences based on visits to this site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-[#22201c]">Third parties</h2>
          <p className="mt-3">
            Course registration is handled on lighthousekrishna.com. Analytics and ads
            may be processed by Google. WhatsApp links open WhatsApp&apos;s service when
            you choose to message us.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-[#22201c]">Contact</h2>
          <p className="mt-3">
            For privacy questions, email lighthousekrishna@gmail.com or see our{" "}
            <Link href="/terms" className="underline">
              Terms
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
