import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-violet-50 rounded-full mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-violet-500" />
          <span className="text-sm font-medium text-violet-700">AI-Powered Knowledge Base</span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
          Find Critical R&D Answers
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500">
            Buried in Chats — Instantly.
          </span>
        </h1>

        <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up-delay">
          LuminAI passively monitors team chats and documents to create a smart knowledge base — so your team can innovate faster without searching endlessly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay">
          <button className="group px-8 py-4 bg-violet-500 hover:bg-violet-600 text-white rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-violet-200 hover:shadow-xl hover:shadow-violet-300 hover:scale-105">
            <span>Try Demo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 rounded-lg font-medium transition-all duration-300 hover:border-violet-300">
            Join Waitlist
          </button>
        </div>

        <div className="mt-16 lg:mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none"></div>
          <div className="bg-gradient-to-br from-violet-50 to-blue-50 rounded-2xl p-8 lg:p-12 shadow-xl border border-violet-100">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center space-x-2">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-xs text-gray-500 ml-4">LuminAI Dashboard</span>
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
                  <div className="flex-1 bg-violet-50 rounded-lg p-4 border border-violet-100">
                    <p className="text-sm text-gray-800 leading-relaxed">
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
