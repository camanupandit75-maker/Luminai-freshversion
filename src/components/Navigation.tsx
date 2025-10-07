import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Product', 'How It Works', 'Pricing', 'Demo', 'Contact Us'];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase().replace(/\s+/g, '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-slate-900 border-b border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <img src="/generated-image.png" alt="LuminIQ" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" style={{mixBlendMode: 'multiply', filter: 'brightness(1.2)'}} />
            <span className="text-cyan-400">🔍</span>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300 group"
              >
                <span className="relative">
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300 ease-out"></span>
                </span>
              </button>
            ))}
            <button className="ml-4 px-6 py-2.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 hover:shadow-md hover:scale-105 transition-all duration-300 rounded-lg shadow-sm">
              Get Started
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 shadow-sm">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="block w-full text-left py-3 px-4 text-slate-300 hover:text-white hover:bg-slate-800 hover:translate-x-1 transition-all duration-300 text-sm font-medium rounded-xl"
              >
                {link}
              </button>
            ))}
            <button className="block w-full mt-2 py-3 px-4 text-slate-900 bg-white hover:bg-slate-100 hover:shadow-md hover:scale-105 transition-all duration-300 text-sm font-semibold rounded-xl text-center shadow-sm">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
