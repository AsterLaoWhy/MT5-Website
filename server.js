import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// API Routes
app.post('/api/stripe/create-checkout', async (req, res) => {
  // TODO: Implement Stripe checkout
  res.json({ message: 'Stripe integration coming soon' });
});

app.post('/api/crypto/verify-payment', async (req, res) => {
  // TODO: Implement crypto payment verification
  res.json({ message: 'Crypto verification coming soon' });
});

app.post('/api/newsletter/subscribe', async (req, res) => {
  // TODO: Implement newsletter signup
  res.json({ message: 'Newsletter integration coming soon' });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
