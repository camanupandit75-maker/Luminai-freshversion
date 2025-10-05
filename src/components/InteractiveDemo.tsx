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
    <section id="demo" className="py-24 lg:py-32 px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-purple-50/50 to-blue-50/30 relative overflow-hidden">
      {/* Diagonal cut section separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-violet-600 transform -rotate-12 opacity-40"></div>

      {/* Diagonal cut accent - left side */}
      <div className="absolute top-1/2 left-0 w-48 h-48 bg-gradient-to-br from-teal-400 to-violet-600 opacity-5 -rotate-12 -translate-x-16 pointer-events-none"></div>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-5 tracking-tight">
            <span className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent">
              See LuminIQ in Action
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Watch how LuminIQ instantly retrieves answers from your team&#39;s conversations
          </p>
        </div>

        {/* Diagonal cut divider after title */}
        <div className="flex justify-center mb-12">
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-violet-600 transform -rotate-12 opacity-50"></div>
        </div>

        <div className="relative">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-[#E2E8F0]">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-[#E2E8F0] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-sm">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-slate-900 font-bold">LuminIQ Demo</h3>
                <p className="text-slate-600 text-sm font-medium">Live Knowledge Base</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 bg-white rounded-full border border-[#E2E8F0]">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-slate-700 text-sm font-semibold">Active</span>
            </div>
          </div>

          <div className="p-6 lg:p-8 bg-white min-h-[400px] max-h-[500px] overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
              >
                <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`rounded-xl px-5 py-3 ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm'
                        : 'bg-gradient-to-br from-blue-50 to-cyan-50 text-slate-800 border border-[#E2E8F0]'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 px-2">{message.timestamp}</p>
                </div>
              </div>
            ))}
            {isAnimating && (
              <div className="flex justify-start animate-slide-up">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-[#E2E8F0] rounded-xl px-5 py-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-t border-[#E2E8F0]">
            <button
              onClick={simulateNewQuery}
              disabled={isAnimating}
              className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-slate-300 disabled:to-slate-300 text-white rounded-xl font-semibold transition-all duration-200 disabled:cursor-not-allowed shadow-sm"
            >
              <Send className="w-5 h-5" />
              <span>{isAnimating ? 'Processing...' : 'Try Another Query'}</span>
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
