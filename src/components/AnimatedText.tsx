import { useState, useEffect } from 'react';

interface AnimatedTextProps {
  words: string[];
  className?: string;
  speed?: number;
}

const AnimatedText = ({ words, className = "", speed = 2000 }: AnimatedTextProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 300);
    }, speed);

    return () => clearInterval(interval);
  }, [words.length, speed]);

  return (
    <span 
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      } ${className}`}
    >
      {words[currentWordIndex]}
    </span>
  );
};

export default AnimatedText;