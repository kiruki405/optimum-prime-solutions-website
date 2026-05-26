interface TallyLogoProps {
  className?: string;
}

export default function TallyLogo({ className = 'h-10 w-auto' }: TallyLogoProps) {
  return (
    <svg
      viewBox="0 0 190 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="TallyPrime"
    >
      <rect x="0" y="0" width="40" height="40" rx="12" fill="#dc2626" />
      <text x="20" y="26" textAnchor="middle" fontSize="20" fontWeight="800" fill="#ffffff" fontFamily="Inter, system-ui, sans-serif">
        T
      </text>
      <text x="54" y="24" fontSize="18" fontWeight="800" fill="#111827" fontFamily="Inter, system-ui, sans-serif">
        ally
      </text>
      <text x="54" y="36" fontSize="10" fontWeight="700" fill="#dc2626" fontFamily="Inter, system-ui, sans-serif" letterSpacing="0.15em">
        PRIME
      </text>
    </svg>
  );
}
