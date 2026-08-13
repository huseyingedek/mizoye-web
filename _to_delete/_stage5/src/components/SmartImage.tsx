"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Gerçek görsel varsa onu gösterir; yoksa (dosya eklenmemişse)
 * markalı, şık bir panele düşer. Böylece siteye gerçek fotoğraf
 * eklemek için tek yapmanız gereken ilgili dosyayı public/images
 * klasörüne koymaktır (ör. public/images/hero.jpg).
 */
export default function SmartImage({
  src,
  alt,
  className = "",
  rounded = "rounded-2xl",
  caption,
}: {
  src: string;
  alt: string;
  className?: string;
  rounded?: string;
  caption?: string;
}) {
  const [ok, setOk] = useState(true);

  return (
    <div
      className={`relative overflow-hidden ${rounded} ${className}`}
      aria-label={alt}
    >
      {/* Markalı yedek panel (görsel yoksa görünür) */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-800 to-navy-900">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center text-white/85">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-2xl font-black ring-1 ring-white/15">
            M
          </span>
          <span className="text-sm font-semibold tracking-wide">
            {caption ?? "Mizoye Yazılım Danışmanlık"}
          </span>
        </div>
      </div>

      {ok ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="relative object-cover"
          onError={() => setOk(false)}
        />
      ) : null}
    </div>
  );
}
