import { ArrowRight, Sparkles, Zap, Shield, Brain, TrendingUp, Users, Clock } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useEffect, useState } from 'react';

const marqueeItems = [
  { icon: Brain, text: 'AI-Powered Insights', color: 'from-blue-500 to-cyan-500', bg: 'bg-gradient-to-br from-blue-50 to-cyan-50', border: 'border-blue-200' },
  { icon: Shield, text: 'Enterprise Security', color: 'from-emerald-500 to-teal-500', bg: 'bg-gradient-to-br from-emerald-50 to-teal-50', border: 'border-emerald-200' },
  { icon: Zap, text: 'Lightning Fast', color: 'from-amber-500 to-orange-500', bg: 'bg-gradient-to-br from-amber-50 to-orange-50', border: 'border-amber-200' },
  { icon: TrendingUp, text: 'Smart Analytics', color: 'from-pink-500 to-rose-500', bg: 'bg-gradient-to-br from-pink-50 to-rose-50', border: 'border-pink-200' },
  { icon: Users, text: 'Team Collaboration', color: 'from-violet-500 to-fuchsia-500', bg: 'bg-gradient-to-br from-violet-50 to-fuchsia-50', border: 'border-violet-200' },
  { icon: Clock, text: 'Real-Time Sync', color: 'from-cyan-500 to-blue-500', bg: 'bg-gradient-to-br from-cyan-50 to-blue-50', border: 'border-cyan-200' },
];

export const HeroWithMarquee = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal({ threshold: 0.2 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section ref={heroRef} className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-amber-600 via-orange-600 to-rose-600">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/40 rounded-lg mb-8 transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">AI-Powered Knowledge Management</span>
          </div>

          <h1 className={`text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight transition-all duration-700 delay-100 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Ready to unlock your team's knowledge?
          </h1>

          <p className={`text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Join innovative R&D teams already using LuminAI to innovate faster
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button className="group px-8 py-4 bg-white text-amber-800 hover:bg-amber-50 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 shadow-lg">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-lg font-semibold transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .marquee-content {
          display: flex;
          animation: marquee 30s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-content:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
