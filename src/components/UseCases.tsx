import { Rocket, Search, Users } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const UseCases = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.1 });

  const useCases = [
    {
      icon: Rocket,
      title: 'Faster Product Innovation',
      description: 'Access historical decisions, research findings, and technical insights instantly — accelerate your product development cycle.',
      gradient: 'from-violet-400 to-purple-500',
    },
    {
      icon: Search,
      title: 'Instant Team Knowledge',
      description: 'Never lose critical information in chat history. LuminAI surfaces the right context exactly when you need it.',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Reduced Research Duplication',
      description: 'Avoid repeating past work. Discover what teammates have already learned and build on existing insights.',
      gradient: 'from-violet-500 to-blue-500',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-700 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-5 tracking-tight">
            Built for R&D Teams
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Transform how your team captures and leverages collective knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`group bg-slate-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:bg-white border border-slate-200 ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150 + 300}ms` }}
            >
              <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center mb-6 transition-all duration-300">
                <useCase.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {useCase.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-slate-900 rounded-3xl p-12 lg:p-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-5">
              Ready to unlock your team&#39;s knowledge?
            </h3>
            <p className="text-xl text-slate-300 mb-10 max-w-xl mx-auto">
              Join innovative R&D teams already using LuminAI to innovate faster
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 rounded-lg font-semibold transition-colors duration-200 shadow-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-slate-800 border-2 border-slate-700 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
