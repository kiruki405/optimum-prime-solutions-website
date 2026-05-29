import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
}

export default function Logo({ className = 'h-10 w-auto', variant = 'full' }: LogoProps) {
  return (
    <motion.svg
      viewBox="0 0 500 150"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      {/* Pure blue cloud shape */}
      <path
        d="M 50 80 C 50 70 58 65 68 65 C 72 55 80 50 90 50 C 105 50 118 60 118 75 C 130 75 140 85 140 98 C 140 110 130 120 118 120 L 45 120 C 35 120 28 112 28 102 C 28 92 35 84 45 82 C 45 78 47 74 50 71 Z"
        fill="#0052FF"
      />

      {/* Download arrow inside cloud */}
      <g transform="translate(90, 75)">
        <line x1="0" y1="-10" x2="0" y2="15" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <polyline points="0,15 -6,8 0,12 6,8" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {variant === 'full' && (
        <>
          {/* Bold "optimum" text in black */}
          <text
            x="155"
            y="82"
            fontSize="48"
            fontWeight="900"
            fontFamily="'Inter', system-ui, sans-serif"
            fill="#000000"
          >
            optimum
          </text>

          {/* "PRIME SOLUTIONS LTD" subtitle in smaller text */}
          <text
            x="155"
            y="105"
            fontSize="14"
            fontWeight="600"
            fontFamily="'Inter', system-ui, sans-serif"
            fill="#000000"
            letterSpacing="1.5"
          >
            PRIME SOLUTIONS LTD
          </text>
        </>
      )}
    </motion.svg>
  );
}
