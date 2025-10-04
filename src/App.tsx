import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import InteractiveDemo from './components/InteractiveDemo';
import UseCases from './components/UseCases';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Navigation />
        <main className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Hero />
          <HowItWorks />
          <InteractiveDemo />
          <UseCases />
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </div>
  );
}

export default App;
