import { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

const InteractiveDemo = () => {
  const [messages, setMessages] = useState([
    {
      type: 'user',
      text: "What were the key findings from last week's user research?",
      timestamp: '2:34 PM',
    },
    {
      type: 'bot',
      text: "Based on last week's user research sessions (conducted March 28-30), here are the key findings:\n\n• 78% of users struggled with the initial setup process\n• Mobile responsiveness was rated 6.2/10\n• Users want dark mode (mentioned 12 times)\n• Payment flow caused 23% abandonment rate\n\nSources: @research-team channel, User_Research_Q1.pdf",
      timestamp: '2:34 PM',
    },
  ]);
  const [isAnimating, setIsAnimating] = useState(false);

  const simulateNewQuery = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const queries = [
      {
        question: 'Who worked on the authentication module?',
        answer: 'The authentication module was developed by Sarah Chen and Mike Rodriguez. Sarah handled the frontend implementation (mentioned in #dev-frontend on Feb 12), while Mike built the backend API (documented in Auth_Architecture.md). They collaborated through March 2024.',
      },
      {
        question: "What's our current API rate limit?",
        answer: "Current API rate limits are:\n\n• Free tier: 100 requests/hour\n• Pro tier: 1,000 requests/hour\n• Enterprise: Custom limits\n\nThis was last updated in the #infrastructure channel on March 15 by the DevOps team.",
      },
    ];

    const randomQuery = queries[Math.floor(Math.random() * queries.length)];

    setMessages([
      {
        type: 'user',
        text: randomQuery.question,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: 'bot',
          text: randomQuery.answer,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setIsAnimating(false);
    }, 1500);
  };

  return (
    <section id="demo" className="py-24 lg:py-32 px-6 lg:px-8 relative overflow-hidden">
      {/* Stylish background with gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-cyan-50/30 to-white"></div>

      {/* Animated gradient mesh */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(to right, #94a3b8 1px, transparent 1px),
          linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }}></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-5 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              See LuminIQ in Action
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Watch how LuminIQ instantly retrieves answers from your team&#39;s conversations
          </p>
        </div>

        {/* Divider after title */}
        <div className="flex justify-center mb-12">
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 transform -rotate-12 opacity-50 shadow-sm"></div>
        </div>

        <div className="relative group">
          {/* Enhanced glow effect around demo */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 rounded-[2.5rem] blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

          {/* Floating decorative shapes around demo */}
          <div className="absolute -top-8 -left-8 w-16 h-16 border-2 border-blue-300/50 rounded-xl rotate-12 animate-float" style={{ animationDuration: '6s' }}></div>
          <div className="absolute -top-6 -right-10 w-12 h-12 border-2 border-cyan-300/50 rounded-full animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
          <div className="absolute -bottom-8 -right-8 w-14 h-14 border-2 border-teal-300/50 rounded-lg -rotate-6 animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
          <div className="absolute -bottom-6 -left-10 w-10 h-10 border-2 border-blue-300/50 rounded-full animate-float" style={{ animationDuration: '5s', animationDelay: '1.5s' }}></div>

          <div className="relative bg-white/95 rounded-[2rem] overflow-hidden shadow-2xl border-2 border-slate-200/70">
            {/* Glassmorphism effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white to-cyan-50/70 opacity-80"></div>

            {/* Floating gradient orbs inside */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/30 via-cyan-400/20 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }}></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-tr from-cyan-400/25 via-teal-400/15 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>

            {/* Header */}
            <div className="relative bg-gradient-to-r from-blue-50/80 via-cyan-50/80 to-teal-50/80 backdrop-blur-sm border-b border-slate-200/50 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 rounded-xl flex items-center justify-center">
                  {/* Icon background with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 rounded-xl shadow-lg"></div>
                  <div className="absolute inset-[2px] bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-[0.65rem] opacity-80"></div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent"></div>
                  <Sparkles className="w-5 h-5 text-white relative z-10 drop-shadow-lg" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold">LuminIQ Demo</h3>
                  <p className="text-slate-600 text-sm font-medium">Live Knowledge Base</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200/50 shadow-sm">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                <span className="text-slate-700 text-sm font-semibold">Active</span>
              </div>
            </div>

          <div className="relative p-6 lg:p-8 bg-white/80 backdrop-blur-sm min-h-[400px] max-h-[500px] overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
              >
                <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`rounded-2xl px-5 py-3 relative ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white shadow-lg shadow-blue-500/20'
                        : 'bg-white text-slate-800 border-2 border-slate-100 shadow-md'
                    }`}
                  >
                    {message.type === 'user' && (
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                    <p className="text-sm leading-relaxed whitespace-pre-line relative z-10">{message.text}</p>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 px-2">{message.timestamp}</p>
                </div>
              </div>
            ))}
            {isAnimating && (
              <div className="flex justify-start animate-slide-up">
                <div className="bg-white border-2 border-slate-100 shadow-md rounded-2xl px-5 py-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative p-6 bg-gradient-to-r from-blue-50/60 via-cyan-50/60 to-teal-50/60 backdrop-blur-sm border-t border-slate-200/50">
            <button
              onClick={simulateNewQuery}
              disabled={isAnimating}
              className="group/btn relative w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-semibold transition-all duration-500 overflow-hidden disabled:cursor-not-allowed disabled:opacity-50"
            >
              {/* Button gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 transition-transform duration-500 group-hover/btn:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
              </div>

              <Send className="w-5 h-5 text-white relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
              <span className="text-white relative z-10">{isAnimating ? 'Processing...' : 'Try Another Query'}</span>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 -z-10"></div>
            </button>
          </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 15s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default InteractiveDemo;
