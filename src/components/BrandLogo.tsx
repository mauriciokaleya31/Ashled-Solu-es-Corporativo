import React, { useState } from 'react';
import { COMPANY_LOGO_URL } from '../data/companyData';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  lightMode?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  className = '',
  lightMode = true,
}) => {
  const [imageError, setImageError] = useState(false);

  const imgHeightClass = size === 'sm' ? 'h-10' : size === 'lg' ? 'h-16' : 'h-12';

  return (
    <div className={`flex items-center select-none ${className}`}>
      {!imageError ? (
        <img
          src={COMPANY_LOGO_URL}
          alt="ASHLED SOLUÇÕES"
          className={`${imgHeightClass} w-auto max-w-[220px] object-contain transition-transform duration-300 hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.12)]`}
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="flex items-center gap-2">
          <div
            className={`${imgHeightClass} aspect-square rounded-xl bg-gradient-to-br from-[#FE8D00] to-[#D97706] flex items-center justify-center shadow-md text-black font-black tracking-tighter`}
          >
            <span className="text-xl font-black text-black">A</span>
          </div>
          <div className="flex items-center gap-1.5 font-black text-lg">
            <span className={lightMode ? 'text-slate-900' : 'text-white'}>ASHLED</span>
            <span className="text-black bg-[#FE8D00] px-1.5 py-0.5 rounded text-xs">SOLUÇÕES</span>
          </div>
        </div>
      )}
    </div>
  );
};
