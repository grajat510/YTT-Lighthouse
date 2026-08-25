"use client";

const APPLY_HREF =
  "https://lighthousekrishna.com/course-registration/yoga-teacher-training/";

export default function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#22201c]/10 bg-[#f7f4ee]/95 px-4 py-3 backdrop-blur-sm md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={APPLY_HREF}
          target="_blank"
          rel="noopener noreferrer"
          data-conversion="apply"
          className="flex-1 bg-[#33456a] px-4 py-3 text-center text-xs tracking-widest-plus uppercase text-[#f7f4ee]"
        >
          Apply
        </a>
        <a
          href="https://wa.me/919058729492"
          target="_blank"
          rel="noopener noreferrer"
          data-conversion="whatsapp"
          className="flex-1 border border-[#33456a] px-4 py-3 text-center text-xs tracking-widest-plus uppercase text-[#33456a]"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
