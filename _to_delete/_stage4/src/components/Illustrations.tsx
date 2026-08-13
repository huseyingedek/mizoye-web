type Props = { className?: string };

/* Anasayfa hero — yazılım kontrol paneli mockup'ı */
export function HeroArt({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 520 440"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Yazılım kontrol paneli görseli"
    >
      <defs>
        <linearGradient id="ha-head" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#17325f" />
          <stop offset="1" stopColor="#1f478d" />
        </linearGradient>
        <linearGradient id="ha-bar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#2d5bab" />
          <stop offset="1" stopColor="#4d7cc6" />
        </linearGradient>
        <filter id="ha-sh" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow
            dx="0"
            dy="18"
            stdDeviation="22"
            floodColor="#0f1f3d"
            floodOpacity="0.16"
          />
        </filter>
        <clipPath id="ha-win">
          <rect x="60" y="60" width="400" height="300" rx="16" />
        </clipPath>
      </defs>

      {/* dekoratif arka plan */}
      <circle cx="440" cy="86" r="78" fill="#2b8cc0" opacity="0.08" />
      <circle cx="72" cy="360" r="66" fill="#1f478d" opacity="0.07" />

      {/* ana pencere */}
      <rect x="60" y="60" width="400" height="300" rx="16" fill="#ffffff" filter="url(#ha-sh)" />
      <g clipPath="url(#ha-win)">
        <rect x="60" y="60" width="400" height="300" fill="#ffffff" />
        <rect x="60" y="60" width="400" height="46" fill="url(#ha-head)" />
        <circle cx="80" cy="83" r="4" fill="#ffffff" opacity="0.5" />
        <circle cx="94" cy="83" r="4" fill="#ffffff" opacity="0.35" />
        <circle cx="108" cy="83" r="4" fill="#ffffff" opacity="0.25" />
        <rect x="360" y="76" width="80" height="14" rx="7" fill="#ffffff" opacity="0.18" />

        {/* kenar çubuğu */}
        <rect x="60" y="106" width="92" height="254" fill="#f1f5fb" />
        <rect x="76" y="128" width="60" height="10" rx="5" fill="#1f478d" />
        <rect x="76" y="150" width="52" height="8" rx="4" fill="#cbd5e1" />
        <rect x="76" y="168" width="58" height="8" rx="4" fill="#cbd5e1" />
        <rect x="76" y="186" width="46" height="8" rx="4" fill="#cbd5e1" />
        <rect x="76" y="204" width="54" height="8" rx="4" fill="#cbd5e1" />

        {/* başlık */}
        <rect x="172" y="126" width="150" height="12" rx="6" fill="#334155" />
        <rect x="172" y="148" width="96" height="8" rx="4" fill="#cbd5e1" />

        {/* mini istatistik kartları */}
        <g>
          <rect x="172" y="170" width="82" height="44" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
          <circle cx="186" cy="184" r="5" fill="#2d5bab" />
          <rect x="196" y="181" width="40" height="6" rx="3" fill="#cbd5e1" />
          <rect x="184" y="196" width="52" height="8" rx="4" fill="#1f478d" />
        </g>
        <g>
          <rect x="262" y="170" width="82" height="44" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
          <circle cx="276" cy="184" r="5" fill="#2b8cc0" />
          <rect x="286" y="181" width="40" height="6" rx="3" fill="#cbd5e1" />
          <rect x="274" y="196" width="46" height="8" rx="4" fill="#1f478d" />
        </g>
        <g>
          <rect x="352" y="170" width="82" height="44" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
          <circle cx="366" cy="184" r="5" fill="#16a34a" />
          <rect x="376" y="181" width="40" height="6" rx="3" fill="#cbd5e1" />
          <rect x="364" y="196" width="40" height="8" rx="4" fill="#1f478d" />
        </g>

        {/* sütun grafik */}
        <line x1="172" y1="332" x2="434" y2="332" stroke="#e2e8f0" />
        <rect x="186" y="296" width="22" height="36" rx="4" fill="url(#ha-bar)" />
        <rect x="222" y="272" width="22" height="60" rx="4" fill="url(#ha-bar)" />
        <rect x="258" y="286" width="22" height="46" rx="4" fill="url(#ha-bar)" />
        <rect x="294" y="252" width="22" height="80" rx="4" fill="url(#ha-bar)" />
        <rect x="330" y="278" width="22" height="54" rx="4" fill="url(#ha-bar)" />
        <rect x="366" y="240" width="22" height="92" rx="4" fill="#2b8cc0" />
      </g>

      {/* yüzen kart — mutabakat onayı */}
      <g className="animate-float">
        <rect x="360" y="30" width="132" height="60" rx="12" fill="#ffffff" filter="url(#ha-sh)" />
        <circle cx="388" cy="60" r="16" fill="#e7f6ee" />
        <path
          d="M381 60l5 5 9-10"
          stroke="#16a34a"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <rect x="412" y="50" width="66" height="8" rx="4" fill="#1f478d" />
        <rect x="412" y="64" width="46" height="7" rx="3.5" fill="#cbd5e1" />
      </g>

      {/* yüzen kart — oran */}
      <g className="animate-float-slow">
        <rect x="24" y="300" width="140" height="72" rx="12" fill="#ffffff" filter="url(#ha-sh)" />
        <circle cx="58" cy="336" r="20" fill="none" stroke="#e2e8f0" strokeWidth="6" />
        <circle
          cx="58"
          cy="336"
          r="20"
          fill="none"
          stroke="#2d5bab"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="126"
          strokeDashoffset="18"
          transform="rotate(-90 58 336)"
        />
        <rect x="88" y="322" width="60" height="9" rx="4.5" fill="#1f478d" />
        <rect x="88" y="338" width="44" height="7" rx="3.5" fill="#cbd5e1" />
        <rect x="88" y="350" width="52" height="7" rx="3.5" fill="#e2e8f0" />
      </g>
    </svg>
  );
}

/* E-Mutabakat ürün görseli — mutabakat tablosu */
export function ReconArt({ className = "" }: Props) {
  const rows = [0, 1, 2, 3];
  return (
    <svg
      viewBox="0 0 320 240"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="E-Mutabakat ekran görseli"
    >
      <rect x="20" y="24" width="280" height="192" rx="14" fill="#ffffff" stroke="#e2e8f0" />
      <rect x="20" y="24" width="280" height="40" rx="14" fill="#f1f5fb" />
      <rect x="20" y="50" width="280" height="14" fill="#f1f5fb" />
      <rect x="38" y="38" width="120" height="12" rx="6" fill="#1f478d" />
      <rect x="236" y="38" width="46" height="14" rx="7" fill="#e7f6ee" />
      <circle cx="248" cy="45" r="3.4" fill="#16a34a" />
      {rows.map((r) => {
        const y = 84 + r * 34;
        return (
          <g key={r}>
            <rect x="38" y={y - 12} width="90" height="9" rx="4.5" fill="#334155" />
            <rect x="38" y={y + 2} width="60" height="7" rx="3.5" fill="#cbd5e1" />
            <rect x="164" y={y - 8} width="70" height="10" rx="5" fill="#e2e8f0" />
            <circle cx="266" cy={y - 3} r="11" fill="#e7f6ee" />
            <path
              d={`M260 ${y - 3}l4 4 8-8`}
              stroke="#16a34a"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {r < 3 ? (
              <line x1="38" y1={y + 18} x2="282" y2={y + 18} stroke="#f1f5f9" />
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}

/* Depo Yönetim Sistemi ürün görseli — raf ve kutular */
export function WarehouseArt({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 320 240"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Depo Yönetim Sistemi ekran görseli"
    >
      <rect x="20" y="24" width="280" height="192" rx="14" fill="#ffffff" stroke="#e2e8f0" />
      {/* raf ızgarası */}
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => {
          const x = 44 + col * 58;
          const y = 52 + row * 44;
          const active = row === 1 && col === 2;
          return (
            <g key={`${row}-${col}`}>
              <rect
                x={x}
                y={y}
                width="44"
                height="32"
                rx="5"
                fill={active ? "#1f478d" : "#eef3fb"}
                stroke={active ? "#1f478d" : "#dbe4f0"}
              />
              <rect
                x={x + 8}
                y={y + 9}
                width="28"
                height="5"
                rx="2.5"
                fill={active ? "#9db8e0" : "#c7d5ea"}
              />
              <rect
                x={x + 8}
                y={y + 19}
                width="18"
                height="5"
                rx="2.5"
                fill={active ? "#7ba1d9" : "#d8e2f1"}
              />
            </g>
          );
        }),
      )}
      {/* raf zeminleri */}
      {[0, 1, 2].map((row) => (
        <line
          key={row}
          x1="40"
          y1={52 + row * 44 + 36}
          x2="280"
          y2={52 + row * 44 + 36}
          stroke="#e2e8f0"
        />
      ))}
      {/* barkod tarama vurgusu */}
      <g className="animate-float">
        <rect x="196" y="86" width="96" height="44" rx="8" fill="#ffffff" stroke="#e2e8f0" />
        <g fill="#17325f">
          <rect x="206" y="98" width="3" height="20" />
          <rect x="212" y="98" width="2" height="20" />
          <rect x="217" y="98" width="4" height="20" />
          <rect x="224" y="98" width="2" height="20" />
          <rect x="229" y="98" width="3" height="20" />
          <rect x="235" y="98" width="2" height="20" />
          <rect x="240" y="98" width="4" height="20" />
        </g>
        <rect x="252" y="100" width="30" height="7" rx="3.5" fill="#1f478d" />
        <rect x="252" y="112" width="22" height="6" rx="3" fill="#cbd5e1" />
      </g>
    </svg>
  );
}

/* Dekoratif nokta deseni */
export function DotGrid({ className = "" }: Props) {
  return (
    <svg
      className={className}
      width="180"
      height="180"
      viewBox="0 0 180 180"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <pattern id="dg" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="180" height="180" fill="url(#dg)" />
    </svg>
  );
}
