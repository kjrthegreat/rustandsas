import Image from "@/components/AppImage";
import { Check } from "lucide-react";
import FadeUp from "@/components/FadeUp";

const badges = ["Insured", "Experienced", "Professional", "Free Estimates", "Seasonal Pricing"];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-24 bg-cream dark:bg-charcoal-mid">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <FadeUp>
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/nd.png"
                alt="Rust & Sawdust — porch build in progress"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-cedar rounded-2xl px-6 py-5 text-center shadow-xl">
              <div className="font-heading text-3xl font-bold text-white-warm">Free</div>
              <div className="text-xs font-semibold tracking-wider uppercase text-white-warm/80 mt-1">
                Estimates<br />Always
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.15} className="lg:pl-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-6 h-px bg-cedar" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cedar">About us</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal dark:text-white-warm leading-tight mb-6">
            &ldquo;In God We Trust&rdquo; —
            <br />
            <em className="font-normal text-cedar">and we build it right.</em>
          </h2>
          <div className="space-y-4 text-walnut dark:text-stone leading-relaxed mb-8">
            <p>
              We started Rust &amp; Sawdust because we genuinely love the work — the
              kind that leaves someone&apos;s home better than we found it. Based out of
              Somerset, we serve the Lake Cumberland region and take on projects of all
              sizes, from a quick repair to a full custom build.
            </p>
            <p>
              We keep our pricing fair and offer seasonal deals on decks, concrete,
              buildings, paint, and more. Every job gets our full attention, whether
              it&apos;s a screened porch for a lake house or a pole barn going up on a back
              property.
            </p>
            <p>
              Give us a call or shoot us a text at{" "}
              <strong className="text-cedar">502-542-4473</strong>. We&apos;ll talk through
              it, come take a look, and get you an honest quote — no pressure, no
              obligation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {badges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 bg-cream-dark dark:bg-charcoal-light rounded-full px-4 py-2"
              >
                <Check size={13} className="text-cedar shrink-0" />
                <span className="text-xs font-semibold tracking-wide text-walnut dark:text-stone">{badge}</span>
              </div>
            ))}
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
