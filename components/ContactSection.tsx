"use client";

import { useState } from "react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FadeUp from "@/components/FadeUp";

const services = [
  "Deck or Porch", "Screened Room", "Concrete Work", "Building / Barn",
  "Excavating", "Custom Woodwork / Pergola", "Painting", "Windows & Trim",
  "Remodeling", "Bathroom Remodel", "Home Add-On", "Golf Green", "Other",
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [service, setService] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    const fd = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: fd.get("firstName"),
          lastName: fd.get("lastName"),
          phone: fd.get("phone"),
          email: fd.get("email"),
          service,
          description: fd.get("description"),
          website: fd.get("website"),
        }),
      });

      if (!res.ok) throw new Error("Submit failed");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try calling us at 502·542·4473.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-16 lg:px-24 bg-paper dark:bg-charcoal overflow-hidden">
      {/* Diagonal grain stripes */}
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent 0 16px, #5c3d1e 16px 18px)" }}
      />
      {/* Edge vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(20,19,15,0.07)_100%)]" />
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[5fr_6fr] gap-10 lg:gap-12 items-start">

        <FadeUp>
          <div className="font-stamped text-[11px] tracking-[0.3em] uppercase text-rust dark:text-cedar-pale mb-3">
            ✚ Get in touch
          </div>
          <h2 className="font-stencil text-5xl md:text-7xl leading-[0.95] mb-6">
            <span className="shimmer-text-warm">Ready to start</span>
            <br />
            <span className="shimmer-text-warm">your next project?</span>
          </h2>

          {/* Process - checklist card with black header */}
          <div className="relative bg-cream dark:bg-charcoal-mid border-2 border-charcoal/85 dark:border-cedar/30 p-6 mb-6">
            <div className="flex items-center justify-between -mx-6 -mt-6 mb-4 px-6 py-2 bg-charcoal dark:bg-oil text-cream-dark border-b-2 border-charcoal dark:border-cedar/30">
              <span className="font-stamped text-[10px] tracking-[0.25em] uppercase">How it works</span>
              <span className="font-stencil text-cedar text-base">№ 01</span>
            </div>
            <ol className="space-y-3 text-walnut dark:text-stone text-sm">
              <li className="flex gap-3">
                <span className="font-stencil text-rust dark:text-cedar-pale text-lg leading-none">01.</span>
                <span><strong className="text-charcoal dark:text-cream">Submit a form</strong> and get your quote today.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-stencil text-rust dark:text-cedar-pale text-lg leading-none">02.</span>
                <span>We&apos;ll respond fast with a price - or come out for a <strong className="text-charcoal dark:text-cream">free on-site estimate</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-stencil text-rust dark:text-cedar-pale text-lg leading-none">03.</span>
                <span>If you like our price, we&apos;ll <strong className="text-charcoal dark:text-cream">get started as soon as you&apos;re ready</strong>.</span>
              </li>
            </ol>
          </div>

          {/* Discount stamp callout */}
          <div className="relative bg-oil text-cream-dark p-5 mb-6 border-2 border-rust shadow-[5px_5px_0_0_rgba(20,19,15,0.25)]">
            <div className="font-stencil text-rust text-xl mb-1">★ A LITTLE THANK-YOU</div>
            <p className="font-stamped text-[12px] tracking-wide leading-relaxed">
              U.S. Veterans always discounted. Every first-time customer gets a discounted
              price. Every job comes with a <span className="text-cedar-pale">2-year warranty</span>.
            </p>
          </div>

          {/* Contact rows - workbook style */}
          <div className="space-y-3 font-stamped text-sm border-t-2 border-double border-charcoal/40 dark:border-cedar/30 pt-5">
            <div className="flex items-baseline gap-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-walnut dark:text-stone w-16 shrink-0">Phone</span>
              <a href="tel:5025424473" className="font-stencil text-2xl text-charcoal dark:text-cream hover:text-rust dark:hover:text-cedar-pale transition-colors">502 · 542 · 4473</a>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-walnut dark:text-stone w-16 shrink-0">Email</span>
              <span className="text-charcoal dark:text-cream">rustandsawdustky@gmail.com</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-walnut dark:text-stone w-16 shrink-0">Based</span>
              <span className="text-charcoal dark:text-cream">Somerset, KY · Lake Cumberland</span>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <span className="text-[10px] uppercase tracking-[0.25em] text-walnut dark:text-stone w-16 shrink-0">Follow</span>
              <a
                href="https://www.instagram.com/rustandsawdustky/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rust & Sawdust on Instagram"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border-2 border-charcoal/85 dark:border-cedar/40 text-charcoal dark:text-cream hover:bg-rust hover:text-cream-dark hover:border-rust transition-colors"
              >
                <InstagramIcon size={15} />
                <span className="font-stencil text-xs tracking-widest uppercase">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/p/Rust-and-Sawdust-KY-100064051812669/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rust & Sawdust on Facebook"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border-2 border-charcoal/85 dark:border-cedar/40 text-charcoal dark:text-cream hover:bg-rust hover:text-cream-dark hover:border-rust transition-colors"
              >
                <FacebookIcon size={15} />
                <span className="font-stencil text-xs tracking-widest uppercase">Facebook</span>
              </a>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="relative bg-cream dark:bg-charcoal-mid border-2 border-charcoal/85 dark:border-cedar/30 shadow-[6px_6px_0_0_rgba(20,19,15,0.2)] dark:shadow-[6px_6px_0_0_rgba(184,115,51,0.18)]">

            {/* Header strip */}
            <div className="flex items-center justify-between px-6 py-3 bg-charcoal dark:bg-oil text-cream-dark border-b-2 border-charcoal dark:border-cedar/30">
              <span className="font-stencil text-xl tracking-wide">GET YOUR QUOTE TODAY</span>
              <span className="font-stamped text-[10px] tracking-[0.25em]">№ NEW</span>
            </div>

            <div className="p-7">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="font-stencil text-5xl text-rust dark:text-cedar-pale mb-3">ORDER RECEIVED</div>
                  <p className="font-hand text-2xl text-walnut dark:text-stone tilt-l">
                    thanks - we&apos;ll be in touch.
                  </p>
                  <p className="text-walnut dark:text-stone text-sm mt-4 font-stamped tracking-wide">
                    We&apos;ll review your project and get back to you with a free estimate.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot — hidden from real users, bots fill it in */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0 }}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    {[{ label: "First Name", name: "firstName", placeholder: "John" }, { label: "Last Name", name: "lastName", placeholder: "Smith" }].map((f) => (
                      <div key={f.label} className="space-y-1.5">
                        <Label className="font-stamped text-[10px] tracking-[0.2em] uppercase text-walnut dark:text-stone">{f.label}</Label>
                        <Input name={f.name} placeholder={f.placeholder} required className="bg-paper dark:bg-charcoal border-2 border-charcoal/30 dark:border-cedar/30 text-charcoal dark:text-cream placeholder:text-walnut/40 focus-visible:ring-rust focus-visible:border-rust rounded-none font-stamped" />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1.5">
                    <Label className="font-stamped text-[10px] tracking-[0.2em] uppercase text-walnut dark:text-stone">Phone Number</Label>
                    <Input type="tel" name="phone" placeholder="(606) 555-0000" required className="bg-paper dark:bg-charcoal border-2 border-charcoal/30 dark:border-cedar/30 text-charcoal dark:text-cream placeholder:text-walnut/40 focus-visible:ring-rust focus-visible:border-rust rounded-none font-stamped" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="font-stamped text-[10px] tracking-[0.2em] uppercase text-walnut dark:text-stone">Email Address</Label>
                    <Input type="email" name="email" placeholder="you@example.com" required className="bg-paper dark:bg-charcoal border-2 border-charcoal/30 dark:border-cedar/30 text-charcoal dark:text-cream placeholder:text-walnut/40 focus-visible:ring-rust focus-visible:border-rust rounded-none font-stamped" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="font-stamped text-[10px] tracking-[0.2em] uppercase text-walnut dark:text-stone">Service Needed</Label>
                    <Select value={service} onValueChange={(v) => setService(v ?? "")}>
                      <SelectTrigger className="w-full bg-paper dark:bg-charcoal border-2 border-charcoal/30 dark:border-cedar/30 text-charcoal dark:text-cream focus:ring-rust rounded-none font-stamped">
                        <SelectValue placeholder="Select a service..." />
                      </SelectTrigger>
                      <SelectContent className="bg-cream dark:bg-charcoal-mid border-2 border-charcoal/30 dark:border-cedar/30 rounded-none">
                        {services.map((s) => (
                          <SelectItem key={s} value={s} className="text-charcoal dark:text-cream focus:bg-rust/10 font-stamped">
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="font-stamped text-[10px] tracking-[0.2em] uppercase text-walnut dark:text-stone">Project Description</Label>
                    <Textarea
                      name="description"
                      placeholder="Tell us about your project - size, timeline, any details that help us give you an accurate quote..."
                      rows={4}
                      required
                      className="bg-paper dark:bg-charcoal border-2 border-charcoal/30 dark:border-cedar/30 text-charcoal dark:text-cream placeholder:text-walnut/40 focus-visible:ring-rust focus-visible:border-rust rounded-none font-stamped resize-none"
                    />
                  </div>

                  {submitError && (
                    <p className="font-stamped text-[11px] tracking-wide text-rust dark:text-cedar-pale border border-rust/40 px-4 py-3">
                      {submitError}
                    </p>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center bg-rust hover:bg-cedar disabled:opacity-60 disabled:cursor-not-allowed text-white-warm font-stencil text-lg tracking-widest uppercase h-12 border-2 border-charcoal shadow-[4px_4px_0_0_rgba(20,19,15,0.45)] hover:shadow-[2px_2px_0_0_rgba(20,19,15,0.45)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    >
                      {submitting ? "Sending..." : "Submit Job Order →"}
                    </button>
                  </div>

                  <p className="text-center font-hand text-xl text-walnut dark:text-stone pt-1">
                    or just give us a holler at <span className="text-rust dark:text-cedar-pale">502·542·4473</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </FadeUp>

      </div>

      {/* Service area map */}
      <FadeUp delay={0.2} className="relative max-w-6xl mx-auto mt-12">
        <div className="border-t-2 border-charcoal/20 dark:border-cedar/30 pt-8">
          <div className="font-stamped text-[11px] tracking-[0.3em] uppercase text-rust dark:text-cedar-pale mb-4">
            ✚ Service Area · Somerset, KY · Lake Cumberland &amp; Beyond · 40 Mi
          </div>
          <div className="relative border-2 border-charcoal/20 dark:border-cedar/30 overflow-hidden" style={{ height: "280px" }}>
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-rust z-10" />
            <iframe
              title="Rust & Sawdust KY service area — Somerset, Kentucky"
              src="https://maps.google.com/maps?ll=37.092,-84.604&z=11&t=m&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </FadeUp>

    </section>
  );
}
