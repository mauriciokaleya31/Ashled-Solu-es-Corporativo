import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  Globe,
  PlaneTakeoff,
  Layers,
  Search,
  Target,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building,
  TrendingUp,
  Clock,
  Compass,
  Award,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  SERVICES_DATA,
  COMPANY_INFO,
  CORE_VALUES_DATA,
  GLOBAL_HUBS_DATA,
} from '../data/companyData';
import { HeroSlider } from '../components/HeroSlider';
import { TickerMarquee } from '../components/TickerMarquee';
import { NetworkCanvas } from '../components/NetworkCanvas';
import { ScopeEstimator } from '../components/ScopeEstimator';
import { FloatingLogisticsBackground } from '../components/FloatingLogisticsBackground';
import { NavPage } from '../types';

interface HomePageProps {
  onNavigate: (page: NavPage) => void;
  onOpenQuote: (serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuote }) => {
  const { t } = useLanguage();
  const [activeProjectSlide, setActiveProjectSlide] = useState(0);

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

  const projectSlides = [
    {
      id: 'p1',
      title: 'Corredor de Compras Industriais China-Angola',
      category: 'Sourcing & Logística Pesada',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80',
      description: 'Aquisição de maquinaria industrial com auditoria técnica in-loco em Shenzhen e frete marítimo directo para o Porto de Luanda.',
      stat: '-28% Custos Operacionais',
      location: 'Shenzhen → Luanda',
    },
    {
      id: 'p2',
      title: 'Transporte e Coordenação de Carga Aérea Crítica',
      category: 'Coordenação Especializada',
      image: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=1000&q=80',
      description: 'Gestão integrada de transporte aéreo de peças sobressalentes e equipamentos técnicos com desalfandegamento expedito.',
      stat: '4 Dias de Trânsito Rápido',
      location: 'Europa → Luanda Hub',
    },
    {
      id: 'p3',
      title: 'Programa Comunitário de Oportunidades & Qualificação',
      category: 'Desenvolvimento Social',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80',
      description: 'Capacitação prática de mais de 150 jovens em gestão comercial e facilitação de inserção profissional em empresas parceiras.',
      stat: '150+ Jovens Capacitados',
      location: 'Ilha do Cabo, Luanda',
    },
    {
      id: 'p4',
      title: 'Solução Integrada Turnkey (One-Stop Hub)',
      category: 'Gestão Global de Fornecedores',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
      description: 'Centralização de 7 fornecedores diferentes sob um único contrato corporativo, reduzindo atritos burocráticos.',
      stat: '1 Contrato Único',
      location: 'Luanda, Angola',
    },
  ];

  const nextProject = () => {
    setActiveProjectSlide((prev) => (prev + 1) % projectSlides.length);
  };

  const prevProject = () => {
    setActiveProjectSlide((prev) => (prev === 0 ? projectSlides.length - 1 : prev - 1));
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* 1. Dynamic Hero Slider with Full-Bleed Images & Transitions */}
      <HeroSlider onNavigate={onNavigate} onOpenQuote={onOpenQuote} />

      {/* 2. Executive Stats Counter Bar - Roomy & Responsive */}
      <section className="relative z-10 py-12 sm:py-16 bg-white border-b border-slate-200 px-5 sm:px-8 lg:px-12 shadow-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
          <div className="p-5 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-[#FE8D00] transition-all">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FE8D00] font-mono">6</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-2">Pilares Estratégicos</div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Consultoria a Sourcing</div>
          </div>
          <div className="p-5 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-[#FE8D00] transition-all">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-mono">100%</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-2">Ponto de Contacto Único</div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">One-Stop Solution</div>
          </div>
          <div className="p-5 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-[#FE8D00] transition-all">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FE8D00] font-mono">4+</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-2">Corredores Globais</div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Angola • Ásia • Europa • Global</div>
          </div>
          <div className="p-5 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-[#FE8D00] transition-all">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-mono">NIF</div>
            <div className="text-xs sm:text-sm font-bold text-[#FE8D00] mt-2 font-mono tracking-wider">{COMPANY_INFO.nif}</div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Sociedade Registada</div>
          </div>
        </div>
      </section>

      {/* 4. Who We Are & Philosophy Section */}
      <section className="relative py-16 sm:py-24 px-5 sm:px-10 lg:px-14 max-w-7xl mx-auto overflow-hidden rounded-3xl my-10 sm:my-16 bg-white border border-slate-200 shadow-xl">
        {/* Floating Ship and Airplane Background Animations */}
        <FloatingLogisticsBackground />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Image Collage with Golden Highlights */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80"
                alt="Ashled Soluções Corporate"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 sm:p-6 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-[#FE8D00]/50 text-white shadow-2xl">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#FE8D00] text-black font-black flex items-center justify-center shrink-0 text-base">
                    A
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-black text-white">{COMPANY_INFO.legalName}</div>
                    <div className="text-xs text-[#FE8D00] font-semibold">{COMPANY_INFO.tagline}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <div className="absolute -top-4 -right-4 p-4 rounded-2xl bg-white border border-slate-200 text-slate-900 shadow-xl hidden sm:flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#FE8D00]" />
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900">Sede Oficial</div>
                <div className="text-[11px] text-slate-500">Ilha do Cabo, Luanda</div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Philosophy */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FE8D00]/15 border border-[#FE8D00] text-[#b45309] text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#FE8D00]" />
              <span>Quem Somos & Filosofia</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              A Solução Certa, <span className="text-[#FE8D00]">Coordenada com Rigor.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              A <strong className="text-slate-900">Ashled Soluções Comércio e Prestação de Serviços, Lda</strong> é uma empresa focada em soluções práticas, dedicada a prestar serviços de qualidade, orientação profissional, soluções empresariais, conexões estratégicas e coordenação de projectos.
            </p>

            {/* 4 Pillars of Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                { title: '1. Entender a Necessidade', desc: 'Diagnóstico detalhado sem atalhos' },
                { title: '2. Encontrar a Solução Certa', desc: 'Parceiros e fornecedores qualificados' },
                { title: '3. Coordenar Profissionalmente', desc: 'Supervisão técnica contínua' },
                { title: '4. Entregar com Qualidade', desc: 'Padrão executivo garantido' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#FE8D00]/60 transition-colors shadow-xs"
                >
                  <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FE8D00]" />
                    {item.title}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 mt-1 pl-4">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-7 py-3.5 rounded-xl bg-slate-900 text-white hover:bg-[#FE8D00] hover:text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Conhecer a Nossa História</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenQuote()}
                className="px-7 py-3.5 rounded-xl bg-[#FE8D00] hover:bg-[#ff9e24] text-black font-black text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
              >
                <span>Pedir Cotação Rápida</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The 6 Core Services with Real Photography & Hover Animation */}
      <section className="py-20 sm:py-28 bg-slate-100/70 border-y border-slate-200 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FE8D00]/15 border border-[#FE8D00] text-[#b45309] text-xs font-black uppercase tracking-wider">
                <Layers className="w-4 h-4 text-[#FE8D00]" />
                <span>Os Nossos 6 Pilares de Atuação</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Serviços & Soluções Empresariais
              </h2>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3 rounded-xl bg-white hover:bg-[#FE8D00] text-slate-800 hover:text-black font-bold text-xs uppercase tracking-wider border border-slate-300 hover:border-[#FE8D00] transition-all flex items-center gap-2.5 cursor-pointer shadow-xs shrink-0"
            >
              <span>Ver Todos em Detalhe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 6 Cards Grid with Photography */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_DATA.map((srv, idx) => {
              const Icon = getServiceIcon(srv.icon);
              return (
                <motion.div
                  key={srv.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="group rounded-3xl bg-white border border-slate-200 hover:border-[#FE8D00] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-sm"
                >
                  {/* Image Thumbnail */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
                    <img
                      src={srv.image}
                      alt={t(srv.titleKey)}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Floating Icon */}
                    <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 text-[#FE8D00] shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Scope Badge */}
                    <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-[#FE8D00] text-black text-[10px] font-black uppercase tracking-wider shadow-md">
                      {srv.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-2.5">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#FE8D00] transition-colors leading-snug">
                        {t(srv.titleKey)}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {t(srv.descKey)}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] sm:text-xs text-[#b45309] font-mono font-bold">
                        {srv.scopeHighlight}
                      </span>
                      <button
                        onClick={() => onOpenQuote(srv.id)}
                        className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-[#FE8D00] hover:text-black transition-all cursor-pointer shadow-xs"
                        aria-label={`Solicitar ${t(srv.titleKey)}`}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Dynamic Project Slider */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-10 sm:space-y-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FE8D00]/15 border border-[#FE8D00] text-[#b45309] text-xs font-black uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#FE8D00]" />
              <span>Projectos & Impacto em Movimento</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
              Casos Reais & Iniciativas Coordenadas
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevProject}
              className="p-3.5 rounded-full bg-white hover:bg-[#FE8D00] text-slate-800 hover:text-black border border-slate-300 hover:border-[#FE8D00] transition-all cursor-pointer shadow-xs"
              aria-label="Projecto Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextProject}
              className="p-3.5 rounded-full bg-white hover:bg-[#FE8D00] text-slate-800 hover:text-black border border-slate-300 hover:border-[#FE8D00] transition-all cursor-pointer shadow-xs"
              aria-label="Próximo Projecto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Project Slide Card */}
        <div className="relative rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={projectSlides[activeProjectSlide].id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Image Col (7 cols) */}
              <div className="lg:col-span-7 h-[340px] sm:h-[440px] relative overflow-hidden bg-slate-100">
                <img
                  src={projectSlides[activeProjectSlide].image}
                  alt={projectSlides[activeProjectSlide].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/80" />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-slate-900/90 text-[#FE8D00] text-xs font-mono font-bold shadow-md">
                  {projectSlides[activeProjectSlide].location}
                </div>
              </div>

              {/* Text Col (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-10 space-y-6">
                <span className="text-xs font-bold text-[#b45309] uppercase tracking-wider">
                  {projectSlides[activeProjectSlide].category}
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  {projectSlides[activeProjectSlide].title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {projectSlides[activeProjectSlide].description}
                </p>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 shadow-xs">
                  <div className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">Destaque de Impacto:</div>
                  <div className="text-xl font-black text-[#b45309] mt-1">
                    {projectSlides[activeProjectSlide].stat}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => onOpenQuote()}
                    className="px-7 py-3.5 rounded-xl bg-[#FE8D00] hover:bg-[#ff9e24] text-black font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                  >
                    Desenvolver Projecto Similar
                  </button>
                  <span className="text-xs font-mono text-slate-500 font-bold">
                    0{activeProjectSlide + 1} / 0{projectSlides.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 7. Interactive Scope Simulator */}
      <section className="py-20 sm:py-28 bg-slate-100/60 border-t border-slate-200 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <ScopeEstimator onStartProject={(srvId) => onOpenQuote(srvId)} />
        </div>
      </section>

      {/* 8. Global Corridors & China Bridge with Particle Network */}
      <section className="relative py-24 sm:py-32 px-5 sm:px-8 lg:px-12 overflow-hidden bg-white border-t border-slate-200 pb-32 sm:pb-24">
        <NetworkCanvas density={25} className="opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FE8D00]/15 border border-[#FE8D00] text-[#b45309] text-xs font-black uppercase tracking-wider">
              Ponte Estratégica Internacional
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Conectando Angola ao Mundo & o Mundo a Angola
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Presença e parceiros activos nos principais eixos de manufatura, logística e tecnologia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {GLOBAL_HUBS_DATA.map((hub) => (
              <div
                key={hub.id}
                className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#FE8D00] transition-all space-y-4 shadow-sm group hover:shadow-xl"
              >
                <div className="h-40 rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={hub.image}
                    alt={hub.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#b45309] font-bold uppercase block tracking-wider">
                    {hub.city}
                  </span>
                  <h4 className="text-lg font-black text-slate-900 mt-1">{hub.name}</h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{hub.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('global')}
              className="px-8 sm:px-10 py-4 rounded-xl bg-slate-900 text-white hover:bg-[#FE8D00] hover:text-black font-black text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
            >
              Explorar Toda a Rede Global Ashled
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
