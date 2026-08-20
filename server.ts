import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route para envio de e-mails de contacto e cotação
  app.post('/api/send-email', async (req, res) => {
    try {
      const { type, name, email, phone, company, subject, message, services, urgency, volume, destination } = req.body;

      const recipientList = ['geral@ashled.com'];
      
      const emailSubject = type === 'quote' 
        ? `[NOVA COTAÇÃO - ASHLED] ${services || 'Serviços Logísticos'} - ${name}`
        : `[NOVA MENSAGEM - ASHLED] ${subject || 'Contacto do Website'} - ${name}`;

      const emailHtml = `
        <div style="font-family: Arial, sans-serif; background: #0a0a0a; color: #ffffff; padding: 24px; border-radius: 12px; border: 1px solid #FE8D00;">
          <div style="border-bottom: 2px solid #FE8D00; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #FE8D00; margin: 0;">ASHLED SOLUÇÕES - ${type === 'quote' ? 'NOVO PEDIDO DE COTAÇÃO' : 'NOVA MENSAGEM DO SITE'}</h2>
            <p style="color: #a3a3a3; font-size: 12px; margin: 4px 0 0 0;">Recebido via formulário oficial do website ashled.com</p>
          </div>

          <div style="background: #171717; padding: 16px; border-radius: 8px; margin-bottom: 16px; border: 1px solid #262626;">
            <h3 style="color: #ffffff; margin-top: 0; font-size: 15px; border-bottom: 1px solid #333; padding-bottom: 6px;">DADOS DO CLIENTE / SOLICITANTE</h3>
            <p style="margin: 6px 0; font-size: 14px;"><strong>Nome:</strong> ${name || 'N/A'}</p>
            <p style="margin: 6px 0; font-size: 14px;"><strong>E-mail:</strong> <a href="mailto:${email}" style="color: #FE8D00;">${email || 'N/A'}</a></p>
            <p style="margin: 6px 0; font-size: 14px;"><strong>Telefone / WhatsApp:</strong> ${phone || 'N/A'}</p>
            <p style="margin: 6px 0; font-size: 14px;"><strong>Empresa / Organização:</strong> ${company || 'Particular'}</p>
            ${destination ? `<p style="margin: 6px 0; font-size: 14px;"><strong>Destino / Rota:</strong> ${destination}</p>` : ''}
            ${volume ? `<p style="margin: 6px 0; font-size: 14px;"><strong>Volume / Quantidade Estimada:</strong> ${volume}</p>` : ''}
            ${urgency ? `<p style="margin: 6px 0; font-size: 14px;"><strong>Urgência:</strong> ${urgency}</p>` : ''}
            ${services ? `<p style="margin: 6px 0; font-size: 14px;"><strong>Serviços Solicitados:</strong> ${services}</p>` : ''}
          </div>

          <div style="background: #171717; padding: 16px; border-radius: 8px; border: 1px solid #262626;">
            <h3 style="color: #ffffff; margin-top: 0; font-size: 15px; border-bottom: 1px solid #333; padding-bottom: 6px;">MENSAGEM / ESCOPO</h3>
            <p style="margin: 6px 0; font-size: 14px; white-space: pre-wrap; line-height: 1.6; color: #e5e5e5;">${message || 'Sem mensagem adicional descrita.'}</p>
          </div>

          <div style="margin-top: 20px; font-size: 11px; color: #737373; text-align: center;">
            Ashled Soluções (SU) Lda • NIF: 5002246755 • Luanda, Angola
          </div>
        </div>
      `;

      // Configuração SMTP ou envio real com fallback
      const smtpHost = process.env.SMTP_HOST;
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;
      const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);

      let deliveryStatus = 'simulated';

      if (smtpHost && smtpUser && smtpPass) {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Ashled Soluções Website" <${smtpUser}>`,
          to: recipientList.join(', '),
          replyTo: email,
          subject: emailSubject,
          html: emailHtml,
        });
        deliveryStatus = 'sent_smtp';
      } else {
        // Log estruturado no servidor quando SMTP não configurado
        console.log('--- [NOVO EMAIL RECEBIDO NO SERVIDOR ASHLED] ---');
        console.log(`Para: ${recipientList.join(', ')}`);
        console.log(`De: ${name} <${email}>`);
        console.log(`Assunto: ${emailSubject}`);
        console.log(`Mensagem: ${message}`);
        console.log('------------------------------------------------');
      }

      return res.status(200).json({
        success: true,
        message: 'Mensagem registada e enviada com sucesso.',
        status: deliveryStatus,
        recipients: recipientList,
      });
    } catch (err: any) {
      console.error('Erro ao enviar e-mail:', err);
      return res.status(500).json({
        success: false,
        error: err.message || 'Falha ao processar e-mail',
      });
    }
  });

  // Vite middleware em desenvolvimento ou servir static em produção
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Ashled Server running on http://localhost:${PORT}`);
  });
}

startServer();
