import { ImageResponse } from "next/og";

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
          alignItems: "stretch",
          background:
            "linear-gradient(180deg, #fffdfb 0%, #f8efe7 55%, #f3e7dd 100%)",
          color: "#261d1a",
          display: "flex",
          height: "100%",
          padding: "52px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(182, 136, 113, 0.28)",
            borderRadius: "34px",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "54px",
            background:
              "radial-gradient(circle at top left, rgba(255,255,255,0.9), rgba(255,255,255,0) 35%), linear-gradient(180deg, rgba(255,255,255,0.68), rgba(255,249,244,0.92))",
          }}
        >
          <div
            style={{
              color: "#7b6a63",
              display: "flex",
              fontSize: 28,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
            }}
          >
            Grožio studija
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div
              style={{
                display: "flex",
                fontFamily: "Georgia, serif",
                fontSize: 98,
                lineHeight: 0.92,
              }}
            >
              Lauryta
            </div>
            <div
              style={{
                color: "#5c4a43",
                display: "flex",
                fontSize: 34,
                lineHeight: 1.4,
                maxWidth: "760px",
              }}
            >
              Rami, premium grožio studija Vilniuje su estetinėmis procedūromis,
              aiškiu registracijos keliu ir švelnios prabangos atmosfera.
            </div>
          </div>
          <div
            style={{
              color: "#8d7164",
              display: "flex",
              fontSize: 28,
            }}
          >
            Paslaugos • Specialistės • Kainos • Kontaktai
          </div>
        </div>
      </div>
    ),
    size,
  );
}
