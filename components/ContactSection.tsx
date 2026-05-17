"use client";

import { useState, useRef } from "react";
import { ImagePlus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, BadgeCheck } from "lucide-react";
import FadeUp from "@/components/FadeUp";

const services = [
  "Deck or Porch", "Screened Room", "Concrete Work", "Building / Barn",
  "Custom Woodwork / Pergola", "Painting", "Windows & Trim", "Remodeling", "Other",
];

const contactInfo = [
  { Icon: Phone,      title: "502-542-4473",                sub: "Call, Text, or DM" },
  { Icon: Mail,       title: "rustandsawdustky@gmail.com",  sub: "Email us anytime" },
  { Icon: MapPin,     title: "Somerset, KY",                sub: "Serving the Lake Cumberland region" },
  { Icon: BadgeCheck, title: "Free estimates · Insured",    sub: "Professional & experienced crew" },
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
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-24 bg-cream dark:bg-charcoal-mid">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        <FadeUp>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-6 h-px bg-cedar" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cedar">Get in touch</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal dark:text-white-warm leading-tight mb-6">
            Ready to start your
            <br />
            <em className="font-normal text-cedar">next project?</em>
          </h2>
          <p className="text-walnut dark:text-stone leading-relaxed mb-10 max-w-md">
            Fill out the form or give us a call — we&apos;ll get back to you with a free,
            no-pressure quote. Seasonal pricing available on decks, concrete, buildings,
            paint, and more.
          </p>
          <div className="space-y-5">
            {contactInfo.map(({ Icon, title, sub }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-cedar/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={14} className="text-cedar" />
                </div>
                <div>
                  <div className="font-semibold text-charcoal dark:text-cream">{title}</div>
                  <div className="text-sm text-walnut dark:text-stone">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="bg-white-warm dark:bg-charcoal-light rounded-2xl p-8 border border-cedar/15">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="font-heading text-2xl text-charcoal dark:text-white-warm mb-2">We&apos;ll be in touch!</h3>
                <p className="text-walnut dark:text-stone text-sm">
                  Thanks for reaching out. We&apos;ll review your request and get back to you with a free estimate.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  {[{ label: "First Name", placeholder: "John" }, { label: "Last Name", placeholder: "Smith" }].map((f) => (
                    <div key={f.label} className="space-y-2">
                      <Label className="text-walnut dark:text-stone text-xs tracking-wide uppercase">{f.label}</Label>
                      <Input placeholder={f.placeholder} required className="bg-cream dark:bg-charcoal border-cedar/20 text-charcoal dark:text-cream placeholder:text-stone/60 focus-visible:ring-cedar rounded-lg" />
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <Label className="text-walnut dark:text-stone text-xs tracking-wide uppercase">Phone Number</Label>
                  <Input type="tel" placeholder="(606) 555-0000" required className="bg-cream dark:bg-charcoal border-cedar/20 text-charcoal dark:text-cream placeholder:text-stone/60 focus-visible:ring-cedar rounded-lg" />
                </div>
                <div className="space-y-2">
                  <Label className="text-walnut dark:text-stone text-xs tracking-wide uppercase">Email Address</Label>
                  <Input type="email" placeholder="you@example.com" required className="bg-cream dark:bg-charcoal border-cedar/20 text-charcoal dark:text-cream placeholder:text-stone/60 focus-visible:ring-cedar rounded-lg" />
                </div>
                <div className="space-y-2">
                  <Label className="text-walnut dark:text-stone text-xs tracking-wide uppercase">Service Needed</Label>
                  <Select>
                    <SelectTrigger className="w-full bg-cream dark:bg-charcoal border-cedar/20 text-charcoal dark:text-cream focus:ring-cedar rounded-lg">
                      <SelectValue placeholder="Select a service..." />
                    </SelectTrigger>
                    <SelectContent className="bg-white-warm dark:bg-charcoal-mid border-cedar/20">
                      {services.map((s) => (
                        <SelectItem key={s} value={s} className="text-charcoal dark:text-cream focus:bg-cedar/10">
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-walnut dark:text-stone text-xs tracking-wide uppercase">Project Description</Label>
                  <Textarea
                    placeholder="Tell us about your project — size, timeline, any details that help us give you an accurate quote..."
                    rows={4}
                    required
                    className="bg-cream dark:bg-charcoal border-cedar/20 text-charcoal dark:text-cream placeholder:text-stone/60 focus-visible:ring-cedar rounded-lg resize-none"
                  />
                </div>

                {/* Image upload */}
                <div className="space-y-2">
                  <Label className="text-walnut dark:text-stone text-xs tracking-wide uppercase">
                    Photos <span className="normal-case font-normal text-stone/60">(optional)</span>
                  </Label>

                  {/* Drop zone */}
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-cedar/25 bg-cream dark:bg-charcoal px-4 py-6 cursor-pointer hover:border-cedar/50 hover:bg-cream-dark dark:hover:bg-charcoal-mid transition-colors"
                  >
                    <ImagePlus size={22} className="text-cedar/60" />
                    <p className="text-xs text-walnut dark:text-stone text-center">
                      Click to upload or drag & drop
                    </p>
                    <p className="text-[11px] text-stone/60">
                      JPG, PNG, WEBP, HEIC, GIF, AVIF — any image format
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

                  {/* Preview thumbnails */}
                  {images.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {images.map((file, i) => (
                        <div key={i} className="relative group w-16 h-16 rounded-lg overflow-hidden border border-cedar/20 bg-cream-dark dark:bg-charcoal-mid shrink-0">
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

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-full bg-cedar hover:bg-cedar-light text-white-warm font-semibold tracking-wide h-10 px-8"
                >
                  Request Free Quote →
                </button>
              </form>
            )}
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
