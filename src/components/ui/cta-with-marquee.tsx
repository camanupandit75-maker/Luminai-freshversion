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
    <section ref={heroRef} className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 rounded-lg mb-8 transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">AI-Powered Knowledge Management</span>
          </div>

          <h1 className={`text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight transition-all duration-700 delay-100 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Transform Your Team's
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Knowledge Into Power
            </span>
          </h1>

          <p className={`text-xl lg:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Stop losing critical insights in endless chat threads. LuminIQ automatically captures, organizes, and surfaces the knowledge your team needs — exactly when they need it.
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 shadow-lg shadow-blue-500/30">
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 text-blue-900 rounded-lg font-semibold transition-all duration-200">
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
              <span className="text-xs font-medium text-slate-500 ml-4">LuminIQ Dashboard</span>
            </div>

            <div className="p-8 lg:p-16 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                <div className="group relative text-center p-10 bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-3xl border-2 border-blue-400/60 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 hover:-translate-y-4 hover:scale-105 overflow-hidden backdrop-blur-sm">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-cyan-400/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  {/* Multiple floating glow effects */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
                  
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500"></div>
                  
                  <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-500/50 group-hover:shadow-3xl group-hover:shadow-blue-500/70 group-hover:scale-125 group-hover:rotate-6 transition-all duration-700">
                    <Brain className="w-6 h-6 text-white" />
                    {/* Pulsing icon glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-3xl opacity-0 group-hover:opacity-50 blur-md transition-all duration-700 animate-pulse"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors duration-300">Smart Capture</h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300 text-lg">Automatically extracts key insights from conversations with AI precision</p>
                    
                    {/* Animated accent line */}
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:w-32 rounded-full shadow-lg shadow-blue-500/50"></div>
                  </div>
                </div>

                <div className="group relative text-center p-10 bg-gradient-to-br from-amber-50 via-white to-orange-50 rounded-3xl border-2 border-amber-400/60 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-500 hover:-translate-y-4 hover:scale-105 overflow-hidden backdrop-blur-sm">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-orange-400/5 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  {/* Multiple floating glow effects */}
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-400/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
                  
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500"></div>
                  
                  <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-amber-600 via-amber-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-amber-500/50 group-hover:shadow-3xl group-hover:shadow-amber-500/70 group-hover:scale-125 group-hover:rotate-6 transition-all duration-700">
                    <Zap className="w-6 h-6 text-white" />
                    {/* Pulsing icon glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-orange-300 rounded-3xl opacity-0 group-hover:opacity-50 blur-md transition-all duration-700 animate-pulse"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-900 transition-colors duration-300">Instant Recall</h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300 text-lg">Find any information in seconds with intelligent AI-powered search</p>
                    
                    {/* Animated accent line */}
                    <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-6 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:w-32 rounded-full shadow-lg shadow-amber-500/50"></div>
                  </div>
                </div>

                <div className="group relative text-center p-10 bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-3xl border-2 border-emerald-400/60 hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-500 hover:-translate-y-4 hover:scale-105 overflow-hidden backdrop-blur-sm">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-teal-400/5 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  {/* Multiple floating glow effects */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-400/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-teal-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
                  
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500"></div>
                  
                  <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/50 group-hover:shadow-3xl group-hover:shadow-emerald-500/70 group-hover:scale-125 group-hover:rotate-6 transition-all duration-700">
                    <Users className="w-6 h-6 text-white" />
                    {/* Pulsing icon glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-300 to-teal-300 rounded-3xl opacity-0 group-hover:opacity-50 blur-md transition-all duration-700 animate-pulse"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-900 transition-colors duration-300">Team Sync</h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300 text-lg">Keep everyone aligned with shared knowledge and real-time insights</p>
                    
                    {/* Animated accent line */}
                    <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-6 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:w-32 rounded-full shadow-lg shadow-emerald-500/50"></div>
                  </div>
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
                    className={`inline-flex items-center space-x-3 px-6 py-3 ${item.bg} border ${item.border} rounded-lg shadow-sm mx-3 hover:shadow-md transition-shadow duration-200`}
                  >
                    <div className={`bg-gradient-to-r ${item.color} p-1.5 rounded-md`}>
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-800 whitespace-nowrap">{item.text}</span>
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
