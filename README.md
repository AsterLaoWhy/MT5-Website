# MT5 Expert Advisors Website

Professional algorithmic trading platform showcasing Expert Advisors with verified backtest results and comprehensive MT5 backtesting education.

## 🎨 Design Philosophy

**Dark Financial Brutalism** - A sophisticated dark theme combining Bloomberg Terminal aesthetics with modern web design:
- High-contrast data visualization
- Monospace typography for numerical data
- Neon green profit indicators (#00ff88)
- Sharp geometric layouts
- Glassmorphism effects on cards

## 🚀 Features

- **3 Expert Advisors** with detailed metrics and performance charts
- **Dual Payment Options**: Stripe (card) + Cryptocurrency
- **Educational Content**: Unlisted YouTube video tutorials on MT5 backtesting
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: Framer Motion for professional UI transitions
- **Performance Charts**: Recharts integration for equity curves
- **Modal System**: Detailed EA information and purchase flow

## 📦 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Fonts**: Space Mono, Bebas Neue, IBM Plex Sans

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📂 Project Structure

```
mt5-ea-site/
├── src/
│   ├── components/
│   │   ├── Hero.jsx              # Landing hero section
│   │   ├── Navigation.jsx        # Sticky navigation
│   │   ├── EACard.jsx           # EA product card
│   │   ├── EAModal.jsx          # EA detail modal with purchase
│   │   ├── PerformanceChart.jsx # Equity curve visualization
│   │   ├── EducationSection.jsx # YouTube tutorials
│   │   ├── Testimonials.jsx     # User testimonials
│   │   ├── FAQ.jsx              # Accordion FAQ
│   │   └── Footer.jsx           # Site footer
│   ├── data/
│   │   └── content.js           # EA data, tutorials, testimonials
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles + Tailwind
├── public/                      # Static assets
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## 🔧 Data Structure

### Expert Advisors (`src/data/content.js`)

The EA data is structured for easy updating from static to dynamic:

```javascript
{
  id: "ea-001",
  name: "EA Name",
  description: "Description",
  price: 299,
  cryptoPrice: "0.0045 BTC",
  features: ["Feature 1", "Feature 2"],
  metrics: {
    winRate: 67.8,
    avgWin: 24.5,
    avgLoss: -18.2,
    maxDrawdown: 12.3,
    profitFactor: 2.14,
    totalTrades: 1247,
    netProfit: 18450
  },
  backtestPeriod: "2022-01-01 to 2024-12-31",
  chartData: [
    { month: "Jan", balance: 10000 },
    // ... monthly data points
  ]
}
```

**To convert to dynamic data:**
1. Replace the exported array with an API fetch
2. Add loading states in components
3. Implement data refresh logic
4. Connect to backend database/CMS

### Education Content

YouTube videos are embedded via video IDs:

```javascript
{
  id: "tutorial-001",
  title: "Tutorial Title",
  description: "Description",
  duration: "18:42",
  youtubeId: "YOUR_YOUTUBE_VIDEO_ID",
  category: "Beginner"
}
```

## 💳 Payment Integration

### Stripe Setup

1. **Sign up** at [stripe.com](https://stripe.com)
2. **Get API keys** from Dashboard → Developers → API keys
3. **Install Stripe**: `npm install @stripe/stripe-js`
4. **Update `EAModal.jsx`**:

```javascript
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_publishable_key');

const handlePurchase = async (method) => {
  if (method === 'stripe') {
    const stripe = await stripePromise;
    // Implement Stripe Checkout
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      body: JSON.stringify({ eaId: ea.id })
    });
    const session = await response.json();
    stripe.redirectToCheckout({ sessionId: session.id });
  }
};
```

### Crypto Payments

Options for cryptocurrency integration:
- **Coinbase Commerce** (easiest)
- **BTCPay Server** (self-hosted)
- **CoinPayments**
- **NOWPayments**

## 🌐 Deployment to Render.com

### Option 1: Static Site

1. **Build the project**: `npm run build`
2. **Push to GitHub**
3. **Connect to Render**:
   - Go to [render.com](https://render.com)
   - New → Static Site
   - Connect GitHub repository
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`

### Option 2: Web Service (with Node.js backend)

If you add a backend for user accounts or dynamic data:

1. **Create `server.js`**:
```javascript
import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('dist'));
app.use(express.json());

// API routes here
app.post('/api/purchase', (req, res) => {
  // Handle purchases
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Server on ${PORT}`));
```

2. **Update `package.json`**:
```json
{
  "scripts": {
    "start": "node server.js",
    "build": "vite build"
  }
}
```

3. **Deploy to Render**:
   - New → Web Service
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`

## 🔐 User Account Storage

User accounts are stored **externally** (not on the website):

### Recommended Services:
1. **Auth0** - Complete authentication solution
2. **Supabase** - PostgreSQL with built-in auth
3. **Firebase Auth** - Google's authentication service
4. **Clerk** - Modern authentication for React

### Integration Example (Auth0):

```javascript
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  
  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      ) : (
        <div>
          <p>Welcome {user.name}</p>
          <button onClick={() => logout()}>Log Out</button>
        </div>
      )}
    </div>
  );
}
```

## 📝 Customization

### Update EA Data
Edit `src/data/content.js` to add/modify EAs, tutorials, or testimonials.

### Change Colors
Update `tailwind.config.js` theme colors:
```javascript
colors: {
  'terminal-bg': '#0a0e14',
  'profit-green': '#00ff88',
  // ... your colors
}
```

### Add New Sections
1. Create component in `src/components/`
2. Import and add to `App.jsx`
3. Update navigation in `Navigation.jsx`

## 🔄 Converting to Dynamic Data

When ready for dynamic updates:

1. **Set up backend API** (Express, FastAPI, etc.)
2. **Create data endpoints**:
   ```javascript
   app.get('/api/eas', async (req, res) => {
     const eas = await db.query('SELECT * FROM expert_advisors');
     res.json(eas);
   });
   ```
3. **Update frontend to fetch data**:
   ```javascript
   const [eas, setEas] = useState([]);
   
   useEffect(() => {
     fetch('/api/eas')
       .then(res => res.json())
       .then(data => setEas(data));
   }, []);
   ```
4. **Add loading states** and error handling

## 📊 Analytics

Add analytics to track conversions:

```html
<!-- In index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Troubleshooting

**Build fails**: Ensure all dependencies installed with `npm install`
**Animations not smooth**: Check if Framer Motion installed correctly
**Charts not displaying**: Verify Recharts imported and data formatted correctly
**YouTube videos not loading**: Confirm video IDs are correct and videos are unlisted (not private)

## 📄 License

Proprietary - All rights reserved

## 🤝 Support

For issues or questions:
- Open GitHub issue
- Email: support@mt5experts.com
- Discord: [Your Discord Link]

---

Built with ⚡ by [Your Name]
