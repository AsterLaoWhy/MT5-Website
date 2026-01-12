import { motion } from 'framer-motion';
import { TrendingUp, Star } from 'lucide-react';

const Testimonials = ({ testimonials }) => {
  return (
    <section className="py-20 bg-terminal-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl text-white mb-4 tracking-wide">
            VERIFIED
            <br />
            <span className="text-profit-green">RESULTS</span>
          </h2>
          <p className="font-body text-lg text-terminal-muted">
            Real traders. Real profits. Real testimonials.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-profit-green/5 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300" />
              
              <div className="relative bg-terminal-bg border border-terminal-border p-6 hover:border-profit-green/50 transition-all h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-profit-green text-profit-green" />
                  ))}
                </div>

                <p className="font-body text-terminal-text mb-6 leading-relaxed flex-grow">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-terminal-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-mono text-sm text-white font-bold">
                        {testimonial.name}
                      </div>
                      <div className="font-mono text-xs text-terminal-muted">
                        {testimonial.role}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 justify-end mb-1">
                        <TrendingUp className="w-4 h-4 text-profit-green" />
                        <span className="font-mono text-xs text-terminal-muted">RESULT</span>
                      </div>
                      <div className="font-mono text-sm text-profit-green font-bold">
                        {testimonial.result}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
