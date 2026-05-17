import Image from "@/components/AppImage";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

const galleryItems = [
  { src: "/images/469272957_18058612582888879_8957753396333329617_n.jpg", label: "Cedar Porch & Patio" },
  { src: "/images/468926418_18058612408888879_9066889187788909200_n.jpg", label: "Covered Cedar Porch" },
  { src: "/images/471674753_18060949915888879_7068889632734888039_n.jpg", label: "Lake House Screen Room" },
  { src: "/images/469071339_18058607554888879_1817159894321510102_n.jpg", label: "Windows & Trim" },
  { src: "/images/484033883_1094977005980683_5821486936191370129_n.jpg",  label: "Open-Air Barn" },
  { src: "/images/468988893_18058613398888879_666192470319590_n.jpg",     label: "Kitchen Remodel" },
];

export default function GallerySection() {
  return (
    <section id="work" className="relative py-24 px-6 md:px-16 lg:px-24 bg-paper dark:bg-charcoal-mid overflow-hidden">

      {/* Subtle "shop wall" texture */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0 36px, rgba(92,61,30,0.5) 36px 37px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="font-stamped text-[11px] tracking-[0.3em] uppercase text-rust dark:text-cedar-pale mb-3">
              ✚ Photo Wall · pinned up in the shop
            </div>
            <h2 className="font-stencil text-5xl md:text-7xl text-charcoal dark:text-cream leading-[0.9]">
              The projects speak
              <br />
              <span className="text-rust dark:text-cedar-pale">for themselves.</span>
            </h2>
          </div>
          <Link
            href="#contact"
            className="font-stencil text-sm tracking-widest uppercase text-charcoal dark:text-cream-dark hover:text-rust border-b-[3px] border-charcoal dark:border-cedar/50 hover:border-rust pb-1 self-start md:self-end"
          >
            Start your project →
          </Link>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <div className="relative polaroid hover:scale-[1.02] transition-transform">
                <div
                  className="relative overflow-hidden bg-cream-dark w-full"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
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
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
