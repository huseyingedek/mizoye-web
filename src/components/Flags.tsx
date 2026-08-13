"use client";

import { useId } from "react";

type FlagProps = { className?: string };

export function FlagTR({ className = "" }: FlagProps) {
  return (
    <svg
      viewBox="0 0 30 20"
      className={className}
      role="img"
      aria-label="Türkçe"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="30" height="20" fill="#E30A17" />
      <circle cx="12" cy="10" r="5" fill="#ffffff" />
      <circle cx="13.4" cy="10" r="4" fill="#E30A17" />
      <polygon
        fill="#ffffff"
        points="18.5,7 19.2,9.03 21.35,9.07 19.64,10.37 20.26,12.43 18.5,11.2 16.74,12.43 17.36,10.37 15.65,9.07 17.8,9.03"
      />
    </svg>
  );
}

export function FlagEN({ className = "" }: FlagProps) {
  const id = useId().replace(/:/g, "");
  const clipAll = `all-${id}`;
  const clipDiag = `diag-${id}`;
  return (
    <svg
      viewBox="0 0 60 30"
      className={className}
      role="img"
      aria-label="English"
      preserveAspectRatio="xMidYMid slice"
    >
      <clipPath id={clipAll}>
        <rect width="60" height="30" />
      </clipPath>
      <clipPath id={clipDiag}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath={`url(#${clipAll})`}>
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#ffffff" strokeWidth="6" />
        <path
          d="M0,0 L60,30 M60,0 L0,30"
          clipPath={`url(#${clipDiag})`}
          stroke="#C8102E"
          strokeWidth="4"
        />
        <path d="M30,0 v30 M0,15 h60" stroke="#ffffff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}
