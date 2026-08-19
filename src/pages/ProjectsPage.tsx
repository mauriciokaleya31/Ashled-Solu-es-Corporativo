import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  FolderKanban,
  Award,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { NavPage } from '../types';

interface ProjectsPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenQuote: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, onOpenQuote }) => {
  const { t } = useLanguage();
  const [projectCategory, setProjectCategory] = useState<'all' | 'commercial' | 'social'>('all');

  const lifecycleStages = [
    { num: '01', title: 'Ideia', desc: 'Identificação da necessidade e conceptualização.' },
    { num: '02', title: 'Planeamento', desc: 'Definição de cronograma, viabilidade e orçamentação.' },
    { num: '03', title: 'Parceiros', desc: 'Seleção criteriosa de provedores e especialistas.' },
    { num: '04', title: 'Recursos', desc: 'Alocação de suprimentos, logística e tecnologia.' },
    { num: '05', title: 'Coordenação', desc: 'Gestão contínua com ponto centralizado Ashled.' },
    { num: '06', title: 'Implementação', desc: 'Execução no terreno com supervisão rigorosa.' },
    { num: '07', title: 'Resultados', desc: 'Entrega final com qualidade garantida e impacto.' },
  ];

  const showcaseProjects = [
    {
      id: 'proj-1',
      title: 'Corredor de Compras Industriais China-Angola',
      category: 'commercial',
      type: 'Sourcing & Logística',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80',
      location: 'Shenzhen / Xangai → Luanda',
      impact: 'Redução de 28% nos custos de aquisição e entrega no prazo.',
      desc: 'Coordenação ponta a ponta de aquisição de maquinaria pesada, auditoria presencial de fornecedores asiáticos, gestão de frete marítimo e desembaraço alfandegário com agentes autorizados.',
      tags: ['Sourcing Global', 'One-Stop', 'Inspeção'],
    },
    {
      id: 'proj-2',
      title: 'Programa de Capacitação & Oportunidades Juvenis',
      category: 'social',
      type: 'Desenvolvimento Social',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
      location: 'Luanda, Angola',
      impact: 'Mais de 150 jovens capacitados em competências práticas.',
      desc: 'Iniciativa comunitária voltada para a qualificação de jovens em competências comerciais, introdução à logística e conexão com primeiras oportunidades profissionais no mercado formal.',
      tags: ['Comunidade', 'Educação', 'Jovens'],
    },
    {
      id: 'proj-3',
      title: 'Coordenação Integrada de Transporte e Carga Aérea',
      category: 'commercial',
      type: 'Coordenação Especializada',
      image: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=900&q=80',
      location: 'Europa → Luanda (Ilha do Cabo Hub)',
      impact: 'Tempo de trânsito reduzido em 4 dias úteis.',
      desc: 'Gestão centralizada de múltiplos fornecedores de logística para remessa urgente de equipamentos técnicos essenciais, com interface directa entre transportadoras licenciadas e cliente.',
      tags: ['Frete Aéreo', 'Coordenação', 'Licenciamento'],
    },
    {
      id: 'proj-4',
      title: 'Iniciativa de Apoio a Famílias & Primeira Infância',
      category: 'social',
      type: 'Apoio Comunitário',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
      location: 'Comunidades de Luanda',
      impact: 'Apoio directo a dezenas de famílias e crianças.',
      desc: 'Parcerias estratégicas estabelecidas entre empresas doadoras e líderes comunitários para distribuição de kits escolares, apoio nutricional e melhoria das condições familiares.',
      tags: ['Famílias', 'Crianças', 'Impacto Social'],
    },
  ];

  const filtered =
    projectCategory === 'all'
      ? showcaseProjects
      : showcaseProjects.filter((p) => p.category === projectCategory);

  return (
    <div className="pt-24 pb-20 bg-black text-white min-h-screen">
      {/* Header Banner with Rich Image */}
      <section className="relative py-20 px-4 sm:px-8 lg:px-12 bg-neutral-950 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80"
            alt="Projects Banner"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
        </div>

        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FE8D00]/20 border border-[#FE8D00] text-[#FE8D00] text-xs font-black uppercase tracking-wider">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>{t('navProjects', 'Projectos & Impacto')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Desenvolvimento e Gestão de Projectos
          </h1>
          <p className="text-base sm:text-xl text-neutral-300 max-w-3xl leading-relaxed">
            Da concepção inicial à entrega final: transformamos ideias em projectos práticos e iniciativas de impacto duradouro.
          </p>
        </div>
      </section>

      {/* The 7-Stage Execution Flow */}
      <section className="py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FE8D00]">
            Metodologia Ashled
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            O Nosso Fluxo de Execução em 7 Fases
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {lifecycleStages.map((stage, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-[#FE8D00] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-black font-mono text-black px-2 py-0.5 rounded bg-[#FE8D00] mb-2 inline-block">
                  {stage.num}
                </span>
                <h4 className="text-sm font-black text-white mb-1">{stage.title}</h4>
                <p className="text-[11px] text-neutral-400 leading-snug">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Showcase Cards with Photography */}
      <section className="py-12 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-neutral-800 pb-4">
          <h3 className="text-xl font-black text-white">Casos de Estudo & Iniciativas</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setProjectCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                projectCategory === 'all'
                  ? 'bg-[#FE8D00] text-black shadow-[0_0_10px_rgba(254,141,0,0.3)]'
                  : 'bg-neutral-900 text-neutral-300 border border-neutral-800 hover:bg-neutral-800'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setProjectCategory('commercial')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                projectCategory === 'commercial'
                  ? 'bg-[#FE8D00] text-black shadow-[0_0_10px_rgba(254,141,0,0.3)]'
                  : 'bg-neutral-900 text-neutral-300 border border-neutral-800 hover:bg-neutral-800'
              }`}
            >
              Comerciais & Sourcing
            </button>
            <button
              onClick={() => setProjectCategory('social')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                projectCategory === 'social'
                  ? 'bg-[#FE8D00] text-black shadow-[0_0_10px_rgba(254,141,0,0.3)]'
                  : 'bg-neutral-900 text-neutral-300 border border-neutral-800 hover:bg-neutral-800'
              }`}
            >
              Impacto Comunitário
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-[#FE8D00] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(254,141,0,0.2)] group"
            >
              <div className="h-56 w-full relative overflow-hidden bg-black">
                <img
                  src={p.image}
                  alt={p.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#FE8D00] text-[#FE8D00] text-xs font-mono font-bold">
                  {p.location}
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#FE8D00] text-black text-xs font-black uppercase">
                  {p.type}
                </div>
              </div>

              <div className="p-7 space-y-4">
                <h4 className="text-xl font-black text-white group-hover:text-[#FE8D00] transition-colors">
                  {p.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {p.desc}
                </p>

                <div className="p-3.5 rounded-2xl bg-black border border-neutral-800 text-xs text-neutral-200 font-semibold flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#FE8D00] shrink-0" />
                  <span>{p.impact}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800">
                  {p.tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-neutral-950 text-neutral-400 text-[10px] font-mono border border-neutral-800"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="pt-8 text-center">
          <button
            onClick={onOpenQuote}
            className="px-8 py-4 rounded-xl bg-[#FE8D00] hover:bg-[#ff9e24] text-black font-black text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(254,141,0,0.4)] flex items-center justify-center gap-2 mx-auto cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>Desenvolver Projecto com a Ashled</span>
          </button>
        </div>
      </section>
    </div>
  );
};
