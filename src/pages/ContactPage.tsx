import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  Navigation,
  ExternalLink,
  Copy,
  Check,
  Paperclip,
  FileText,
  X,
  UploadCloud,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import { NavPage } from '../types';
import { dispatchLeadSubmission, LeadSubmission, formatBytes } from '../utils/emailService';

interface ContactPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenQuote: (serviceId?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenQuote }) => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('one-stop');
  const [message, setMessage] = useState('');
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
      // Limit 25MB
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

    const srv = SERVICES_DATA.find((s) => s.id === service);
    const serviceName = srv ? t(srv.titleKey) : 'Contacto Geral Ashled';

    const result = await dispatchLeadSubmission({
      name,
      company,
      email,
      phone,
      serviceId: service,
      serviceName,
      message,
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

  return (
    <div className="pt-28 sm:pt-32 lg:pt-36 pb-28 md:pb-20 bg-slate-50 text-slate-900 min-h-screen">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-24 px-5 sm:px-8 lg:px-12 bg-slate-900 text-white border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80"
            alt="Contact Banner"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/60" />
        </div>

        <div className="max-w-7xl mx-auto space-y-4 sm:space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FE8D00]/20 border border-[#FE8D00] text-[#FE8D00] text-xs font-black uppercase tracking-wider">
            <Phone className="w-4 h-4" />
            <span>{t('navContact', 'Contactos & Localização')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            {t('contactTitle', 'Fale Connosco & Agende Reunião')}
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            {t('contactSubtitle', 'Pronto para transformar as suas necessidades em soluções práticas? Toda mensagem enviada é direcionada imediatamente para o email oficial da administração.')}
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Info + Map */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-7">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <div>
                <h3 className="text-2xl font-black text-slate-900">Envie a sua Mensagem ou Pedido</h3>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-[#FE8D00] shadow-xs">
                <MessageSquare className="w-5 h-5" />
              </div>
            </div>

            {!leadResult ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t('formName', 'Nome Completo')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: João Baptista"
                      className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#FE8D00] focus:ring-1 focus:ring-[#FE8D00] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t('formCompany', 'Empresa / Organização')}
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Ex: Grupo Luanda S.A."
                      className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#FE8D00] focus:ring-1 focus:ring-[#FE8D00] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t('formEmail', 'E-mail Corporativo')} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu.email@empresa.com"
                      className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#FE8D00] focus:ring-1 focus:ring-[#FE8D00] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t('formPhone', 'Telefone / WhatsApp')} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(+244) 926 084 375"
                      className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#FE8D00] focus:ring-1 focus:ring-[#FE8D00] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t('formService', 'Serviço Pretendido')}
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#FE8D00] focus:ring-1 focus:ring-[#FE8D00] transition-colors"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.id} className="bg-white text-slate-900">
                        {t(s.titleKey)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t('formMessage', 'Descreva a sua necessidade')} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Descreva detalhes como objetivos, prazos, tipos de carga ou suporte requerido..."
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#FE8D00] focus:ring-1 focus:ring-[#FE8D00] transition-colors resize-none"
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
                    id="contact-file-attachment"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.jpg,.jpeg,.png,.webp,.zip,.rar"
                    className="hidden"
                  />

                  {!attachmentFile ? (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full py-3.5 px-4 rounded-xl border border-dashed border-slate-300 hover:border-[#FE8D00] bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all flex items-center justify-center gap-2.5 text-xs font-medium cursor-pointer group"
                    >
                      <Paperclip className="w-4 h-4 text-[#FE8D00] group-hover:scale-110 transition-transform" />
                      <span>Clique para selecionar ou anexar arquivo de cotação/documento</span>
                    </button>
                  ) : (
                    <div className="p-3 rounded-xl bg-slate-50 border border-[#FE8D00]/50 flex items-center justify-between shadow-xs">
                      <div className="flex items-center gap-2.5 truncate">
                        <div className="p-2 rounded-lg bg-white text-[#FE8D00] border border-slate-200 shrink-0 shadow-xs">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="truncate text-left">
                          <p className="text-xs font-bold text-slate-900 truncate">{attachmentFile.name}</p>
                          <p className="text-[10px] text-slate-500">{formatBytes(attachmentFile.size)}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        title="Remover arquivo"
                        className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer shrink-0 ml-2"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#FE8D00] hover:bg-[#ff9e24] text-black font-black text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>A despachar mensagem e anexo para geral@ashled.com...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-black" />
                      <span>{t('formSubmit', 'Enviar Mensagem para Email')}</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-slate-100 border-2 border-[#FE8D00] text-[#FE8D00] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-black bg-[#FE8D00] px-3 py-1 rounded-full shadow-xs">
                    REF: {leadResult.ticketRef}
                  </span>
                  <h4 className="text-2xl font-black text-slate-900">Mensagem Enviada com Sucesso!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    A sua mensagem e anexo foram despachados para o e-mail oficial: <strong className="text-[#FE8D00]">geral@ashled.com</strong>
                  </p>
                  {leadResult.lead.attachmentName && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs mt-2">
                      <Paperclip className="w-3.5 h-3.5 text-[#FE8D00]" />
                      <span>Anexo: <strong>{leadResult.lead.attachmentName}</strong> ({leadResult.lead.attachmentSize})</span>
                    </div>
                  )}
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-3 flex flex-col sm:flex-row justify-center gap-2.5">
                  <a
                    href={leadResult.mailtoUrl}
                    className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md"
                  >
                    <Mail className="w-4 h-4 text-white" />
                    <span>Abrir e Enviar no Email</span>
                  </a>

                  <a
                    href={leadResult.whatsAppUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Enviar no WhatsApp</span>
                  </a>

                  <button
                    onClick={handleCopyDetails}
                    className="px-4 py-3 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer border border-slate-200"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copiado' : 'Copiar'}</span>
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setLeadResult(null);
                      setMessage('');
                    }}
                    className="text-xs text-slate-500 hover:text-slate-900 underline cursor-pointer"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column: Contact Details & Official Registration Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-white border border-slate-200 space-y-5 shadow-xl">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#b45309]">
                Informações da Empresa
              </h4>

              {/* Legal Registration */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-slate-900 font-black text-xs">
                  <ShieldCheck className="w-4 h-4 text-[#FE8D00]" />
                  <span>{COMPANY_INFO.legalName}</span>
                </div>
                <div className="text-xs text-slate-600">
                  <span>{t('nifLabel')}: </span>
                  <strong className="text-[#FE8D00] font-mono font-bold">{COMPANY_INFO.nif}</strong>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                {/* Phone */}
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-slate-700 hover:border-[#FE8D00] hover:text-[#FE8D00] transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-white text-[#FE8D00] border border-slate-200 shadow-xs">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase font-mono">Telefone / WhatsApp</div>
                      <div className="font-bold text-slate-900 group-hover:text-[#FE8D00]">{COMPANY_INFO.phone}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-slate-700 hover:border-[#FE8D00] hover:text-[#FE8D00] transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-white text-[#FE8D00] border border-slate-200 shadow-xs">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase font-mono">E-mail Oficial</div>
                      <div className="font-bold text-slate-900 group-hover:text-[#FE8D00]">{COMPANY_INFO.email}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                </a>

                {/* Address */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-slate-700 shadow-xs">
                  <div className="p-2.5 rounded-lg bg-white text-[#FE8D00] border border-slate-200 shrink-0 shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Endereço Sede</div>
                    <div className="font-bold text-slate-900 leading-relaxed">{COMPANY_INFO.address}</div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-slate-700 shadow-xs">
                  <div className="p-2.5 rounded-lg bg-white text-[#FE8D00] border border-slate-200 shrink-0 shadow-xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-mono">{t('officeHours')}</div>
                    <div className="text-slate-800 font-medium">{t('officeHoursValue')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};
