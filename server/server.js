require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs-extra');
const { closeDatabase, connectDatabase } = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;
// CORS setup: allow process.env.CLIENT_URL or local dev origins / default allow
const allowedOrigins = process.env.CLIENT_URL 
  ? process.env.CLIENT_URL.split(',').map(url => url.trim()) 
  : ['http://localhost:5173', 'http://localhost:3000'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes('*')) {
      callback(null, true);
    } else {
      callback(new Error('Origin is not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/progress', require('./routes/progress'));
app.get('/api/health', (_, res) => res.json({ status: 'ok', time: new Date() }));

// Serve static assets in production if client build exists (Next.js export or Vite build)
const clientBuildPath = [
  path.join(__dirname, '../client/out'),
  path.join(__dirname, '../client/dist'),
].find(p => fs.existsSync(p));

if (clientBuildPath) {
  app.use(express.static(clientBuildPath));
  app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) return;
    const cleanPath = req.path.replace(/^\/|\/$/g, '');
    const exactHtml = path.join(clientBuildPath, `${cleanPath}.html`);
    if (cleanPath && fs.existsSync(exactHtml)) {
      return res.sendFile(exactHtml);
    }
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
}

const start = async () => {
  await connectDatabase();
  app.listen(PORT, () => console.log(`\n🚀  DSA Mastery API running on port ${PORT}\n`));
};

start().catch(error => {
  console.error('Unable to start API:', error.message);
  process.exit(1);
});

process.on('SIGTERM', closeDatabase);
process.on('SIGINT', closeDatabase);

