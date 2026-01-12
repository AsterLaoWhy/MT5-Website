import { motion } from 'framer-motion';
import { PlayCircle, Clock, BookOpen } from 'lucide-react';

const EducationSection = ({ content }) => {
  const categories = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <section id="education" className="py-20 bg-terminal-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 border border-profit-green/30 bg-profit-green/5">
            <BookOpen className="w-5 h-5 text-profit-green" />
            <span className="font-mono text-sm text-profit-green tracking-wider">
              FREE EDUCATION
            </span>
          </div>
          
          <h2 className="font-display text-5xl md:text-7xl text-white mb-4 tracking-wide">
            MASTER MT5
            <br />
            <span className="text-profit-green">BACKTESTING</span>
          </h2>
          
          <p className="font-body text-lg text-terminal-muted max-w-2xl mx-auto">
            Step-by-step tutorials on strategy testing, optimization, and validation.
            Learn the skills that separate profitable traders from the rest.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {content.map((tutorial, index) => (
            <motion.div
              key={tutorial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-profit-green/5 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300" />
              
              <div className="relative bg-terminal-dark border border-terminal-border overflow-hidden hover:border-profit-green/50 transition-all duration-300">
                <div className="relative aspect-video bg-terminal-bg">
                  <iframe
                    src={`https://www.youtube.com/embed/${tutorial.youtubeId}`}
                    title={tutorial.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                  
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="px-3 py-1 bg-terminal-bg/90 backdrop-blur-sm border border-profit-green/30">
                      <span className="font-mono text-xs text-profit-green tracking-wider">
                        {tutorial.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-terminal-muted" />
                    <span className="font-mono text-xs text-terminal-muted">
                      {tutorial.duration}
                    </span>
                  </div>

                  <h3 className="font-display text-xl text-white mb-2 tracking-wide group-hover:text-profit-green transition-colors">
                    {tutorial.title}
                  </h3>
                  
                  <p className="font-body text-sm text-terminal-muted leading-relaxed">
                    {tutorial.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block p-6 border border-terminal-border bg-terminal-dark/50">
            <p className="font-body text-terminal-text mb-4">
              Want more advanced training and support?
            </p>
            <button className="px-6 py-3 border-2 border-profit-green text-profit-green font-mono font-bold tracking-wider hover:bg-profit-green hover:text-terminal-bg transition-all">
              JOIN PREMIUM COMMUNITY
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
