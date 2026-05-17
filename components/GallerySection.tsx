import Image from "@/components/AppImage";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

const galleryItems = [
  { src: "/images/469272957_18058612582888879_8957753396333329617_n.jpg", label: "Cedar Porch & Concrete Patio" },
  { src: "/images/468926418_18058612408888879_9066889187788909200_n.jpg", label: "Covered Cedar Porch" },
  { src: "/images/471674753_18060949915888879_7068889632734888039_n.jpg", label: "Lake House Screened Room" },
  { src: "/images/469071339_18058607554888879_1817159894321510102_n.jpg", label: "Windows & Trim" },
  { src: "/images/484033883_1094977005980683_5821486936191370129_n.jpg", label: "Open-Air Barn Structure" },
  { src: "/images/468988893_18058613398888879_666192470319590_n.jpg", label: "Kitchen Remodel" },
];

export default function GallerySection() {
  return (
    <section id="work" className="py-24 px-6 md:px-16 lg:px-24 bg-cream dark:bg-charcoal-mid">
      <div className="max-w-6xl mx-auto">

        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-px bg-cedar" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cedar">Our work</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal dark:text-white-warm leading-tight">
              The projects speak
              <br />
              <em className="font-normal text-cedar">for themselves.</em>
            </h2>
          </div>
          <Link
            href="#contact"
            className="text-xs font-semibold tracking-widest uppercase text-walnut dark:text-stone hover:text-cedar shrink-0"
          >
            Start your project →
          </Link>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryItems.map((item, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <div
                className="relative overflow-hidden rounded-2xl bg-cream-dark dark:bg-charcoal-light group w-full"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs font-semibold tracking-wide text-white">{item.label}</span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
