import { motion } from 'framer-motion';
import { TrendingUp, Shield, Zap } from 'lucide-react';

const EACard = ({ ea, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-profit-green/5 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300" />
      
      <div className="relative border border-terminal-border bg-terminal-dark/90 backdrop-blur-sm overflow-hidden hover:border-profit-green/50 transition-all duration-300">
        <div className="h-2 bg-gradient-to-r from-profit-green/50 via-profit-green to-profit-green/50" />
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="font-display text-2xl text-white mb-2 tracking-wide">
                {ea.name}
              </h3>
              <p className="font-body text-sm text-terminal-muted leading-relaxed">
                {ea.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-terminal-bg/50 p-3 border border-terminal-border">
              <div className="font-mono text-xs text-terminal-muted mb-1">WIN RATE</div>
              <div className="font-mono text-lg text-profit-green font-bold">
                {ea.metrics.winRate}%
              </div>
            </div>
            <div className="bg-terminal-bg/50 p-3 border border-terminal-border">
              <div className="font-mono text-xs text-terminal-muted mb-1">P.FACTOR</div>
              <div className="font-mono text-lg text-white font-bold">
                {ea.metrics.profitFactor}
              </div>
            </div>
            <div className="bg-terminal-bg/50 p-3 border border-terminal-border">
              <div className="font-mono text-xs text-terminal-muted mb-1">MAX DD</div>
              <div className="font-mono text-lg text-warning-orange font-bold">
                {ea.metrics.maxDrawdown}%
              </div>
            </div>
          </div>

          <div className="bg-terminal-bg/70 p-4 mb-6 border border-terminal-border">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-profit-green" />
                <span className="font-mono text-xs text-terminal-muted">NET PROFIT</span>
              </div>
              <span className="font-mono text-xl text-profit-green font-bold">
                +${ea.metrics.netProfit.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-terminal-muted">
              <span>{ea.metrics.totalTrades} TRADES</span>
              <span>{ea.backtestPeriod}</span>
            </div>
          </div>

          <div className="space-y-2 mb-6">
            {ea.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 bg-profit-green rounded-full" />
                <span className="text-terminal-text font-body">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="font-mono text-xs text-terminal-muted mb-1">PRICE</div>
              <div className="font-display text-3xl text-white">${ea.price}</div>
              <div className="font-mono text-xs text-terminal-muted mt-1">
                or {ea.cryptoPrice}
              </div>
            </div>
            <div className="flex gap-2">
              <Zap className="w-5 h-5 text-profit-green" />
              <Shield className="w-5 h-5 text-profit-green" />
            </div>
          </div>

          <button
            onClick={() => onSelect(ea)}
            className="w-full py-3 bg-profit-green text-terminal-bg font-mono font-bold tracking-wider hover:bg-profit-green/90 transition-all hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]"
          >
            VIEW DETAILS
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EACard;
