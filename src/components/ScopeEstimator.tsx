import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Sliders,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SERVICES_DATA } from '../data/companyData';

interface ScopeEstimatorProps {
  onStartProject: (serviceId: string) => void;
}

export const ScopeEstimator: React.FC<ScopeEstimatorProps> = ({ onStartProject }) => {
  const { t } = useLanguage();
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);
  const [urgency, setUrgency] = useState<'standard' | 'priority' | 'urgent'>('standard');
  const [geoScope, setGeoScope] = useState<'local' | 'regional' | 'global'>('local');

  const currentService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const getUrgencyBadge = () => {
    switch (urgency) {
      case 'urgent':
        return { label: t('urgentBadge', 'Execução Imediata / Fast-Track'), color: 'text-black bg-[#FE8D00]' };
      case 'priority':
        return { label: t('priorityBadge', 'Prioridade Alta (15-30 dias)'), color: 'text-white bg-neutral-800 border border-[#FE8D00]/50' };
      default:
        return { label: t('standardBadge', 'Cronograma Padrão'), color: 'text-neutral-300 bg-neutral-800' };
    }
  };

  const getGeoBadge = () => {
    switch (geoScope) {
      case 'global':
        return t('geoGlobalOption', 'Internacional (China / Europa / Américas)');
      case 'regional':
        return t('geoRegionalOption', 'Regional (África Austral / SADC)');
      default:
        return t('geoLocalOption', 'Nacional (Angola / Luanda)');
    }
  };

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FE8D00]/20 border border-[#FE8D00] text-[#FE8D00] text-xs font-black uppercase tracking-wider">
            <Sliders className="w-3.5 h-3.5" />
            <span>{t('scopeEstimatorBadge', 'Simulador de Âmbito & Estruturação')}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {t('scopeEstimatorTitle', 'Configure a Sua Necessidade de Serviço')}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl">
            {t('scopeEstimatorSubtitle', 'Selecione o serviço pretendido, abrangência geográfica e nível de urgência para visualizar o fluxo de coordenação Ashled.')}
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-black border border-[#FE8D00]/40 text-[#FE8D00] shrink-0">
          <Layers className="w-6 h-6" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Select Service */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
              {t('stepSelectService', '1. Selecione o Pilar de Atuação:')}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SERVICES_DATA.map((srv) => (
                <button
                  key={srv.id}
                  onClick={() => setSelectedServiceId(srv.id)}
                  className={`p-3.5 rounded-2xl text-left transition-all border cursor-pointer ${
                    selectedServiceId === srv.id
                      ? 'bg-[#FE8D00] text-black border-[#FE8D00] font-black shadow-[0_0_15px_rgba(254,141,0,0.3)]'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:bg-neutral-800'
                  }`}
                >
                  <div className="text-xs font-bold">{t(srv.titleKey)}</div>
                  <div className={`text-[11px] mt-1 line-clamp-1 ${selectedServiceId === srv.id ? 'text-black/80 font-semibold' : 'text-neutral-500'}`}>
                    {t(srv.scopeHighlightKey || '', srv.scopeHighlight)}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Geographic Scope */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
              {t('stepSelectGeo', '2. Âmbito Geográfico da Operação:')}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'local', label: t('geoLocal', 'Local (Angola)') },
                { id: 'regional', label: t('geoRegional', 'Regional (África)') },
                { id: 'global', label: t('geoGlobal', 'Global (Internacional)') },
              ].map((g) => (
                <button
                  key={g.id}
                  onClick={() => setGeoScope(g.id as any)}
                  className={`p-3 rounded-xl text-center text-xs font-bold transition-all border cursor-pointer ${
                    geoScope === g.id
                      ? 'bg-[#FE8D00] text-black border-[#FE8D00] shadow-[0_0_10px_rgba(254,141,0,0.3)]'
                      : 'bg-neutral-950 text-neutral-300 border-neutral-800 hover:bg-neutral-800'
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Timeline & Urgency */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
              {t('stepSelectUrgency', '3. Nível de Prioridade & Cronograma:')}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'standard', label: t('urgencyStandard', 'Planeado / Padrão') },
                { id: 'priority', label: t('urgencyPriority', 'Prioritário (15-30 d)') },
                { id: 'urgent', label: t('urgencyUrgent', 'Urgente (< 15 dias)') },
              ].map((u) => (
                <button
                  key={u.id}
                  onClick={() => setUrgency(u.id as any)}
                  className={`p-3 rounded-xl text-center text-xs font-bold transition-all border cursor-pointer ${
                    urgency === u.id
                      ? 'bg-[#FE8D00] text-black border-[#FE8D00] shadow-[0_0_10px_rgba(254,141,0,0.3)]'
                      : 'bg-neutral-950 text-neutral-300 border-neutral-800 hover:bg-neutral-800'
                  }`}
                >
                  {u.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output: Execution Strategy Summary Card (5 cols) */}
        <motion.div
          key={`${selectedServiceId}-${geoScope}-${urgency}`}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-5 p-6 rounded-2xl bg-black border border-neutral-800 shadow-2xl space-y-5"
        >
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FE8D00]">
              {t('configSummaryTitle', 'Resumo da Configuração')}
            </span>
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${getUrgencyBadge().color}`}>
              {getUrgencyBadge().label}
            </span>
          </div>

          <div className="space-y-3">
            <div>
              <div className="text-[10px] text-neutral-500 uppercase font-mono">{t('selectedServiceLabel', 'Serviço Selecionado')}</div>
              <h4 className="text-lg font-black text-white">{t(currentService.titleKey)}</h4>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-neutral-500 block text-[10px] uppercase font-mono">{t('coverageLabel', 'Cobertura')}</span>
                <span className="text-white font-semibold">{getGeoBadge()}</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[10px] uppercase font-mono">{t('warrantyLabel', 'Garantia')}</span>
                <span className="text-[#FE8D00] font-semibold">{t('coordinatedGuarantee', '100% Coordenado')}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#FE8D00] block">
                {t('keyDeliverablesLabel', 'Entregas Chave Previstas:')}
              </span>
              <div className="space-y-1 text-xs text-neutral-300">
                {currentService.deliverables.slice(0, 3).map((d, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FE8D00] shrink-0" />
                    <span className="truncate">{currentService.deliverableKeys?.[i] ? t(currentService.deliverableKeys[i], d) : d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => onStartProject(currentService.id)}
            className="w-full py-3.5 rounded-xl bg-[#FE8D00] hover:bg-[#ff9e24] text-black font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(254,141,0,0.3)] flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>{t('requestQuoteForConfig', 'Solicitar Cotação para Esta Configuração')}</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};
