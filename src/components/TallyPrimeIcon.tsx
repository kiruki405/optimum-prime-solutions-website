import { motion } from 'framer-motion';

interface TallyPrimeIconProps {
  className?: string;
  showText?: boolean;
  isDark?: boolean;
}

export default function TallyPrimeIcon({ className = 'h-8 w-8', showText = true, isDark = false }: TallyPrimeIconProps) {
  return (
    <motion.svg
      viewBox="0 0 120 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {/* Tally text in italic bold */}
      <text
        x="60"
        y="48"
        fontSize="36"
        fontWeight="900"
        fontFamily="'Inter', system-ui, sans-serif"
        fill={isDark ? '#ffffff' : '#000000'}
        textAnchor="middle"
        fontStyle="italic"
      >
        Tally
      </text>

      {/* Blue curved underline */}
      <defs>
        <linearGradient id="tallyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#0052FF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0082FF', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <path
        d="M 30 58 Q 60 68 90 58"
        stroke="url(#tallyGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Prime subtitle if showText is true */}
      {showText && (
        <text
          x="60"
          y="85"
          fontSize="10"
          fontWeight="600"
          fontFamily="'Inter', system-ui, sans-serif"
          fill="#0052FF"
          textAnchor="middle"
          letterSpacing="1"
        >
          PRIME
        </text>
      )}
    </motion.svg>
  );
}
