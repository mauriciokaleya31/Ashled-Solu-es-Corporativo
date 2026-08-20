import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Globe,
  Layers,
  PlaneTakeoff,
  Play,
  Pause,
} from 'lucide-react';
import { HERO_SLIDES, HeroSlide } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { NavPage } from '../types';

interface HeroSliderProps {
  onNavigate: (page: NavPage) => void;
  onOpenQuote: (serviceId?: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onNavigate, onOpenQuote }) => {
  const { t } = useLanguage();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slideDuration = 6000; // 6 seconds per slide

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, slideDuration);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlideIndex]);

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const currentSlide: HeroSlide = HERO_SLIDES[currentSlideIndex];

  return (
    <div className="relative w-full min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] bg-black text-white overflow-hidden flex items-center">
      {/* Background Image Carousel with Fade Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src={currentSlide.image}
            alt={currentSlide.tag}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          {/* Deep cinematic gradient overlay: Black + Amber vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(254,141,0,0.18),transparent_60%)]" />
        </motion.div>
      </AnimatePresence>

      {/* Main Slide Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-24 sm:py-28 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Slide Category Tag */}
          <motion.div
            key={`tag-${currentSlide.id}`}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FE8D00] text-black text-xs font-black uppercase tracking-wider shadow-[0_0_15px_rgba(254,141,0,0.5)]">
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>{currentSlide.tag}</span>
            </span>
          </motion.div>

          {/* Slide Headline */}
          <motion.h1
            key={`title-${currentSlide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]"
          >
            {t(currentSlide.titleKey, currentSlide.titleFallback)}
          </motion.h1>

          {/* Slide Subtitle */}
          <motion.p
            key={`sub-${currentSlide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-neutral-300 max-w-2xl leading-relaxed font-normal"
          >
            {t(currentSlide.subtitleKey, currentSlide.subtitleFallback)}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            key={`actions-${currentSlide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4 flex flex-wrap items-center gap-4"
          >
            <button
              id={`hero-slide-cta-btn-${currentSlide.id}`}
              onClick={() => onOpenQuote(currentSlide.serviceId)}
              className="px-8 py-4 rounded-xl bg-[#FE8D00] hover:bg-[#ff9e24] text-black font-black text-sm tracking-wide uppercase transition-all shadow-[0_0_30px_rgba(254,141,0,0.4)] hover:shadow-[0_0_40px_rgba(254,141,0,0.7)] transform active:scale-95 flex items-center gap-3 cursor-pointer"
            >
              <span>{currentSlide.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-4 rounded-xl bg-white/10 hover:bg-[#FE8D00] text-white hover:text-black font-bold text-sm tracking-wide backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer border-0"
            >
              <span>{t('exploreServices', 'Explorar Todos os Serviços')}</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Slider Controls: Arrows - Borderless */}
      <button
        onClick={prevSlide}
        aria-label="Slide Anterior"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/70 hover:bg-[#FE8D00] text-white hover:text-black transition-all backdrop-blur-md cursor-pointer border-0 shadow-lg"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Próximo Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/70 hover:bg-[#FE8D00] text-white hover:text-black transition-all backdrop-blur-md cursor-pointer border-0 shadow-lg"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Slider Progress & Dots Bar */}
      <div className="absolute bottom-6 left-0 right-0 z-20 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Slide Indicators */}
        <div className="flex items-center gap-3">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlideIndex;
            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                aria-label={`Ir para Slide ${idx + 1}`}
                className="group flex flex-col items-start gap-1 text-left cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      isActive ? 'w-10 sm:w-16 bg-[#FE8D00] shadow-[0_0_10px_#FE8D00]' : 'w-4 bg-white/25 group-hover:bg-white/50'
                    }`}
                  />
                  <span className={`text-[10px] font-mono font-bold hidden md:inline-block ${isActive ? 'text-[#FE8D00]' : 'text-neutral-500'}`}>
                    0{idx + 1}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* AutoPlay Toggle & Info */}
        <div className="flex items-center gap-4 text-xs text-neutral-400">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5 text-[#FE8D00]" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isAutoPlaying ? 'Auto' : 'Pausado'}</span>
          </button>
          <span className="hidden sm:inline-block">•</span>
          <span className="text-[11px] font-mono text-neutral-400 hidden sm:inline-block">
            NIF: 5001963090 • Luanda, Angola
          </span>
        </div>
      </div>
    </div>
  );
};
