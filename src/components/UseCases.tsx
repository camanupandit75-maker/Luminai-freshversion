import { Rocket, Search, Users } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const UseCases = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.1 });

  const useCases = [
    {
      icon: Rocket,
      title: 'Faster Product Innovation',
      description: 'Access historical decisions, research findings, and technical insights instantly — accelerate your product development cycle.',
      gradient: 'from-orange-500 to-red-500',
      bg: 'from-orange-50 to-red-50',
      border: 'border-orange-200',
    },
    {
      icon: Search,
      title: 'Instant Team Knowledge',
      description: 'Never lose critical information in chat history. LuminIQ surfaces the right context exactly when you need it.',
      gradient: 'from-blue-500 to-cyan-500',
      bg: 'from-blue-50 to-cyan-50',
      border: 'border-blue-200',
    },
    {
      icon: Users,
      title: 'Reduced Research Duplication',
      description: 'Avoid repeating past work. Discover what teammates have already learned and build on existing insights.',
      gradient: 'from-emerald-500 to-teal-500',
      bg: 'from-emerald-50 to-teal-50',
      border: 'border-emerald-200',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 px-6 lg:px-8 relative overflow-hidden">
      {/* Stylish background with gradients and patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/20 to-white"></div>

      {/* Animated gradient mesh */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(to right, #94a3b8 1px, transparent 1px),
          linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }}></div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.6) 100%)'
      }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-6xl font-bold mb-5 tracking-tight">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Built for R&D Teams
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Transform how your team captures and leverages collective knowledge
          </p>
        </div>

        {/* Diagonal cut divider after title */}
        <div className="flex justify-center mb-12">
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 transform -rotate-12 opacity-50 shadow-sm"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 perspective-1000">
          {useCases.map((useCase, index) => {
            const colorMap = {
              orange: {
                primary: 'from-orange-400 via-red-400 to-orange-500',
                secondary: 'from-orange-50/80 via-white to-red-50/80',
                orb1: 'from-orange-400/40 via-red-400/20',
                orb2: 'from-red-400/30 via-orange-400/15',
                iconBg: 'from-orange-600 via-orange-500 to-red-600',
                iconInner: 'from-orange-500 via-orange-400 to-red-500',
                shadow: 'shadow-orange-500/60 group-hover:shadow-[0_20px_80px_rgba(249,115,22,0.6)]',
                glow: 'bg-orange-400',
                text: 'from-slate-900 via-orange-900 to-slate-800',
                accent: 'from-orange-400/50 via-transparent to-red-400/50',
                line: 'via-orange-500 shadow-orange-500/50 group-hover:shadow-[0_4px_20px_rgba(249,115,22,0.8)]',
                sparkle: 'bg-orange-400',
              },
              blue: {
                primary: 'from-blue-400 via-cyan-400 to-blue-500',
                secondary: 'from-blue-50/80 via-white to-cyan-50/80',
                orb1: 'from-blue-400/40 via-cyan-400/20',
                orb2: 'from-cyan-400/30 via-blue-400/15',
                iconBg: 'from-blue-600 via-blue-500 to-cyan-600',
                iconInner: 'from-blue-500 via-blue-400 to-cyan-500',
                shadow: 'shadow-blue-500/60 group-hover:shadow-[0_20px_80px_rgba(59,130,246,0.6)]',
                glow: 'bg-blue-400',
                text: 'from-slate-900 via-blue-900 to-slate-800',
                accent: 'from-blue-400/50 via-transparent to-cyan-400/50',
                line: 'via-blue-500 shadow-blue-500/50 group-hover:shadow-[0_4px_20px_rgba(59,130,246,0.8)]',
                sparkle: 'bg-blue-400',
              },
              emerald: {
                primary: 'from-emerald-400 via-teal-400 to-emerald-500',
                secondary: 'from-emerald-50/80 via-white to-teal-50/80',
                orb1: 'from-emerald-400/40 via-teal-400/20',
                orb2: 'from-teal-400/30 via-emerald-400/15',
                iconBg: 'from-emerald-600 via-emerald-500 to-teal-600',
                iconInner: 'from-emerald-500 via-emerald-400 to-teal-500',
                shadow: 'shadow-emerald-500/60 group-hover:shadow-[0_20px_80px_rgba(16,185,129,0.6)]',
                glow: 'bg-emerald-400',
                text: 'from-slate-900 via-emerald-900 to-slate-800',
                accent: 'from-emerald-400/50 via-transparent to-teal-400/50',
                line: 'via-emerald-500 shadow-emerald-500/50 group-hover:shadow-[0_4px_20px_rgba(16,185,129,0.8)]',
                sparkle: 'bg-emerald-400',
              }
            };

            const colors = index === 0 ? colorMap.orange : index === 1 ? colorMap.blue : colorMap.emerald;

            return (
              <div
                key={index}
                className={`relative group transition-all duration-700 ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                <div className="relative text-center p-12 rounded-[2.5rem] transition-all duration-700 hover:-translate-y-6 hover:scale-[1.02] cursor-pointer overflow-hidden h-full"
                     style={{ transformStyle: 'preserve-3d' }}>
                  {/* Glassmorphism base with gradient */}
                  <div className="absolute inset-0 backdrop-blur-3xl rounded-[2.5rem]"></div>

                  {/* Multi-layered border effect */}
                  <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${colors.primary} opacity-30 group-hover:opacity-50 transition-opacity duration-700`}></div>
                  <div className="absolute inset-[1px] rounded-[2.5rem] bg-white"></div>
                  <div className={`absolute inset-[2px] rounded-[2.5rem] bg-gradient-to-br ${colors.secondary} backdrop-blur-sm`}></div>

                  {/* Animated gradient orbs */}
                  <div className={`absolute -top-12 -right-12 w-48 h-48 bg-gradient-radial ${colors.orb1} to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-150 animate-float`}></div>
                  <div className={`absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-radial ${colors.orb2} to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-150 group-hover:scale-150 animate-float-delayed`}></div>

                  {/* Shimmering edge highlight */}
                  <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${colors.accent} blur-sm animate-shimmer`}></div>
                  </div>

                  {/* 3D floating icon container */}
                  <div className="relative z-10 w-24 h-24 mx-auto mb-8 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12"
                       style={{ transform: 'translateZ(20px)' }}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.iconBg} rounded-[1.75rem] shadow-2xl ${colors.shadow} transition-all duration-700`}></div>
                    <div className={`absolute inset-[2px] bg-gradient-to-br ${colors.iconInner} rounded-[1.7rem] opacity-80`}></div>
                    <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-white/20 to-transparent"></div>
                    <div className="relative w-full h-full flex items-center justify-center">
                      <useCase.icon className="w-8 h-8 text-white drop-shadow-lg relative z-10" />
                      <div className={`absolute inset-0 ${colors.glow} rounded-[1.75rem] opacity-0 group-hover:opacity-30 blur-lg transition-all duration-700 animate-pulse`}></div>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3 className={`text-2xl font-bold bg-gradient-to-br ${colors.text} bg-clip-text text-transparent mb-5 group-hover:scale-105 transition-transform duration-500`}>
                      {useCase.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-800 transition-colors duration-300">
                      {useCase.description}
                    </p>

                    {/* Animated floating accent */}
                    <div className={`mt-8 h-1.5 bg-gradient-to-r from-transparent ${colors.line} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-full shadow-lg`}></div>

                    {/* Corner sparkles */}
                    <div className={`absolute top-8 right-8 w-2 h-2 ${colors.sparkle} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150 blur-[1px]`}></div>
                    <div className={`absolute bottom-8 left-8 w-2 h-2 ${colors.sparkle} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 group-hover:scale-150 blur-[1px]`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="relative overflow-hidden rounded-[2.5rem] p-12 lg:p-16 group cursor-default">
            {/* Multi-layered gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-transparent to-emerald-100/50"></div>

            {/* Animated gradient orbs */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-radial from-blue-300/30 via-cyan-300/10 to-transparent rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-radial from-emerald-300/30 via-teal-300/10 to-transparent rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000 delay-300"></div>

            {/* Subtle border */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-200/50 via-cyan-200/50 to-teal-200/50 opacity-50"></div>
            <div className="absolute inset-[1px] rounded-[2.5rem] bg-gradient-to-br from-white/90 via-white/80 to-white/90 backdrop-blur-xl"></div>

            {/* Floating sparkles */}
            <div className="absolute top-8 right-12 w-2 h-2 bg-cyan-400 rounded-full blur-[1px] animate-pulse"></div>
            <div className="absolute bottom-12 left-16 w-2 h-2 bg-blue-400 rounded-full blur-[1px] animate-pulse delay-500"></div>
            <div className="absolute top-16 left-1/3 w-1.5 h-1.5 bg-teal-400 rounded-full blur-[1px] animate-pulse delay-1000"></div>

            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent mb-5">
                Ready to unlock your team&#39;s knowledge?
              </h3>
              <p className="text-xl text-slate-600 mb-10 max-w-xl mx-auto">
                Join innovative R&D teams already using LuminIQ to innovate faster
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="group/btn relative px-8 py-4 rounded-xl font-semibold transition-all duration-500 overflow-hidden">
                  {/* Primary button gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 transition-transform duration-500 group-hover/btn:scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>

                  <span className="relative z-10 text-white font-semibold">Start Free Trial</span>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 -z-10"></div>
                </button>

                <button className="group/btn relative px-8 py-4 rounded-xl font-semibold transition-all duration-500 overflow-hidden">
                  {/* Secondary button border and background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-xl"></div>
                  <div className="absolute inset-[2px] bg-white rounded-[0.6rem] group-hover/btn:bg-gradient-to-r group-hover/btn:from-blue-50 group-hover/btn:via-cyan-50 group-hover/btn:to-teal-50 transition-all duration-500"></div>

                  <span className="relative z-10 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent font-semibold">Schedule Demo</span>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r from-blue-400/50 via-cyan-400/50 to-teal-400/50 -z-10"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
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

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
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

        .animate-blob {
          animation: blob 15s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
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

export default UseCases;
