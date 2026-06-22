"use client";

import { Phone, MessageSquareText } from "lucide-react";

// Sticky call/text bar pinned to the bottom of the screen on phones only.
// Hidden on md+ (desktop has the nav "Free Quote" button + contact section).
// This is the single highest-leverage conversion element on mobile: one tap to
// call, one tap to text photos. sms: with a prefilled body for the text path.
const SMS_BODY = encodeURIComponent(
  "Hi Rust & Sawdust - I'd like a quote. Here's my project:"
);

export default function MobileCTABar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 border-t-[3px] border-cedar/60 bg-oil/95 backdrop-blur-md shadow-[0_-4px_0_0_rgba(0,0,0,0.5)] pb-[env(safe-area-inset-bottom)]">
      <a
        href="tel:5025424473"
        aria-label="Call Rust & Sawdust at 502-542-4473"
        className="flex items-center justify-center gap-2 py-3.5 font-stencil text-base tracking-widest uppercase text-cream-dark border-r border-cedar/40 active:bg-charcoal-mid transition-colors"
      >
        <Phone size={17} className="text-cedar-pale" />
        Call
      </a>
      <a
        href={`sms:5025424473?&body=${SMS_BODY}`}
        aria-label="Text Rust & Sawdust photos of your project"
        className="flex items-center justify-center gap-2 py-3.5 font-stencil text-base tracking-widest uppercase text-white-warm bg-rust active:bg-cedar transition-colors"
      >
        <MessageSquareText size={17} />
        Text a Photo
      </a>
    </div>
  );
}
