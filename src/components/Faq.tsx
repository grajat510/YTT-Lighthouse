import Reveal from "./Reveal";

const FAQS = [
  {
    q: "What language is the course taught in?",
    a: "English is the medium of instruction. A fundamental grasp of English is required.",
  },
  {
    q: "What is included in the fee?",
    a: "Accommodation, three vegetarian meals a day, yoga manual, Jal Neti and Sutra Neti material, Bhagavad Gita text, a book on Saints of India, and a memento with certificate on successful completion.",
  },
  {
    q: "Is dual certification included?",
    a: "Dual certification with Yoga Alliance International and World Yoga Federation is available for the 200-Hour YTT only, subject to an extra payment. The 100-Hour leads to CYT affiliation pathways as listed for that course.",
  },
  {
    q: "What is the deposit and refund policy?",
    a: "A 25% advance confirms your place; the remaining 75% is due before the course begins. Course fees are non-refundable — please register only after your visa and flight are confirmed. If Light House cancels a programme, you may attend one of the next three sessions or receive a full refund.",
  },
  {
    q: "What should I bring?",
    a: "Modest, comfortable clothing (sleeveless tops and shorts are not permitted). Mobile phones and laptops may only be used during breaks and in your room. No gadgets, including smartwatches, in the yoga hall.",
  },
  {
    q: "What is the difference between YTT and YRT?",
    a: "YTT is a structured teacher-training path (100 or 200 hours) leading toward Certified Yoga Teacher status. YRT is a retreat at the same place with a slower daily pace and a certificate of appreciation.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
      <Reveal>
        <p className="mb-4 text-xs tracking-widest-plus uppercase text-[#8a8375]">FAQ</p>
        <h2 className="font-display max-w-lg text-4xl font-light leading-snug md:text-5xl">
          Before you apply
        </h2>
      </Reveal>

      <div className="mt-10 divide-y divide-[#22201c]/10 md:mt-14">
        {FAQS.map((item, i) => (
          <Reveal key={item.q} delay={i * 40}>
            <details className="group py-5">
              <summary className="cursor-pointer list-none font-display text-xl font-light text-[#22201c] marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span className="mt-1 shrink-0 text-[#8a8375] transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#57534a]">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
