import { ImageResponse } from "next/og";

export const alt = "Mayank Saini — Full-stack Developer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#1a1a1a",
          padding: "80px",
          border: "20px solid #2e2e2e",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              backgroundColor: "#10b981",
            }}
          />
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "22px",
              color: "#a1a1a1",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Open to remote internships
          </span>
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 600,
            color: "#fafafa",
            lineHeight: 1.1,
            marginBottom: "24px",
            letterSpacing: "-0.02em",
          }}
        >
          Mayank Saini
        </div>
        <div
          style={{
            fontSize: "30px",
            color: "#a1a1a1",
            lineHeight: 1.4,
            maxWidth: "960px",
          }}
        >
          Full-stack developer building production AI SaaS. I ship multi-tenant
          platforms with realtime sync, AI agents, and durable background jobs —
          solo, end to end.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "64px",
            fontFamily: "monospace",
            fontSize: "22px",
            color: "#f35815",
          }}
        >
          mayanksaraswal.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
