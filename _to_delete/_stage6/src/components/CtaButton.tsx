import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "./Icons";

export default function CtaButton({
  href,
  children,
  variant = "primary",
  withArrow = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  withArrow?: boolean;
}) {
  const styles =
    variant === "primary"
      ? "bg-brand-600 text-white shadow-sm hover:bg-brand-700"
      : "border border-slate-300 bg-white text-slate-800 hover:border-brand-400 hover:text-brand-700";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-200 ${styles}`}
    >
      {children}
      {withArrow ? <ArrowRightIcon className="h-4 w-4" /> : null}
    </Link>
  );
}
