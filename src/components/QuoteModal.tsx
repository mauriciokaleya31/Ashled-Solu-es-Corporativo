import React, { useState, useRef } from 'react';
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
  Paperclip,
  FileText,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { SERVICES_DATA, COMPANY_INFO } from '../data/companyData';
import { dispatchLeadSubmission, LeadSubmission, formatBytes } from '../utils/emailService';

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
  const [attachmentFile, setAttachmentFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadResult, setLeadResult] = useState<{
    ticketRef: string;
    mailtoUrl: string;
    whatsAppUrl: string;
    formattedBody: string;
    lead: LeadSubmission;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 25 * 1024 * 1024) {
        alert('O arquivo selecionado excede o limite máximo de 25MB.');
        return;
      }
      setAttachmentFile(file);
    }
  };

  const handleRemoveFile = () => {
    setAttachmentFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

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
      attachmentFile,
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
    setAttachmentFile(null);
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
          className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 text-slate-900"
        >
          {/* Top Decorative Gold Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FE8D00]" />

          {/* Header */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-slate-100 bg-slate-50/80">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[#FE8D00] shadow-xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 tracking-tight">
                  {t('requestQuote', 'Solicitar Cotação & Coordenação')}
                </h3>
                <p className="text-xs text-slate-500">
                  Direcionado para: <strong className="text-[#FE8D00]">geral@ashled.com</strong>
                </p>
              </div>
            </div>
            <button
              id="close-quote-modal-btn"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-900 rounded-xl hover:bg-slate-200 transition-colors cursor-pointer"
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
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
                              ? 'bg-[#FE8D00] border-[#FE8D00] text-black font-black shadow-sm'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <span className="font-bold line-clamp-1">{t(srv.titleKey)}</span>
                          <span className={`text-[10px] line-clamp-1 ${isSelected ? 'text-black/80 font-semibold' : 'text-slate-500'}`}>
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
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
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
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
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
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
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t('formName', 'Nome Completo')} *
                    </label>
                    <input
                      id="quote-name-input"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Manuel Silva"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#FE8D00] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t('formCompany', 'Empresa / Organização')}
                    </label>
                    <input
                      id="quote-company-input"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Ex: Grupo Comercial Lda"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#FE8D00] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t('formEmail', 'E-mail Corporativo')} *
                    </label>
                    <input
                      id="quote-email-input"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="contacto@empresa.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#FE8D00] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t('formPhone', 'Telefone / WhatsApp')} *
                    </label>
                    <input
                      id="quote-phone-input"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(+244) 926 084 375"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#FE8D00] transition-colors"
                    />
                  </div>
                </div>

                {/* Message Details */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t('formMessage', 'Descreva a sua necessidade ou especificações')}
                  </label>
                  <textarea
                    id="quote-message-input"
                    rows={3}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Descreva detalhes como tipo de mercadoria, fornecedor de interesse, prazos ou destino final..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#FE8D00] transition-colors resize-none"
                  />
                </div>

                {/* File Attachment Area */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-semibold text-slate-700">
                      Anexar Arquivo ou Documento (Opcional)
                    </label>
                    <span className="text-[10px] text-slate-400 font-mono">PDF, DOC, XLS, JPG, PNG (Até 25MB)</span>
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    id="modal-quote-attachment"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.jpg,.jpeg,.png,.webp,.zip,.rar"
                    className="hidden"
                  />

                  {!attachmentFile ? (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full py-2.5 px-3.5 rounded-xl border border-dashed border-slate-300 hover:border-[#FE8D00] bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all flex items-center justify-center gap-2 text-xs font-medium cursor-pointer group"
                    >
                      <Paperclip className="w-3.5 h-3.5 text-[#FE8D00] group-hover:scale-110 transition-transform" />
                      <span>Anexar lista de mercadorias, fatura proforma ou documento</span>
                    </button>
                  ) : (
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-[#FE8D00]/50 flex items-center justify-between shadow-xs">
                      <div className="flex items-center gap-2 truncate">
                        <div className="p-1.5 rounded-lg bg-white text-[#FE8D00] border border-slate-200 shrink-0 shadow-xs">
                          <FileText className="w-3.5 h-3.5" />
                        </div>
                        <div className="truncate text-left">
                          <p className="text-xs font-bold text-slate-900 truncate">{attachmentFile.name}</p>
                          <p className="text-[10px] text-slate-500">{formatBytes(attachmentFile.size)}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        title="Remover anexo"
                        className="p-1 text-slate-400 hover:text-rose-500 rounded-lg cursor-pointer shrink-0 ml-2"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    id="submit-quote-request-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-[#FE8D00] hover:bg-[#ff9e24] text-black font-black text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        <span>A despachar mensagem e anexo para geral@ashled.com...</span>
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
                <div className="w-16 h-16 rounded-full bg-slate-100 border-2 border-[#FE8D00] flex items-center justify-center mx-auto text-[#FE8D00] shadow-sm">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#FE8D00] text-black text-xs font-mono font-black shadow-xs">
                    REF: {leadResult.ticketRef}
                  </span>
                  <h4 className="text-2xl font-black text-slate-900">Solicitação Registada com Sucesso!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    A sua proposta e anexo foram encaminhados diretamente para o e-mail oficial da Ashled.
                  </p>
                  {leadResult.lead.attachmentName && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs mt-1">
                      <Paperclip className="w-3.5 h-3.5 text-[#FE8D00]" />
                      <span>Anexo: <strong>{leadResult.lead.attachmentName}</strong> ({leadResult.lead.attachmentSize})</span>
                    </div>
                  )}
                </div>

                {/* Email dispatch audit box */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2 text-xs shadow-xs">
                  <div className="flex items-center justify-between text-slate-500 font-mono text-[11px] border-b border-slate-200 pb-1.5">
                    <span>Destinatário Oficial:</span>
                    <strong className="text-[#FE8D00]">geral@ashled.com</strong>
                  </div>
                  <div className="text-slate-700">
                    <strong className="text-slate-900">{leadResult.lead.name}</strong> ({leadResult.lead.company || 'Individual'}) • {leadResult.lead.phone} • {leadResult.lead.serviceName}
                  </div>
                </div>

                {/* Direct quick action buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
                  <a
                    id="email-client-open-btn"
                    href={leadResult.mailtoUrl}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-md transition-all"
                  >
                    <Mail className="w-4 h-4 text-white" />
                    <span>Abrir & Confirmar no Seu Email</span>
                  </a>

                  <a
                    id="whatsapp-followup-btn"
                    href={leadResult.whatsAppUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Enviar no WhatsApp</span>
                  </a>

                  <button
                    onClick={handleCopyDetails}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium border border-slate-200 cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copiado!' : 'Copiar Texto'}</span>
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    id="finish-quote-modal-btn"
                    onClick={handleReset}
                    className="text-xs text-slate-500 hover:text-slate-900 underline cursor-pointer"
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
