import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';

const VideoDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-5 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              See LuminIQ in Action
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Watch how LuminIQ transforms your team's knowledge into instant, intelligent answers
          </p>
        </div>

        {/* Divider after title */}
        <div className="flex justify-center mb-12">
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 transform -rotate-12 opacity-50 shadow-sm"></div>
        </div>

        <div className="relative group">
          {/* Enhanced glow effect around video */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 rounded-[2.5rem] blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

          {/* Floating decorative shapes around video */}
          <div className="absolute -top-8 -left-8 w-16 h-16 border-2 border-blue-300/50 rounded-xl rotate-12 animate-float" style={{ animationDuration: '6s' }}></div>
          <div className="absolute -top-6 -right-10 w-12 h-12 border-2 border-cyan-300/50 rounded-full animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
          <div className="absolute -bottom-8 -right-8 w-14 h-14 border-2 border-teal-300/50 rounded-lg -rotate-6 animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
          <div className="absolute -bottom-6 -left-10 w-10 h-10 border-2 border-blue-300/50 rounded-full animate-float" style={{ animationDuration: '5s', animationDelay: '1.5s' }}></div>

          <div className="relative bg-white/95 rounded-[2rem] overflow-hidden shadow-2xl border-2 border-slate-200/70">
            {/* Video container */}
            <div 
              className="relative aspect-video bg-slate-900"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              {/* Placeholder for video - replace with your actual video */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/api/placeholder/800/450" // Replace with your video thumbnail
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                {/* Replace with your actual video source */}
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
                      className="group relative w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Play className="w-8 h-8 text-slate-700 group-hover:text-white ml-1 relative z-10" />
                    </button>
                  </div>
                )}

                {/* Bottom controls bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={togglePlay}
                        className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 text-white" />
                        ) : (
                          <Play className="w-5 h-5 text-white" />
                        )}
                      </button>
                      
                      <button
                        onClick={toggleMute}
                        className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5 text-white" />
                        ) : (
                          <Volume2 className="w-5 h-5 text-white" />
                        )}
                      </button>

                      <button
                        onClick={restartVideo}
                        className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                      >
                        <RotateCcw className="w-5 h-5 text-white" />
                      </button>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button
                        onClick={toggleFullscreen}
                        className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                      >
                        <Maximize className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video info section */}
            <div className="p-6 bg-gradient-to-r from-blue-50/60 via-cyan-50/60 to-teal-50/60 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">LuminIQ Demo Walkthrough</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    See how LuminIQ seamlessly integrates with your team's workflow, automatically capturing knowledge from conversations and documents, then providing instant answers when you need them most.
                  </p>
                  <div className="flex items-center space-x-4 mt-3 text-xs text-slate-500">
                    <span>Duration: 2:30</span>
                    <span>•</span>
                    <span>HD Quality</span>
                    <span>•</span>
                    <span>No sound required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action below video */}
        <div className="text-center mt-12">
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

        .animate-blob {
          animation: blob 15s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default VideoDemo;

