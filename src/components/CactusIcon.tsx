export function CactusIcon({ size = 48, color = "#2C5F2D" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main cactus body - curved outline */}
      <path
        d="M28 12C28 8 28 6 32 6C36 6 36 8 36 12V54C36 56 35 58 32 58C29 58 28 56 28 54V12Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left arm - artistic curve */}
      <path
        d="M28 24V20C28 18 26 16 22 16C18 16 16 17 16 20V28C16 30 18 32 22 32C24 32 26 31 28 30"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right arm - artistic curve */}
      <path
        d="M36 28V24C36 22 38 20 42 20C46 20 48 21 48 24V32C48 34 46 36 42 36C40 36 38 35 36 34"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Decorative spine lines on main body */}
      <line x1="30" y1="16" x2="30" y2="18" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="34" y1="16" x2="34" y2="18" stroke={color} strokeWidth="1.5" strokeLinecap="round" />

      <line x1="30" y1="26" x2="30" y2="28" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="34" y1="26" x2="34" y2="28" stroke={color} strokeWidth="1.5" strokeLinecap="round" />

      <line x1="30" y1="38" x2="30" y2="40" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="34" y1="38" x2="34" y2="40" stroke={color} strokeWidth="1.5" strokeLinecap="round" />

      <line x1="30" y1="48" x2="30" y2="50" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="34" y1="48" x2="34" y2="50" stroke={color} strokeWidth="1.5" strokeLinecap="round" />

      {/* Spines on left arm */}
      <line x1="20" y1="22" x2="20" y2="24" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="26" x2="20" y2="28" stroke={color} strokeWidth="1.5" strokeLinecap="round" />

      {/* Spines on right arm */}
      <line x1="44" y1="26" x2="44" y2="28" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="44" y1="30" x2="44" y2="32" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
