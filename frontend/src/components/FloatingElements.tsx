import React, { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles for dynamic background - MOBILE SAFE
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 8; i++) { // Reduced count for better performance
        newParticles.push({
          id: i,
          x: 20 + Math.random() * 60, // Keep particles in center 60% of screen
          y: 20 + Math.random() * 60, // Keep particles in center 60% of screen
          delay: Math.random() * 6,
          duration: 6 + Math.random() * 4,
          size: 1 + Math.random() * 2, // Smaller particles
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none max-w-full">
      {/* Enhanced floating circles with SAFE positioning */}
      <div className="absolute top-20 left-[10%] w-32 h-32 md:w-40 md:h-40 bg-primary/5 rounded-full animate-float-slow blur-xl" />
      <div className="absolute top-1/3 right-[15%] w-24 h-24 md:w-32 md:h-32 bg-accent/10 rounded-full animate-float-delayed blur-xl" />
      <div className="absolute bottom-1/4 left-[20%] w-20 h-20 md:w-24 md:h-24 bg-primary/8 rounded-full animate-float blur-lg" />
      
      {/* Morphing geometric shapes - CONTAINED */}
      <div className="absolute top-1/2 right-[25%] w-12 h-12 md:w-16 md:h-16 bg-primary/3 animate-morph animate-drift blur-lg" />
      <div className="absolute bottom-1/3 right-[30%] w-16 h-16 md:w-20 md:h-20 bg-accent/5 rounded-full animate-float-fast blur-xl" />
      
      {/* Pulsing glow elements - SAFE POSITIONING */}
      <div className="absolute top-3/4 left-[25%] w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full animate-pulse-glow blur-md" />
      <div className="absolute top-1/5 right-[25%] w-8 h-8 md:w-10 md:h-10 bg-accent/10 rounded-full animate-pulse-glow blur-md" 
           style={{ animationDelay: '2s' }} />
      
      {/* Dynamic particle system - CONTAINED */}
      <div className="particles max-w-full overflow-hidden">
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
      
      {/* Enhanced connecting lines - RESPONSIVE */}
      <svg className="absolute inset-0 w-full h-full opacity-20 max-w-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Simplified paths for better mobile performance */}
        <path
          d="M 10% 30% Q 50% 20% 90% 40%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M 20% 70% Q 60% 60% 80% 80%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </svg>
      
      {/* Moving gradient overlays - CONTAINED */}
      <div className="absolute top-0 left-0 w-full h-full morph-bg opacity-5 max-w-full overflow-hidden" />
      
      {/* Mobile-specific optimizations */}
      <div className="md:hidden">
        {/* Minimal particles for mobile */}
        <div className="absolute top-10 right-[20%] w-6 h-6 bg-primary/20 rounded-full animate-float" />
        <div className="absolute bottom-10 left-[20%] w-4 h-4 bg-accent/20 rounded-full animate-float-delayed" />
      </div>
    </div>
  );
};

export default FloatingElements;