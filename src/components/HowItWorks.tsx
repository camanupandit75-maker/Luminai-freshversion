import { BotMessageSquare, Eye, Zap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: BotMessageSquare,
      title: 'Add the LuminAI bot',
      description: 'Simply add LuminAI to your work group on Telegram or Slack — setup takes less than 2 minutes.',
    },
    {
      number: '02',
      icon: Eye,
      title: 'Passive monitoring',
      description: 'LuminAI quietly monitors messages and documents, building a comprehensive knowledge base.',
    },
    {
      number: '03',
      icon: Zap,
      title: 'Instant answers',
      description: "Mention LuminAI to ask any question — get precise answers instantly from your team's collective knowledge.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in minutes and unlock your team's hidden knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-violet-200">
                <div className="mb-6">
                  <span className="text-5xl font-bold text-violet-100 group-hover:text-violet-200 transition-colors">
                    {step.number}
                  </span>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-violet-300">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.75 6.75L19.25 12L13.75 17.25" />
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H4.75" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
