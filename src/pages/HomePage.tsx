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
    <div className="bg-black text-white min-h-screen">
      {/* 1. Dynamic Hero Slider with Full-Bleed Images & Transitions */}
      <HeroSlider onNavigate={onNavigate} onOpenQuote={onOpenQuote} />

      {/* 2. Infinite Sliding Ticker Marquee ("sklloid a passar") */}
      <TickerMarquee />

      {/* 3. Executive Stats Counter Bar */}
      <section className="relative z-10 py-10 bg-neutral-950 border-b border-neutral-900 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80">
            <div className="text-3xl sm:text-4xl font-black text-[#FE8D00] font-mono">6</div>
            <div className="text-xs sm:text-sm font-bold text-white mt-1">Pilares Estratégicos</div>
            <div className="text-[11px] text-neutral-400">Consultoria a Sourcing</div>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80">
            <div className="text-3xl sm:text-4xl font-black text-white font-mono">100%</div>
            <div className="text-xs sm:text-sm font-bold text-white mt-1">Ponto de Contacto Único</div>
            <div className="text-[11px] text-neutral-400">One-Stop Solution</div>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80">
            <div className="text-3xl sm:text-4xl font-black text-[#FE8D00] font-mono">4+</div>
            <div className="text-xs sm:text-sm font-bold text-white mt-1">Corredores Globais</div>
            <div className="text-[11px] text-neutral-400">Angola • Ásia • Europa • Américas</div>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80">
            <div className="text-3xl sm:text-4xl font-black text-white font-mono">NIF</div>
            <div className="text-xs sm:text-sm font-bold text-[#FE8D00] mt-1 font-mono">5001963090</div>
            <div className="text-[11px] text-neutral-400">Sociedade Registada</div>
          </div>
        </div>
      </section>

      {/* 4. Who We Are & Philosophy Section */}
      <section className="relative py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Collage with Golden Highlights */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-[0_0_40px_rgba(254,141,0,0.15)] group">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80"
                alt="Ashled Soluções Corporate"
                referrerPolicy="no-referrer"
                className="w-full h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/85 backdrop-blur-md border border-[#FE8D00]/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FE8D00] text-black font-black flex items-center justify-center shrink-0">
                    A
                  </div>
                  <div>
                    <div className="text-sm font-black text-white">{COMPANY_INFO.legalName}</div>
                    <div className="text-xs text-[#FE8D00] font-semibold">{COMPANY_INFO.tagline}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <div className="absolute -top-4 -right-4 p-4 rounded-2xl bg-neutral-900 border border-[#FE8D00] text-white shadow-2xl hidden sm:flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#FE8D00]" />
              <div className="text-left">
                <div className="text-xs font-bold text-white">Sede Oficial</div>
                <div className="text-[11px] text-neutral-400">Ilha do Cabo, Luanda</div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FE8D00]/15 border border-[#FE8D00] text-[#FE8D00] text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Quem Somos & Filosofia</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              A Solução Certa, <span className="text-[#FE8D00]">Coordenada com Rigor.</span>
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed">
              A <strong>Ashled Soluções Comércio e Prestação de Serviços, Lda</strong> é uma empresa focada em soluções práticas, dedicada a prestar serviços de qualidade, orientação profissional, soluções empresariais, conexões estratégicas e coordenação de projectos.
            </p>

            {/* 4 Pillars of Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { title: '1. Entender a Necessidade', desc: 'Diagnóstico detalhado sem atalhos' },
                { title: '2. Encontrar a Solução Certa', desc: 'Parceiros e fornecedores qualificados' },
                { title: '3. Coordenar Profissionalmente', desc: 'Supervisão técnica contínua' },
                { title: '4. Entregar com Qualidade', desc: 'Padrão executivo garantido' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-[#FE8D00]/50 transition-colors"
                >
                  <div className="text-xs font-bold text-[#FE8D00]">{item.title}</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 rounded-xl bg-white text-black hover:bg-[#FE8D00] font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Conhecer a Nossa História</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenQuote()}
                className="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider border border-neutral-700 hover:border-[#FE8D00] transition-all cursor-pointer"
              >
                <span>Pedir Cotação Rápida</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The 6 Core Services with Real Photography & Hover Animation */}
      <section className="py-20 bg-neutral-950 border-y border-neutral-900 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FE8D00]/20 border border-[#FE8D00] text-[#FE8D00] text-xs font-black uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>Os Nossos 6 Pilares de Atuação</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Serviços & Soluções Empresariais
              </h2>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-[#FE8D00] text-white hover:text-black font-bold text-xs uppercase tracking-wider border border-neutral-700 hover:border-[#FE8D00] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Ver Todos em Detalhe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 6 Cards Grid with Photography */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((srv, idx) => {
              const Icon = getServiceIcon(srv.icon);
              return (
                <motion.div
                  key={srv.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="group rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-[#FE8D00] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(254,141,0,0.25)] hover:-translate-y-1"
                >
                  {/* Image Thumbnail */}
                  <div className="relative h-48 w-full overflow-hidden bg-neutral-950">
                    <img
                      src={srv.image}
                      alt={t(srv.titleKey)}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

                    {/* Floating Icon */}
                    <div className="absolute top-4 left-4 p-3 rounded-2xl bg-black/80 backdrop-blur-md border border-[#FE8D00]/50 text-[#FE8D00] shadow-lg">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Scope Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#FE8D00] text-black text-[10px] font-black uppercase tracking-wider shadow-md">
                      {srv.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-black text-white group-hover:text-[#FE8D00] transition-colors">
                        {t(srv.titleKey)}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3">
                        {t(srv.descKey)}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                      <span className="text-[11px] text-[#FE8D00] font-mono font-bold">
                        {srv.scopeHighlight}
                      </span>
                      <button
                        onClick={() => onOpenQuote(srv.id)}
                        className="p-2 rounded-xl bg-neutral-800 text-white hover:bg-[#FE8D00] hover:text-black transition-all cursor-pointer"
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

      {/* 6. Dynamic Project Slider ("sklloid a passar") */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FE8D00]/20 border border-[#FE8D00] text-[#FE8D00] text-xs font-black uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Projectos & Impacto em Movimento</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Casos Reais & Iniciativas Coordenadas
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevProject}
              className="p-3 rounded-full bg-neutral-900 hover:bg-[#FE8D00] text-white hover:text-black border border-neutral-800 hover:border-[#FE8D00] transition-all cursor-pointer"
              aria-label="Projecto Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextProject}
              className="p-3 rounded-full bg-neutral-900 hover:bg-[#FE8D00] text-white hover:text-black border border-neutral-800 hover:border-[#FE8D00] transition-all cursor-pointer"
              aria-label="Próximo Projecto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Project Slide Card */}
        <div className="relative rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={projectSlides[activeProjectSlide].id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Image Col (7 cols) */}
              <div className="lg:col-span-7 h-[340px] sm:h-[420px] relative overflow-hidden bg-black">
                <img
                  src={projectSlides[activeProjectSlide].image}
                  alt={projectSlides[activeProjectSlide].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-neutral-900" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#FE8D00] text-[#FE8D00] text-xs font-mono font-bold">
                  {projectSlides[activeProjectSlide].location}
                </div>
              </div>

              {/* Text Col (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 space-y-5">
                <span className="text-xs font-bold text-[#FE8D00] uppercase tracking-wider">
                  {projectSlides[activeProjectSlide].category}
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {projectSlides[activeProjectSlide].title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {projectSlides[activeProjectSlide].description}
                </p>

                <div className="p-4 rounded-2xl bg-black/80 border border-neutral-800 text-white">
                  <div className="text-[10px] text-neutral-400 uppercase font-mono">Destaque de Impacto:</div>
                  <div className="text-lg font-black text-[#FE8D00] mt-0.5">
                    {projectSlides[activeProjectSlide].stat}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => onOpenQuote()}
                    className="px-6 py-3 rounded-xl bg-[#FE8D00] hover:bg-[#ff9e24] text-black font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(254,141,0,0.3)] cursor-pointer"
                  >
                    Desenvolver Projecto Similar
                  </button>
                  <span className="text-xs font-mono text-neutral-400">
                    0{activeProjectSlide + 1} / 0{projectSlides.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 7. Interactive Scope Simulator */}
      <section className="py-16 bg-neutral-950 border-t border-neutral-900 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <ScopeEstimator onStartProject={(srvId) => onOpenQuote(srvId)} />
        </div>
      </section>

      {/* 8. Global Corridors & China Bridge with Particle Network */}
      <section className="relative py-24 px-4 sm:px-8 lg:px-12 overflow-hidden bg-black">
        <NetworkCanvas density={35} className="opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#FE8D00]/20 border border-[#FE8D00] text-[#FE8D00] text-xs font-black uppercase tracking-wider">
              Ponte Estratégica Internacional
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Conectando Angola ao Mundo & o Mundo a Angola
            </h2>
            <p className="text-sm sm:text-base text-neutral-300">
              Presença e parceiros activos nos principais eixos de manufatura, logística e tecnologia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GLOBAL_HUBS_DATA.map((hub) => (
              <div
                key={hub.id}
                className="p-6 rounded-3xl bg-neutral-900/90 border border-neutral-800 hover:border-[#FE8D00] transition-all space-y-4 backdrop-blur-md group hover:shadow-[0_0_25px_rgba(254,141,0,0.3)]"
              >
                <div className="h-36 rounded-2xl overflow-hidden bg-neutral-950">
                  <img
                    src={hub.image}
                    alt={hub.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#FE8D00] font-bold uppercase block">
                    {hub.city}
                  </span>
                  <h4 className="text-lg font-black text-white mt-1">{hub.name}</h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-snug">{hub.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('global')}
              className="px-8 py-4 rounded-xl bg-white text-black hover:bg-[#FE8D00] font-black text-xs uppercase tracking-wider transition-all shadow-xl cursor-pointer"
            >
              Explorar Toda a Rede Global Ashled
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
