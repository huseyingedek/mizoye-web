import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";
export const alt =
  "Mizoye Yazılım Danışmanlık — Yazılım Ürünleri ve Danışmanlık";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontDir = "node_modules/geist/dist/fonts/geist-sans";

export default async function OpengraphImage() {
  const [regular, bold] = await Promise.all([
    readFile(join(process.cwd(), fontDir, "Geist-Regular.ttf")),
    readFile(join(process.cwd(), fontDir, "Geist-Bold.ttf")),
  ]);

  const chips = ["E-Mutabakat", "Depo Yönetim Sistemi (WMS)", "Özel Yazılım"];

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
          backgroundColor: "#0a1730",
          backgroundImage:
            "radial-gradient(at 12% 6%, rgba(45,91,171,0.65) 0px, transparent 55%), radial-gradient(at 90% 20%, rgba(240,169,30,0.35) 0px, transparent 45%), radial-gradient(at 70% 100%, rgba(43,140,192,0.5) 0px, transparent 55%)",
          color: "#ffffff",
          fontFamily: "Geist",
        }}
      >
        {/* Marka */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "18px",
              background: "linear-gradient(135deg, #1f478d, #17325f)",
              fontSize: "40px",
              fontWeight: 700,
            }}
          >
            M
          </div>
          <div style={{ display: "flex", alignItems: "center", fontSize: "40px", fontWeight: 700 }}>
            Mizoye
            <span style={{ color: "#f0a91e", marginLeft: "4px" }}>.</span>
          </div>
        </div>

        {/* Başlık */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "40px", color: "#9db8e0", marginBottom: "14px" }}>
            Dijital dönüşüm ortağınız
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "76px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            <span>Geleceğin yazılımını</span>
            <div style={{ display: "flex", gap: "22px" }}>
              <span>bugün</span>
              <span style={{ color: "#f0a91e" }}>inşa ediyoruz</span>
            </div>
          </div>
        </div>

        {/* Ürün etiketleri */}
        <div style={{ display: "flex", gap: "16px" }}>
          {chips.map((c) => (
            <div
              key={c}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "14px 24px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.22)",
                background: "rgba(255,255,255,0.08)",
                fontSize: "26px",
                color: "#e2e8f0",
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
