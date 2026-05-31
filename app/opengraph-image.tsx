import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#14130f",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Rust left accent bar */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 14, background: "#8a3a1f" }} />

        {/* Faint diagonal stripe texture */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "repeating-linear-gradient(45deg, transparent 0 20px, rgba(245,240,232,0.025) 20px 22px)",
        }} />

        {/* Right panel */}
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: 320,
          background: "#1e1e1c",
          borderLeft: "2px solid rgba(184,115,51,0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
          padding: "48px 36px",
        }}>
          {/* Stars */}
          <div style={{ color: "#8a3a1f", fontSize: 34, letterSpacing: "0.12em", marginBottom: 10 }}>★★★★★</div>
          <div style={{ color: "#f5f0e8", fontSize: 64, fontWeight: 900, lineHeight: 1, marginBottom: 4 }}>4.9</div>
          <div style={{ color: "#b0a99f", fontSize: 13, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 36 }}>28 Verified Reviews</div>

          {/* Divider */}
          <div style={{ width: "100%", height: 1, background: "rgba(184,115,51,0.25)", marginBottom: 36 }} />

          {/* Trust badges */}
          {["Licensed & Insured", "Free Estimates", "2-Year Warranty", "Veteran Discount"].map((badge) => (
            <div key={badge} style={{
              color: "#b87333",
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              border: "1px solid rgba(184,115,51,0.35)",
              padding: "7px 14px",
              marginBottom: 10,
              width: "100%",
              textAlign: "center",
            }}>
              {badge}
            </div>
          ))}
        </div>

        {/* Left content */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          padding: "68px 48px 68px 110px",
          width: 880,
        }}>
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36 }}>
            <div style={{ width: 28, height: 2, background: "#8a3a1f" }} />
            <div style={{ color: "#b87333", fontSize: 14, letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: 700 }}>
              Somerset, KY · Lake Cumberland Region
            </div>
          </div>

          {/* Company name */}
          <div style={{ color: "#f5f0e8", fontSize: 118, fontWeight: 900, lineHeight: 0.88, letterSpacing: "-0.01em", marginBottom: 2 }}>
            RUST &
          </div>
          <div style={{ color: "#f5f0e8", fontSize: 118, fontWeight: 900, lineHeight: 0.88, letterSpacing: "-0.01em", marginBottom: 32 }}>
            SAWDUST
          </div>

          {/* Tagline */}
          <div style={{ color: "#b0a99f", fontSize: 26, letterSpacing: "0.06em", marginBottom: "auto" }}>
            Custom Building · Crafted Right.
          </div>

          {/* Bottom */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            paddingTop: 28,
            borderTop: "1px solid rgba(184,115,51,0.25)",
            marginTop: 40,
          }}>
            <div style={{ color: "#8a3a1f", fontSize: 20 }}>✚</div>
            <div style={{ color: "#b0a99f", fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Decks · Porches · Barns · Remodels · Concrete · Custom Woodwork
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
