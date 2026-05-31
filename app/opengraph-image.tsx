import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div style={{ width: 1200, height: 630, display: "flex", fontFamily: "sans-serif", overflow: "hidden" }}>

        {/* ── LEFT DARK PANEL ─────────────────────────────────── */}
        <div style={{
          width: 730, height: 630,
          background: "#14130f",
          display: "flex", flexDirection: "column",
          position: "relative", overflow: "hidden",
        }}>
          {/* Diagonal grit */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: "repeating-linear-gradient(45deg, transparent 0 22px, rgba(245,240,232,0.025) 22px 24px)",
          }} />
          {/* Rust left accent bar */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 12, background: "#8a3a1f" }} />
          {/* Vignette bottom */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: 180,
            background: "linear-gradient(to top, rgba(20,19,15,0.7), transparent)",
          }} />

          {/* Content */}
          <div style={{
            display: "flex", flexDirection: "column",
            padding: "62px 52px 60px 96px",
            height: "100%", position: "relative",
          }}>
            {/* Eyebrow */}
            <div style={{
              display: "flex", alignItems: "center", gap: 12, marginBottom: 38,
              color: "#b87333", fontSize: 14, letterSpacing: "0.32em",
              textTransform: "uppercase", fontWeight: 700,
            }}>
              ✚&nbsp;&nbsp;Somerset, KY · Lake Cumberland
            </div>

            {/* Company name */}
            <div style={{
              color: "#f5f0e8", fontSize: 112, fontWeight: 900,
              lineHeight: 0.87, letterSpacing: "0.01em",
            }}>
              RUST &amp;
            </div>
            <div style={{
              color: "#f5f0e8", fontSize: 112, fontWeight: 900,
              lineHeight: 0.87, letterSpacing: "0.01em", marginBottom: 30,
            }}>
              SAWDUST
            </div>

            {/* Tagline */}
            <div style={{
              color: "#b0a99f", fontSize: 23, letterSpacing: "0.07em",
            }}>
              Custom Building · Crafted Right.
            </div>

            <div style={{ flex: 1 }} />

            {/* Bottom service strip */}
            <div style={{
              borderTop: "1px solid rgba(184,115,51,0.28)",
              paddingTop: 22,
              color: "#b87333", fontSize: 12,
              letterSpacing: "0.26em", textTransform: "uppercase",
            }}>
              Decks · Porches · Barns · Remodels · Concrete · Custom Woodwork
            </div>
          </div>
        </div>

        {/* ── RIGHT RUST PANEL ────────────────────────────────── */}
        <div style={{
          width: 470, height: 630,
          background: "#8a3a1f",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          padding: "52px 44px",
          position: "relative", overflow: "hidden",
        }}>
          {/* Subtle diagonal on rust */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "repeating-linear-gradient(45deg, transparent 0 18px, rgba(0,0,0,0.09) 18px 20px)",
          }} />
          {/* Left inner border line */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: "rgba(242,188,130,0.2)" }} />

          {/* Content */}
          <div style={{
            position: "relative", display: "flex",
            flexDirection: "column", alignItems: "center", width: "100%",
          }}>
            {/* Stars */}
            <div style={{ color: "#f2bc82", fontSize: 38, letterSpacing: "0.12em", marginBottom: 14 }}>
              ★★★★★
            </div>

            {/* Rating number */}
            <div style={{
              color: "#fdfaf5", fontSize: 88, fontWeight: 900,
              lineHeight: 1, marginBottom: 6,
            }}>
              4.9
            </div>
            <div style={{
              color: "#f2bc82", fontSize: 12,
              letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 34,
            }}>
              28 Verified Reviews
            </div>

            {/* Divider */}
            <div style={{ width: "100%", height: 1, background: "rgba(242,188,130,0.25)", marginBottom: 30 }} />

            {/* Trust badges */}
            {["Licensed & Insured", "Free Estimates", "2-Year Warranty", "Veteran Discount"].map((badge) => (
              <div key={badge} style={{
                color: "#fdfaf5",
                fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase",
                border: "1.5px solid rgba(242,188,130,0.35)",
                padding: "9px 16px", marginBottom: 9,
                width: "100%", textAlign: "center",
              }}>
                {badge}
              </div>
            ))}

            {/* Phone */}
            <div style={{
              marginTop: 22,
              color: "#f2bc82", fontSize: 18, fontWeight: 700, letterSpacing: "0.12em",
            }}>
              502 · 542 · 4473
            </div>
          </div>
        </div>

      </div>
    ),
    { width: 1200, height: 630 }
  );
}
