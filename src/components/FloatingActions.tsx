import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowUp, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/companyData';

interface FloatingActionsProps {
  onOpenQuote: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenQuote }) => {
  const { t } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
    t('whatsappQuickMsg', 'Olá Ashled Soluções, gostaria de solicitar informações e cotação sobre os vossos serviços.')
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="scroll-to-top-btn"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white text-gray-700 hover:text-blue-600 hover:bg-gray-50 border border-gray-200 shadow-lg backdrop-blur-md transition-all pointer-events-auto active:scale-95"
            aria-label="Voltar ao Topo"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Direct WhatsApp Chat Trigger */}
      <motion.a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 border border-emerald-400 pointer-events-auto transition-all group"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full" />
        </div>
        <span className="hidden sm:inline-block">WhatsApp Direct</span>
      </motion.a>

      {/* Floating Quick Quote Bubble */}
      <motion.button
        id="floating-quote-btn"
        onClick={onOpenQuote}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-blue-50 text-blue-600 font-semibold text-xs border border-blue-200 shadow-md shadow-blue-100 pointer-events-auto transition-all"
      >
        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
        <span>{t('requestQuote', 'Pedir Cotação')}</span>
      </motion.button>
    </div>
  );
};
