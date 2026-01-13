export const expertAdvisors = [
  {
    id: "ea-001",
    name: "RSI MACD Double Barrel Shotgun",
    description: "High-frequency scalping strategy optimized for EUR/USD and GBP/JPY pairs during London/NY overlap",
    price: 399,
    cryptoPrice: "~0.0045 BTC", //Find a way to get dynamic BTC pricing
    features: [
      "5-minute timeframe optimization",
      "Built-in risk management",
      "Multi-pair compatibility",
      "Automated lot sizing"
    ],
    metrics: {
      winRate: 67.8,
      avgWin: 24.5,
      avgLoss: -18.2,
      maxDrawdown: 12.3,
      profitFactor: 2.14,
      totalTrades: 1247,
      netProfit: 18450
    },
    backtestPeriod: "2020-01-01 to 2024-12-31",
    chartData: [
      { month: "Jan", balance: 10000 },
      { month: "Feb", balance: 10850 },
      { month: "Mar", balance: 11200 },
      { month: "Apr", balance: 12100 },
      { month: "May", balance: 13400 },
      { month: "Jun", balance: 14200 },
      { month: "Jul", balance: 15100 },
      { month: "Aug", balance: 16800 },
      { month: "Sep", balance: 17200 },
      { month: "Oct", balance: 18900 },
      { month: "Nov", balance: 20100 },
      { month: "Dec", balance: 21500 }
    ]
  },
  {
    id: "ea-002",
    name: "Ichimoku Supertrend",
    description: "Swing trading system designed for capturing major trend movements across multiple currency pairs",
    price: 499,
    cryptoPrice: "~0.0060 BTC", //Find a way to get dynamic BTC pricing
    features: [
      "4-hour and daily timeframes",
      "Trend confirmation filters",
      "Trailing stop automation",
      "News filter integration"
    ],
    metrics: {
      winRate: 58.2,
      avgWin: 142.8,
      avgLoss: -76.4,
      maxDrawdown: 18.7,
      profitFactor: 1.86,
      totalTrades: 324,
      netProfit: 24680
    },
    backtestPeriod: "2022-01-01 to 2024-12-31",
    chartData: [
      { month: "Jan", balance: 10000 },
      { month: "Feb", balance: 11200 },
      { month: "Mar", balance: 12800 },
      { month: "Apr", balance: 13200 },
      { month: "May", balance: 15400 },
      { month: "Jun", balance: 16100 },
      { month: "Jul", balance: 18200 },
      { month: "Aug", balance: 19800 },
      { month: "Sep", balance: 21200 },
      { month: "Oct", balance: 23400 },
      { month: "Nov", balance: 25100 },
      { month: "Dec", balance: 26800 }
    ]
  },
  {
    id: "ea-003",
    name: "Grid Master",
    description: "Intelligent grid trading system with dynamic level adjustment and market volatility adaptation",
    price: 599,
    cryptoPrice: "~0.0075 BTC", //Find a way to get dynamic BTC pricing
    features: [
      "Adaptive grid spacing",
      "Volatility-based adjustments",
      "Multiple exit strategies",
      "Portfolio hedging options"
    ],
    metrics: {
      winRate: 72.4,
      avgWin: 38.6,
      avgLoss: -42.1,
      maxDrawdown: 22.5,
      profitFactor: 2.43,
      totalTrades: 892,
      netProfit: 31240
    },
    backtestPeriod: "2022-01-01 to 2024-12-31",
    chartData: [
      { month: "Jan", balance: 10000 },
      { month: "Feb", balance: 11800 },
      { month: "Mar", balance: 13200 },
      { month: "Apr", balance: 15100 },
      { month: "May", balance: 17400 },
      { month: "Jun", balance: 19200 },
      { month: "Jul", balance: 21800 },
      { month: "Aug", balance: 24100 },
      { month: "Sep", balance: 26800 },
      { month: "Oct", balance: 29400 },
      { month: "Nov", balance: 32100 },
      { month: "Dec", balance: 34500 }
    ]
  }
];

export const educationContent = [
  {
    id: "tutorial-001",
    title: "Complete MT5 Backtesting Guide",
    description: "Step-by-step walkthrough of the MT5 Strategy Tester",
    duration: "18:42",
    youtubeId: "YOUR_YOUTUBE_VIDEO_ID_1",
    category: "Beginner"
  },
  {
    id: "tutorial-002",
    title: "Optimizing EA Parameters",
    description: "Learn how to optimize your EA settings for maximum performance",
    duration: "24:15",
    youtubeId: "YOUR_YOUTUBE_VIDEO_ID_2",
    category: "Intermediate"
  },
  {
    id: "tutorial-003",
    title: "Reading Backtest Reports",
    description: "Understanding metrics, identifying profitable strategies",
    duration: "16:30",
    youtubeId: "YOUR_YOUTUBE_VIDEO_ID_3",
    category: "Beginner"
  },
  {
    id: "tutorial-004",
    title: "Forward Testing Best Practices",
    description: "How to validate your EA on demo accounts before going live",
    duration: "21:08",
    youtubeId: "YOUR_YOUTUBE_VIDEO_ID_4",
    category: "Advanced"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Marcus T.",
    role: "Full-time Trader",
    content: "The Momentum Scalper completely changed my trading game. Consistent profits and the education section helped me understand why it works.",
    result: "+$24,500 in 6 months"
  },
  {
    id: 2,
    name: "Sarah K.",
    role: "Part-time Trader",
    content: "Finally, an EA that actually delivers. The backtesting tutorials gave me confidence to optimize settings for my account.",
    result: "+$12,800 in 4 months"
  },
  {
    id: 3,
    name: "David L.",
    role: "Swing Trader",
    content: "Trend Rider Elite is exactly what I needed for capturing big moves without sitting at my desk all day.",
    result: "+$18,200 in 5 months"
  }
];
