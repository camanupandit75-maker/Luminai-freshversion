import { ArrowRight, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import AnimatedTagline from './AnimatedTagline';

const Hero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={heroRef} className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto text-center">
        <div className={`inline-flex items-center space-x-2 px-4 py-2 bg-slate-100 rounded-lg mb-8 transition-all duration-700 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          <Sparkles className="w-4 h-4 text-slate-600" />
          <span className="text-sm font-medium text-slate-700">AI-Powered Knowledge Management</span>
        </div>

        <h1 className={`text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight transition-all duration-700 delay-100 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          AI That Remembers What Your Team Forgets.
        </h1>

        <div className={`mb-10 transition-all duration-700 delay-200 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <AnimatedTagline />
        </div>

        <p className={`text-xl lg:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          LuminAI passively monitors team chats and documents to create a smart knowledge base — so your team can innovate faster without searching endlessly.
        </p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button className="group px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 shadow-lg">
            <span>Try Demo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-900 rounded-lg font-semibold transition-all duration-200">
            Request Access
          </button>
        </div>

        <div className={`mt-20 lg:mt-24 relative transition-all duration-1000 delay-700 ${
          heroVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
        }`}>
          <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 rounded-t-2xl">
              <div className="bg-white px-4 py-3 border-b border-slate-200 flex items-center space-x-2">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs font-medium text-slate-500 ml-4">LuminAI Dashboard</span>
              </div>
              <div className="p-8 lg:p-10 space-y-6 bg-white">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-700 text-sm font-semibold">U</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-base text-slate-700">What insights did we gather from the Q3 user interviews?</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-slate-600" />
                  </div>
                  <div className="flex-1 bg-slate-50 rounded-xl p-5 border border-slate-200">
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
