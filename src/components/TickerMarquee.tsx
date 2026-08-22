import React from 'react';
import { TICKER_ITEMS } from '../data/companyData';
import { Sparkles } from 'lucide-react';

export const TickerMarquee: React.FC = () => {
  // Duplicate array to ensure seamless infinite loop
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="w-full overflow-hidden bg-white/95 border-y border-slate-200 py-3 relative z-20 backdrop-blur-md shadow-xs">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700"
          >
            <span className="text-slate-900 hover:text-[#FE8D00] transition-colors whitespace-nowrap">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#FE8D00] shadow-[0_0_8px_#FE8D00] inline-block shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
