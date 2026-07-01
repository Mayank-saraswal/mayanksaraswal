import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "#1a1a1a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f35815",
          fontWeight: 600,
          fontFamily: "monospace",
          borderRadius: "4px",
        }}
      >
        MS
      </div>
    ),
    {
      ...size,
    }
  );
}
