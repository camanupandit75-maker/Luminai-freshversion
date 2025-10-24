import { useState, useEffect } from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

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

  const openChat = () => {
    window.dispatchEvent(new CustomEvent('openChat'));
    setIsMobileMenuOpen(false);
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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              <span className="text-2xl">🔍</span>
            </div>
            <span className="text-2xl font-bold text-white">
              Lumin<span className="text-white">IQ</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {location.pathname === '/' && navLinks.map((link) => (
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
            
            {user ? (
              <>
                <button 
                  onClick={() => navigate('/dashboard')}
                  className="ml-4 px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-300"
                >
                  Dashboard
                </button>
                <button 
                  onClick={() => navigate('/profile')}
                  className="flex items-center space-x-2 px-4 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-300"
                >
                  <User className="w-4 h-4" />
                  <span>{profile?.full_name?.split(' ')[0]}</span>
                </button>
                <button 
                  onClick={signOut}
                  className="flex items-center space-x-2 px-4 py-2.5 text-sm font-semibold text-red-400 hover:text-red-300 transition-colors duration-300"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => navigate('/waitlist')}
                  className="ml-4 px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-300"
                >
                  Waitlist
                </button>
                <button 
                  onClick={() => navigate('/login')}
                  className="px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-300"
                >
                  Sign In
                </button>
                <button 
                  onClick={openChat}
                  className="px-6 py-2.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 hover:shadow-md hover:scale-105 transition-all duration-300 rounded-lg shadow-sm"
                >
                  Get Started
                </button>
              </>
            )}
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
            {location.pathname === '/' && navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="block w-full text-left py-3 px-4 text-slate-300 hover:text-white hover:bg-slate-800 hover:translate-x-1 transition-all duration-300 text-sm font-medium rounded-xl"
              >
                {link}
              </button>
            ))}
            
            {user ? (
              <>
                <button 
                  onClick={() => { navigate('/dashboard'); setIsMobileMenuOpen(false); }}
                  className="block w-full mt-2 py-3 px-4 text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-300 text-sm font-semibold rounded-xl text-center"
                >
                  Dashboard
                </button>
                <button 
                  onClick={() => { navigate('/profile'); setIsMobileMenuOpen(false); }}
                  className="block w-full py-3 px-4 text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-300 text-sm font-semibold rounded-xl text-center"
                >
                  Profile
                </button>
                <button 
                  onClick={() => { signOut(); setIsMobileMenuOpen(false); }}
                  className="block w-full py-3 px-4 text-red-400 hover:text-red-300 hover:bg-slate-800 transition-all duration-300 text-sm font-semibold rounded-xl text-center"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => { navigate('/waitlist'); setIsMobileMenuOpen(false); }}
                  className="block w-full mt-2 py-3 px-4 text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-300 text-sm font-semibold rounded-xl text-center"
                >
                  Waitlist
                </button>
                <button 
                  onClick={() => { navigate('/login'); setIsMobileMenuOpen(false); }}
                  className="block w-full py-3 px-4 text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-300 text-sm font-semibold rounded-xl text-center"
                >
                  Sign In
                </button>
                <button 
                  onClick={openChat}
                  className="block w-full mt-2 py-3 px-4 text-slate-900 bg-white hover:bg-slate-100 hover:shadow-md hover:scale-105 transition-all duration-300 text-sm font-semibold rounded-xl text-center shadow-sm"
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
