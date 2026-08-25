import Image from "next/image";
import Reveal from "./Reveal";
import RevealImage from "./RevealImage";
import { shimmerPlaceholder } from "@/lib/placeholder";

const PLACES = [
  {
    img: "/room-10-new.jpg",
    alt: "A Light House guest room with forest views",
    title: "Rooms with forest light",
    body: "Deluxe and Super-deluxe rooms with honest comfort — partial forest views, balconies opening onto green, and the quiet of the Shivalik foothills.",
  },
  {
    img: "/terrace.jpg",
    alt: "Open terrace at Light House with mountain views",
    title: "Hall, terrace and lawn",
    body: "About 1,200 sq ft enclosed yoga hall, a 360° mountain-view terrace, and 1.5 km of green lawn — minutes from the Ganga beach.",
  },
  {
    img: "/food-dining.jpg",
    alt: "Communal vegetarian meal setup at Light House",
    title: "Home-cooked vegetarian meals",
    body: "Simple, hygienic, Ayurvedic food that replenishes body and mind — three meals a day, prepared in-house.",
  },
];

export default function WhyLighthouse() {
  return (
    <section className="mx-auto min-w-0 max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
      <Reveal>
        <p className="mb-4 text-xs tracking-widest-plus uppercase text-[#8a8375]">
          The Place
        </p>
        <h2 className="font-display max-w-lg text-4xl font-light leading-snug md:text-5xl">
          Food &amp; Accommodation
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#57534a]">
          Nestled along the Ganges away from the bustle of town — grassland,
          mild forest, and the Shivalik hills on the horizon.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-3 md:gap-8">
        {PLACES.map((place, i) => (
          <Reveal key={place.title} delay={80 + i * 60}>
            <RevealImage className="relative aspect-[4/3] bg-[#e7e2d6]">
              <Image
                src={place.img}
                alt={place.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                placeholder="blur"
                blurDataURL={shimmerPlaceholder(900, 675)}
                quality={90}
                className="img-subtle object-cover"
              />
            </RevealImage>
            <h3 className="font-display mt-5 text-xl font-light md:text-2xl">
              {place.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#57534a]">{place.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
