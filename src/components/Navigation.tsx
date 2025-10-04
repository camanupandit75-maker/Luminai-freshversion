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

  const navLinks = ['Product', 'How It Works', 'Pricing', 'Demo', 'FAQ'];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase().replace(/\s+/g, '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative w-10 h-10 rounded-full overflow-hidden neon-glow transition-all duration-300 group-hover:scale-110">
              <img
                src="/Screenshot 2025-10-04 at 6.06.43 PM.png"
                alt="LuminAI"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-gray-900 via-violet-900 to-gray-900 bg-clip-text text-transparent">
              uminAI
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-violet-600 transition-all duration-300 rounded-lg hover:bg-white/50 hover:backdrop-blur-sm relative group"
              >
                {link}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-blue-500 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
              </button>
            ))}
            <button className="ml-4 px-5 py-2.5 text-sm font-medium text-violet-600 hover:text-violet-700 transition-all duration-300 glass rounded-lg hover:neon-glow hover:scale-105">
              Login
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-violet-600 transition-colors glass rounded-lg"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden glass-strong border-t border-white/30 shadow-xl">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-violet-600 transition-all duration-300 text-sm font-medium rounded-lg hover:glass"
              >
                {link}
              </button>
            ))}
            <button className="block w-full text-left py-3 px-4 text-violet-600 hover:text-violet-700 transition-all duration-300 text-sm font-medium rounded-lg glass neon-glow">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
