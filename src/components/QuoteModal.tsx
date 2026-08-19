import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  Building,
  Globe,
  Layers,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { SERVICES_DATA, COMPANY_INFO } from '../data/companyData';
import { dispatchLeadSubmission, LeadSubmission } from '../utils/emailService';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultServiceId?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultServiceId = 'one-stop',
}) => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState(defaultServiceId);
  const [scope, setScope] = useState<'local' | 'regional' | 'global'>('global');
  const [urgency, setUrgency] = useState<'standard' | 'priority' | 'urgent'>('standard');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadResult, setLeadResult] = useState<{
    ticketRef: string;
    mailtoUrl: string;
    whatsAppUrl: string;
    formattedBody: string;
    lead: LeadSubmission;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const srv = SERVICES_DATA.find((s) => s.id === selectedService);
    const serviceName = srv ? t(srv.titleKey) : 'Serviço Personalizado Ashled';

    const result = await dispatchLeadSubmission({
      name,
      company,
      email,
      phone,
      serviceId: selectedService,
      serviceName,
      urgency: urgency === 'urgent' ? 'Urgente (< 15 dias)' : urgency === 'priority' ? 'Prioridade Alta (15-30 dias)' : 'Padrão / Planeado',
      geoScope: scope === 'global' ? 'Global (China/Europa/Américas)' : scope === 'regional' ? 'Regional África' : 'Angola / Luanda',
      message: details,
    });

    setLeadResult(result);
    setIsSubmitting(false);

    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#FE8D00', '#FFFFFF', '#FFA733'],
      });
    } catch {
      // ignore
    }
  };

  const handleCopyDetails = () => {
    if (!leadResult) return;
    navigator.clipboard.writeText(leadResult.formattedBody);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setLeadResult(null);
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setDetails('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden z-10 my-8 text-white"
        >
          {/* Top Decorative Gold Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FE8D00] shadow-[0_0_15px_#FE8D00]" />

          {/* Header */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-neutral-800 bg-neutral-900/60">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-black border border-[#FE8D00]/50 text-[#FE8D00]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white tracking-tight">
                  {t('requestQuote', 'Solicitar Cotação & Coordenação')}
                </h3>
                <p className="text-xs text-neutral-400">
                  Direcionado para: <strong className="text-[#FE8D00]">geral@ashled.com</strong> • <strong className="text-[#FE8D00]">kaleyapt@gmail.com</strong>
                </p>
              </div>
            </div>
            <button
              id="close-quote-modal-btn"
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white rounded-xl hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Area */}
          <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
            {!leadResult ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Service Selector Chips */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    {t('formService', '1. Serviço Pretendido')}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {SERVICES_DATA.map((srv) => {
                      const isSelected = selectedService === srv.id;
                      return (
                        <button
                          key={srv.id}
                          type="button"
                          onClick={() => setSelectedService(srv.id)}
                          className={`p-3 text-left rounded-xl border text-xs font-medium transition-all flex flex-col justify-between gap-1 cursor-pointer ${
                            isSelected
                              ? 'bg-[#FE8D00] border-[#FE8D00] text-black font-black shadow-[0_0_15px_rgba(254,141,0,0.3)]'
                              : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:bg-neutral-800'
                          }`}
                        >
                          <span className="font-bold line-clamp-1">{t(srv.titleKey)}</span>
                          <span className={`text-[10px] line-clamp-1 ${isSelected ? 'text-black/80 font-semibold' : 'text-neutral-500'}`}>
                            {srv.scopeHighlight}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Scope & Urgency row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                      2. Âmbito Geográfico
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {[
                        { id: 'local', label: 'Angola' },
                        { id: 'regional', label: 'África' },
                        { id: 'global', label: 'Global' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setScope(item.id as any)}
                          className={`p-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                            scope === item.id
                              ? 'bg-[#FE8D00] border-[#FE8D00] text-black font-black'
                              : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:bg-neutral-800'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                      3. Nível de Urgência
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {[
                        { id: 'standard', label: 'Padrão' },
                        { id: 'priority', label: 'Prioritário' },
                        { id: 'urgent', label: 'Urgente' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setUrgency(item.id as any)}
                          className={`p-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                            urgency === item.id
                              ? 'bg-[#FE8D00] border-[#FE8D00] text-black font-black'
                              : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:bg-neutral-800'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      {t('formName', 'Nome Completo')} *
                    </label>
                    <input
                      id="quote-name-input"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Manuel Silva"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-[#FE8D00] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      {t('formCompany', 'Empresa / Organização')}
                    </label>
                    <input
                      id="quote-company-input"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Ex: Grupo Comercial Lda"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-[#FE8D00] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      {t('formEmail', 'E-mail Corporativo')} *
                    </label>
                    <input
                      id="quote-email-input"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="contacto@empresa.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-[#FE8D00] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      {t('formPhone', 'Telefone / WhatsApp')} *
                    </label>
                    <input
                      id="quote-phone-input"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(+244) 926 084 375"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-[#FE8D00] transition-colors"
                    />
                  </div>
                </div>

                {/* Message Details */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    {t('formMessage', 'Descreva a sua necessidade ou especificações')}
                  </label>
                  <textarea
                    id="quote-message-input"
                    rows={3}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Descreva detalhes como tipo de mercadoria, fornecedor de interesse, prazos ou destino final..."
                    className="w-full px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-[#FE8D00] transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    id="submit-quote-request-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-[#FE8D00] hover:bg-[#ff9e24] text-black font-black text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(254,141,0,0.4)] flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        <span>A processar envio e registo...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-black" />
                        <span>Enviar Pedido de Cotação para o Email</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Success confirmation state */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4 space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-black border-2 border-[#FE8D00] flex items-center justify-center mx-auto text-[#FE8D00] shadow-[0_0_20px_rgba(254,141,0,0.4)]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#FE8D00] text-black text-xs font-mono font-black">
                    REF: {leadResult.ticketRef}
                  </span>
                  <h4 className="text-2xl font-black text-white">Solicitação Registada com Sucesso!</h4>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto">
                    A sua proposta foi estruturada e encaminhada para a equipa executiva da Ashled.
                  </p>
                </div>

                {/* Email dispatch audit box */}
                <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-left space-y-2 text-xs">
                  <div className="flex items-center justify-between text-neutral-400 font-mono text-[11px] border-b border-neutral-800 pb-1.5">
                    <span>Destinatários Oficiais:</span>
                    <strong className="text-[#FE8D00]">geral@ashled.com, kaleyapt@gmail.com</strong>
                  </div>
                  <div className="text-neutral-300">
                    <strong className="text-white">{leadResult.lead.name}</strong> ({leadResult.lead.company || 'Individual'}) • {leadResult.lead.phone} • {leadResult.lead.serviceName}
                  </div>
                </div>

                {/* Direct quick action buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
                  <a
                    id="email-client-open-btn"
                    href={leadResult.mailtoUrl}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-neutral-200 text-black text-xs font-bold shadow-lg transition-all"
                  >
                    <Mail className="w-4 h-4 text-black" />
                    <span>Abrir & Confirmar no Seu Email</span>
                  </a>

                  <a
                    id="whatsapp-followup-btn"
                    href={leadResult.whatsAppUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Enviar no WhatsApp</span>
                  </a>

                  <button
                    onClick={handleCopyDetails}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-medium border border-neutral-800 cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copiado!' : 'Copiar Texto'}</span>
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    id="finish-quote-modal-btn"
                    onClick={handleReset}
                    className="text-xs text-neutral-400 hover:text-white underline cursor-pointer"
                  >
                    Concluir e Voltar ao Site
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
