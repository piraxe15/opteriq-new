const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating circles - inspired by SmartScaling */}
      <div className="absolute top-20 -left-20 w-40 h-40 bg-primary/5 rounded-full animate-float blur-xl" />
      <div className="absolute top-1/3 -right-16 w-32 h-32 bg-accent/10 rounded-full animate-float-delayed blur-xl" />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-primary/8 rounded-full animate-float blur-lg" />
      
      {/* Additional geometric shapes */}
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/3 rotate-45 animate-float blur-lg" />
      <div className="absolute bottom-1/3 right-20 w-20 h-20 bg-accent/5 rounded-full animate-float-delayed blur-xl" />
      
      {/* Connecting lines - inspired by SmartScaling's circuit design */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
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
      </svg>
      
      {/* Small dots pattern */}
      <div className="absolute inset-0 bg-dots opacity-30" />
    </div>
  );
};

export default FloatingElements;