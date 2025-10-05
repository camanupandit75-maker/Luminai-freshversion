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
    <section ref={sectionRef} className="py-24 lg:py-32 px-6 lg:px-8 bg-gradient-to-b from-white via-emerald-50/20 to-white relative overflow-hidden">
      {/* Diagonal cut section separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-violet-600 transform -rotate-12 opacity-40"></div>

      {/* Diagonal cut accent - bottom right */}
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-gradient-to-bl from-teal-400 to-violet-600 opacity-5 rotate-12 translate-x-20 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto">
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
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-violet-600 transform -rotate-12 opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${useCase.bg} rounded-xl p-8 transition-all duration-400 hover:shadow-lg hover:scale-105 hover:-translate-y-2 border border-[#E2E8F0] ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150 + 300}ms` }}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${useCase.gradient} rounded-xl flex items-center justify-center mb-6 transition-all duration-400 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
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
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl p-12 lg:p-16 shadow-lg">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-5">
              Ready to unlock your team&#39;s knowledge?
            </h3>
            <p className="text-xl text-blue-100 mb-10 max-w-xl mx-auto">
              Join innovative R&D teams already using LuminIQ to innovate faster
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-white hover:bg-blue-50 hover:shadow-lg hover:scale-105 text-purple-900 rounded-xl font-semibold transition-all duration-300 shadow-sm">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-transparent border border-white hover:bg-white/10 hover:scale-105 text-white rounded-xl font-semibold transition-all duration-300">
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
