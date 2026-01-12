import { Mail, Twitter, Youtube, Github } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Newsletter signup coming soon!');
    setEmail('');
  };

  return (
    <footer className="bg-terminal-dark border-t border-terminal-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="font-display text-2xl text-white mb-4 tracking-wide">
              MT5<span className="text-profit-green">EXPERTS</span>
            </div>
            <p className="font-body text-sm text-terminal-muted leading-relaxed">
              Professional algorithmic trading solutions with transparent performance metrics.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-sm text-white mb-4 tracking-wider">PRODUCTS</h4>
            <ul className="space-y-2">
              <li><a href="#eas" className="font-body text-sm text-terminal-muted hover:text-profit-green transition-colors">Expert Advisors</a></li>
              <li><a href="#education" className="font-body text-sm text-terminal-muted hover:text-profit-green transition-colors">Free Education</a></li>
              <li><a href="#" className="font-body text-sm text-terminal-muted hover:text-profit-green transition-colors">Premium Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm text-white mb-4 tracking-wider">SUPPORT</h4>
            <ul className="space-y-2">
              <li><a href="#faq" className="font-body text-sm text-terminal-muted hover:text-profit-green transition-colors">FAQ</a></li>
              <li><a href="#" className="font-body text-sm text-terminal-muted hover:text-profit-green transition-colors">Installation Guide</a></li>
              <li><a href="#" className="font-body text-sm text-terminal-muted hover:text-profit-green transition-colors">Contact Support</a></li>
              <li><a href="#" className="font-body text-sm text-terminal-muted hover:text-profit-green transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm text-white mb-4 tracking-wider">NEWSLETTER</h4>
            <p className="font-body text-sm text-terminal-muted mb-4">
              Trading tips and EA updates
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-2 bg-terminal-bg border border-terminal-border text-terminal-text font-mono text-sm focus:border-profit-green focus:outline-none transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-profit-green text-terminal-bg font-mono text-sm font-bold tracking-wider hover:bg-profit-green/90 transition-all"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-terminal-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-terminal-muted">
            © 2025 MT5 Experts. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-terminal-muted hover:text-profit-green transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-terminal-muted hover:text-profit-green transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="text-terminal-muted hover:text-profit-green transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="text-terminal-muted hover:text-profit-green transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 p-4 border border-warning-orange/30 bg-warning-orange/5">
          <p className="font-mono text-xs text-terminal-muted text-center">
            <strong className="text-warning-orange">RISK DISCLAIMER:</strong> Trading forex and CFDs carries a high level of risk. 
            Past performance does not guarantee future results. Only trade with capital you can afford to lose.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
