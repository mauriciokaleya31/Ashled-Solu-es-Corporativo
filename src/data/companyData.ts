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
  ctaKey: string;
  ctaText: string;
  serviceId: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    titleKey: 'heroSlide1Title',
    titleFallback: 'Conectando Necessidades. Criando Soluções. Entregando Qualidade.',
    subtitleKey: 'heroSlide1Subtitle',
    subtitleFallback: 'A ponte estratégica que conecta as suas necessidades às melhores soluções empresariais, comerciais e comunitárias.',
    tag: 'Soluções Integradas One-Stop',
    badgeHighlight: 'Sede em Luanda • Presença Global',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=85',
    ctaKey: 'requestQuote',
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
    ctaKey: 'heroSlide2Cta',
    ctaText: 'Explorar Sourcing',
    serviceId: 'sourcing',
  },
  {
    id: 'slide-3',
    titleKey: 'heroSlide3Title',
    titleFallback: 'Envio Internacional de Mercadorias & Frete Aéreo',
    subtitleKey: 'heroSlide3Subtitle',
    subtitleFallback: 'Reserva garantida de lugares e espaço para embarque de cargas com TAAG, TAP, Lufthansa, Qatar, Emirates, Ethiopian e Air France.',
    tag: 'Carga Aérea & Linhas Aéreas',
    badgeHighlight: 'TAAG · TAP · Lufthansa · Qatar · Emirates · Ethiopian · Air France',
    image: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=1800&q=85',
    ctaKey: 'ctaQuoteAirCargo',
    ctaText: 'Cotação Carga Aérea',
    serviceId: 'air-cargo',
  },
  {
    id: 'slide-4',
    titleKey: 'heroSlide4Title',
    titleFallback: 'Suporte em Arranjar Funcionários & Recrutamento para Empresas',
    subtitleKey: 'heroSlide4Subtitle',
    subtitleFallback: 'Identificação, seleção e alocação de profissionais qualificados, técnicos e operacionais sob medida para o seu negócio.',
    tag: 'Recrutamento & Staffing Empresarial',
    badgeHighlight: 'Talentos Qualificados • Seleção Ágil',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=85',
    ctaKey: 'ctaRequestStaffing',
    ctaText: 'Solicitar Funcionários',
    serviceId: 'staffing',
  },
];

export interface ServiceDetail {
  id: string;
  titleKey: string;
  descKey: string;
  longDescKey: string;
  icon: string;
  category: string;
  categoryKey?: string;
  image: string;
  deliverables: string[];
  deliverableKeys?: string[];
  scopeHighlight: string;
  scopeHighlightKey?: string;
}

export const AIRLINES_LIST = [
  { name: 'TAAG Angola Airlines', code: 'DT', hub: 'Luanda (LAD / NBO)', flag: '🇦🇴' },
  { name: 'TAP Air Portugal', code: 'TP', hub: 'Lisboa (LIS)', flag: '🇵🇹' },
  { name: 'Lufthansa Cargo', code: 'LH', hub: 'Frankfurt (FRA)', flag: '🇩🇪' },
  { name: 'Qatar Airways Cargo', code: 'QR', hub: 'Doha (DOH)', flag: '🇶🇦' },
  { name: 'Emirates SkyCargo', code: 'EK', hub: 'Dubai (DXB)', flag: '🇦🇪' },
  { name: 'Ethiopian Airlines Cargo', code: 'ET', hub: 'Addis Ababa (ADD)', flag: '🇪🇹' },
  { name: 'Air France Cargo', code: 'AF', hub: 'Paris (CDG)', flag: '🇫🇷' },
];

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'air-cargo',
    titleKey: 'serviceAirCargoTitle',
    descKey: 'serviceAirCargoDesc',
    longDescKey: 'serviceAirCargoDesc',
    icon: 'PlaneTakeoff',
    category: 'Carga Aérea & Frete',
    categoryKey: 'catAirCargo',
    image: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=800&q=80',
    scopeHighlight: 'TAAG · TAP · Lufthansa · Qatar · Emirates · Ethiopian · Air France',
    scopeHighlightKey: 'serviceAirCargoScopeHighlight',
    deliverables: [
      'Reserva garantida de lugares e espaço em voos para envio de cargas para o exterior',
      'Acordos e conexões operacionais: TAAG, TAP, Lufthansa, Qatar, Emirates, Ethiopian e Air France',
      'Despacho rápido de mercadorias gerais, peças técnicas, equipamentos e encomendas urgentes',
      'Cotação comparativa de frete aéreo com as melhores rotas e prazos de trânsito',
      'Apoio documental completo, etiquetagem IATA e desembaraço alfandegário de exportação',
      'Rastreio e monitoramento do embarque em Luanda até à entrega no destino final',
    ],
    deliverableKeys: [
      'deliverableAirCargo1',
      'deliverableAirCargo2',
      'deliverableAirCargo3',
      'deliverableAirCargo4',
      'deliverableAirCargo5',
      'deliverableAirCargo6',
    ],
  },
  {
    id: 'staffing',
    titleKey: 'serviceStaffingTitle',
    descKey: 'serviceStaffingDesc',
    longDescKey: 'serviceStaffingDesc',
    icon: 'Users',
    category: 'Recrutamento & Staffing',
    categoryKey: 'catStaffing',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
    scopeHighlight: 'Arranjo & Alocação de Funcionários para Empresas',
    scopeHighlightKey: 'serviceStaffingScopeHighlight',
    deliverables: [
      'Pesquisa, seleção e recrutamento de funcionários sob medida para empresas',
      'Triagem rigorosa de competências técnicas, experiência profissional e referências',
      'Disponibilização de quadros operacionais, técnicos especializados e administrativos',
      'Alocação rápida de equipas para projectos específicos, substituição ou contratação fixa',
      'Suporte na integração e conformidade com a legislação laboral de Angola',
      'Acompanhamento contínuo do desempenho e apoio na gestão de capital humano',
    ],
    deliverableKeys: [
      'deliverableStaffing1',
      'deliverableStaffing2',
      'deliverableStaffing3',
      'deliverableStaffing4',
      'deliverableStaffing5',
      'deliverableStaffing6',
    ],
  },
  {
    id: 'consulting',
    titleKey: 'serviceConsultingTitle',
    descKey: 'serviceConsultingDesc',
    longDescKey: 'serviceConsultingDesc',
    icon: 'Briefcase',
    category: 'Advisory',
    categoryKey: 'catAdvisory',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    scopeHighlight: 'Orientação Estratégica & Viabilidade',
    scopeHighlightKey: 'serviceConsultingScopeHighlight',
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
    deliverableKeys: [
      'deliverableConsulting1',
      'deliverableConsulting2',
      'deliverableConsulting3',
      'deliverableConsulting4',
      'deliverableConsulting5',
      'deliverableConsulting6',
      'deliverableConsulting7',
      'deliverableConsulting8',
    ],
  },
  {
    id: 'connections',
    titleKey: 'serviceConnectionsTitle',
    descKey: 'serviceConnectionsDesc',
    longDescKey: 'serviceConnectionsDesc',
    icon: 'Network',
    category: 'Partnerships',
    categoryKey: 'catPartnerships',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
    scopeHighlight: 'Ponte Entre Necessidades & Soluções',
    scopeHighlightKey: 'serviceConnectionsScopeHighlight',
    deliverables: [
      'Cruzamento de necessidades corporativas com especialistas comprovados',
      'Due diligence e verificação prévia de parceiros locais e globais',
      'Facilitação de negócios bilaterais (Angola ↔ Global)',
      'Estruturação de parcerias estratégicas e joint-ventures',
      'Apresentações comerciais de alto nível executivo',
      'Acompanhamento e facilitação contínua nas negociações',
    ],
    deliverableKeys: [
      'deliverableConnections1',
      'deliverableConnections2',
      'deliverableConnections3',
      'deliverableConnections4',
      'deliverableConnections5',
      'deliverableConnections6',
    ],
  },
  {
    id: 'sourcing',
    titleKey: 'serviceSourcingTitle',
    descKey: 'serviceSourcingDesc',
    longDescKey: 'serviceSourcingDesc',
    icon: 'Search',
    category: 'Procurement',
    categoryKey: 'catProcurement',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80',
    scopeHighlight: 'Equilíbrio: Qualidade, Fiabilidade & Preço',
    scopeHighlightKey: 'serviceSourcingScopeHighlight',
    deliverables: [
      'Procura e qualificação de fabricantes globais (China, Europa, Américas)',
      'Solicitação e análise técnica de cotações e especificações (RFQs)',
      'Comparação detalhada de propostas e benchmarks de custo-benefício',
      'Coordenação de negociações comerciais favoráveis',
      'Inspecção presencial e auditoria de qualidade antes do embarque',
      'Acompanhamento logístico até ao destino final em Angola',
    ],
    deliverableKeys: [
      'deliverableSourcing1',
      'deliverableSourcing2',
      'deliverableSourcing3',
      'deliverableSourcing4',
      'deliverableSourcing5',
      'deliverableSourcing6',
    ],
  },
  {
    id: 'one-stop',
    titleKey: 'serviceOneStopTitle',
    descKey: 'serviceOneStopDesc',
    longDescKey: 'serviceOneStopDesc',
    icon: 'Layers',
    category: 'Centralized Hub',
    categoryKey: 'catCentralizedHub',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    scopeHighlight: '1 Pedido · 1 Contacto · 1 Padrão',
    scopeHighlightKey: 'serviceOneStopScopeHighlight',
    deliverables: [
      'Ponto centralizado de contacto e coordenação executiva',
      'Contrato unificado e fluxo simplificado de faturamento',
      'Gestão de fornecedores múltiplos com padrão unificado de qualidade',
      'Mitigação de riscos e garantia total de responsabilidade',
      'Poupança substancial de tempo e custos operacionais',
      'Entrega chave-na-mão e acompanhamento pós-execução',
    ],
    deliverableKeys: [
      'deliverableOneStop1',
      'deliverableOneStop2',
      'deliverableOneStop3',
      'deliverableOneStop4',
      'deliverableOneStop5',
      'deliverableOneStop6',
    ],
  },
  {
    id: 'project-mgmt',
    titleKey: 'serviceProjectMgmtTitle',
    descKey: 'serviceProjectMgmtDesc',
    longDescKey: 'serviceProjectMgmtDesc',
    icon: 'Target',
    category: 'Execution',
    categoryKey: 'catExecution',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    scopeHighlight: 'Ideia → Planeamento → Parceiros → Resultados',
    scopeHighlightKey: 'serviceProjectMgmtScopeHighlight',
    deliverables: [
      'Validação de conceitos e desenho técnico de projectos',
      'Planeamento de recursos, orçamentos e prazos de execução',
      'Mobilização e coordenação de equipas e parceiros especializados',
      'Supervisão diária do fluxo de trabalho e resolução de constrangimentos',
      'Controlo de qualidade em todas as etapas do ciclo de vida',
      'Entrega final documentada e medição de impacto gerado',
    ],
    deliverableKeys: [
      'deliverableProjectMgmt1',
      'deliverableProjectMgmt2',
      'deliverableProjectMgmt3',
      'deliverableProjectMgmt4',
      'deliverableProjectMgmt5',
      'deliverableProjectMgmt6',
    ],
  },
];

export const TICKER_ITEMS = [
  '🇦🇴 HUB LUANDA (ILHA DO CABO)',
  '✈️ EMBARQUE DE CARGAS: TAAG · TAP · LUFTHANSA · QATAR · EMIRATES · ETHIOPIAN · AIR FRANCE',
  '👥 RECRUTAMENTO & ALOCAÇÃO DE FUNCIONÁRIOS PARA EMPRESAS',
  '🇨🇳 HUBS ÁSIA: SHENZHEN / XANGAI / BEIJING',
  '🇪🇺 CORREDOR EUROPA: LISBOA / ROTERDÃO',
  '🌎 AMÉRICAS GATEWAY',
  '⭐ QUALIDADE COMO PADRÃO NÃO EXTRA',
  '🎯 ONE-STOP SERVICE INTEGRADO',
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
    nameKey: 'hubAngolaName',
    name: 'Angola & África Austral',
    city: 'Luanda (Ilha do Cabo)',
    country: 'Angola',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
    roleKey: 'hubAngolaRole',
    role: 'Sede Operacional & Âncora Estratégica',
    focusKeys: ['hubAngolaFocus1', 'hubAngolaFocus2', 'hubAngolaFocus3', 'hubAngolaFocus4'],
    focus: ['Distribuição Local', 'Facilitação Regulatória', 'Execução de Projectos', 'Relações Institucionais'],
  },
  {
    id: 'asia',
    nameKey: 'hubAsiaName',
    name: 'Hub Ásia & China',
    city: 'Beijing / Xangai / Shenzhen',
    country: 'China',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
    roleKey: 'hubAsiaRole',
    role: 'Manufatura Global, Tecnologia e Comércio',
    focusKeys: ['hubAsiaFocus1', 'hubAsiaFocus2', 'hubAsiaFocus3', 'hubAsiaFocus4'],
    focus: ['Sourcing Directo em Fábricas', 'Maquinaria Industrial', 'Inspecção Presencial', 'Frete Contentores'],
  },
  {
    id: 'europe',
    nameKey: 'hubEuropeName',
    name: 'Corredor Europa',
    city: 'Lisboa / Roterdão',
    country: 'Portugal / Países Baixos',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    roleKey: 'hubEuropeRole',
    role: 'Equipamentos Técnicos, Engenharia & Consultoria',
    focusKeys: ['hubEuropeFocus1', 'hubEuropeFocus2', 'hubEuropeFocus3'],
    focus: ['Componentes Industriais', 'Consultoria Especializada', 'Roteamento Aéreo/Marítimo'],
  },
  {
    id: 'americas',
    nameKey: 'hubAmericasName',
    name: 'Gateway Américas',
    city: 'São Paulo / Houston',
    country: 'Brasil / EUA',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    roleKey: 'hubAmericasRole',
    role: 'Commodities, Suporte Energético & Parcerias Comerciais',
    focusKeys: ['hubAmericasFocus1', 'hubAmericasFocus2', 'hubAmericasFocus3'],
    focus: ['Produtos Agrícolas', 'Equipamentos de Energia', 'Intercâmbio Comercial'],
  },
];
