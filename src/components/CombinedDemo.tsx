import { useState } from 'react';
import { Send, Sparkles, Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';
import { useRef } from 'react';

const CombinedDemo = () => {
  // Video demo state
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Chat demo state
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

  // Video controls
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Chat simulation
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
      {
        question: 'What did the team discuss about the new feature launch?',
        answer: 'The team discussed the new feature launch in #product-planning on March 20. Key points: Launch scheduled for April 15, beta testing with 50 users starting March 25, marketing campaign goes live April 1, and customer success team needs training by April 10.',
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-5 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              See LuminIQ in Action
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Experience LuminIQ through our video walkthrough and interactive chat demo
          </p>
        </div>

        {/* Divider after title */}
        <div className="flex justify-center mb-12">
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 transform -rotate-12 opacity-50 shadow-sm"></div>
        </div>

        {/* Two-column layout for video and chat */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Video Demo Section */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Video Walkthrough</h3>
              <p className="text-slate-600">Watch how LuminIQ transforms your team's knowledge</p>
            </div>

            <div className="relative group">
              {/* Enhanced glow effect around video */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 rounded-[2.5rem] blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

              {/* Floating decorative shapes around video */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-blue-300/50 rounded-xl rotate-12 animate-float" style={{ animationDuration: '6s' }}></div>
              <div className="absolute -top-3 -right-5 w-6 h-6 border-2 border-cyan-300/50 rounded-full animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
              <div className="absolute -bottom-4 -right-4 w-7 h-7 border-2 border-teal-300/50 rounded-lg -rotate-6 animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>

              <div className="relative bg-white/95 rounded-[2rem] overflow-hidden shadow-2xl border-2 border-slate-200/70">
                {/* Video container */}
                <div 
                  className="relative h-[400px] bg-slate-900"
                  onMouseEnter={() => setShowControls(true)}
                  onMouseLeave={() => setShowControls(false)}
                >
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                  >
                    <source src="/demo-video.mp4" type="video/mp4" />
                    <source src="/demo-video.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Video overlay with controls */}
                  <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                    {/* Play/Pause button overlay */}
                    {!isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={togglePlay}
                          className="group relative w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <Play className="w-6 h-6 text-slate-700 group-hover:text-white ml-1 relative z-10" />
                        </button>
                      </div>
                    )}

                    {/* Bottom controls bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={togglePlay}
                            className="p-1.5 hover:bg-white/20 rounded-full transition-colors duration-200"
                          >
                            {isPlaying ? (
                              <Pause className="w-4 h-4 text-white" />
                            ) : (
                              <Play className="w-4 h-4 text-white" />
                            )}
                          </button>
                          
                          <button
                            onClick={toggleMute}
                            className="p-1.5 hover:bg-white/20 rounded-full transition-colors duration-200"
                          >
                            {isMuted ? (
                              <VolumeX className="w-4 h-4 text-white" />
                            ) : (
                              <Volume2 className="w-4 h-4 text-white" />
                            )}
                          </button>

                          <button
                            onClick={restartVideo}
                            className="p-1.5 hover:bg-white/20 rounded-full transition-colors duration-200"
                          >
                            <RotateCcw className="w-4 h-4 text-white" />
                          </button>
                        </div>

                        <button
                          onClick={toggleFullscreen}
                          className="p-1.5 hover:bg-white/20 rounded-full transition-colors duration-200"
                        >
                          <Maximize className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video info section */}
                <div className="p-4 bg-gradient-to-r from-blue-50/60 via-cyan-50/60 to-teal-50/60 backdrop-blur-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Play className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-900 mb-1">LuminIQ Demo Walkthrough</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        See how LuminIQ seamlessly integrates with your team's workflow and provides instant answers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Chat Demo Section */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Interactive Chat Demo</h3>
              <p className="text-slate-600">Try asking LuminIQ questions about your team's knowledge</p>
            </div>

            <div className="relative group">
              {/* Enhanced glow effect around chat */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 rounded-[2.5rem] blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

              {/* Floating decorative shapes around chat */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-blue-300/50 rounded-xl rotate-12 animate-float" style={{ animationDuration: '6s' }}></div>
              <div className="absolute -top-3 -right-5 w-6 h-6 border-2 border-cyan-300/50 rounded-full animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
              <div className="absolute -bottom-4 -right-4 w-7 h-7 border-2 border-teal-300/50 rounded-lg -rotate-6 animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>

              <div className="relative bg-white/95 rounded-[2rem] overflow-hidden shadow-2xl border-2 border-slate-200/70">
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white to-cyan-50/70 opacity-80"></div>

                {/* Header */}
                <div className="relative bg-gradient-to-r from-blue-50/80 via-cyan-50/80 to-teal-50/80 backdrop-blur-sm border-b border-slate-200/50 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="relative w-8 h-8 rounded-lg flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 rounded-lg shadow-lg"></div>
                      <div className="absolute inset-[1px] bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-[0.4rem] opacity-80"></div>
                      <Sparkles className="w-4 h-4 text-white relative z-10 drop-shadow-lg" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm">LuminIQ Chat</h4>
                      <p className="text-slate-600 text-xs font-medium">Live Knowledge Base</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1.5 px-2 py-1 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200/50 shadow-sm">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                    <span className="text-slate-700 text-xs font-semibold">Active</span>
                  </div>
                </div>

                <div className="relative p-4 bg-white/80 backdrop-blur-sm min-h-[300px] max-h-[400px] overflow-y-auto space-y-3">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
                    >
                      <div className={`max-w-[85%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                        <div
                          className={`rounded-xl px-3 py-2 relative text-sm ${
                            message.type === 'user'
                              ? 'bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white shadow-lg shadow-blue-500/20'
                              : 'bg-white text-slate-800 border-2 border-slate-100 shadow-md'
                          }`}
                        >
                          <p className="leading-relaxed whitespace-pre-line relative z-10">{message.text}</p>
                        </div>
                        <p className="text-xs text-slate-500 mt-1 px-1">{message.timestamp}</p>
                      </div>
                    </div>
                  ))}
                  {isAnimating && (
                    <div className="flex justify-start animate-slide-up">
                      <div className="bg-white border-2 border-slate-100 shadow-md rounded-xl px-3 py-2">
                        <div className="flex space-x-1.5">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative p-4 bg-gradient-to-r from-blue-50/60 via-cyan-50/60 to-teal-50/60 backdrop-blur-sm border-t border-slate-200/50">
                  <button
                    onClick={simulateNewQuery}
                    disabled={isAnimating}
                    className="group/btn relative w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-500 overflow-hidden disabled:cursor-not-allowed disabled:opacity-50 text-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 transition-transform duration-500 group-hover/btn:scale-105"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>

                    <Send className="w-4 h-4 text-white relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    <span className="text-white relative z-10">{isAnimating ? 'Processing...' : 'Try Another Query'}</span>

                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 -z-10"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action below demos */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">
            Ready to transform how your team accesses knowledge?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-700 hover:via-cyan-700 hover:to-teal-700 text-white rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105">
              <span>Start Free Trial</span>
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-900 rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md">
              Schedule Demo
            </button>
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

export default CombinedDemo;
