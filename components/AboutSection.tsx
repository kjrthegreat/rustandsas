import Image from "@/components/AppImage";
import FadeUp from "@/components/FadeUp";

const badges = [
  "Insured",
  "Experienced",
  "Safe & Respectful",
  "Free Estimates",
  "2-Year Warranty",
  "Veteran Discount",
  "First-Timer Discount",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-16 lg:px-24 bg-paper dark:bg-charcoal-mid overflow-hidden">
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[5fr_6fr] gap-10 lg:gap-16 items-center">

        <FadeUp>
          <div className="relative max-w-md mx-auto">
            <div className="relative polaroid">
              <div className="relative aspect-[4/5] overflow-hidden bg-cream-dark">
                <Image
                  src="/images/nd.png"
                  alt="Rust & Sawdust - porch build in progress"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 to-transparent" />
              </div>

              <div className="pt-4 px-2">
                <span className="font-hand text-3xl text-charcoal leading-none">
                  on the workbench
                </span>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="font-stamped text-[11px] tracking-[0.3em] uppercase text-rust dark:text-cedar-pale mb-4">
            ✚ About the shop
          </div>

          <p className={'breathe-text font-stamped text-sm uppercase text-walnut dark:text-stone mb-3'}>
            &ldquo;In God We Trust&rdquo;
          </p>
          <h2 className="font-stencil text-5xl md:text-7xl text-charcoal dark:text-cream leading-[0.9] mb-6">
            We <span className={'shimmer-text-warm'}>build it</span> right.
          </h2>

          <div className="space-y-5 text-walnut dark:text-stone leading-relaxed mb-8 max-w-xl text-base">
            <p>
              I grew up in Indiana farm country, and my first taste of this work came in my{" "}
              <span className="font-hand text-2xl text-charcoal dark:text-cream-dark italic">grandfather&apos;s shop</span>
              {" "}- watching and helping him custom-build anything a project called for,
              including the home he built himself. He&apos;s been my mentor my whole life and still is today.
            </p>
            <p>
              I took on real renovation and carpentry work around the home and farm from a young
              age, eventually owning my own licensed business and serving as an active member of
              the Chamber of Commerce in Georgetown, Kentucky. This is the only kind of work
              I&apos;ve ever done.
            </p>
            <p>
              Today, Rust &amp; Sawdust handles residential, commercial, and facility management work
              across the Lake Cumberland region. We specialize in custom builds - if you can dream
              it, we can build it - and every job comes with a{" "}
              <span className="font-stencil text-rust dark:text-cedar-pale">2-year warranty</span>.
              Insured, experienced, safe, and respectful, with discounts for U.S. Veterans and
              first-time customers as our way of saying thanks.
            </p>
          </div>

          {/* Pull-quote in handwriting */}
          <div className="relative pl-6 mb-8 border-l-[3px] border-rust">
            <p className="font-hand text-3xl md:text-4xl text-charcoal dark:text-cream-dark leading-tight tilt-l">
              If the job isn&apos;t done right,
              <br />
              it&apos;s simply not done.
            </p>
            <span className="font-stamped text-[10px] tracking-[0.25em] uppercase text-walnut dark:text-stone mt-2 inline-block">
              - house rule
            </span>
          </div>

          {/* Stamped badges */}
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span key={badge} className="stamp stamp-charcoal !text-[10px] !py-1">
                {badge}
              </span>
            ))}
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
