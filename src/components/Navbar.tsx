import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Globe,
  Phone,
  Sparkles,
  ChevronDown,
  Home,
  Users,
  Layers,
  FolderKanban,
  Award,
  Send,
  Building,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SupportedLanguage, NavPage } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenQuote: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenQuote }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavPage; labelKey: string; labelFallback: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'home', labelKey: 'navHome', labelFallback: 'Início', icon: Home },
    { id: 'about', labelKey: 'navAbout', labelFallback: 'Sobre Nós', icon: Users },
    { id: 'services', labelKey: 'navServices', labelFallback: 'Serviços', icon: Layers },
    { id: 'projects', labelKey: 'navProjects', labelFallback: 'Projectos', icon: FolderKanban },
    { id: 'global', labelKey: 'navGlobal', labelFallback: 'Rede Global', icon: Globe },
    { id: 'quality', labelKey: 'navQuality', labelFallback: 'Qualidade', icon: Award },
    { id: 'contact', labelKey: 'navContact', labelFallback: 'Contactos', icon: Phone },
  ];

  const languagesList: { code: SupportedLanguage; label: string; flag: string }[] = [
    { code: 'pt', label: 'Português', flag: '🇦🇴' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'zh', label: '中文 (Chinese)', flag: '🇨🇳' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-[#FE8D00]/30 shadow-2xl py-2.5'
            : 'bg-black/90 backdrop-blur-sm border-b border-neutral-800 py-3.5'
        }`}
      >
        {/* Top Info Bar */}
        <div className="hidden lg:block border-b border-white/10 pb-2 mb-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-neutral-300">
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5 text-white font-medium">
                <span className="w-2 h-2 rounded-full bg-[#FE8D00] animate-pulse inline-block" />
                <span>Sede: {COMPANY_INFO.address}</span>
              </span>
              <span className="text-neutral-400">
                NIF Oficial: <strong className="text-[#FE8D00] font-mono font-bold">{COMPANY_INFO.nif}</strong>
              </span>
            </div>

            <div className="flex items-center gap-5">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="hover:text-[#FE8D00] transition-colors flex items-center gap-1.5 font-bold text-white"
              >
                <Phone className="w-3.5 h-3.5 text-[#FE8D00]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <span className="text-xs text-neutral-400">
                Email: <strong className="text-white">geral@ashled.com</strong>
              </span>
              <span className="px-2 py-0.5 rounded bg-[#FE8D00]/20 text-[#FE8D00] border border-[#FE8D00]/40 font-bold text-[11px]">
                Angola ↔ China ↔ Global
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Brand Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center focus:outline-none cursor-pointer shrink-0"
              aria-label="Ashled Home"
            >
              <BrandLogo size="md" lightMode={false} />
            </button>

            {/* Desktop Navigation Links - ALWAYS VISIBLE ON MD AND UP */}
            <nav className="hidden md:flex items-center gap-1 bg-neutral-900/80 p-1.5 rounded-2xl border border-neutral-800">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-[#FE8D00] text-black font-black shadow-[0_0_12px_rgba(254,141,0,0.5)]'
                        : 'text-neutral-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-[#FE8D00]'}`} />
                    <span>{t(item.labelKey, item.labelFallback)}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Header Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Language Selector Dropdown */}
              <div className="relative">
                <button
                  id="lang-selector-desktop-btn"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold border border-neutral-700 hover:border-[#FE8D00] transition-all cursor-pointer"
                  aria-expanded={langDropdownOpen}
                >
                  <Globe className="w-3.5 h-3.5 text-[#FE8D00]" />
                  <span className="uppercase">{language}</span>
                  <ChevronDown className="w-3 h-3 text-neutral-400" />
                </button>

                <AnimatePresence>
                  {langDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-48 bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl p-1.5 z-50"
                    >
                      {languagesList.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setLangDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                            language === lang.code
                              ? 'bg-[#FE8D00] text-black font-bold shadow-[0_0_10px_rgba(254,141,0,0.4)]'
                              : 'text-neutral-300 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-sm">{lang.flag}</span>
                            <span>{lang.label}</span>
                          </span>
                          {language === lang.code && <span className="text-[10px] font-black">✓</span>}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Quick Quote CTA Button in #FE8D00 */}
              <button
                id="header-quote-cta-btn"
                onClick={() => onOpenQuote()}
                className="hidden sm:flex px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#FE8D00] hover:bg-[#ff9e24] text-black font-black text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(254,141,0,0.4)] hover:shadow-[0_0_25px_rgba(254,141,0,0.7)] transform active:scale-95 transition-all items-center gap-2 cursor-pointer shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>{t('requestQuote', 'Pedir Cotação')}</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex md:hidden p-2.5 rounded-xl bg-[#FE8D00] text-black font-bold shadow-lg focus:outline-none cursor-pointer"
                aria-label="Abrir Menu Principal"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black border-t border-neutral-800 px-4 py-5 space-y-4 shadow-2xl"
            >
              <div className="text-[11px] font-bold text-[#FE8D00] uppercase tracking-wider px-2">
                Navegação Principal Ashled:
              </div>
              <nav className="grid grid-cols-2 gap-2">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                        isActive
                          ? 'bg-[#FE8D00] text-black border-[#FE8D00] shadow-[0_0_12px_rgba(254,141,0,0.4)] font-black'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-200 hover:bg-neutral-800'
                      }`}
                    >
                      <IconComponent className={`w-4 h-4 ${isActive ? 'text-black' : 'text-[#FE8D00]'}`} />
                      <span>{t(item.labelKey, item.labelFallback)}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Language selection in mobile menu */}
              <div className="pt-3 border-t border-neutral-800 space-y-2">
                <div className="text-[11px] text-neutral-400 font-bold uppercase px-1">Selecione o Idioma:</div>
                <div className="grid grid-cols-3 gap-1.5">
                  {languagesList.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setMobileMenuOpen(false);
                      }}
                      className={`p-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border ${
                        language === lang.code
                          ? 'bg-[#FE8D00] text-black border-[#FE8D00] font-bold'
                          : 'bg-neutral-900 text-neutral-300 border-neutral-800'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span className="uppercase text-[10px]">{lang.code}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3.5 rounded-xl bg-[#FE8D00] text-black font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-black" />
                <span>{t('requestQuote', 'Solicitar Cotação Agora')}</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating Bottom Quick Bar for Mobile Devices */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-lg border-t border-neutral-800 py-2 px-3 flex items-center justify-around shadow-2xl">
        <button
          onClick={() => handleNavClick('home')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
            currentPage === 'home' ? 'text-[#FE8D00]' : 'text-neutral-400'
          }`}
        >
          <Home className="w-4 h-4" />
          <span>Início</span>
        </button>

        <button
          onClick={() => handleNavClick('services')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
            currentPage === 'services' ? 'text-[#FE8D00]' : 'text-neutral-400'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Serviços</span>
        </button>

        <button
          onClick={() => onOpenQuote()}
          className="flex flex-col items-center justify-center -mt-5 w-12 h-12 rounded-full bg-[#FE8D00] text-black shadow-[0_0_15px_rgba(254,141,0,0.6)] font-black"
        >
          <Sparkles className="w-5 h-5" />
        </button>

        <button
          onClick={() => handleNavClick('projects')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
            currentPage === 'projects' ? 'text-[#FE8D00]' : 'text-neutral-400'
          }`}
        >
          <FolderKanban className="w-4 h-4" />
          <span>Projectos</span>
        </button>

        <button
          onClick={() => handleNavClick('contact')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
            currentPage === 'contact' ? 'text-[#FE8D00]' : 'text-neutral-400'
          }`}
        >
          <Phone className="w-4 h-4" />
          <span>Contacto</span>
        </button>
      </div>
    </>
  );
};
