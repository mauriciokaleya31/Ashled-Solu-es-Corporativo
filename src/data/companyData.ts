export const COMPANY_LOGO_URL = 'https://visa.onlyvibes.online/wp-content/uploads/2026/08/image001.png';

export const BRAND_COLORS = {
  primary: '#FE8D00', // Vibrant Ashled Amber Orange
  primaryDark: '#D97706',
  primaryLight: '#FFA733',
  darkBg: '#090D14', // Deep obsidian black
  darkCard: '#111722',
  darkCardBorder: '#1E293B',
  pureWhite: '#FFFFFF',
  textMuted: '#94A3B8',
};

export const COMPANY_INFO = {
  legalName: 'ASHLED SOLUÇÕES COMÉRCIO E PRESTAÇÃO DE SERVIÇOS, LDA',
  shortName: 'ASHLED SOLUÇÕES',
  tagline: 'Connecting Needs. Creating Solutions. Delivering Quality.',
  nif: '5001963090',
  phone: '(+244) 926084375',
  phoneRaw: '244926084375',
  email: 'geral@ashled.com',
  address: 'Rua Murtala Mohammed - Bairro Ilha Do Cabo, Luanda, Angola',
  country: 'Angola',
  city: 'Luanda',
  district: 'Ilha do Cabo',
  coordinates: {
    lat: -8.7844,
    lng: 13.2289,
  },
  established: 'Luanda, Angola',
};

export interface HeroSlide {
  id: string;
  titleKey: string;
  titleFallback: string;
  subtitleKey: string;
  subtitleFallback: string;
  tag: string;
  badgeHighlight: string;
  image: string;
  ctaText: string;
  serviceId: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    titleKey: 'heroSlide1Title',
    titleFallback: 'Connecting Needs. Creating Solutions. Delivering Quality.',
    subtitleKey: 'heroSlide1Subtitle',
    subtitleFallback: 'A ponte estratégica que conecta as suas necessidades às melhores soluções empresariais, comerciais e comunitárias.',
    tag: 'One-Stop Solution Provider',
    badgeHighlight: 'Sede em Luanda • Presença Global',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=85',
    ctaText: 'Solicitar Cotação',
    serviceId: 'one-stop',
  },
  {
    id: 'slide-2',
    titleKey: 'heroSlide2Title',
    titleFallback: 'Sourcing Internacional & Corredor China-Angola',
    subtitleKey: 'heroSlide2Subtitle',
    subtitleFallback: 'Aquisição de equipamentos, negociação direta com fabricantes globais e garantia rigorosa de conformidade.',
    tag: 'Sourcing & Compras Globais',
    badgeHighlight: 'China • Europa • Américas',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1800&q=85',
    ctaText: 'Explorar Sourcing',
    serviceId: 'sourcing',
  },
  {
    id: 'slide-3',
    titleKey: 'heroSlide3Title',
    titleFallback: 'Coordenação Especializada de Carga e Logística',
    subtitleKey: 'heroSlide3Subtitle',
    subtitleFallback: 'Interface integrada com transportadoras aéreas, marítimas e agentes alfandegários para entregas seguras e pontuais.',
    tag: 'Logística & Transporte Integrado',
    badgeHighlight: 'Frete Aéreo • Marítimo • Alfândegas',
    image: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=1800&q=85',
    ctaText: 'Coordenar Carga',
    serviceId: 'specialized',
  },
  {
    id: 'slide-4',
    titleKey: 'heroSlide4Title',
    titleFallback: 'Consultoria Estratégica & Gestão de Projectos',
    subtitleKey: 'heroSlide4Subtitle',
    subtitleFallback: 'Acompanhamento do conceito ao resultado final com excelência, transparência e medição de impacto real.',
    tag: 'Gestão 360° & Governação',
    badgeHighlight: 'Projetos Comerciais & Comunitários',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85',
    ctaText: 'Falar com Especialistas',
    serviceId: 'project-mgmt',
  },
];

export interface ServiceDetail {
  id: string;
  titleKey: string;
  descKey: string;
  longDescKey: string;
  icon: string;
  category: string;
  image: string;
  deliverables: string[];
  scopeHighlight: string;
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'consulting',
    titleKey: 'serviceConsultingTitle',
    descKey: 'serviceConsultingDesc',
    longDescKey: 'serviceConsultingDesc',
    icon: 'Briefcase',
    category: 'Advisory',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    scopeHighlight: 'Orientação Estratégica & Viabilidade',
    deliverables: [
      'Desenvolvimento de novas ideias e oportunidades de negócio',
      'Soluções práticas para desafios operacionais e regulatórios',
      'Identificação de parceiros comerciais ideais',
      'Selecção de fornecedores e prestadores certificados',
      'Optimização de processos internos e fluxos de trabalho',
      'Exploração de novos mercados internacionais',
      'Estruturação de relacionamentos estratégicos de longo prazo',
      'Planeamento executivo e coordenação de projectos',
    ],
  },
  {
    id: 'connections',
    titleKey: 'serviceConnectionsTitle',
    descKey: 'serviceConnectionsDesc',
    longDescKey: 'serviceConnectionsDesc',
    icon: 'Network',
    category: 'Partnerships',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
    scopeHighlight: 'Ponte Entre Necessidades & Soluções',
    deliverables: [
      'Cruzamento de necessidades corporativas com especialistas comprovados',
      'Due diligence e verificação prévia de parceiros locais e globais',
      'Facilitação de negócios bilaterais (Angola ↔ Global)',
      'Estruturação de parcerias estratégicas e joint-ventures',
      'Apresentações comerciais de alto nível executivo',
      'Acompanhamento e facilitação contínua nas negociações',
    ],
  },
  {
    id: 'specialized',
    titleKey: 'serviceCoordinationTitle',
    descKey: 'serviceCoordinationDesc',
    longDescKey: 'serviceCoordinationDesc',
    icon: 'PlaneTakeoff',
    category: 'Logistics & Coordination',
    image: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=800&q=80',
    scopeHighlight: 'Orquestração Multi-Provedores',
    deliverables: [
      'Gestão integrada de transporte internacional de carga',
      'Coordenação de frete aéreo e transporte marítimo',
      'Serviços e facilitação de viagens corporativas técnicas',
      'Aquisição e encaminhamento de equipamentos especializados',
      'Interface directa com fornecedores licenciados e entidades alfandegárias',
      'Acompanhamento em tempo real de marcos de entrega',
    ],
  },
  {
    id: 'one-stop',
    titleKey: 'serviceOneStopTitle',
    descKey: 'serviceOneStopDesc',
    longDescKey: 'serviceOneStopDesc',
    icon: 'Layers',
    category: 'Centralized Hub',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    scopeHighlight: '1 Pedido · 1 Contacto · 1 Padrão',
    deliverables: [
      'Ponto centralizado de contacto e coordenação executiva',
      'Contrato unificado e fluxo simplificado de faturamento',
      'Gestão de fornecedores múltiplos com padrão unificado de qualidade',
      'Mitigação de riscos e garantia total de responsabilidade',
      'Poupança substancial de tempo e custos operacionais',
      'Entrega chave-na-mão e acompanhamento pós-execução',
    ],
  },
  {
    id: 'sourcing',
    titleKey: 'serviceSourcingTitle',
    descKey: 'serviceSourcingDesc',
    longDescKey: 'serviceSourcingDesc',
    icon: 'Search',
    category: 'Procurement',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80',
    scopeHighlight: 'Equilíbrio: Qualidade, Fiabilidade & Preço',
    deliverables: [
      'Procura e qualificação de fabricantes globais (China, Europa, Américas)',
      'Solicitação e análise técnica de cotações e especificações (RFQs)',
      'Comparação detalhada de propostas e benchmarks de custo-benefício',
      'Coordenação de negociações comerciais favoráveis',
      'Inspecção presencial e auditoria de qualidade antes do embarque',
      'Acompanhamento logístico até ao destino final em Angola',
    ],
  },
  {
    id: 'project-mgmt',
    titleKey: 'serviceProjectMgmtTitle',
    descKey: 'serviceProjectMgmtDesc',
    longDescKey: 'serviceProjectMgmtDesc',
    icon: 'Target',
    category: 'Execution',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    scopeHighlight: 'Ideia → Planeamento → Parceiros → Resultados',
    deliverables: [
      'Validação de conceitos e desenho técnico de projectos',
      'Planeamento de recursos, orçamentos e prazos de execução',
      'Mobilização e coordenação de equipas e parceiros especializados',
      'Supervisão diária do fluxo de trabalho e resolução de constrangimentos',
      'Controlo de qualidade em todas as etapas do ciclo de vida',
      'Entrega final documentada e medição de impacto gerado',
    ],
  },
];

export const TICKER_ITEMS = [
  '🇦🇴 HUB LUANDA (ILHA DO CABO)',
  '🇨🇳 HUBS ÁSIA: SHENZHEN / XANGAI / BEIJING',
  '🇪🇺 CORREDOR EUROPA: LISBOA / ROTERDÃO',
  '🌎 AMÉRICAS GATEWAY',
  '⭐ QUALIDADE COMO PADRÃO NÃO EXTRA',
  '🎯 ONE-STOP SERVICE INTEGRADO',
  '✈️ FRETE AÉREO & MARÍTIMO',
  '🛡️ NIF OFICIAL: 5001963090',
  '🤝 PARCERIAS ESTRATÉGICAS BILATERAIS',
];

export const CORE_VALUES_DATA = [
  { id: 'quality', titleKey: 'valQuality', descKey: 'valQualityDesc', icon: 'Award' },
  { id: 'integrity', titleKey: 'valIntegrity', descKey: 'valIntegrityDesc', icon: 'ShieldCheck' },
  { id: 'prof', titleKey: 'valProf', descKey: 'valProfDesc', icon: 'UserCheck' },
  { id: 'reliability', titleKey: 'valReliability', descKey: 'valReliabilityDesc', icon: 'Clock' },
  { id: 'partnership', titleKey: 'valPartnership', descKey: 'valPartnershipDesc', icon: 'Handshake' },
  { id: 'innovation', titleKey: 'valInnovation', descKey: 'valInnovationDesc', icon: 'Lightbulb' },
  { id: 'responsibility', titleKey: 'valResponsibility', descKey: 'valResponsibilityDesc', icon: 'HeartHandshake' },
  { id: 'people', titleKey: 'valPeople', descKey: 'valPeopleDesc', icon: 'Users' },
];

export const WHY_CHOOSE_DATA = [
  { id: 'quality', titleKey: 'whyQualityTitle', descKey: 'whyQualityDesc', icon: 'Sparkles' },
  { id: 'reliability', titleKey: 'whyReliabilityTitle', descKey: 'whyReliabilityDesc', icon: 'CheckCircle' },
  { id: 'prof', titleKey: 'whyProfTitle', descKey: 'whyProfDesc', icon: 'Briefcase' },
  { id: 'practical', titleKey: 'whyPracticalTitle', descKey: 'whyPracticalDesc', icon: 'Compass' },
  { id: 'network', titleKey: 'whyNetworkTitle', descKey: 'whyNetworkDesc', icon: 'Globe' },
  { id: 'convenience', titleKey: 'whyConvenienceTitle', descKey: 'whyConvenienceDesc', icon: 'Zap' },
  { id: 'flexibility', titleKey: 'whyFlexibilityTitle', descKey: 'whyFlexibilityDesc', icon: 'Sliders' },
  { id: 'social', titleKey: 'whySocialTitle', descKey: 'whySocialDesc', icon: 'Heart' },
];

export const GLOBAL_HUBS_DATA = [
  {
    id: 'angola',
    name: 'Angola & África Austral',
    city: 'Luanda (Ilha do Cabo)',
    country: 'Angola',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
    role: 'Sede Operacional & Âncora Estratégica',
    focus: ['Distribuição Local', 'Facilitação Regulatória', 'Execução de Projectos', 'Relações Institucionais'],
  },
  {
    id: 'asia',
    name: 'Hub Ásia & China',
    city: 'Beijing / Xangai / Shenzhen',
    country: 'China',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
    role: 'Manufatura Global, Tecnologia e Comércio',
    focus: ['Sourcing Directo em Fábricas', 'Maquinaria Industrial', 'Inspecção Presencial', 'Frete Contentores'],
  },
  {
    id: 'europe',
    name: 'Corredor Europa',
    city: 'Lisboa / Roterdão',
    country: 'Portugal / Países Baixos',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    role: 'Equipamentos Técnicos, Engenharia & Consultoria',
    focus: ['Componentes Industriais', 'Consultoria Especializada', 'Roteamento Aéreo/Marítimo'],
  },
  {
    id: 'americas',
    name: 'Gateway Américas',
    city: 'São Paulo / Houston',
    country: 'Brasil / EUA',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    role: 'Commodities, Suporte Energético & Parcerias Comerciais',
    focus: ['Produtos Agrícolas', 'Equipamentos de Energia', 'Intercâmbio Comercial'],
  },
];
