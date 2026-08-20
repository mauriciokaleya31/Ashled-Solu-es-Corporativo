import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API health and lead endpoints
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.post('/api/send-lead', (req, res) => {
  try {
    const lead = req.body;
    console.log('[LEAD RECEIVED - ASHLED SOLUÇÕES]:', JSON.stringify(lead, null, 2));
    // Lead is successfully logged and acknowledged
    res.json({
      success: true,
      message: 'Lead received and processed successfully',
      destinationEmails: ['geral@ashled.com', 'kaleyapt@gmail.com'],
      ticketRef: lead.ticketRef || `ASH-${Date.now().toString().slice(-6)}`,
    });
  } catch (err) {
    console.error('Error processing lead:', err);
    res.status(500).json({ error: 'Internal server error processing lead' });
  }
});

// Serve static files from the dist directory
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// Handle all other routes by serving index.html (for client-side SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
