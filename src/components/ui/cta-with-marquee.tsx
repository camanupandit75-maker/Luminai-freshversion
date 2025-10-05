import { ArrowRight, Sparkles, Zap, Shield, Brain, TrendingUp, Users, Clock } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useEffect, useState } from 'react';

const marqueeItems = [
  { icon: Brain, text: 'AI-Powered Insights' },
  { icon: Shield, text: 'Enterprise Security' },
  { icon: Zap, text: 'Lightning Fast' },
  { icon: TrendingUp, text: 'Smart Analytics' },
  { icon: Users, text: 'Team Collaboration' },
  { icon: Clock, text: 'Real-Time Sync' },
];

export const HeroWithMarquee = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal({ threshold: 0.2 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section ref={heroRef} className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center space-x-2 px-4 py-2 bg-slate-100 rounded-lg mb-8 transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <Sparkles className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">AI-Powered Knowledge Management</span>
          </div>

          <h1 className={`text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight transition-all duration-700 delay-100 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Transform Your Team's
            <br />
            <span className="bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
              Knowledge Into Power
            </span>
          </h1>

          <p className={`text-xl lg:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Stop losing critical insights in endless chat threads. LuminAI automatically captures, organizes, and surfaces the knowledge your team needs — exactly when they need it.
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button className="group px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 shadow-lg">
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-900 rounded-lg font-semibold transition-all duration-200">
              Watch Demo
            </button>
          </div>
        </div>

        <div className={`relative transition-all duration-1000 delay-500 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-200 shadow-2xl">
            <div className="bg-white px-4 py-3 border-b border-slate-200 flex items-center space-x-2">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs font-medium text-slate-500 ml-4">LuminAI Dashboard</span>
            </div>

            <div className="p-8 lg:p-16 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Smart Capture</h3>
                  <p className="text-sm text-slate-600">Automatically extracts key insights from conversations</p>
                </div>

                <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Instant Recall</h3>
                  <p className="text-sm text-slate-600">Find any information in seconds with AI search</p>
                </div>

                <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Team Sync</h3>
                  <p className="text-sm text-slate-600">Keep everyone aligned with shared knowledge</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-16 transition-all duration-1000 delay-700 ${
          heroVisible && mounted ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="relative overflow-hidden">
            <div className="marquee-container">
              <div className="marquee-content">
                {[...marqueeItems, ...marqueeItems].map((item, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center space-x-3 px-6 py-3 bg-white border border-slate-200 rounded-lg shadow-sm mx-3"
                  >
                    <item.icon className="w-5 h-5 text-slate-600" />
                    <span className="text-sm font-medium text-slate-700 whitespace-nowrap">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
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
