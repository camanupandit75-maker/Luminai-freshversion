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
    <section id="demo" className="py-20 lg:py-28 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            See LuminAI in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch how LuminAI instantly retrieves answers from your team&#39;s conversations
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">LuminAI Demo</h3>
                <p className="text-violet-100 text-sm">Live Knowledge Base</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm">Active</span>
            </div>
          </div>

          <div className="p-6 lg:p-8 bg-gray-50 min-h-[400px] max-h-[500px] overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
              >
                <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`rounded-2xl px-5 py-3 ${
                      message.type === 'user'
                        ? 'bg-violet-500 text-white'
                        : 'bg-white border border-gray-200 text-gray-800'
                    } shadow-sm`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 px-2">{message.timestamp}</p>
                </div>
              </div>
            ))}
            {isAnimating && (
              <div className="flex justify-start animate-slide-up">
                <div className="bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-sm">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white border-t border-gray-200">
            <button
              onClick={simulateNewQuery}
              disabled={isAnimating}
              className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-violet-500 hover:bg-violet-600 disabled:bg-gray-300 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
              <span>{isAnimating ? 'Processing...' : 'Try Another Query'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
