import { motion } from 'framer-motion';
import { TrendingUp, Activity, Target } from 'lucide-react';

const Hero = ({ onViewEAs, onLearnBacktesting }) => {
  const stats = [
    { label: 'AVG WIN RATE', value: '66.1%', icon: Target },
    { label: 'TOTAL TRADES', value: '2,463', icon: Activity },
    { label: 'NET PROFIT', value: '$74,370', icon: TrendingUp },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-terminal-bg">
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-10"
        style={{ backgroundSize: '50px 50px' }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-terminal-bg/50 to-terminal-bg" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6 px-4 py-2 border border-profit-green/30 bg-profit-green/5 rounded">
            <span className="font-mono text-sm text-profit-green tracking-wider">
              VERIFIED BACKTEST RESULTS 2022-2024
            </span>
          </div>

          <h1 className="font-display text-7xl md:text-9xl font-bold text-white mb-6 leading-none tracking-tight">
            PROFESSIONAL
            <br />
            <span className="text-profit-green">MT5 EXPERT</span>
            <br />
            ADVISORS
          </h1>

          <p className="font-body text-xl md:text-2xl text-terminal-muted max-w-3xl mx-auto mb-12 leading-relaxed">
            Battle-tested algorithmic trading systems with transparent performance metrics.
            <span className="block mt-2 text-terminal-text">Learn to backtest like a pro.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.button
              onClick={onViewEAs}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-profit-green text-terminal-bg font-mono font-bold text-lg tracking-wider hover:bg-profit-green/90 transition-all shadow-[0_0_30px_rgba(0,255,136,0.3)]"
            >
              VIEW EXPERT ADVISORS
            </motion.button>
            
            <motion.button
              onClick={onLearnBacktesting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-terminal-text text-terminal-text font-mono font-bold text-lg tracking-wider hover:bg-terminal-text hover:text-terminal-bg transition-all"
            >
              LEARN BACKTESTING
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-profit-green/5 blur-xl group-hover:bg-profit-green/10 transition-all" />
                  <div className="relative border border-terminal-border bg-terminal-dark/80 backdrop-blur-sm p-6 hover:border-profit-green/50 transition-all">
                    <div className="flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-profit-green" />
                    </div>
                    <div className="font-mono text-xs text-terminal-muted mb-2 tracking-widest">
                      {stat.label}
                    </div>
                    <div className="font-display text-3xl text-white">
                      {stat.value}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-terminal-muted rounded-full flex justify-center p-2"
        >
          <div className="w-1 h-2 bg-profit-green rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
