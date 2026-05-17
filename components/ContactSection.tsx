"use client";

import { useState, useRef } from "react";
import { ImagePlus, X } from "lucide-react";

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
  const [images, setImages] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFiles(files: FileList | null) {
    if (!files) return;
    const incoming = Array.from(files).filter((f) => f.type.startsWith("image/"));
    setImages((prev) => {
      const existing = new Set(prev.map((f) => f.name + f.size));
      return [...prev, ...incoming.filter((f) => !existing.has(f.name + f.size))];
    });
  }

  function removeImage(index: number) {
    setImages((prev) => prev.filter((_, i) => i !== index));
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-16 lg:px-24 bg-paper dark:bg-charcoal overflow-hidden">
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[5fr_6fr] gap-10 lg:gap-12 items-start">

        <FadeUp>
          <div className="font-stamped text-[11px] tracking-[0.3em] uppercase text-rust dark:text-cedar-pale mb-3">
            ✚ Get in touch
          </div>
          <h2 className="font-stencil text-5xl md:text-7xl leading-[0.95] mb-6 text-charcoal dark:text-cream">
            Ready to start
            <br />
            <span className="text-rust dark:text-cedar-pale">your next project?</span>
          </h2>

          {/* Process — handwritten checklist */}
          <div className="relative bg-cream dark:bg-charcoal-mid border-2 border-charcoal/85 dark:border-cedar/30 p-6 mb-6">
            <div className="flex items-center justify-between -mx-6 -mt-6 mb-4 px-6 py-2 bg-charcoal dark:bg-oil text-cream-dark border-b-2 border-charcoal dark:border-cedar/30">
              <span className="font-stamped text-[10px] tracking-[0.25em] uppercase">How it works</span>
              <span className="font-stencil text-cedar text-base">№ 01</span>
            </div>
            <ol className="space-y-3 text-walnut dark:text-stone text-sm">
              <li className="flex gap-3">
                <span className="font-stencil text-rust dark:text-cedar-pale text-lg leading-none">01.</span>
                <span><strong className="text-charcoal dark:text-cream">Text or call</strong> our business number — that&apos;s the fastest way.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-stencil text-rust dark:text-cedar-pale text-lg leading-none">02.</span>
                <span>If we can&apos;t price it over the phone, we&apos;ll come out for a <strong className="text-charcoal dark:text-cream">free on-site estimate</strong>.</span>
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

          {/* Contact rows — workbook style */}
          <div className="space-y-3 font-stamped text-sm border-t-2 border-double border-charcoal/40 dark:border-cedar/30 pt-5">
            <div className="flex items-baseline gap-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-walnut dark:text-stone w-16 shrink-0">Phone</span>
              <span className="font-stencil text-2xl text-charcoal dark:text-cream">502 · 542 · 4473</span>
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
                    thanks — we&apos;ll be in touch.
                  </p>
                  <p className="text-walnut dark:text-stone text-sm mt-4 font-stamped tracking-wide">
                    We&apos;ll review your project and get back to you with a free estimate.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    {[{ label: "First Name", placeholder: "John" }, { label: "Last Name", placeholder: "Smith" }].map((f) => (
                      <div key={f.label} className="space-y-1.5">
                        <Label className="font-stamped text-[10px] tracking-[0.2em] uppercase text-walnut dark:text-stone">{f.label}</Label>
                        <Input placeholder={f.placeholder} required className="bg-paper dark:bg-charcoal border-2 border-charcoal/30 dark:border-cedar/30 text-charcoal dark:text-cream placeholder:text-walnut/40 focus-visible:ring-rust focus-visible:border-rust rounded-none font-stamped" />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1.5">
                    <Label className="font-stamped text-[10px] tracking-[0.2em] uppercase text-walnut dark:text-stone">Phone Number</Label>
                    <Input type="tel" placeholder="(606) 555-0000" required className="bg-paper dark:bg-charcoal border-2 border-charcoal/30 dark:border-cedar/30 text-charcoal dark:text-cream placeholder:text-walnut/40 focus-visible:ring-rust focus-visible:border-rust rounded-none font-stamped" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="font-stamped text-[10px] tracking-[0.2em] uppercase text-walnut dark:text-stone">Email Address</Label>
                    <Input type="email" placeholder="you@example.com" required className="bg-paper dark:bg-charcoal border-2 border-charcoal/30 dark:border-cedar/30 text-charcoal dark:text-cream placeholder:text-walnut/40 focus-visible:ring-rust focus-visible:border-rust rounded-none font-stamped" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="font-stamped text-[10px] tracking-[0.2em] uppercase text-walnut dark:text-stone">Service Needed</Label>
                    <Select>
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
                      placeholder="Tell us about your project — size, timeline, any details that help us give you an accurate quote..."
                      rows={4}
                      required
                      className="bg-paper dark:bg-charcoal border-2 border-charcoal/30 dark:border-cedar/30 text-charcoal dark:text-cream placeholder:text-walnut/40 focus-visible:ring-rust focus-visible:border-rust rounded-none font-stamped resize-none"
                    />
                  </div>

                  {/* Image upload */}
                  <div className="space-y-1.5">
                    <Label className="font-stamped text-[10px] tracking-[0.2em] uppercase text-walnut dark:text-stone">
                      Photos <span className="normal-case text-walnut/60">(optional)</span>
                    </Label>

                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDrop={handleDrop}
                      onDragOver={(e) => e.preventDefault()}
                      className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-charcoal/30 dark:border-cedar/30 bg-paper dark:bg-charcoal px-4 py-6 cursor-pointer hover:border-rust hover:bg-cream-dark dark:hover:bg-charcoal-mid transition-colors"
                    >
                      <ImagePlus size={22} className="text-rust/70 dark:text-cedar-pale/70" />
                      <p className="font-stamped text-xs tracking-wide text-walnut dark:text-stone text-center">
                        Click to upload or drag &amp; drop
                      </p>
                      <p className="font-stamped text-[10px] tracking-wider text-walnut/70 dark:text-stone/70">
                        JPG · PNG · WEBP · HEIC · GIF · AVIF
                      </p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*,.heic,.heif"
                        multiple
                        className="hidden"
                        onChange={(e) => handleFiles(e.target.files)}
                      />
                    </div>

                    {images.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {images.map((file, i) => (
                          <div key={i} className="relative group w-16 h-16 overflow-hidden border-2 border-charcoal/30 dark:border-cedar/30 bg-paper dark:bg-charcoal-mid shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={URL.createObjectURL(file)}
                              alt={file.name}
                              className="w-full h-full object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(i)}
                              className="absolute inset-0 flex items-center justify-center bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity"
                              aria-label="Remove image"
                            >
                              <X size={14} className="text-white" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center bg-rust hover:bg-cedar text-white-warm font-stencil text-lg tracking-widest uppercase h-12 border-2 border-charcoal shadow-[4px_4px_0_0_rgba(20,19,15,0.45)] hover:shadow-[2px_2px_0_0_rgba(20,19,15,0.45)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    >
                      Submit Job Order →
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
    </section>
  );
}
