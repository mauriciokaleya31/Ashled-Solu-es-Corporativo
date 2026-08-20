import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

export interface LanguageMeta {
  code: Language;
  label: string;
  nativeLabel: string;
  flag: string;
  dir?: 'ltr' | 'rtl';
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
  languages: LanguageMeta[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const languagesList: LanguageMeta[] = [
  { code: 'pt', label: 'Português', nativeLabel: 'Português (Angola)', flag: '🇦🇴', dir: 'ltr' },
  { code: 'en', label: 'English', nativeLabel: 'English (International)', flag: '🇬🇧', dir: 'ltr' },
  { code: 'zh', label: '中文 (Chinese)', nativeLabel: '中文 (简体 / 商务)', flag: '🇨🇳', dir: 'ltr' },
  { code: 'fr', label: 'Français', nativeLabel: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'es', label: 'Español', nativeLabel: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'de', label: 'Deutsch', nativeLabel: 'Deutsch (German)', flag: '🇩🇪', dir: 'ltr' },
  { code: 'it', label: 'Italiano', nativeLabel: 'Italiano', flag: '🇮🇹', dir: 'ltr' },
  { code: 'ar', label: 'العربية (Arabic)', nativeLabel: 'العربية', flag: '🇦🇪', dir: 'rtl' },
  { code: 'ru', label: 'Русский (Russian)', nativeLabel: 'Русский', flag: '🇷🇺', dir: 'ltr' },
  { code: 'ja', label: '日本語 (Japanese)', nativeLabel: '日本語', flag: '🇯🇵', dir: 'ltr' },
  { code: 'tr', label: 'Türkçe (Turkish)', nativeLabel: 'Türkçe', flag: '🇹🇷', dir: 'ltr' },
  { code: 'hi', label: 'हिन्दी (Hindi)', nativeLabel: 'हिन्दी', flag: '🇮🇳', dir: 'ltr' },
];

const VALID_CODES = languagesList.map((l) => l.code);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('ashled_lang');
      if (saved && (VALID_CODES as string[]).includes(saved)) {
        return saved as Language;
      }
    } catch {
      // Fallback
    }
    return 'pt'; // Default Portuguese for Angola
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('ashled_lang', lang);
      document.documentElement.lang = lang;
      const meta = languagesList.find((l) => l.code === lang);
      if (meta?.dir === 'rtl') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
    const meta = languagesList.find((l) => l.code === language);
    if (meta?.dir === 'rtl') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [language]);

  const t = (key: string, fallback?: string): string => {
    const dict = (translations as Record<string, Record<string, string>>)[language] || translations.pt;
    if (dict && dict[key]) {
      return dict[key];
    }
    // Fallback to Portuguese or English
    if (translations.pt && (translations.pt as Record<string, string>)[key]) {
      return (translations.pt as Record<string, string>)[key];
    }
    if (translations.en && (translations.en as Record<string, string>)[key]) {
      return (translations.en as Record<string, string>)[key];
    }
    return fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages: languagesList }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
