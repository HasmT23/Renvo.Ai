const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Routes
app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'Renvo AI Agent', version: '1.0.0' });
});

// AI Analysis Routes (placeholder)
app.post('/api/analyze/vehicle', (req, res) => {
  // TODO: Implement AI vehicle analysis
  res.json({ 
    message: 'AI analysis endpoint - Coming in Sprint 2',
    data: null 
  });
});

app.post('/api/analyze/photos', (req, res) => {
  // TODO: Implement AI photo analysis
  res.json({ 
    message: 'Photo analysis endpoint - Coming in Sprint 2',
    data: null 
  });
});

app.post('/api/price/estimate', (req, res) => {
  // TODO: Implement price estimation
  res.json({ 
    message: 'Price estimation endpoint - Coming in Sprint 2',
    data: null 
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Renvo AI Agent running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
}); 