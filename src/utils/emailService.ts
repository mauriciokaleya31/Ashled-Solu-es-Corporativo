import { COMPANY_INFO } from '../data/companyData';

export interface LeadSubmission {
  ticketRef: string;
  name: string;
  company?: string;
  email: string;
  phone: string;
  serviceId?: string;
  serviceName?: string;
  urgency?: string;
  geoScope?: string;
  message: string;
  timestamp: string;
  destinationEmails: string[];
}

export const OFFICIAL_DESTINATION_EMAILS = [
  'geral@ashled.com',
];

/**
 * Format a comprehensive, executive plain-text body for email clients
 */
export function formatEmailBody(lead: LeadSubmission): string {
  return `========================================================
SOLICITAÇÃO DE COTAÇÃO & CONTACTO - ASHLED SOLUÇÕES, LDA
Ref. de Acompanhamento: ${lead.ticketRef}
Data / Hora: ${lead.timestamp}
========================================================

DADOS DO CLIENTE / SOLICITANTE:
--------------------------------------------------------
- Nome Completo: ${lead.name}
- Empresa / Entidade: ${lead.company || 'Particular / Não especificado'}
- E-mail de Contacto: ${lead.email}
- Telefone / WhatsApp: ${lead.phone}

DETALHES DO SERVIÇO & REQUISITOS:
--------------------------------------------------------
- Serviço Pretendido: ${lead.serviceName || lead.serviceId || 'Coordenação One-Stop'}
- Nível de Urgência: ${lead.urgency || 'Padrão / Planeado'}
- Âmbito Geográfico: ${lead.geoScope || 'Angola / Global'}

MENSAGEM / ESPECIFICAÇÃO DA NECESSIDADE:
--------------------------------------------------------
${lead.message || 'Sem mensagem adicional descrita.'}

--------------------------------------------------------
ENVIADO PARA: ${lead.destinationEmails.join(', ')}
EMPRESA: ASHLED SOLUÇÕES COMÉRCIO E PRESTAÇÃO DE SERVIÇOS, LDA
NIF: 5001963090 | Ilha do Cabo, Luanda, Angola
Telefone Oficial: +244 926 084 375
========================================================`;
}

/**
 * Generates standard mailto: link with full pre-filled body & recipients
 */
export function generateMailtoUrl(lead: LeadSubmission): string {
  const recipients = lead.destinationEmails.join(',');
  const subject = `[Cotação Ashled #${lead.ticketRef}] - ${lead.serviceName || 'Pedido de Serviço'} - ${lead.name}`;
  const body = formatEmailBody(lead);

  return `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Generates direct WhatsApp message link with all structured lead details
 */
export function generateWhatsAppUrl(lead: LeadSubmission): string {
  const text = `*NOVA SOLICITAÇÃO ASHLED #${lead.ticketRef}*
👤 *Nome:* ${lead.name}
🏢 *Empresa:* ${lead.company || 'N/A'}
📧 *Email:* ${lead.email}
📞 *Telefone:* ${lead.phone}
🎯 *Serviço:* ${lead.serviceName || lead.serviceId || 'Geral'}
⏱️ *Urgência:* ${lead.urgency || 'Padrão'}
🌐 *Âmbito:* ${lead.geoScope || 'Angola'}

📝 *Mensagem:*
${lead.message || 'Solicitação enviada via website oficial.'}

_Enviado para ${lead.destinationEmails.join(', ')}_`;

  return `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
}

/**
 * Processes and dispatches the lead:
 * 1. Saves locally in browser localStorage audit log
 * 2. Attempts API notification if available
 * 3. Returns pre-built mailto and whatsapp links
 */
export async function dispatchLeadSubmission(data: {
  name: string;
  company?: string;
  email: string;
  phone: string;
  serviceId?: string;
  serviceName?: string;
  urgency?: string;
  geoScope?: string;
  message: string;
}): Promise<{
  success: boolean;
  ticketRef: string;
  mailtoUrl: string;
  whatsAppUrl: string;
  formattedBody: string;
  lead: LeadSubmission;
}> {
  const ticketRef = `ASH-${Math.floor(100000 + Math.random() * 900000)}`;
  const now = new Date();
  const timestamp = now.toLocaleString('pt-PT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const lead: LeadSubmission = {
    ticketRef,
    name: data.name,
    company: data.company,
    email: data.email,
    phone: data.phone,
    serviceId: data.serviceId,
    serviceName: data.serviceName,
    urgency: data.urgency,
    geoScope: data.geoScope,
    message: data.message,
    timestamp,
    destinationEmails: OFFICIAL_DESTINATION_EMAILS,
  };

  // 1. Save to local audit history
  try {
    const existing = JSON.parse(localStorage.getItem('ashled_leads_history') || '[]');
    existing.unshift(lead);
    localStorage.setItem('ashled_leads_history', JSON.stringify(existing.slice(0, 50)));
  } catch (err) {
    console.error('LocalStorage write error:', err);
  }

  // 2. Format outcomes
  const formattedBody = formatEmailBody(lead);
  const mailtoUrl = generateMailtoUrl(lead);
  const whatsAppUrl = generateWhatsAppUrl(lead);

  // 3. Dispatch to backend API
  try {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: data.serviceId ? 'quote' : 'contact',
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        subject: data.serviceName || 'Contacto pelo site Ashled',
        message: data.message,
        services: data.serviceName,
        urgency: data.urgency,
        destination: data.geoScope,
      }),
    });
    const resData = await res.json();
    console.log('Envio de email resultado:', resData);
  } catch (err) {
    console.error('Aviso ao enviar para o endpoint de email:', err);
  }

  return {
    success: true,
    ticketRef,
    mailtoUrl,
    whatsAppUrl,
    formattedBody,
    lead,
  };
}
