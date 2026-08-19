import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Globe,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  MapPin,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GLOBAL_HUBS_DATA, COMPANY_INFO } from '../data/companyData';
import { NetworkCanvas } from '../components/NetworkCanvas';
import { NavPage } from '../types';

interface GlobalNetworkPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenQuote: (serviceId?: string) => void;
}

export const GlobalNetworkPage: React.FC<GlobalNetworkPageProps> = ({ onNavigate, onOpenQuote }) => {
  const { t } = useLanguage();
  const [activeHub, setActiveHub] = useState<string>('asia');

  const connectionPillars = [
    'Parcerias Empresariais Internacionais (International Business Partnerships)',
    'Oportunidades de Importação e Exportação (Import & Export Opportunities)',
    'Relações com Fornecedores e Prestadores Globais (Supplier Relationships)',
    'Colaborações Estratégicas Bilaterais (Strategic Collaborations)',
    'Projectos Conjuntos & Joint-Ventures (Joint Projects)',
    'Oportunidades de Investimento e Negócios (Investment Opportunities)',
    'Sourcing e Compras Internacionais (International Sourcing)',
    'Serviços Profissionais e Comerciais (Commercial Services)',
    'Desenvolvimento de Projectos Transfronteiriços (Cross-Border Projects)',
  ];

  const selectedHubObj = GLOBAL_HUBS_DATA.find((h) => h.id === activeHub) || GLOBAL_HUBS_DATA[0];

  return (
    <div className="pt-24 pb-20 bg-black text-white min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 px-4 sm:px-8 lg:px-12 bg-neutral-950 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80"
            alt="Global Banner"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
        </div>

        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FE8D00]/20 border border-[#FE8D00] text-[#FE8D00] text-xs font-black uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5" />
            <span>{t('navGlobal', 'Rede Global & Conexões')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {t('globalTitle', 'Conexões Empresariais Globais & Parcerias')}
          </h1>
          <p className="text-base sm:text-xl text-neutral-300 max-w-3xl leading-relaxed">
            {t('globalSubtitle', 'Conectando Angola ao Mundo e o Mundo a Angola.')}
          </p>
        </div>
      </section>

      {/* Main Global Narrative */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
              <p>{t('globalDesc1')}</p>
              <p className="text-[#FE8D00] font-bold italic text-lg sm:text-xl">
                &ldquo;{t('globalDesc2')}&rdquo;
              </p>
              <p>
                Nosso papel é identificar parceiros potenciais, introduzir as partes adequadas, facilitar a comunicação e coordenar oportunidades sólidas de colaboração com segurança jurídica e operacional.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900 border border-[#FE8D00]/40 text-xs text-neutral-300 space-y-1">
              <div className="font-bold uppercase text-[11px] tracking-wider text-[#FE8D00]">
                Ponte Estratégica Angola ↔ China & Global
              </div>
              <p>
                Conhecimento local profundo somado a conexões internacionais de primeiro nível.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl space-y-6">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FE8D00]" />
              <span>9 Áreas de Conexão Internacional</span>
            </h3>

            <div className="space-y-2 text-xs text-neutral-300">
              {connectionPillars.map((p, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FE8D00] shrink-0 mt-0.5" />
                  <span className="leading-tight">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Hubs Interactive Browser */}
        <div className="space-y-8 pt-8 border-t border-neutral-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FE8D00]">
                Hubs & Corredores Operacionais
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">Nossa Presença Estratégica</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {GLOBAL_HUBS_DATA.map((hub) => (
                <button
                  key={hub.id}
                  onClick={() => setActiveHub(hub.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeHub === hub.id
                      ? 'bg-[#FE8D00] text-black shadow-[0_0_15px_rgba(254,141,0,0.4)]'
                      : 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:bg-neutral-800'
                  }`}
                >
                  {hub.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Hub Spotlight Card with Photography */}
          <motion.div
            key={selectedHubObj.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl bg-neutral-900 border border-[#FE8D00]/50 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-5 h-72 lg:h-full relative overflow-hidden bg-black">
              <img
                src={selectedHubObj.image}
                alt={selectedHubObj.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
            </div>

            <div className="lg:col-span-7 p-8 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FE8D00]/20 border border-[#FE8D00] text-[#FE8D00] text-xs font-mono font-bold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedHubObj.city}, {selectedHubObj.country}</span>
                </div>
                <h4 className="text-3xl font-black text-white">{selectedHubObj.name}</h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{selectedHubObj.role}</p>
              </div>

              <div className="space-y-3 bg-black/70 p-5 rounded-2xl border border-neutral-800">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#FE8D00]">
                  Actuação Principal Neste Hub:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                  {selectedHubObj.focus.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FE8D00] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenQuote('sourcing')}
                  className="px-6 py-3 rounded-xl bg-[#FE8D00] hover:bg-[#ff9e24] text-black font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(254,141,0,0.3)] flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-black" />
                  <span>Conectar com Este Corredor</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
