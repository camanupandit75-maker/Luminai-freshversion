import { useState, useEffect } from 'react';

const AnimatedTagline = () => {
  const phrases = [
    'Listening...',
    'Learning...',
    'Connecting the dots...',
    'Answering instantly.',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setIsVisible(false);

      // Wait for fade out, then change text and fade in
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 400);
    }, 2400); // 2s display + 0.4s transition

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div className="h-8 flex items-center justify-center mb-4">
      <p
        className={`text-lg font-medium bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent transition-all duration-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}
        style={{
          fontFamily: '"Inter", "DM Sans", -apple-system, BlinkMacSystemFont, sans-serif',
          letterSpacing: '0.01em',
        }}
      >
        {phrases[currentIndex]}
      </p>
    </div>
  );
};

export default AnimatedTagline;
