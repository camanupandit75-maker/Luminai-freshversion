import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import { HeroWithMarquee } from './components/ui/cta-with-marquee';
import HowItWorks from './components/HowItWorks';
import InteractiveDemo from './components/InteractiveDemo';
import UseCases from './components/UseCases';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Ambient background decorations */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/20 via-cyan-200/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-1/3 right-20 w-80 h-80 bg-gradient-to-br from-cyan-200/15 via-blue-200/15 to-transparent rounded-full blur-3xl animate-float" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-teal-200/10 via-emerald-200/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-gradient-to-br from-blue-200/15 via-cyan-200/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDuration: '9s', animationDelay: '1s' }}></div>

        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      </div>

      <div className="relative z-10">
        <Navigation />
        <main className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <HeroWithMarquee />
          <HowItWorks />
          <InteractiveDemo />
          <UseCases />
          <ContactForm />
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </div>
  );
}

export default App;
