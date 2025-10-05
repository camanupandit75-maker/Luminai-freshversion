import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import { HeroWithMarquee } from './components/ui/cta-with-marquee';
import HowItWorks from './components/HowItWorks';
import InteractiveDemo from './components/InteractiveDemo';
import UseCases from './components/UseCases';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <HeroWithMarquee />
        <HowItWorks />
        <InteractiveDemo />
        <UseCases />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
