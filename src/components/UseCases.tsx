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
    <section ref={sectionRef} className="py-20 lg:py-28 px-6 lg:px-8 neural-pattern relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 gradient-shadow">
            Built for R&D Teams
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            Transform how your team captures and leverages collective knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`group glass-strong rounded-2xl p-8 transition-all duration-700 hover:-translate-y-3 neon-glow-blue hover:neon-glow hover:scale-105 ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150 + 300}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl neon-glow`}>
                <useCase.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 to-blue-500/20 rounded-3xl blur-3xl opacity-50"></div>
            <div className="relative glass-strong rounded-3xl gradient-shadow neon-glow p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to unlock your team&#39;s knowledge?
            </h3>
            <p className="text-gray-700 mb-8 max-w-xl mx-auto font-medium">
              Join innovative R&D teams already using LuminAI to innovate faster
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white rounded-xl font-semibold transition-all duration-300 neon-glow hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 glass hover:glass-strong text-gray-800 rounded-xl font-semibold transition-all duration-300 hover:neon-glow hover:scale-105">
                Schedule Demo
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
