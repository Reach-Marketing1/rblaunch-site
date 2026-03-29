// RBLaunch Logo — matches the black-circle brand mark
// Usage: <Logo /> for full badge, <LogoHorizontal /> for navbar/footer

export function LogoBadge({ size = 64 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="50" fill="#1a1510" />
      {/* Bracket on left of R */}
      <rect x="18" y="28" width="3" height="32" fill="white" />
      <rect x="18" y="28" width="9" height="3" fill="white" />
      <rect x="18" y="57" width="9" height="3" fill="white" />
      {/* R letterform */}
      <rect x="27" y="28" width="4" height="22" fill="white" />
      <path d="M31 28 H42 Q49 28 49 35 Q49 42 42 42 H31" stroke="white" strokeWidth="4" fill="none" strokeLinejoin="round" />
      <line x1="42" y1="42" x2="49" y2="50" stroke="white" strokeWidth="4" strokeLinecap="round" />
      {/* B letterform */}
      <rect x="53" y="28" width="4" height="22" fill="white" />
      <path d="M57 28 H66 Q73 28 73 34.5 Q73 41 66 41 H57" stroke="white" strokeWidth="3.5" fill="none" strokeLinejoin="round" />
      <path d="M57 41 H67 Q75 41 75 47.5 Q75 54 67 54 H57" stroke="white" strokeWidth="3.5" fill="none" strokeLinejoin="round" />
      {/* LAUNCH text */}
      <text
        x="50"
        y="72"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        letterSpacing="3"
      >
        LAUNCH
      </text>
    </svg>
  )
}

export function LogoHorizontal({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Circle badge — compact */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="50" fill="#1a1510" />
        {/* Bracket */}
        <rect x="16" y="26" width="3.5" height="36" fill="white" />
        <rect x="16" y="26" width="10" height="3.5" fill="white" />
        <rect x="16" y="58.5" width="10" height="3.5" fill="white" />
        {/* R */}
        <rect x="26" y="26" width="4.5" height="36" fill="white" />
        <path d="M30.5 26 H42 Q50 26 50 34 Q50 42 42 42 H30.5" stroke="white" strokeWidth="4.5" fill="none" strokeLinejoin="round" />
        <line x1="41" y1="42" x2="50" y2="62" stroke="white" strokeWidth="4" strokeLinecap="round" />
        {/* B */}
        <rect x="54" y="26" width="4.5" height="36" fill="white" />
        <path d="M58.5 26 H68 Q76 26 76 33 Q76 40 68 40 H58.5" stroke="white" strokeWidth="4" fill="none" strokeLinejoin="round" />
        <path d="M58.5 40 H69 Q78 40 78 47.5 Q78 55 69 55 H58.5" stroke="white" strokeWidth="4" fill="none" strokeLinejoin="round" />
        {/* LAUNCH */}
        <text x="50" y="75" textAnchor="middle" fill="white" fontSize="10" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="2.5">LAUNCH</text>
      </svg>
      {/* Wordmark */}
      <span className="font-sans font-bold text-lg tracking-widest text-foreground uppercase" style={{ letterSpacing: '0.18em' }}>
        RBLaunch
      </span>
    </span>
  )
}
