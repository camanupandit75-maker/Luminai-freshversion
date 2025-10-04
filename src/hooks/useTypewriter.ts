import { useState, useEffect } from 'react';

interface TypewriterOptions {
  speed?: number;
  delay?: number;
  startOnMount?: boolean;
}

export const useTypewriter = (
  text: string,
  options: TypewriterOptions = {}
) => {
  const { speed = 50, delay = 0, startOnMount = true } = options;
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [shouldStart, setShouldStart] = useState(startOnMount);

  useEffect(() => {
    if (!shouldStart) return;

    let index = 0;
    setDisplayedText('');
    setIsComplete(false);

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay, shouldStart]);

  const start = () => setShouldStart(true);
  const reset = () => {
    setShouldStart(false);
    setDisplayedText('');
    setIsComplete(false);
  };

  return { displayedText, isComplete, start, reset };
};
