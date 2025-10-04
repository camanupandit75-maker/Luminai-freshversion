import { Rocket, Search, Users } from 'lucide-react';

const UseCases = () => {
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
    <section className="py-20 lg:py-28 px-6 lg:px-8 bg-gradient-to-b from-white to-violet-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Built for R&D Teams
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform how your team captures and leverages collective knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-violet-200 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${useCase.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <useCase.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-xl border border-violet-100 p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to unlock your team's knowledge?
            </h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Join innovative R&D teams already using LuminAI to innovate faster
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-violet-500 hover:bg-violet-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-violet-200 hover:shadow-xl hover:shadow-violet-300 hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 rounded-lg font-medium transition-all duration-300 hover:border-violet-300">
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
