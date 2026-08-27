import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Globe,
  ArrowRight,
  Sparkles,
  Layers,
  HeartHandshake,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO, SERVICES_DATA, GLOBAL_HUBS_DATA } from '../data/companyData';
import { NavPage } from '../types';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenQuote: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  const { t, language, setLanguage, languages } = useLanguage();

  return (
    <footer className="bg-black text-white border-t border-neutral-800">
      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Col 1: Brand & Positioning (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="inline-block p-2 bg-white rounded-xl shadow-sm">
              <BrandLogo size="md" lightMode={true} />
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {t('whoWeAreLead', 'Ashled Soluções Comércio e Prestação de Serviços, Lda é uma empresa focada em soluções práticas, orientação profissional e coordenação de projectos.')}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900 text-xs text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-[#FE8D00] animate-pulse"></span>
                <span>{COMPANY_INFO.country} • {t('globalConnections', 'Conexões Globais')}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t('navTitle', 'Navegação')}
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#FE8D00] transition-colors cursor-pointer"
                >
                  {t('navHome', 'Início')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#FE8D00] transition-colors cursor-pointer"
                >
                  {t('navAbout', 'Sobre Nós & Filosofia')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#FE8D00] transition-colors cursor-pointer"
                >
                  {t('navServices', 'Todos os Serviços')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-[#FE8D00] transition-colors cursor-pointer"
                >
                  {t('navProjects', 'Projectos & Impacto Comunitário')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('global')}
                  className="hover:text-[#FE8D00] transition-colors cursor-pointer"
                >
                  {t('navGlobal', 'Rede Global & Hubs')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quality')}
                  className="hover:text-[#FE8D00] transition-colors cursor-pointer"
                >
                  {t('navQuality', 'Compromisso de Qualidade')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#FE8D00] transition-colors cursor-pointer"
                >
                  {t('navContact', 'Contactos & Localização')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Fast Access (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t('servicesTitle', 'Soluções')}
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      onOpenQuote(srv.id);
                    }}
                    className="hover:text-[#FE8D00] transition-colors text-left line-clamp-1 cursor-pointer"
                  >
                    {t(srv.titleKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Language & Action (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t('language', 'Idioma')}
            </h4>
            <div className="grid grid-cols-2 gap-1.5">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={`px-2 py-1.5 rounded-lg text-xs font-medium text-left flex items-center gap-1.5 transition-colors cursor-pointer ${
                    language === l.code
                      ? 'bg-[#FE8D00] text-black font-bold'
                      : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800'
                  }`}
                >
                  <span>{l.flag}</span>
                  <span className="uppercase text-[10px]">{l.code}</span>
                </button>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuote()}
                className="w-full py-2.5 px-3 rounded-xl bg-[#FE8D00] hover:bg-[#ff9e24] text-black font-black text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(254,141,0,0.3)] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>{t('requestQuote', 'Cotação Rápida')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-neutral-800 text-xs text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.legalName}. {t('allRightsReserved', 'Todos os direitos reservados.')}</p>
          <div className="flex items-center gap-4 text-[11px] text-neutral-400">
            <span>{t('luandaAngola', 'Luanda, Angola')}</span>
            <span>•</span>
            <span className="text-[#FE8D00] font-mono font-bold">{t('nifLabel', 'NIF')}: {COMPANY_INFO.nif}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
