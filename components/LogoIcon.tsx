export default function LogoIcon({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* TV cabinet body */}
      <rect x="2" y="9" width="32" height="21" rx="4" fill="#ffd54f" />

      {/* Screen */}
      <rect x="6" y="12" width="24" height="13" rx="2" fill="#2a241f" />

      {/* Banana on screen */}
      <text
        x="18"
        y="22.5"
        textAnchor="middle"
        fontSize="10"
        dominantBaseline="middle"
      >
        🍌
      </text>

      {/* Left leg */}
      <rect x="9" y="29" width="5" height="4" rx="1.5" fill="#ffd54f" />

      {/* Right leg */}
      <rect x="22" y="29" width="5" height="4" rx="1.5" fill="#ffd54f" />

      {/* Left antenna */}
      <line x1="13" y1="9" x2="9" y2="3" stroke="#2a241f" strokeWidth="2" strokeLinecap="round" />

      {/* Right antenna */}
      <line x1="23" y1="9" x2="27" y2="3" stroke="#2a241f" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
