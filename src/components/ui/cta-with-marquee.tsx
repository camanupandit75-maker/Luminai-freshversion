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

            <div className="p-8 lg:p-16 bg-gradient-to-br from-slate-50 via-white to-slate-50/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 perspective-1000">
                <div className="group relative text-center p-12 rounded-[2.5rem] transition-all duration-700 hover:-translate-y-6 hover:scale-[1.02] cursor-pointer overflow-hidden"
                     style={{ transformStyle: 'preserve-3d' }}>
                  {/* Glassmorphism base with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-blue-600/10 backdrop-blur-3xl rounded-[2.5rem]"></div>

                  {/* Multi-layered border effect */}
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
                  <div className="absolute inset-[1px] rounded-[2.5rem] bg-white"></div>
                  <div className="absolute inset-[2px] rounded-[2.5rem] bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/80 backdrop-blur-sm"></div>

                  {/* Animated gradient orbs */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-radial from-blue-400/40 via-cyan-400/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-150 animate-float"></div>
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-radial from-cyan-400/30 via-blue-400/15 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-150 group-hover:scale-150 animate-float-delayed"></div>

                  {/* Shimmering edge highlight */}
                  <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-400/50 via-transparent to-cyan-400/50 blur-sm animate-shimmer"></div>
                  </div>

                  {/* 3D floating icon container */}
                  <div className="relative z-10 w-24 h-24 mx-auto mb-8 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12"
                       style={{ transform: 'translateZ(20px)' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-600 rounded-[1.75rem] shadow-2xl shadow-blue-500/60 group-hover:shadow-[0_20px_80px_rgba(59,130,246,0.6)] transition-all duration-700"></div>
                    <div className="absolute inset-[2px] bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-500 rounded-[1.7rem] opacity-80"></div>
                    <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-white/20 to-transparent"></div>
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Brain className="w-8 h-8 text-white drop-shadow-lg relative z-10" />
                      <div className="absolute inset-0 bg-blue-400 rounded-[1.75rem] opacity-0 group-hover:opacity-30 blur-lg transition-all duration-700 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent mb-5 group-hover:scale-105 transition-transform duration-500">Smart Capture</h3>
                    <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-800 transition-colors duration-300">Automatically extracts key insights from conversations with AI precision</p>

                    {/* Animated floating accent */}
                    <div className="mt-8 h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-full shadow-lg shadow-blue-500/50 group-hover:shadow-[0_4px_20px_rgba(59,130,246,0.8)]"></div>

                    {/* Corner sparkles */}
                    <div className="absolute top-8 right-8 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150 blur-[1px]"></div>
                    <div className="absolute bottom-8 left-8 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 group-hover:scale-150 blur-[1px]"></div>
                  </div>
                </div>

                <div className="group relative text-center p-12 rounded-[2.5rem] transition-all duration-700 hover:-translate-y-6 hover:scale-[1.02] cursor-pointer overflow-hidden"
                     style={{ transformStyle: 'preserve-3d' }}>
                  {/* Glassmorphism base with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-amber-600/10 backdrop-blur-3xl rounded-[2.5rem]"></div>

                  {/* Multi-layered border effect */}
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500 opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
                  <div className="absolute inset-[1px] rounded-[2.5rem] bg-white"></div>
                  <div className="absolute inset-[2px] rounded-[2.5rem] bg-gradient-to-br from-amber-50/80 via-white to-orange-50/80 backdrop-blur-sm"></div>

                  {/* Animated gradient orbs */}
                  <div className="absolute -top-12 -left-12 w-48 h-48 bg-gradient-radial from-amber-400/40 via-orange-400/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-150 animate-float"></div>
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-radial from-orange-400/30 via-amber-400/15 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-150 group-hover:scale-150 animate-float-delayed"></div>

                  {/* Shimmering edge highlight */}
                  <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-amber-400/50 via-transparent to-orange-400/50 blur-sm animate-shimmer"></div>
                  </div>

                  {/* 3D floating icon container */}
                  <div className="relative z-10 w-24 h-24 mx-auto mb-8 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12"
                       style={{ transform: 'translateZ(20px)' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-amber-500 to-orange-600 rounded-[1.75rem] shadow-2xl shadow-amber-500/60 group-hover:shadow-[0_20px_80px_rgba(245,158,11,0.6)] transition-all duration-700"></div>
                    <div className="absolute inset-[2px] bg-gradient-to-br from-amber-500 via-amber-400 to-orange-500 rounded-[1.7rem] opacity-80"></div>
                    <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-white/20 to-transparent"></div>
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white drop-shadow-lg relative z-10" />
                      <div className="absolute inset-0 bg-amber-400 rounded-[1.75rem] opacity-0 group-hover:opacity-30 blur-lg transition-all duration-700 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold bg-gradient-to-br from-slate-900 via-amber-900 to-slate-800 bg-clip-text text-transparent mb-5 group-hover:scale-105 transition-transform duration-500">Instant Recall</h3>
                    <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-800 transition-colors duration-300">Find any information in seconds with intelligent AI-powered search</p>

                    {/* Animated floating accent */}
                    <div className="mt-8 h-1.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-full shadow-lg shadow-amber-500/50 group-hover:shadow-[0_4px_20px_rgba(245,158,11,0.8)]"></div>

                    {/* Corner sparkles */}
                    <div className="absolute top-8 left-8 w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150 blur-[1px]"></div>
                    <div className="absolute bottom-8 right-8 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 group-hover:scale-150 blur-[1px]"></div>
                  </div>
                </div>

                <div className="group relative text-center p-12 rounded-[2.5rem] transition-all duration-700 hover:-translate-y-6 hover:scale-[1.02] cursor-pointer overflow-hidden"
                     style={{ transformStyle: 'preserve-3d' }}>
                  {/* Glassmorphism base with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-emerald-600/10 backdrop-blur-3xl rounded-[2.5rem]"></div>

                  {/* Multi-layered border effect */}
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-emerald-400 via-teal-400 to-emerald-500 opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
                  <div className="absolute inset-[1px] rounded-[2.5rem] bg-white"></div>
                  <div className="absolute inset-[2px] rounded-[2.5rem] bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/80 backdrop-blur-sm"></div>

                  {/* Animated gradient orbs */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-radial from-emerald-400/40 via-teal-400/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-150 animate-float"></div>
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-radial from-teal-400/30 via-emerald-400/15 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-150 group-hover:scale-150 animate-float-delayed"></div>

                  {/* Shimmering edge highlight */}
                  <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-emerald-400/50 via-transparent to-teal-400/50 blur-sm animate-shimmer"></div>
                  </div>

                  {/* 3D floating icon container */}
                  <div className="relative z-10 w-24 h-24 mx-auto mb-8 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12"
                       style={{ transform: 'translateZ(20px)' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 rounded-[1.75rem] shadow-2xl shadow-emerald-500/60 group-hover:shadow-[0_20px_80px_rgba(16,185,129,0.6)] transition-all duration-700"></div>
                    <div className="absolute inset-[2px] bg-gradient-to-br from-emerald-500 via-emerald-400 to-teal-500 rounded-[1.7rem] opacity-80"></div>
                    <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-white/20 to-transparent"></div>
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-white drop-shadow-lg relative z-10" />
                      <div className="absolute inset-0 bg-emerald-400 rounded-[1.75rem] opacity-0 group-hover:opacity-30 blur-lg transition-all duration-700 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 bg-clip-text text-transparent mb-5 group-hover:scale-105 transition-transform duration-500">Team Sync</h3>
                    <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-800 transition-colors duration-300">Keep everyone aligned with shared knowledge and real-time insights</p>

                    {/* Animated floating accent */}
                    <div className="mt-8 h-1.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-full shadow-lg shadow-emerald-500/50 group-hover:shadow-[0_4px_20px_rgba(16,185,129,0.8)]"></div>

                    {/* Corner sparkles */}
                    <div className="absolute top-8 right-8 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150 blur-[1px]"></div>
                    <div className="absolute bottom-8 left-8 w-2 h-2 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 group-hover:scale-150 blur-[1px]"></div>
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.1);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) scale(1) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) scale(1.1) rotate(5deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};
