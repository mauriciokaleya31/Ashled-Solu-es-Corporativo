import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Lock } from 'lucide-react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { QuoteModal } from './components/QuoteModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GlobalNetworkPage } from './pages/GlobalNetworkPage';
import { QualityPage } from './pages/QualityPage';
import { ContactPage } from './pages/ContactPage';
import { NavPage } from './types';
import { useSecurityProtection } from './hooks/useSecurityProtection';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteServiceId, setQuoteServiceId] = useState<string | undefined>(undefined);

  // Activate Right-Click & DevTools Source Protection
  const { securityToast } = useSecurityProtection();

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (serviceId?: string) => {
    setQuoteServiceId(serviceId || 'one-stop');
    setQuoteModalOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} onOpenQuote={() => handleOpenQuote()} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />;
      case 'projects':
        return <ProjectsPage onNavigate={handleNavigate} onOpenQuote={() => handleOpenQuote()} />;
      case 'global':
        return <GlobalNetworkPage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />;
      case 'quality':
        return <QualityPage onNavigate={handleNavigate} onOpenQuote={() => handleOpenQuote()} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />;
      default:
        return <HomePage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#FE8D00] selection:text-black antialiased">
      {/* Header & Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenQuote}
      />

      {/* Main Page Area with Animated Transition */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Interactive Floating Actions (WhatsApp, Scroll-Top, Quick Quote) */}
      <FloatingActions onOpenQuote={() => handleOpenQuote()} />

      {/* Interactive Consultation & Quotation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultServiceId={quoteServiceId}
      />

      {/* Security Toast Notification for Right-Click / DevTools Interception */}
      <AnimatePresence>
        {securityToast.show && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl bg-neutral-950/95 border border-[#FE8D00] shadow-[0_0_30px_rgba(254,141,0,0.4)] backdrop-blur-md flex items-center gap-3 text-white text-xs font-bold"
          >
            <div className="w-7 h-7 rounded-lg bg-[#FE8D00] text-black flex items-center justify-center font-black shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[#FE8D00] font-black uppercase text-[10px] tracking-wider">
                Proteção Ativa
              </div>
              <div className="text-neutral-200">{securityToast.message}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
