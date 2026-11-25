import { ImageResponse } from "next/og";

export const alt = "Jibrin Adamu Ahmed — Backend Software Developer";
export const size = {
  width: 1200,
  height: 630,
};
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
          backgroundColor: "#080B10",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.16), transparent 50%), radial-gradient(circle at 15% 85%, rgba(139, 92, 246, 0.14), transparent 45%)",
          color: "#F1F5F9",
          padding: "64px",
          fontFamily: "sans-serif",
          border: "1px solid rgba(148, 163, 184, 0.18)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              fontSize: 22,
              color: "#38BDF8",
            }}
          >
            <span>~/jibrin-adamu-ahmed</span>
          </div>
          <div
            style={{
              display: "flex",
              padding: "8px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(16, 185, 129, 0.35)",
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              color: "#6EE7B7",
              fontSize: 18,
            }}
          >
            Backend Software Developer
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.08 }}>
            Jibrin Adamu Ahmed
          </div>
          <div style={{ fontSize: 30, color: "#94A3B8" }}>
            Java · Spring Boot · PostgreSQL · Keycloak · REST APIs
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(148, 163, 184, 0.16)",
            paddingTop: "24px",
            fontSize: 20,
            color: "#64748B",
          }}
        >
          <span>Building reliable software systems, one API at a time.</span>
          <span style={{ color: "#38BDF8" }}>github.com/jibrinamir27</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
