import { motion } from 'framer-motion';

interface TallyPrimeIconProps {
  className?: string;
  showText?: boolean;
  isDark?: boolean;
}

export default function TallyPrimeIcon({ className = 'h-8 w-8', showText = true, isDark = false }: TallyPrimeIconProps) {
  return (
    <motion.span
      className={`inline-flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full min-w-[1rem]" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tally Prime logo">
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000" floodOpacity="0.12" />
          </filter>
          <linearGradient id="blueGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0D5E99" />
            <stop offset="100%" stopColor="#0A4C7D" />
          </linearGradient>
          <linearGradient id="goldGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F0B21F" />
            <stop offset="100%" stopColor="#DEA411" />
          </linearGradient>
          <linearGradient id="tealGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3BA3C9" />
            <stop offset="100%" stopColor="#2E89B5" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="100" height="55" rx="12" fill="url(#blueGlow)" filter="url(#shadow)" />
        <rect x="0" y="55" width="50" height="45" fill="url(#goldGlow)" />
        <rect x="50" y="55" width="50" height="45" fill="url(#tealGlow)" />
        <path d="M 10 12 H 90" stroke="#ffffff" strokeWidth="5" opacity="0.15" />
      </svg>
      {showText && (
        <span className={`text-xs font-semibold tracking-wide ${isDark ? 'text-white' : 'text-[#0B4F8A]'}`}>
          Tally Prime
        </span>
      )}
    </motion.span>
  );
}
