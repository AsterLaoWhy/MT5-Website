import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I install the Expert Advisor in MT5?",
      answer: "After purchase, you'll receive detailed installation instructions. Simply copy the .ex5 file to your MT5 'Experts' folder, restart MT5, and drag the EA onto your chart. Full video tutorial included."
    },
    {
      question: "Can I use these EAs on a demo account first?",
      answer: "Absolutely. We strongly recommend testing on demo accounts first. The EAs work identically on both demo and live accounts, allowing you to verify performance before risking real capital."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied with the EA performance or our support, contact us for a full refund. No questions asked."
    },
    {
      question: "Do I need VPS hosting?",
      answer: "For optimal 24/7 operation, VPS hosting is recommended but not required. You can run EAs on your local computer, but they'll only trade when your computer is on and MT5 is running."
    },
    {
      question: "Are backtest results realistic?",
      answer: "Our backtests use real tick data with realistic spreads and slippage modeling. Results are conservative and include all costs. We also provide forward test results on demo accounts."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards via Stripe and cryptocurrency payments (BTC, ETH, USDT). All transactions are secure and processed instantly."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! Every purchase includes 30 days of email support. We also have a community forum where users share settings and strategies."
    },
    {
      question: "Can I use one license on multiple accounts?",
      answer: "Each license is valid for one live account and unlimited demo accounts. Additional licenses are available at a discounted rate."
    }
  ];

  return (
    <section className="py-20 bg-terminal-bg">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 border border-profit-green/30 bg-profit-green/5">
            <HelpCircle className="w-5 h-5 text-profit-green" />
            <span className="font-mono text-sm text-profit-green tracking-wider">
              FAQ
            </span>
          </div>
          
          <h2 className="font-display text-5xl md:text-7xl text-white mb-4 tracking-wide">
            QUESTIONS?
            <br />
            <span className="text-profit-green">ANSWERED.</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-terminal-dark border border-terminal-border hover:border-profit-green/50 transition-all p-6 group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-lg text-white group-hover:text-profit-green transition-colors pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-terminal-muted flex-shrink-0" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="font-body text-terminal-muted mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
