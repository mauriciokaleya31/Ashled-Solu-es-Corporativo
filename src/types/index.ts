export type Language = 'pt' | 'en' | 'zh' | 'fr' | 'es';
export type SupportedLanguage = Language;

export type NavPage = 'home' | 'about' | 'services' | 'projects' | 'global' | 'quality' | 'contact';

export interface ServiceItem {
  id: string;
  titleKey: string;
  descriptionKey: string;
  longDescriptionKey: string;
  iconName: string;
  features: string[];
  category: 'business' | 'logistics' | 'sourcing' | 'management' | 'coordination';
  badgeKey?: string;
}

export interface ValueItem {
  id: string;
  titleKey: string;
  descKey: string;
  icon: string;
  highlightKey?: string;
}

export interface ProjectItem {
  id: string;
  titleKey: string;
  category: 'commercial' | 'community' | 'sourcing' | 'international';
  locationKey: string;
  impactKey: string;
  descKey: string;
  image: string;
  tags: string[];
  metrics?: { labelKey: string; value: string }[];
}

export interface WhyChooseItem {
  id: string;
  titleKey: string;
  descKey: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  serviceCategory: string;
  country: string;
  message: string;
  preferredLanguage: string;
}
