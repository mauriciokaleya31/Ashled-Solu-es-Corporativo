import React from 'react';
import { motion } from 'motion/react';
import { Plane } from 'lucide-react';

interface FloatingLogisticsBackgroundProps {
  className?: string;
}

export const FloatingLogisticsBackground: React.FC<FloatingLogisticsBackgroundProps> = ({
  className = '',
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* Ambient Sea & Sky Light Gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FE8D00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* --- 1. AERO 1: Floating Flight / Avião a Flutuar (Oeste -> Este) --- */}
      <motion.div
        initial={{ x: '-15%', y: '12%', opacity: 0 }}
        animate={{
          x: ['-15%', '115%'],
          y: ['12%', '18%', '14%', '20%'],
          opacity: [0, 0.85, 1, 0.85, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'linear',
          delay: 0.5,
        }}
        className="absolute top-0 left-0 flex items-center gap-3 z-0"
      >
        {/* Flight Vapor Trail / Rastro Dourado */}
        <div className="w-56 sm:w-96 h-[2px] bg-gradient-to-r from-transparent via-[#FE8D00]/40 to-[#FE8D00] rounded-full shadow-[0_0_12px_#FE8D00]" />

        {/* Floating Aircraft Icon */}
        <motion.div
          animate={{
            y: [0, -8, 2, -6, 0],
            rotate: [14, 17, 12, 16, 14],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative flex items-center justify-center"
        >
          <span className="absolute -inset-2.5 rounded-full border border-[#FE8D00] animate-ping opacity-40" />
          <div className="p-2.5 rounded-2xl bg-neutral-950/95 border border-[#FE8D00] shadow-[0_0_25px_rgba(254,141,0,0.8)] text-[#FE8D00]">
            <Plane className="w-6 h-6 fill-[#FE8D00]/20 drop-shadow-[0_0_10px_#FE8D00]" />
          </div>
        </motion.div>
      </motion.div>

      {/* --- 2. AERO 2: Secondary Floating Flight / Avião em Altitude (Este -> Oeste) --- */}
      <motion.div
        initial={{ x: '115%', y: '40%', opacity: 0 }}
        animate={{
          x: ['115%', '-20%'],
          y: ['40%', '35%', '38%', '32%'],
          opacity: [0, 0.75, 0.9, 0.75, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'linear',
          delay: 11,
        }}
        className="absolute top-0 left-0 flex items-center gap-3 z-0"
      >
        <motion.div
          animate={{
            y: [0, 7, -3, 6, 0],
            rotate: [-166, -170, -162, -166],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative flex items-center justify-center"
        >
          <span className="absolute -inset-2 rounded-full border border-sky-400 animate-ping opacity-35" />
          <div className="p-2 rounded-2xl bg-neutral-950/95 border border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.7)] text-sky-400">
            <Plane className="w-5 h-5 fill-sky-400/20" />
          </div>
        </motion.div>

        {/* Trail */}
        <div className="w-48 sm:w-80 h-[2px] bg-gradient-to-l from-transparent via-sky-400/40 to-sky-400 rounded-full shadow-[0_0_10px_#38bdf8]" />
      </motion.div>

      {/* --- 3. NAVIO 1: Navio Cargueiro a Flutuar no Mar (Oeste -> Este) --- */}
      <motion.div
        initial={{ x: '-20%', y: '74%', opacity: 0 }}
        animate={{
          x: ['-20%', '115%'],
          opacity: [0, 0.85, 1, 0.85, 0],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: 'linear',
          delay: 1.5,
        }}
        className="absolute top-0 left-0 z-0 flex items-end"
      >
        <motion.div
          animate={{
            y: [0, -10, 3, -8, 0],
            rotate: [0, 2, -1.8, 1.4, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative flex items-end"
        >
          {/* Water Ripple Waves Under Hull */}
          <motion.div
            animate={{ scaleX: [1, 1.35, 1], opacity: [0.35, 0.8, 0.35] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-2 -left-8 -right-8 h-4 bg-gradient-to-r from-transparent via-sky-400/35 to-transparent rounded-full blur-[2px]"
          />

          {/* Navio Porta-Contentores */}
          <svg
            className="w-32 sm:w-44 h-16 sm:h-20 text-neutral-800 drop-shadow-[0_0_25px_rgba(254,141,0,0.5)]"
            viewBox="0 0 180 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Casco Principal do Navio */}
            <path
              d="M 12 68 L 155 68 C 168 68, 175 60, 178 48 L 165 48 L 155 48 L 5 48 L 9 60 Z"
              fill="#121212"
              stroke="#FE8D00"
              strokeWidth="2"
            />
            <line x1="8" y1="56" x2="170" y2="56" stroke="#FE8D00" strokeWidth="1" strokeDasharray="4 2" />

            {/* Linha de Água / Waterline */}
            <path
              d="M 8 68 Q 60 73 110 68 T 180 68"
              stroke="#38bdf8"
              strokeWidth="2.5"
              opacity="0.85"
            />

            {/* Contentores de Carga (Container Stacks) */}
            <rect x="20" y="28" width="18" height="19" rx="2" fill="#FE8D00" stroke="#000" strokeWidth="1" />
            <rect x="40" y="28" width="18" height="19" rx="2" fill="#0284c7" stroke="#000" strokeWidth="1" />
            <rect x="60" y="28" width="18" height="19" rx="2" fill="#dc2626" stroke="#000" strokeWidth="1" />
            <rect x="80" y="28" width="18" height="19" rx="2" fill="#16a34a" stroke="#000" strokeWidth="1" />
            <rect x="100" y="28" width="18" height="19" rx="2" fill="#FE8D00" stroke="#000" strokeWidth="1" />
            
            <rect x="30" y="11" width="18" height="16" rx="2" fill="#059669" stroke="#000" strokeWidth="1" />
            <rect x="50" y="11" width="18" height="16" rx="2" fill="#ea580c" stroke="#000" strokeWidth="1" />
            <rect x="70" y="11" width="18" height="16" rx="2" fill="#38bdf8" stroke="#000" strokeWidth="1" />
            <rect x="90" y="11" width="18" height="16" rx="2" fill="#f59e0b" stroke="#000" strokeWidth="1" />

            {/* Ponte de Comando */}
            <rect x="124" y="16" width="26" height="32" rx="3" fill="#1f1f1f" stroke="#FE8D00" strokeWidth="1.5" />
            <rect x="128" y="21" width="18" height="5" rx="1" fill="#FE8D00" opacity="0.9" />
            
            {/* Mastro & Radar */}
            <line x1="137" y1="16" x2="137" y2="5" stroke="#FE8D00" strokeWidth="2" />
            <circle cx="137" cy="4" r="3" fill="#FE8D00" />
            <line x1="132" y1="7" x2="142" y2="7" stroke="#FE8D00" strokeWidth="1.5" />

            {/* Mastro de Proa */}
            <line x1="162" y1="48" x2="162" y2="30" stroke="#d4d4d4" strokeWidth="1.5" />
            <circle cx="162" cy="29" r="2" fill="#FE8D00" />
          </svg>

          {/* Luzes de Navegação */}
          <span className="absolute top-1.5 right-3 w-2.5 h-2.5 rounded-full bg-[#FE8D00] shadow-[0_0_12px_#FE8D00] animate-ping" />
          <span className="absolute top-1.5 right-3 w-2.5 h-2.5 rounded-full bg-white" />
        </motion.div>

        {/* Esteira no Mar / Ocean Wake */}
        <div className="w-56 sm:w-96 h-[4px] bg-gradient-to-r from-transparent via-sky-400/30 to-sky-400 rounded-full shadow-[0_0_12px_#38bdf8] -mb-1 mr-4" />
      </motion.div>

      {/* --- 4. NAVIO 2: Navio Costeiro a Flutuar no Mar (Este -> Oeste) --- */}
      <motion.div
        initial={{ x: '115%', y: '82%', opacity: 0 }}
        animate={{
          x: ['115%', '-25%'],
          opacity: [0, 0.7, 0.85, 0.7, 0],
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: 'linear',
          delay: 16,
        }}
        className="absolute top-0 left-0 z-0 flex items-end flex-row-reverse"
      >
        <motion.div
          animate={{
            y: [0, -7, 4, -6, 0],
            rotate: [0, -2, 1.6, -1.2, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative flex items-end"
        >
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
        </motion.div>

        <div className="w-40 sm:w-72 h-[3px] bg-gradient-to-l from-transparent via-sky-400/30 to-sky-400 rounded-full blur-[0.5px] -mb-1 ml-3" />
      </motion.div>
    </div>
  );
};

