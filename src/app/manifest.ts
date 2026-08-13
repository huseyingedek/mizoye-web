import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mizoye Yazılım Danışmanlık",
    short_name: "Mizoye",
    description:
      "E-Mutabakat, Depo Yönetim Sistemi ve özel yazılım & danışmanlık hizmetleriyle işletmenizin çözüm ortağı.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1f478d",
    lang: "tr-TR",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
