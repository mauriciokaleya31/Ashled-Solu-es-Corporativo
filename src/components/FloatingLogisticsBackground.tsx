import React from 'react';
import { motion } from 'motion/react';
import { Plane, Compass, Anchor, Navigation2, Radio, Package, Waves } from 'lucide-react';

interface FloatingLogisticsBackgroundProps {
  className?: string;
  variant?: 'subtle' | 'full';
}

export const FloatingLogisticsBackground: React.FC<FloatingLogisticsBackgroundProps> = ({
  className = '',
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* 1. Ambient Tactical Transit Grid & Radar Rays */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="logistics-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#FE8D00"
              strokeWidth="0.5"
              strokeDasharray="2 4"
              strokeOpacity="0.4"
            />
            <circle cx="0" cy="0" r="1.5" fill="#FE8D00" opacity="0.7" />
          </pattern>
          <linearGradient id="flightTrailGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FE8D00" stopOpacity="0" />
            <stop offset="50%" stopColor="#FE8D00" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FE8D00" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="shipWakeBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FE8D00" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#logistics-grid)" />
        
        {/* Global Arc Transit Routes */}
        <path
          d="M 50 120 Q 350 40 850 100 T 1400 60"
          fill="none"
          stroke="#FE8D00"
          strokeWidth="1.2"
          strokeDasharray="6 6"
          strokeOpacity="0.35"
        />
        <path
          d="M 10 380 Q 450 320 950 410 T 1500 370"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="1.2"
          strokeDasharray="8 6"
          strokeOpacity="0.3"
        />
      </svg>

      {/* Atmospheric Radial Color Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#FE8D00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* --- A. FLIGHT 1: Transcontinental Heavy Cargo Aircraft (West -> East) --- */}
      <motion.div
        initial={{ x: '-15%', y: '10%', opacity: 0 }}
        animate={{
          x: ['-15%', '115%'],
          y: ['10%', '16%', '12%', '18%'],
          opacity: [0, 0.9, 1, 0.9, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'linear',
          delay: 0.5,
        }}
        className="absolute top-0 left-0 flex items-center gap-2.5 z-0"
      >
        {/* Radiant Contrail */}
        <div className="w-56 sm:w-96 h-[2.5px] bg-gradient-to-r from-transparent via-[#FE8D00]/40 to-[#FE8D00] rounded-full shadow-[0_0_12px_#FE8D00]" />

        {/* Floating Plane Unit */}
        <motion.div
          animate={{
            y: [0, -7, 2, -6, 0],
            rotate: [14, 16, 12, 15, 14],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative flex items-center justify-center"
        >
          {/* Pulsing Radar Ring */}
          <span className="absolute -inset-3 rounded-full border border-[#FE8D00] animate-ping opacity-50" />
          
          <div className="p-2.5 rounded-2xl bg-neutral-950 border-2 border-[#FE8D00] shadow-[0_0_25px_rgba(254,141,0,0.8)] text-[#FE8D00]">
            <Plane className="w-6 h-6 fill-[#FE8D00]/20 drop-shadow-[0_0_10px_#FE8D00]" />
          </div>

          {/* Real-Time Flight Callout Badge */}
          <div className="absolute left-full ml-3 px-3 py-1 rounded-xl bg-black/90 border border-[#FE8D00]/50 text-[10px] font-mono text-white shadow-2xl flex items-center gap-1.5 whitespace-nowrap">
            <Radio className="w-3 h-3 text-[#FE8D00] animate-pulse" />
            <span className="text-[#FE8D00] font-black">CARGO FLIGHT ASH-01</span>
            <span className="text-neutral-400">|</span>
            <span className="text-neutral-200">LAD ⇄ SZX (China Corridor)</span>
          </div>
        </motion.div>
      </motion.div>

      {/* --- B. FLIGHT 2: Regional Express Air Logistics (East -> West) --- */}
      <motion.div
        initial={{ x: '115%', y: '42%', opacity: 0 }}
        animate={{
          x: ['115%', '-20%'],
          y: ['42%', '36%', '40%', '34%'],
          opacity: [0, 0.8, 0.95, 0.8, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'linear',
          delay: 10,
        }}
        className="absolute top-0 left-0 flex items-center gap-2.5 z-0"
      >
        <motion.div
          animate={{
            y: [0, 6, -3, 5, 0],
            rotate: [-166, -169, -163, -166],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative flex items-center justify-center"
        >
          <span className="absolute -inset-2.5 rounded-full border border-sky-400 animate-ping opacity-40" />
          
          <div className="p-2 rounded-2xl bg-neutral-950 border-2 border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.7)] text-sky-400">
            <Plane className="w-5 h-5 fill-sky-400/20" />
          </div>

          <div className="absolute right-full mr-3 px-3 py-1 rounded-xl bg-black/90 border border-sky-500/50 text-[10px] font-mono text-white shadow-2xl flex items-center gap-1.5 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
            <span className="text-sky-400 font-bold">AIR LOGISTICS EU-LAD</span>
            <span className="text-neutral-400">• FL360</span>
          </div>
        </motion.div>

        {/* Trail */}
        <div className="w-48 sm:w-80 h-[2px] bg-gradient-to-l from-transparent via-sky-400/40 to-sky-400 rounded-full shadow-[0_0_10px_#38bdf8]" />
      </motion.div>

      {/* --- C. VESSEL 1: Mega Container Ship (Deep Sea Maritime Route West -> East) --- */}
      <motion.div
        initial={{ x: '-20%', y: '72%', opacity: 0 }}
        animate={{
          x: ['-20%', '115%'],
          opacity: [0, 0.9, 1, 0.9, 0],
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: 'linear',
          delay: 1.5,
        }}
        className="absolute top-0 left-0 z-0 flex items-end"
      >
        <motion.div
          animate={{
            y: [0, -9, 3, -7, 0],
            rotate: [0, 2, -1.5, 1.2, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative group flex items-end gap-3"
        >
          {/* Detailed High-Craft Container Vessel */}
          <div className="relative">
            {/* Water Ripple Waves Under Hull */}
            <motion.div
              animate={{ scaleX: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 -left-8 -right-8 h-4 bg-gradient-to-r from-transparent via-sky-400/35 to-transparent rounded-full blur-[2px]"
            />

            {/* Vessel SVG Structure */}
            <svg
              className="w-32 sm:w-44 h-16 sm:h-20 text-neutral-800 drop-shadow-[0_0_25px_rgba(254,141,0,0.5)]"
              viewBox="0 0 180 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Ship Hull (Casco Principal) */}
              <path
                d="M 12 68 L 155 68 C 168 68, 175 60, 178 48 L 165 48 L 155 48 L 5 48 L 9 60 Z"
                fill="#121212"
                stroke="#FE8D00"
                strokeWidth="2"
              />
              <line x1="8" y1="56" x2="170" y2="56" stroke="#FE8D00" strokeWidth="1" strokeDasharray="4 2" />

              {/* Waterline Glow Indicator */}
              <path
                d="M 8 68 Q 60 73 110 68 T 180 68"
                stroke="#38bdf8"
                strokeWidth="2.5"
                opacity="0.85"
              />

              {/* Multi-Tier Colored Container Stacks */}
              {/* Bottom Tier */}
              <rect x="20" y="28" width="18" height="19" rx="2" fill="#FE8D00" stroke="#000" strokeWidth="1" />
              <rect x="40" y="28" width="18" height="19" rx="2" fill="#0284c7" stroke="#000" strokeWidth="1" />
              <rect x="60" y="28" width="18" height="19" rx="2" fill="#dc2626" stroke="#000" strokeWidth="1" />
              <rect x="80" y="28" width="18" height="19" rx="2" fill="#16a34a" stroke="#000" strokeWidth="1" />
              <rect x="100" y="28" width="18" height="19" rx="2" fill="#FE8D00" stroke="#000" strokeWidth="1" />
              
              {/* Upper Tier */}
              <rect x="30" y="11" width="18" height="16" rx="2" fill="#059669" stroke="#000" strokeWidth="1" />
              <rect x="50" y="11" width="18" height="16" rx="2" fill="#ea580c" stroke="#000" strokeWidth="1" />
              <rect x="70" y="11" width="18" height="16" rx="2" fill="#38bdf8" stroke="#000" strokeWidth="1" />
              <rect x="90" y="11" width="18" height="16" rx="2" fill="#f59e0b" stroke="#000" strokeWidth="1" />

              {/* Bridge Tower / Navigation Hub */}
              <rect x="124" y="16" width="26" height="32" rx="3" fill="#1f1f1f" stroke="#FE8D00" strokeWidth="1.5" />
              <rect x="128" y="21" width="18" height="5" rx="1" fill="#FE8D00" opacity="0.9" />
              {/* Radar Mast */}
              <line x1="137" y1="16" x2="137" y2="5" stroke="#FE8D00" strokeWidth="2" />
              <circle cx="137" cy="4" r="3" fill="#FE8D00" />
              <line x1="132" y1="7" x2="142" y2="7" stroke="#FE8D00" strokeWidth="1.5" />

              {/* Bow Cargo Crane Mast */}
              <line x1="162" y1="48" x2="162" y2="30" stroke="#d4d4d4" strokeWidth="1.5" />
              <circle cx="162" cy="29" r="2" fill="#FE8D00" />
            </svg>

            {/* Glowing Navigation Lights */}
            <span className="absolute top-1.5 right-3 w-2.5 h-2.5 rounded-full bg-[#FE8D00] shadow-[0_0_12px_#FE8D00] animate-ping" />
            <span className="absolute top-1.5 right-3 w-2.5 h-2.5 rounded-full bg-white" />
          </div>

          {/* Maritime Callout Badge */}
          <div className="mb-3 px-3.5 py-1.5 rounded-xl bg-neutral-950/95 border border-[#FE8D00]/60 text-[11px] font-mono text-white shadow-2xl flex items-center gap-2">
            <Anchor className="w-4 h-4 text-[#FE8D00] animate-bounce" />
            <div>
              <div className="text-[#FE8D00] font-black">NAVIO PORTA-CONTENTORES</div>
              <div className="text-[9px] text-neutral-300">Frete Marítimo • Destino: Porto de Luanda</div>
            </div>
          </div>
        </motion.div>

        {/* Extended Ocean Wake Trail */}
        <div className="w-56 sm:w-96 h-[4px] bg-gradient-to-r from-transparent via-sky-400/30 to-sky-400 rounded-full shadow-[0_0_12px_#38bdf8] -mb-1 mr-4" />
      </motion.div>

      {/* --- D. VESSEL 2: Feeder & Coastal Logistics Ship (East -> West) --- */}
      <motion.div
        initial={{ x: '115%', y: '82%', opacity: 0 }}
        animate={{
          x: ['115%', '-25%'],
          opacity: [0, 0.7, 0.85, 0.7, 0],
        }}
        transition={{
          duration: 44,
          repeat: Infinity,
          ease: 'linear',
          delay: 18,
        }}
        className="absolute top-0 left-0 z-0 flex items-end flex-row-reverse"
      >
        <motion.div
          animate={{
            y: [0, -6, 4, -5, 0],
            rotate: [0, -2, 1.5, -1, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative group flex items-end gap-2.5"
        >
          {/* Secondary Vessel */}
          <svg
            className="w-28 sm:w-36 h-13 sm:h-16 text-neutral-800 drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]"
            viewBox="0 0 160 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: 'scaleX(-1)' }}
          >
            <path
              d="M 15 58 L 138 58 C 148 58, 155 52, 158 42 L 148 42 L 140 42 L 8 42 L 12 52 Z"
              fill="#171717"
              stroke="#38bdf8"
              strokeWidth="1.8"
            />
            <rect x="26" y="24" width="22" height="17" rx="2" fill="#38bdf8" opacity="0.85" stroke="#000" strokeWidth="1" />
            <rect x="52" y="24" width="22" height="17" rx="2" fill="#FE8D00" opacity="0.85" stroke="#000" strokeWidth="1" />
            <rect x="78" y="24" width="22" height="17" rx="2" fill="#10b981" opacity="0.85" stroke="#000" strokeWidth="1" />
            <rect x="106" y="14" width="24" height="28" rx="2" fill="#262626" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="118" y1="14" x2="118" y2="5" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="118" cy="4" r="2.5" fill="#38bdf8" />
          </svg>

          <div className="mb-2 px-3 py-1 rounded-xl bg-black/90 border border-sky-400/50 text-[10px] font-mono text-sky-300 shadow-xl hidden sm:flex items-center gap-1.5">
            <Waves className="w-3 h-3 text-sky-400" />
            <span>COASTAL FEEDER • SADC LOGISTICS</span>
          </div>
        </motion.div>

        <div className="w-40 sm:w-72 h-[3px] bg-gradient-to-l from-transparent via-sky-400/30 to-sky-400 rounded-full blur-[0.5px] -mb-1 ml-3" />
      </motion.div>

      {/* --- E. FLOATING CARGO CRATES & LOGISTICS NODES --- */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 4, -4, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-8 hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-neutral-950/90 border border-[#FE8D00]/50 shadow-[0_0_20px_rgba(254,141,0,0.2)] text-xs font-mono text-neutral-300"
      >
        <Package className="w-4 h-4 text-[#FE8D00]" />
        <span>CONTAINER SOURCING HUB</span>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
          rotate: [0, -3, 3, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-24 left-10 hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-neutral-950/90 border border-sky-400/50 shadow-[0_0_20px_rgba(56,189,248,0.2)] text-xs font-mono text-neutral-300"
      >
        <Navigation2 className="w-4 h-4 text-sky-400 rotate-45" />
        <span>GPS: 08°48'S 13°14'E • LUANDA HQ</span>
      </motion.div>

      {/* Rotating Maritime Compass */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-6 left-6 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/80 border border-neutral-800 text-[10px] font-mono text-neutral-400"
      >
        <Compass className="w-4 h-4 text-[#FE8D00] animate-spin" style={{ animationDuration: '24s' }} />
        <span>CORREDOR MARÍTIMO & AÉREO GLOBAL</span>
      </motion.div>
    </div>
  );
};

