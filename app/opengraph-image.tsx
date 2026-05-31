import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const imgBuffer = fs.readFileSync(path.join(process.cwd(), "public/images/ep.png"));
  const imgSrc = `data:image/png;base64,${imgBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{
        width: 1200, height: 630,
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#14130f",
        fontFamily: "sans-serif",
      }}>

        {/* Hero photo background */}
        <img
          src={imgSrc}
          style={{
            position: "absolute",
            width: "100%", height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
            opacity: 0.45,
          }}
        />

        {/* Dark gradient overlay — mirrors the hero */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(20,19,15,0.82) 0%, rgba(20,19,15,0.38) 45%, rgba(20,19,15,0.92) 100%)",
        }} />

        {/* Left-to-right fade for readability */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(20,19,15,0.5) 0%, transparent 60%)",
        }} />

        {/* Grit noise layer */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "repeating-linear-gradient(45deg, transparent 0 20px, rgba(245,240,232,0.018) 20px 22px)",
        }} />

        {/* Main content */}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%", height: "100%",
          padding: "0 96px",
        }}>

          {/* Eyebrow */}
          <div style={{
            display: "flex", alignItems: "center", gap: 16, marginBottom: 32,
          }}>
            <div style={{ width: 32, height: 2, background: "#8a3a1f" }} />
            <div style={{
              color: "#b0a99f", fontSize: 14,
              letterSpacing: "0.38em", textTransform: "uppercase",
            }}>
              Somerset, Kentucky · Lake Cumberland Region
            </div>
          </div>

          {/* Main headline */}
          <div style={{
            color: "#f5f0e8", fontSize: 120, fontWeight: 900,
            lineHeight: 0.87, letterSpacing: "0.01em", marginBottom: 0,
          }}>
            Custom
          </div>
          <div style={{
            color: "#f5f0e8", fontSize: 120, fontWeight: 900,
            lineHeight: 0.87, letterSpacing: "0.01em", marginBottom: 28,
          }}>
            building.
          </div>
          <div style={{
            color: "#b87333", fontSize: 52, fontWeight: 900,
            lineHeight: 1, letterSpacing: "0.01em", marginBottom: 32,
            fontStyle: "italic",
          }}>
            Crafted right.
          </div>

          {/* Description */}
          <div style={{
            color: "#b0a99f", fontSize: 18,
            letterSpacing: "0.04em", maxWidth: 640,
          }}>
            Decks, porches, barns, remodels, concrete &amp; custom woodwork — insured crew, free quotes, 2-year warranty.
          </div>

        </div>

        {/* Bottom trust ribbon — mirrors the hero bottom bar */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: "rgba(20,19,15,0.95)",
          borderTop: "3px solid #b87333",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "18px 96px",
        }}>
          {[
            { num: "01", label: "Insured" },
            { num: "02", label: "Free Estimates" },
            { num: "03", label: "2-Yr Warranty" },
            { num: "04", label: "Veteran Discount" },
            { num: "05", label: "502-542-4473" },
          ].map((item) => (
            <div key={item.num} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ color: "#b87333", fontSize: 14, fontWeight: 700 }}>{item.num}</div>
              <div style={{ color: "#ede5d4", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Brand name top-right */}
        <div style={{
          position: "absolute", top: 36, right: 56,
          color: "#b87333", fontSize: 13,
          letterSpacing: "0.3em", textTransform: "uppercase",
          fontWeight: 700,
        }}>
          Rust &amp; Sawdust KY
        </div>

      </div>
    ),
    { width: 1200, height: 630 }
  );
}
