import React from 'react';
import { motion } from 'motion/react';
import {
  Award,
  ShieldCheck,
  UserCheck,
  Clock,
  Handshake,
  Lightbulb,
  HeartHandshake,
  Users,
  Sparkles,
  ArrowRight,
  Compass,
  CheckCircle2,
  Building,
  Target,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CORE_VALUES_DATA, COMPANY_INFO } from '../data/companyData';
import { NavPage } from '../types';

interface AboutPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuote }) => {
  const { t } = useLanguage();

  const getCoreValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return Award;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'UserCheck':
        return UserCheck;
      case 'Clock':
        return Clock;
      case 'Handshake':
        return Handshake;
      case 'Lightbulb':
        return Lightbulb;
      case 'HeartHandshake':
        return HeartHandshake;
      case 'Users':
        return Users;
      default:
        return Sparkles;
    }
  };

  const steps = [
    { num: '01', titleKey: 'step1Title', descKey: 'step1Desc' },
    { num: '02', titleKey: 'step2Title', descKey: 'step2Desc' },
    { num: '03', titleKey: 'step3Title', descKey: 'step3Desc' },
    { num: '04', titleKey: 'step4Title', descKey: 'step4Desc' },
  ];

  return (
    <div className="pt-28 sm:pt-32 lg:pt-36 pb-28 md:pb-20 bg-slate-50 text-slate-900 min-h-screen">
      {/* Header Banner with Rich Image & Overlay */}
      <section className="relative py-16 sm:py-24 px-5 sm:px-8 lg:px-12 bg-slate-900 text-white border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
            alt="About Ashled Banner"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/60" />
        </div>

        <div className="max-w-7xl mx-auto space-y-4 sm:space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FE8D00]/20 border border-[#FE8D00] text-[#FE8D00] text-xs font-black uppercase tracking-wider">
            <Building className="w-4 h-4" />
            <span>{t('navAbout', 'Sobre a Nossa Empresa')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            {t('aboutTitle', 'Quem Somos & A Nossa Missão')}
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            {t('tagline', 'Connecting Needs. Creating Solutions. Delivering Quality.')}
          </p>
        </div>
      </section>

      {/* Main Narrative & Values */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-20 sm:space-y-28">
        {/* Two-Column Story with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b45309]">
              {t('corporateIdentityBadge', 'Identidade Corporativa')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              {t('aboutAngolanGlobalHeading', 'Uma Empresa Angolana com Padrão Executivo Global')}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t('aboutP1')}
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t('aboutP2')}
            </p>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1.5">
              <div className="text-xs font-mono font-bold text-[#b45309] tracking-wider">
                {t('officialCommercialReg', 'REGISTO COMERCIAL OFICIAL')}
              </div>
              <div className="text-xs sm:text-sm text-slate-700">
                {COMPANY_INFO.legalName} • {t('nifLabel', 'NIF')}: <strong className="text-slate-900 font-mono tracking-wider">{COMPANY_INFO.nif}</strong>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
              alt="Ashled Team and Partners"
              referrerPolicy="no-referrer"
              className="w-full h-[380px] sm:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs sm:text-sm text-slate-200 shadow-xl leading-relaxed">
              {t('aboutQuote', '“Acreditamos que a qualidade está na forma como comunicamos, coordenamos e entregamos cada projeto.”')}
            </div>
          </div>
        </div>

        {/* 4-Step Philosophy */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b45309]">
              {t('ourMethodBadge', 'O Nosso Método')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              {t('philTitle', 'A Nossa Filosofia em 4 Passos')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#FE8D00] transition-all space-y-4 shadow-sm hover:shadow-xl"
              >
                <span className="text-xs font-black font-mono px-3 py-1 rounded-full bg-[#FE8D00] text-black inline-block">
                  {step.num}
                </span>
                <h4 className="text-lg font-black text-slate-900">{t(step.titleKey)}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{t(step.descKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values 8 Grid */}
        <div className="space-y-10 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b45309]">
              {t('culturePrinciplesBadge', 'Cultura e Princípios')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              {t('valTitle', 'Os Nossos Valores Fundamentais')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES_DATA.map((val) => {
              const Icon = getCoreValueIcon(val.icon);
              return (
                <div
                  key={val.id}
                  className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#FE8D00] transition-all space-y-3 group shadow-sm hover:shadow-xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-[#FE8D00] flex items-center justify-center group-hover:bg-[#FE8D00] group-hover:text-black transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-black text-slate-900">{t(val.titleKey)}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{t(val.descKey)}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            {t('readyToTransformNeed', 'Pronto para transformar a sua necessidade numa solução prática?')}
          </h3>
          <button
            onClick={onOpenQuote}
            className="px-8 py-4 rounded-xl bg-[#FE8D00] hover:bg-[#ff9e24] text-black font-black text-xs uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(254,141,0,0.4)] cursor-pointer mx-auto"
          >
            {t('talkToAshledTeam', 'Falar com a Equipa Ashled')}
          </button>
        </div>
      </section>
    </div>
  );
};
