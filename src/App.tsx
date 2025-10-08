import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import { HeroWithMarquee } from './components/ui/cta-with-marquee';
import HowItWorks from './components/HowItWorks';
import CombinedDemo from './components/CombinedDemo';
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 z-0"></div>

      {/* Ambient background decorations */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Large animated gradient orbs */}
        <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-300/30 via-cyan-300/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-gradient-to-bl from-cyan-300/25 via-blue-300/15 to-transparent rounded-full blur-3xl animate-float" style={{ animationDuration: '25s', animationDelay: '3s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-[550px] h-[550px] bg-gradient-to-tr from-teal-300/25 via-emerald-300/15 to-transparent rounded-full blur-3xl animate-float" style={{ animationDuration: '22s', animationDelay: '6s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-blue-200/20 via-cyan-200/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>

        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `
            radial-gradient(at 20% 30%, rgba(59, 130, 246, 0.15) 0px, transparent 50%),
            radial-gradient(at 80% 20%, rgba(6, 182, 212, 0.12) 0px, transparent 50%),
            radial-gradient(at 50% 70%, rgba(20, 184, 166, 0.1) 0px, transparent 50%),
            radial-gradient(at 90% 80%, rgba(14, 165, 233, 0.1) 0px, transparent 50%)
          `
        }}></div>

        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, #0ea5e9 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px'
        }}></div>

        {/* Diagonal light rays */}
        <div className="absolute top-0 right-0 w-full h-full opacity-20">
          <div className="absolute top-10 right-20 w-1 h-96 bg-gradient-to-b from-transparent via-cyan-400 to-transparent rotate-45 blur-sm"></div>
          <div className="absolute top-40 right-60 w-1 h-64 bg-gradient-to-b from-transparent via-blue-400 to-transparent rotate-45 blur-sm" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-40 w-1 h-80 bg-gradient-to-b from-transparent via-teal-400 to-transparent -rotate-45 blur-sm"></div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-32 left-20 w-16 h-16 border-2 border-blue-300/40 rounded-lg rotate-12 animate-float" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-64 right-32 w-12 h-12 border-2 border-cyan-300/40 rounded-full animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-64 left-64 w-20 h-20 border-2 border-teal-300/40 rounded-xl -rotate-6 animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-48 w-14 h-14 border-2 border-blue-300/40 rounded-lg rotate-45 animate-float" style={{ animationDuration: '9s', animationDelay: '3s' }}></div>

        {/* Sparkle effects */}
        <div className="absolute top-48 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse blur-[1px]"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse blur-[1px]" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-teal-400 rounded-full animate-pulse blur-[1px]" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-48 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse blur-[1px]" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10">
        <Navigation />
        <main className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <HeroWithMarquee />
          <HowItWorks />
          <CombinedDemo />
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
