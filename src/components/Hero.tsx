import { ArrowRight, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import AnimatedTagline from './AnimatedTagline';

const Hero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={heroRef} className="pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 lg:px-8 neural-pattern relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`inline-flex items-center space-x-2 px-5 py-2.5 glass-dark rounded-full mb-8 neon-glow transition-all duration-700 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          <Sparkles className="w-4 h-4 text-violet-500 animate-neural-pulse" />
          <span className="text-sm font-semibold text-violet-700">AI-Powered Knowledge Base</span>
        </div>

        <h1 className={`text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight gradient-shadow transition-all duration-700 delay-100 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          AI That Remembers What Your Team Forgets.
        </h1>

        <div className={`mb-10 transition-all duration-700 delay-200 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <AnimatedTagline />
        </div>

        <p className={`text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          LuminAI passively monitors team chats and documents to create a smart knowledge base — so your team can innovate faster without searching endlessly.
        </p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button className="group px-8 py-4 bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 neon-glow hover:scale-105">
            <span>Try Demo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 glass hover:glass-strong text-gray-800 rounded-xl font-semibold transition-all duration-300 hover:neon-glow hover:scale-105">
            Join Waitlist
          </button>
        </div>

        <div className={`mt-16 lg:mt-20 relative transition-all duration-1000 delay-700 ${
          heroVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
        }`}>
          <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 to-blue-500/20 rounded-3xl blur-3xl opacity-50"></div>
          <div className="relative glass-strong rounded-3xl p-8 lg:p-12 gradient-shadow neon-glow hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
            <div className="glass-strong rounded-2xl overflow-hidden border border-white/50">
              <div className="glass px-4 py-3 border-b border-white/30 flex items-center space-x-2">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400 shadow-lg"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-lg"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 shadow-lg"></div>
                </div>
                <span className="text-xs font-semibold text-gray-600 ml-4">LuminAI Dashboard</span>
              </div>
              <div className="p-6 lg:p-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-semibold">U</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">What insights did we gather from the Q3 user interviews?</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-violet-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 glass-dark rounded-xl p-4 neon-glow">
                    <p className="text-sm text-gray-800 leading-relaxed font-medium">
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
