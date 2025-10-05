import { BotMessageSquare, Eye, Zap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const HowItWorks = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.1 });

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
    <section ref={sectionRef} id="how-it-works" className="py-24 lg:py-32 px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-700 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-5 tracking-tight">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Get started in minutes and unlock your team&#39;s hidden knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150 + 300}ms` }}
            >
              <div className="bg-white rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl border border-slate-200">
                <div className="mb-6 relative">
                  <span className="text-5xl font-bold text-slate-100">
                    {step.number}
                  </span>
                </div>
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 transition-all duration-300">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-slate-300">
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
