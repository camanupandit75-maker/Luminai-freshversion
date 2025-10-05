import { ArrowRight, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import AnimatedTagline from './AnimatedTagline';

const Hero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={heroRef} className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-8 relative overflow-visible">
      {/* Diagonal cut accent - top left */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-400 to-violet-600 opacity-10 -rotate-12 -translate-x-32 -translate-y-32 pointer-events-none"></div>

      {/* Diagonal cut accent - top right */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-400 to-purple-500 opacity-10 rotate-12 translate-x-20 pointer-events-none"></div>

      {/* Gradient glow background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br from-blue-100 via-cyan-50 to-transparent opacity-40 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">

        <div className={`inline-flex items-center space-x-2 px-4 py-2 bg-slate-100 rounded-xl mb-8 transition-all duration-700 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          <Sparkles className="w-4 h-4 text-slate-600" />
          <span className="text-sm font-medium text-slate-700">AI-Powered Knowledge Management</span>
        </div>

        <h1 className={`relative text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight transition-all duration-700 delay-100 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="relative">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 opacity-20 blur-xl"></span>
            <span className="relative">AI That Remembers What Your Team Forgets.</span>
          </span>
        </h1>

        <div className={`mb-10 transition-all duration-700 delay-200 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <AnimatedTagline />
        </div>

        <p className={`text-xl lg:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          LuminIQ passively monitors team chats and documents to create a smart knowledge base — so your team can innovate faster without searching endlessly.
        </p>

        <div className="relative">
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 lg:mb-12 transition-all duration-700 delay-500 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button className="group px-8 py-4 bg-slate-900 hover:bg-slate-800 hover:shadow-lg hover:scale-105 text-white rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 shadow-sm">
              <span>Try Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 bg-white border border-[#E2E8F0] hover:border-slate-300 hover:bg-slate-50 hover:shadow-lg hover:scale-105 text-slate-900 rounded-xl font-semibold transition-all duration-300 shadow-sm">
              Request Access
            </button>
          </div>

          {/* Sticker: "Ideas never slip away here" */}
          <div className="hidden lg:block absolute -bottom-16 -right-8 xl:-right-20 z-20">
            <div
              className="w-[180px] transform -rotate-[4deg] transition-all duration-400 hover:-translate-y-1 hover:rotate-0 cursor-pointer"
              style={{
                boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.05))'
              }}
            >
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <rect width="200" height="200" fill="#B4A7FF" rx="4"/>
                <text x="20" y="60" fill="#F4F87E" fontSize="32" fontWeight="900" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" letterSpacing="-0.5">
                  Ideas never
                </text>
                <text x="20" y="100" fill="#F4F87E" fontSize="32" fontWeight="900" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" letterSpacing="-0.5">
                  slip away
                </text>
                <text x="20" y="150" fill="#2D2D2D" fontSize="48" fontWeight="400" fontFamily="'Brush Script MT', cursive" fontStyle="italic">
                  here.
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Diagonal divider between text and image */}
        <div className="relative my-16 flex items-center justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-violet-600 transform -rotate-12 opacity-60"></div>
        </div>

        <div className={`mt-8 lg:mt-12 relative transition-all duration-1000 delay-700 ${
          heroVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
        }`}>
          <div className="relative bg-white rounded-xl shadow-lg border border-[#E2E8F0] overflow-hidden">
            <div className="bg-slate-50 rounded-t-xl">
              <div className="bg-white px-4 py-3 border-b border-[#E2E8F0] flex items-center space-x-2">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs font-medium text-slate-500 ml-4">LuminIQ Dashboard</span>
              </div>
              <div className="p-8 lg:p-10 space-y-6 bg-white">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 bg-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-700 text-sm font-semibold">U</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-base text-slate-700">What insights did we gather from the Q3 user interviews?</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-slate-600" />
                  </div>
                  <div className="flex-1 bg-slate-50 rounded-xl p-5 border border-[#E2E8F0]">
                    <p className="text-base text-slate-700 leading-relaxed">
                      Based on Q3 user interviews, key insights include: Users want faster onboarding (mentioned in 8/12 interviews), mobile experience needs improvement (flagged by Sarah on Sept 15), and pricing transparency is critical for enterprise customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
