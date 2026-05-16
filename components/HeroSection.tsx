import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background — zoomed in on porch structure, sky cropped out */}
      <Image
        src="/images/ep.png"
        alt="Rust & Sawdust — barn build"
        fill
        priority
        className="object-cover object-[center_55%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/55 to-charcoal/85" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col flex-1 justify-center px-6 md:px-16 lg:px-24 pt-36 pb-44">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-cedar-pale mb-7">
          Somerset, Kentucky &nbsp;·&nbsp; In God We Trust
        </p>
        <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-white-warm leading-tight mb-8 max-w-4xl">
          Custom building.
          <br />
          <em className="font-normal text-cedar-pale">Crafted right.</em>
        </h1>
        <p className="text-stone text-xl md:text-2xl max-w-2xl leading-relaxed mb-12">
          Decks, porches, barns, remodels, concrete, and custom woodwork —
          built by an insured, experienced crew serving the Lake Cumberland
          region. Call or text for a free quote today.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-cedar hover:bg-cedar-light text-white-warm font-semibold tracking-wide px-8 h-11"
          >
            Get a Free Quote
          </Link>
          <Link
            href="#work"
            className="inline-flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 px-8 h-11"
          >
            See Our Work →
          </Link>
        </div>
      </div>

      {/* Stats bar — theme-aware overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex divide-x divide-cedar/20 bg-white-warm/85 dark:bg-charcoal/80 backdrop-blur-sm border-t border-cedar/20">
        {[
          { num: "Insured", label: "& Experienced" },
          { num: "Free", label: "Estimates" },
          { num: "502", label: "542-4473" },
        ].map((stat) => (
          <div key={stat.label} className="flex-1 text-center py-5 px-4">
            <div className="font-heading text-2xl font-bold text-cedar dark:text-cedar-pale">{stat.num}</div>
            <div className="text-xs tracking-widest uppercase text-walnut dark:text-stone mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
