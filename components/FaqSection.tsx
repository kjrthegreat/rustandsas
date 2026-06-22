"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import { FAQS } from "@/lib/faqs";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FaqSection() {
  // Multiple panels can be open at once; first one starts open.
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));

  function toggle(i: number) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  return (
    <section
      id="faq"
      className="relative py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-16 lg:px-24 bg-cream dark:bg-charcoal-mid border-t-2 border-charcoal/15 dark:border-cedar/30 overflow-hidden"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      {/* Diagonal grain stripes */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent 0 16px, #5c3d1e 16px 18px)" }}
      />

      <div className="relative max-w-4xl mx-auto">
        <FadeUp className="mb-12">
          <div className="font-stamped text-[11px] tracking-[0.3em] uppercase text-rust dark:text-cedar-pale mb-3">
            ✚ Straight answers
          </div>
          <h2 className="font-stencil text-5xl md:text-7xl leading-[0.95] text-charcoal dark:text-cream">
            Questions
            <br />
            <span className="shimmer-text-warm">folks ask us.</span>
          </h2>
          <p className="font-hand text-2xl text-walnut dark:text-stone mt-4">
            - and the honest answers.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="border-2 border-charcoal/85 dark:border-cedar/30 bg-paper dark:bg-charcoal divide-y-2 divide-charcoal/15 dark:divide-cedar/20 shadow-[6px_6px_0_0_rgba(20,19,15,0.15)]">
            {FAQS.map((f, i) => {
              const isOpen = open.has(i);
              return (
                <div key={i}>
                  <h3 className="m-0">
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="w-full flex items-start justify-between gap-4 text-left px-5 sm:px-7 py-5 group"
                    >
                      <span className="flex items-start gap-3">
                        <span className="font-stencil text-rust dark:text-cedar-pale text-lg leading-none shrink-0 mt-0.5">
                          {String(i + 1).padStart(2, "0")}.
                        </span>
                        <span className="font-stencil text-lg sm:text-xl tracking-wide text-charcoal dark:text-cream group-hover:text-rust dark:group-hover:text-cedar-pale transition-colors">
                          {f.question}
                        </span>
                      </span>
                      <span className="shrink-0 w-7 h-7 flex items-center justify-center border-2 border-charcoal/40 dark:border-cedar/40 text-charcoal dark:text-cedar-pale group-hover:border-rust group-hover:text-rust transition-colors mt-0.5">
                        {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    hidden={!isOpen}
                    className="px-5 sm:px-7 pb-5 -mt-1"
                  >
                    <p className="text-walnut dark:text-stone text-base leading-relaxed pl-8 sm:pl-9 border-l-2 border-rust/40">
                      {f.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeUp>

        {/* Lead-in to the form / phone */}
        <FadeUp delay={0.2} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="font-hand text-2xl text-walnut dark:text-stone">
            still wondering about something?
          </p>
          <div className="flex items-center gap-3">
            <a
              href="tel:5025424473"
              className="inline-flex items-center justify-center bg-rust hover:bg-cedar text-white-warm font-stencil text-sm tracking-widest uppercase px-6 h-11 border-2 border-charcoal shadow-[4px_4px_0_0_rgba(20,19,15,0.45)] hover:shadow-[2px_2px_0_0_rgba(20,19,15,0.45)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Call us
            </a>
            <a
              href="sms:5025424473"
              className="inline-flex items-center justify-center border-2 border-charcoal/40 dark:border-cedar/40 hover:border-rust hover:text-rust text-charcoal dark:text-cream font-stencil text-sm tracking-widest uppercase px-6 h-11 transition-colors"
            >
              Text us
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
