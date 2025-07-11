import React, { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles for dynamic background
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 6,
          duration: 6 + Math.random() * 4,
          size: 1 + Math.random() * 3,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced floating circles with various animations */}
      <div className="absolute top-20 -left-20 w-40 h-40 bg-primary/5 rounded-full animate-float-slow blur-xl" />
      <div className="absolute top-1/3 -right-16 w-32 h-32 bg-accent/10 rounded-full animate-float-delayed blur-xl" />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-primary/8 rounded-full animate-float blur-lg" />
      
      {/* Morphing geometric shapes */}
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/3 animate-morph animate-drift blur-lg" />
      <div className="absolute bottom-1/3 right-20 w-20 h-20 bg-accent/5 rounded-full animate-float-fast blur-xl" />
      
      {/* Orbiting elements */}
      <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-primary/20 rounded-full animate-orbit" />
      <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-accent/15 rounded-full animate-orbit-reverse" />
      
      {/* Pulsing glow elements */}
      <div className="absolute top-3/4 left-1/5 w-12 h-12 bg-primary/10 rounded-full animate-pulse-glow blur-md" />
      <div className="absolute top-1/5 right-1/5 w-10 h-10 bg-accent/10 rounded-full animate-pulse-glow blur-md" 
           style={{ animationDelay: '2s' }} />
      
      {/* Dynamic particle system */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>
      
      {/* Enhanced connecting lines with multiple paths */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Multiple animated paths */}
        <path
          d="M 100 200 Q 300 100 500 300 T 800 200"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M 200 400 Q 400 300 600 500 T 900 400"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <path
          d="M 0 300 Q 200 200 400 350 T 700 300"
          stroke="url(#lineGradient2)"
          strokeWidth="1.5"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <path
          d="M 150 100 Q 350 50 550 200 T 850 150"
          stroke="url(#lineGradient2)"
          strokeWidth="1"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '3s' }}
        />
      </svg>
      
      {/* Animated background dots with movement */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      
      {/* Moving gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full morph-bg opacity-10" />
      
      {/* Mobile-specific optimizations */}
      <div className="md:hidden">
        {/* Reduced particle count for mobile */}
        <div className="absolute top-10 right-10 w-8 h-8 bg-primary/20 rounded-full animate-float" />
        <div className="absolute bottom-10 left-10 w-6 h-6 bg-accent/20 rounded-full animate-float-delayed" />
      </div>
    </div>
  );
};

export default FloatingElements;