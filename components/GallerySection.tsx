import Image from "@/components/AppImage";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

const galleryItems = [
  { src: "/images/services/decks-porches/decks-porches-01.jpg",                 label: "Cedar Deck",             alt: "Custom cedar deck with railings on a Somerset, KY home by Rust & Sawdust", slug: "decks-porches" },
  { src: "/images/services/screened-rooms-pergolas/screened-rooms-pergolas-01.jpg", label: "Covered Outdoor Room", alt: "Covered outdoor living room and patio built in Somerset, KY", slug: "screened-rooms-pergolas" },
  { src: "/images/services/buildings-barns-sheds/buildings-barns-sheds-01.jpg", label: "Custom Garage",          alt: "Custom metal garage with white roll-up doors built in Somerset, KY", slug: "buildings-barns-sheds" },
  { src: "/images/services/additions-remodels/additions-remodels-03.jpg",       label: "Kitchen Remodel",        alt: "White kitchen remodel with stainless steel appliances in Pulaski County, KY", slug: "additions-remodels" },
  { src: "/images/services/custom-woodwork/custom-woodwork-01.jpg",             label: "Live-Edge Wood",         alt: "Live-edge walnut shelf custom-built for a Somerset, KY home", slug: "custom-woodwork" },
  { src: "/images/services/golf-greens-specialty/golf-greens-specialty-01.jpg", label: "Backyard Putting Green", alt: "Custom backyard putting green built in Somerset, KY", slug: "golf-greens-specialty" },
];

export default function GallerySection() {
  return (
    <section id="work" className="relative py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-16 lg:px-24 bg-paper dark:bg-charcoal-mid overflow-hidden">

      {/* Subtle "shop wall" texture */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0 36px, rgba(92,61,30,0.5) 36px 37px)",
        }}
      />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(20,19,15,0.07)_100%)]" />

      <div className="relative max-w-6xl mx-auto">

        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="font-stamped text-[11px] tracking-[0.3em] uppercase text-rust dark:text-cedar-pale mb-3">
              ✚ Photo Wall · pinned up in the shop
            </div>
            <h2 className="font-stencil text-5xl md:text-7xl text-charcoal dark:text-cream leading-[0.9]">
              The projects speak
              <br />
              <span className={'shimmer-text-warm'}>for themselves.</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="font-stencil text-sm tracking-widest uppercase text-charcoal dark:text-cream-dark hover:text-rust border-b-[3px] border-charcoal dark:border-cedar/50 hover:border-rust pb-1 self-start md:self-end"
          >
            View full gallery →
          </Link>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <Link
                href={`/gallery?service=${item.slug}`}
                className="block relative polaroid hover:scale-[1.02] transition-transform"
              >
                <div
                  className="relative overflow-hidden bg-cream-dark w-full"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/15 to-transparent" />
                </div>

                <div className="pt-3 px-1">
                  <span className="font-hand text-2xl text-charcoal leading-none">
                    {item.label}
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center bg-rust hover:bg-cedar text-white-warm font-stencil text-sm sm:text-base tracking-widest uppercase px-8 h-12 border-2 border-cream/30 shadow-[4px_4px_0_0_rgba(20,19,15,0.35)]"
          >
            View All Project Photos →
          </Link>
        </FadeUp>

      </div>
    </section>
  );
}
