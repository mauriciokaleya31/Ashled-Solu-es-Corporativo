import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
  languages: { code: Language; label: string; nativeLabel: string; flag: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const languagesList: { code: Language; label: string; nativeLabel: string; flag: string }[] = [
  { code: 'pt', label: 'Português', nativeLabel: 'Português (AO/PT)', flag: '🇦🇴' },
  { code: 'en', label: 'English', nativeLabel: 'English (US/UK)', flag: '🇬🇧' },
  { code: 'zh', label: 'Chinese', nativeLabel: '中文 (Chinese / Cineoa)', flag: '🇨🇳' },
  { code: 'fr', label: 'French', nativeLabel: 'Français', flag: '🇫🇷' },
  { code: 'es', label: 'Spanish', nativeLabel: 'Español', flag: '🇪🇸' },
];

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('ashled_lang');
      if (saved && ['pt', 'en', 'zh', 'fr', 'es'].includes(saved)) {
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
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string, fallback?: string): string => {
    const dict = translations[language] || translations.pt;
    if (dict && dict[key]) {
      return dict[key];
    }
    // Fallback to PT or EN
    if (translations.pt && translations.pt[key]) {
      return translations.pt[key];
    }
    if (translations.en && translations.en[key]) {
      return translations.en[key];
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
