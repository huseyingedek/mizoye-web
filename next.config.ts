import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statik dışa aktarma: `npm run build` çalıştığında proje kökünde `out/`
  // klasörü oluşur. İçindeki tüm dosyaları herhangi bir statik sunucuya
  // (Netlify, GitHub Pages, cPanel, nginx, Apache vb.) yükleyebilirsiniz.
  output: "export",

  // Statik export'ta Next sunucusu olmadığı için görsel optimizasyonu kapatılır.
  // Görseller (Unsplash / public klasörü) doğrudan yüklenir.
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },

  // Her sayfa kendi klasöründe index.html olarak üretilir (ör. /cozumler/index.html).
  // Basit paylaşımlı hosting'lerde temiz URL'ler için daha güvenlidir.
  trailingSlash: true,
};

export default nextConfig;
