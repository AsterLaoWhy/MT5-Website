import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Shield, CreditCard, Coins } from 'lucide-react';
import PerformanceChart from './PerformanceChart';

const EAModal = ({ ea, isOpen, onClose }) => {
  if (!isOpen || !ea) return null;

  const handlePurchase = (method) => {
    alert(`Payment integration coming soon! Selected: ${method}`);
    // TODO: Integrate Stripe and crypto payment
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-terminal-bg/95 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-terminal-dark border-2 border-profit-green/30 shadow-[0_0_50px_rgba(0,255,136,0.2)]"
        >
          <div className="sticky top-0 bg-terminal-dark/95 backdrop-blur-sm border-b border-terminal-border p-6 flex items-center justify-between z-10">
            <div>
              <h2 className="font-display text-3xl text-white tracking-wide mb-1">
                {ea.name}
              </h2>
              <p className="font-mono text-xs text-terminal-muted tracking-wider">
                {ea.id.toUpperCase()}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-terminal-border transition-colors"
            >
              <X className="w-6 h-6 text-terminal-text" />
            </button>
          </div>

          <div className="p-6 space-y-8">
            <div>
              <h3 className="font-mono text-sm text-terminal-muted mb-3 tracking-wider">
                DESCRIPTION
              </h3>
              <p className="font-body text-lg text-terminal-text leading-relaxed">
                {ea.description}
              </p>
            </div>

            <PerformanceChart 
              data={ea.chartData} 
              title="EQUITY CURVE - BACKTEST RESULTS"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(ea.metrics).map(([key, value]) => (
                <div key={key} className="bg-terminal-bg/50 border border-terminal-border p-4">
                  <div className="font-mono text-xs text-terminal-muted mb-2 uppercase">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div className={`font-mono text-xl font-bold ${
                    key.includes('win') || key.includes('profit') || key === 'profitFactor' 
                      ? 'text-profit-green' 
                      : key.includes('loss') || key.includes('drawdown')
                      ? 'text-warning-orange'
                      : 'text-white'
                  }`}>
                    {typeof value === 'number' && value > 100 ? value.toLocaleString() : value}
                    {key.includes('Rate') || key.includes('Drawdown') ? '%' : ''}
                    {key === 'netProfit' && value > 0 ? '$' : ''}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-mono text-sm text-terminal-muted mb-4 tracking-wider">
                KEY FEATURES
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {ea.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-terminal-bg/30 p-3 border border-terminal-border">
                    <Shield className="w-5 h-5 text-profit-green flex-shrink-0 mt-0.5" />
                    <span className="font-body text-terminal-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-terminal-border pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="font-mono text-xs text-terminal-muted mb-2">PRICE</div>
                  <div className="font-display text-5xl text-white mb-2">
                    ${ea.price}
                  </div>
                  <div className="font-mono text-sm text-terminal-muted">
                    or {ea.cryptoPrice}
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-full md:w-auto">
                  <button
                    onClick={() => handlePurchase('stripe')}
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-profit-green text-terminal-bg font-mono font-bold tracking-wider hover:bg-profit-green/90 transition-all hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]"
                  >
                    <CreditCard className="w-5 h-5" />
                    PURCHASE WITH CARD
                  </button>
                  
                  <button
                    onClick={() => handlePurchase('crypto')}
                    className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-terminal-text text-terminal-text font-mono font-bold tracking-wider hover:bg-terminal-text hover:text-terminal-bg transition-all"
                  >
                    <Coins className="w-5 h-5" />
                    PURCHASE WITH CRYPTO
                  </button>
                </div>
              </div>

              <div className="mt-6 p-4 bg-terminal-bg/50 border border-terminal-border">
                <div className="flex items-start gap-3">
                  <Download className="w-5 h-5 text-profit-green flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-terminal-text font-body mb-1">
                      <strong>Instant Download:</strong> Receive your EA files immediately after purchase
                    </p>
                    <p className="text-terminal-muted font-body text-xs">
                      Includes installation guide, parameter recommendations, and 30-day support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EAModal;
