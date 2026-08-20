import { Language } from '../types';
import { pt } from './locales/pt';
import { en } from './locales/en';
import { zh } from './locales/zh';
import { fr } from './locales/fr';
import { es } from './locales/es';
import { de } from './locales/de';
import { it } from './locales/it';
import { ar } from './locales/ar';
import { ru } from './locales/ru';
import { ja } from './locales/ja';
import { tr } from './locales/tr';
import { hi } from './locales/hi';

export const translations: Record<Language, Record<string, string>> = {
  pt,
  en,
  zh,
  fr,
  es,
  de,
  it,
  ar,
  ru,
  ja,
  tr,
  hi,
};

export const getTranslation = (lang: Language, key: string, fallback?: string): string => {
  if (translations[lang] && translations[lang][key]) {
    return translations[lang][key];
  }
  if (translations.pt && translations.pt[key]) {
    return translations.pt[key];
  }
  if (translations.en && translations.en[key]) {
    return translations.en[key];
  }
  return fallback || key;
};
