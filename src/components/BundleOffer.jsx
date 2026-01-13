import { motion } from 'framer-motion';
import { Zap, TrendingUp, Package } from 'lucide-react';

const BundleOffer = ({ eas, onPurchase }) => {
  const totalRegularPrice = eas.reduce((sum, ea) => sum + ea.price, 0);
  const bundlePrice = 1100;
  const savings = totalRegularPrice - bundlePrice;
  const savingsPercent = Math.round((savings / totalRegularPrice) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative max-w-4xl mx-auto mt-12"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-profit-green/10 blur-2xl" />
      
      <div className="relative border-2 border-profit-green bg-terminal-dark overflow-hidden">
        {/* Top accent bar */}
        <div className="h-3 bg-gradient-to-r from-profit-green via-profit-green/80 to-profit-green" />
        
        <div className="p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left side - Bundle info */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-profit-green/10 border border-profit-green/30">
                <Package className="w-5 h-5 text-profit-green" />
                <span className="font-mono text-xs text-profit-green tracking-wider">
                  COMPLETE BUNDLE
                </span>
              </div>

              <h3 className="font-display text-4xl md:text-5xl text-white mb-3 tracking-wide">
                ALL THREE EAs
              </h3>
              
              <p className="font-body text-lg text-terminal-muted mb-4">
                Get the complete algorithmic trading system
              </p>

              {/* What's included */}
              <div className="space-y-2">
                {eas.map((ea, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <Zap className="w-4 h-4 text-profit-green flex-shrink-0" />
                    <span className="text-terminal-text font-body">{ea.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center divider (hidden on mobile) */}
            <div className="hidden md:block w-px h-32 bg-terminal-border" />

            {/* Right side - Pricing */}
            <div className="flex-1 text-center">
              {/* Regular price struck through */}
              <div className="mb-4">
                <div className="font-mono text-xs text-terminal-muted mb-1">
                  REGULAR PRICE
                </div>
                <div className="relative inline-block">
                  <span className="font-display text-2xl text-terminal-muted line-through">
                    ${totalRegularPrice}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-0.5 bg-warning-orange transform -rotate-12" />
                  </div>
                </div>
              </div>

              {/* Bundle price */}
              <div className="mb-4">
                <div className="font-mono text-xs text-profit-green mb-2 tracking-wider">
                  BUNDLE PRICE
                </div>
                <div className="font-display text-6xl text-profit-green mb-2">
                  ${bundlePrice}
                </div>
                <div className="inline-block px-3 py-1 bg-profit-green/10 border border-profit-green/30">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-profit-green" />
                    <span className="font-mono text-sm text-profit-green font-bold">
                      SAVE ${savings} ({savingsPercent}% OFF)
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => onPurchase('bundle')}
                className="w-full px-8 py-4 bg-profit-green text-terminal-bg font-mono font-bold text-lg tracking-wider hover:bg-profit-green/90 transition-all hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] transform hover:scale-105"
              >
                BUY COMPLETE BUNDLE
              </button>

              <p className="font-mono text-xs text-terminal-muted mt-3">
                One-time payment • Instant access • All future updates
              </p>
            </div>
          </div>

          {/* Bottom features bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-terminal-border">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-profit-green rounded-full" />
              <span className="font-mono text-xs text-terminal-text">Lifetime License</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-profit-green rounded-full" />
              <span className="font-mono text-xs text-terminal-text">Priority Support</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-profit-green rounded-full" />
              <span className="font-mono text-xs text-terminal-text">Free Updates</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BundleOffer;
