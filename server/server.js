import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory / file ledger store for Node server
const LEDGER_PATH = path.join(__dirname, 'telemetry_ledger.json');
let telemetryLedger = [];
if (fs.existsSync(LEDGER_PATH)) {
  try {
    telemetryLedger = JSON.parse(fs.readFileSync(LEDGER_PATH, 'utf-8'));
  } catch (e) {
    telemetryLedger = [];
  }
}

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'Ashta Lakshmi Vedic Wealth Platform',
    engine: 'Harmonic Assessment & Recalibration Engine v2.0 (Node.js)',
    port: PORT
  });
});

// Telemetry Webhook Ingestion API
app.post('/api/v1/scores/ingest', (req, res) => {
  const { domain, source, score, user_id = 'demo_arjun', metrics = [] } = req.body;
  const entry = {
    id: Date.now(),
    user_id,
    domain: (domain || '').toLowerCase(),
    source,
    score: Number(score) || 0,
    metrics,
    received_at: new Date().toISOString()
  };
  telemetryLedger.push(entry);
  try {
    fs.writeFileSync(LEDGER_PATH, JSON.stringify(telemetryLedger, null, 2));
  } catch (e) {}

  res.json({
    status: 'success',
    message: `Ingested telemetry for ${domain} (${score}%)`,
    entry
  });
});

app.get('/api/v1/telemetry/:userId', (req, res) => {
  const userId = req.params.userId;
  const userEntries = telemetryLedger.filter(e => e.user_id === userId);
  const latestByDomain = {};
  userEntries.forEach(e => {
    latestByDomain[e.domain] = e;
  });
  res.json({
    user_id: userId,
    telemetry: latestByDomain
  });
});

// Serve static production build from dist
const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Vedic Wealth Ashta Lakshmi App v2.0] running on http://127.0.0.1:${PORT}`);
});
