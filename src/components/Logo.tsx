import Image from "next/image";

/**
 * Mizoye logosu — orijinal logo dosyası (public/logoo.jpeg) arka planı temizlenip
 * public/logo.png (şeffaf) olarak kullanılır. Böylece birebir gerçek logo görünür.
 * Koyu zeminlerde (footer) beyaz bir kutu içinde gösterilir (bkz. Footer).
 */
export default function Logo({
  className = "",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  return (
    <Image
      src="/logo.png"
      alt="Mizoye"
      width={900}
      height={353}
      priority
      className={className}
    />
  );
}
