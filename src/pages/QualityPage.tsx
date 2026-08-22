import React from 'react';
import { motion } from 'motion/react';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Heart,
  Clock,
  Zap,
  Globe,
  Compass,
  Sliders,
  Briefcase,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { WHY_CHOOSE_DATA, COMPANY_INFO } from '../data/companyData';
import { NavPage } from '../types';

interface QualityPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenQuote: () => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({ onNavigate, onOpenQuote }) => {
  const { t } = useLanguage();

  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return Sparkles;
      case 'CheckCircle':
        return CheckCircle2;
      case 'Briefcase':
        return Briefcase;
      case 'Compass':
        return Compass;
      case 'Globe':
        return Globe;
      case 'Zap':
        return Zap;
      case 'Sliders':
        return Sliders;
      case 'Heart':
        return Heart;
      default:
        return Award;
    }
  };

  const qualityPillars = [
    'qualityPillar1',
    'qualityPillar2',
    'qualityPillar3',
    'qualityPillar4',
    'qualityPillar5',
    'qualityPillar6',
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 text-slate-900 min-h-screen">
      {/* Header Banner with Rich Image */}
      <section className="relative py-20 px-4 sm:px-8 lg:px-12 bg-slate-900 text-white border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
            alt="Quality Banner"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/60" />
        </div>

        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FE8D00]/20 border border-[#FE8D00] text-[#FE8D00] text-xs font-black uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>{t('navQuality', 'Compromisso de Qualidade')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {t('qualityLead', 'A Qualidade está no Coração de Tudo o Que Fazemos')}
          </h1>
          <p className="text-base sm:text-xl text-[#FE8D00] font-bold italic max-w-3xl">
            {t('qualityQuote', '"Para nós, a qualidade não é um serviço extra. A qualidade é o padrão."')}
          </p>
        </div>
      </section>

      {/* Main Pillars of Quality */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualityPillars.map((pKey, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#FE8D00] space-y-4 transition-all shadow-sm hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#FE8D00] font-black font-mono text-lg">
                0{idx + 1}
              </div>
              <h4 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                {t(pKey)}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Ashled (8 Reasons) */}
        <div className="space-y-10 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b45309]">
              Diferenciais Competitivos
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              {t('whyChooseTitle', 'Porquê Escolher a Ashled?')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_DATA.map((item) => {
              const Icon = getWhyIcon(item.icon);
              return (
                <div
                  key={item.id}
                  className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#FE8D00] space-y-3 transition-all group shadow-sm hover:shadow-xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-[#FE8D00] flex items-center justify-center group-hover:bg-[#FE8D00] group-hover:text-black transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-black text-slate-900">{t(item.titleKey)}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{t(item.descKey)}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* The Ashled Promise Card */}
        <div className="p-8 sm:p-14 rounded-3xl bg-slate-900 text-white border border-slate-800 text-center space-y-6 max-w-4xl mx-auto shadow-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FE8D00] text-black text-xs font-black uppercase tracking-wider">
            {t('promiseTitle')}
          </span>
          <h3 className="text-2xl sm:text-4xl font-black text-white">
            {t('promiseHighlight')}
          </h3>
          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {t('promiseText')}
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 rounded-xl bg-[#FE8D00] hover:bg-[#ff9e24] text-black font-black text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 mx-auto cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Experimente o Padrão de Qualidade Ashled</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
