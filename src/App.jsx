import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import EACard from './components/EACard';
import EAModal from './components/EAModal';
import EducationSection from './components/EducationSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { expertAdvisors, educationContent, testimonials } from './data/content';

function App() {
  const [selectedEA, setSelectedEA] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectEA = (ea) => {
    setSelectedEA(ea);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEA(null), 300);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-text">
      <Navigation />
      
      <Hero 
        onViewEAs={() => scrollToSection('eas')}
        onLearnBacktesting={() => scrollToSection('education')}
      />

      <section id="eas" className="py-20 bg-terminal-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-7xl text-white mb-4 tracking-wide">
              EXPERT
              <br />
              <span className="text-profit-green">ADVISORS</span>
            </h2>
            <p className="font-body text-lg text-terminal-muted max-w-2xl mx-auto">
              Professionally developed, rigorously backtested, ready to deploy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertAdvisors.map((ea) => (
              <EACard key={ea.id} ea={ea} onSelect={handleSelectEA} />
            ))}
          </div>
        </div>
      </section>

      <EducationSection content={educationContent} />

      <Testimonials testimonials={testimonials} />

      <FAQ />

      <Footer />

      <EAModal 
        ea={selectedEA}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
