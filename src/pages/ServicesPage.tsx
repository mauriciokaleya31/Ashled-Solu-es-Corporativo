import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  Globe,
  PlaneTakeoff,
  Layers,
  Search,
  Target,
  Compass,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SERVICES_DATA, COMPANY_INFO } from '../data/companyData';
import { ScopeEstimator } from '../components/ScopeEstimator';
import { NavPage } from '../types';

interface ServicesPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenQuote: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenQuote }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return Briefcase;
      case 'Network':
        return Globe;
      case 'PlaneTakeoff':
        return PlaneTakeoff;
      case 'Layers':
        return Layers;
      case 'Search':
        return Search;
      case 'Target':
        return Target;
      default:
        return Compass;
    }
  };

  const filteredServices =
    activeTab === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.id === activeTab || (s.category && s.category.toLowerCase().includes(activeTab.toLowerCase())));

  return (
    <div className="pt-24 pb-20 bg-slate-50 text-slate-900 min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 px-4 sm:px-8 lg:px-12 bg-slate-900 text-white border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80"
            alt="Services Banner"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/60" />
        </div>

        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FE8D00]/20 border border-[#FE8D00] text-[#FE8D00] text-xs font-black uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>{t('navServices', 'Nossos Serviços')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {t('servicesTitle', 'O Que Fazemos & Pilares de Actuação')}
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            {t('servicesSubtitle')}
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#FE8D00] text-black shadow-sm font-black'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            Todos os 6 Pilares
          </button>

          {SERVICES_DATA.map((srv) => (
            <button
              key={srv.id}
              onClick={() => setActiveTab(srv.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === srv.id
                  ? 'bg-[#FE8D00] text-black shadow-sm font-black'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {t(srv.titleKey)}
            </button>
          ))}
        </div>
      </section>

      {/* Services Detailed List with Large Photography */}
      <section className="py-8 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((srv) => {
            const Icon = getServiceIcon(srv.icon);
            return (
              <motion.div
                key={srv.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-white border border-slate-200 hover:border-[#FE8D00] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl group shadow-sm"
              >
                {/* Image Header with Badge */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={srv.image}
                    alt={t(srv.titleKey)}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 text-[#FE8D00] shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-[#FE8D00] text-black text-xs font-black uppercase font-mono shadow-md">
                    {srv.scopeHighlight}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#FE8D00] transition-colors">
                      {t(srv.titleKey)}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {t(srv.descKey)}
                    </p>

                    {/* Deliverables List */}
                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-[#b45309]">
                        Âmbito de Actuação & Entregas Chave:
                      </h5>
                      <div className="grid grid-cols-1 gap-2 text-xs text-slate-700">
                        {srv.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#FE8D00] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-slate-500 font-mono">
                      Padrão de Qualidade Ashled
                    </span>
                    <button
                      onClick={() => onOpenQuote(srv.id)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#FE8D00] hover:bg-[#ff9e24] text-black font-black text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-black" />
                      <span>Solicitar Este Serviço</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Embedded Interactive Scope Simulator */}
        <div className="pt-12">
          <ScopeEstimator onStartProject={(srvId) => onOpenQuote(srvId)} />
        </div>
      </section>
    </div>
  );
};
