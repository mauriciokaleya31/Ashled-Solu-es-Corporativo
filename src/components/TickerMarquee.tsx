import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TICKER_ITEMS } from '../data/companyData';

export const TickerMarquee: React.FC = () => {
  const { t } = useLanguage();

  const tickerKeys = [
    { key: 'tickerItem1', fallback: TICKER_ITEMS[0] },
    { key: 'tickerItem2', fallback: TICKER_ITEMS[1] },
    { key: 'tickerItem3', fallback: TICKER_ITEMS[2] },
    { key: 'tickerItem4', fallback: TICKER_ITEMS[3] },
    { key: 'tickerItem5', fallback: TICKER_ITEMS[4] },
    { key: 'tickerItem6', fallback: TICKER_ITEMS[5] },
    { key: 'tickerItem7', fallback: TICKER_ITEMS[6] },
    { key: 'tickerItem8', fallback: TICKER_ITEMS[7] },
    { key: 'tickerItem9', fallback: TICKER_ITEMS[8] },
    { key: 'tickerItem10', fallback: TICKER_ITEMS[9] },
  ];

  // Triplicate array for smooth continuous marquee
  const items = [...tickerKeys, ...tickerKeys, ...tickerKeys];

  return (
    <div className="w-full overflow-hidden bg-white/95 border-y border-slate-200 py-3 relative z-20 backdrop-blur-md shadow-xs">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700"
          >
            <span className="text-slate-900 hover:text-[#FE8D00] transition-colors whitespace-nowrap">
              {t(item.key, item.fallback)}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#FE8D00] shadow-[0_0_8px_#FE8D00] inline-block shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
