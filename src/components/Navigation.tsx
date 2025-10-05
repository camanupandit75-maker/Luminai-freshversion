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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <span className="text-2xl transition-all duration-300 group-hover:scale-110">🔮</span>
            <span className="text-xl font-bold text-gray-900">
              Lumin AI
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                {link}
              </button>
            ))}
            <button className="ml-4 px-6 py-2.5 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200 rounded-full">
              Login
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="block w-full text-left py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium rounded-lg"
              >
                {link}
              </button>
            ))}
            <button className="block w-full mt-2 py-3 px-4 text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200 text-sm font-semibold rounded-full text-center">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
