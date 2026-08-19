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
    <div className="pt-24 pb-20 bg-black text-white min-h-screen">
      {/* Header Banner with Rich Image & Overlay */}
      <section className="relative py-20 px-4 sm:px-8 lg:px-12 bg-neutral-950 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
            alt="About Ashled Banner"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
        </div>

        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FE8D00]/20 border border-[#FE8D00] text-[#FE8D00] text-xs font-black uppercase tracking-wider">
            <Building className="w-3.5 h-3.5" />
            <span>{t('navAbout', 'Sobre a Nossa Empresa')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {t('aboutTitle', 'Quem Somos & A Nossa Missão')}
          </h1>
          <p className="text-base sm:text-xl text-neutral-300 max-w-3xl leading-relaxed">
            {t('tagline', 'Connecting Needs. Creating Solutions. Delivering Quality.')}
          </p>
        </div>
      </section>

      {/* Main Narrative & Values */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-20">
        {/* Two-Column Story with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FE8D00]">
              Identidade Corporativa
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Uma Empresa Angolana com Padrão Executivo Global
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {t('aboutP1')}
            </p>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {t('aboutP2')}
            </p>

            <div className="p-4 rounded-2xl bg-neutral-900 border border-[#FE8D00]/30 space-y-1">
              <div className="text-xs font-mono font-bold text-[#FE8D00]">
                REGISTO COMERCIAL OFICIAL
              </div>
              <div className="text-xs text-neutral-300">
                {COMPANY_INFO.legalName} • NIF: <strong className="text-white font-mono">{COMPANY_INFO.nif}</strong>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-neutral-800 shadow-[0_0_30px_rgba(254,141,0,0.15)] relative">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
              alt="Ashled Team and Partners"
              referrerPolicy="no-referrer"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-neutral-700 text-xs text-neutral-200">
              &ldquo;Acreditamos que a qualidade está na forma como comunicamos, coordenamos e entregamos cada projeto.&rdquo;
            </div>
          </div>
        </div>

        {/* 4-Step Philosophy */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FE8D00]">
              O Nosso Método
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              {t('philTitle', 'A Nossa Filosofia em 4 Passos')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-[#FE8D00] transition-all space-y-4 hover:shadow-[0_0_20px_rgba(254,141,0,0.2)]"
              >
                <span className="text-xs font-black font-mono px-3 py-1 rounded-full bg-[#FE8D00] text-black inline-block">
                  {step.num}
                </span>
                <h4 className="text-lg font-black text-white">{t(step.titleKey)}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{t(step.descKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values 8 Grid */}
        <div className="space-y-10 pt-12 border-t border-neutral-900">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FE8D00]">
              Cultura e Princípios
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              {t('valTitle', 'Os Nossos Valores Fundamentais')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES_DATA.map((val) => {
              const Icon = getCoreValueIcon(val.icon);
              return (
                <div
                  key={val.id}
                  className="p-6 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-[#FE8D00] transition-all space-y-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-black border border-[#FE8D00]/40 text-[#FE8D00] flex items-center justify-center group-hover:bg-[#FE8D00] group-hover:text-black transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-black text-white">{t(val.titleKey)}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">{t(val.descKey)}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-neutral-900 via-black to-neutral-900 border border-[#FE8D00]/40 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Pronto para transformar a sua necessidade numa solução prática?
          </h3>
          <button
            onClick={onOpenQuote}
            className="px-8 py-4 rounded-xl bg-[#FE8D00] hover:bg-[#ff9e24] text-black font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(254,141,0,0.4)] cursor-pointer mx-auto"
          >
            Falar com a Equipa Ashled
          </button>
        </div>
      </section>
    </div>
  );
};
