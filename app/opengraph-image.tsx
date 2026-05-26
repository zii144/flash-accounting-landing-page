import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = `${siteConfig.name} — 追蹤無感消費、零摩擦記帳`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: 28,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#a3a3a3",
            }}
          >
            Flash Accounting
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            黑白記帳
          </div>
          <div
            style={{
              fontSize: 36,
              lineHeight: 1.35,
              color: "#d4d4d4",
              maxWidth: 900,
            }}
          >
            三秒記一筆 · 揪出無感消費 · 本機優先
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#a3a3a3",
          }}
        >
          <span>{siteConfig.tagline}</span>
          <span>{siteConfig.url.replace(/^https?:\/\//, "")}</span>
        </div>
      </div>
    ),
    size
  );
}
