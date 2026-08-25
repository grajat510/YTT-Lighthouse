import Link from "next/link";

const APPLY_HREF =
  "https://lighthousekrishna.com/course-registration/yoga-teacher-training/";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#efeadf] px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-10 text-sm md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-xl tracking-widest-plus uppercase">
            Light House
          </p>
          <p className="mt-4 max-w-[220px] text-xs leading-relaxed text-[#57534a]">
            Yoga Teacher Training and Retreats on the banks of the Ganges,
            Rishikesh.
          </p>
          <p className="mt-4 max-w-[240px] text-xs leading-relaxed text-[#8a8375]">
            Plot 96, Nirmal-C, Tehri Visthapith, Rishikesh, Uttarakhand
            249204, India
          </p>
          <p className="mt-3 max-w-[240px] text-[10px] leading-relaxed text-[#8a8375]">
            An initiative of Krishna Ganga Foundation
          </p>
        </div>

        <div>
          <p className="mb-4 text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
            Courses
          </p>
          <ul className="space-y-2 text-[#57534a]">
            <li>
              <a href="/#ytt" className="transition-colors hover:text-[#22201c]">
                100-Hour YTT
              </a>
            </li>
            <li>
              <a href="/#ytt" className="transition-colors hover:text-[#22201c]">
                200-Hour YTT
              </a>
            </li>
            <li>
              <a href="/#yrt" className="transition-colors hover:text-[#22201c]">
                15-Day Yoga Retreat
              </a>
            </li>
            <li>
              <a href="/#yrt" className="transition-colors hover:text-[#22201c]">
                20-Day Yoga Retreat
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
            Explore
          </p>
          <ul className="space-y-2 text-[#57534a]">
            <li>
              <a href="/about" className="transition-colors hover:text-[#22201c]">
                About Us
              </a>
            </li>
            <li>
              <a href="/programs" className="transition-colors hover:text-[#22201c]">
                Programs
              </a>
            </li>
            <li>
              <a
                href={APPLY_HREF}
                target="_blank"
                rel="noopener noreferrer"
                data-conversion="apply"
                className="transition-colors hover:text-[#22201c]"
              >
                Apply
              </a>
            </li>
            <li>
              <a
                href="https://lighthousekrishna.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#22201c]"
              >
                lighthousekrishna.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
            Contact
          </p>
          <ul className="space-y-2 text-[#57534a]">
            <li>
              <a
                href="mailto:lighthousekrishna@gmail.com"
                className="transition-colors hover:text-[#22201c]"
              >
                lighthousekrishna@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/916395891689"
                target="_blank"
                rel="noopener noreferrer"
                data-conversion="whatsapp"
                className="transition-colors hover:text-[#22201c]"
              >
                +91 6395891689
              </a>
              <span className="block text-[10px] text-[#8a8375]">
                Please send queries only through WhatsApp
              </span>
            </li>
            <li>
              <a href="tel:+917535012041" className="transition-colors hover:text-[#22201c]">
                +91 7535012041
              </a>
              <span className="block text-[10px] text-[#8a8375]">Mobile</span>
            </li>
            <li>
              <a
                href="https://instagram.com/lighthousekrishna"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#22201c]"
              >
                @lighthousekrishna
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1600px] flex-col-reverse items-start justify-between gap-4 border-t border-[#22201c]/10 pt-6 text-[10px] tracking-widest-plus uppercase text-[#8a8375] md:flex-row md:items-center">
        <span suppressHydrationWarning>© {new Date().getFullYear()} Light House</span>
        <div className="flex gap-6">
          <Link href="/privacy" className="transition-colors hover:text-[#22201c]">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-[#22201c]">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
