import React, { useEffect, useState } from 'react';

const FloatingElements = () => {
  // LIGHTWEIGHT VERSION - Minimal background elements
  return (
    <div className="absolute inset-0 pointer-events-none max-w-full" style={{ opacity: 0.4 }}>
      {/* Simple static circles - no heavy animations */}
      <div className="absolute top-20 left-[10%] w-32 h-32 bg-primary/3 rounded-full blur-xl" />
      <div className="absolute top-1/3 right-[15%] w-24 h-24 bg-accent/5 rounded-full blur-xl" />
      <div className="absolute bottom-1/4 left-[20%] w-20 h-20 bg-primary/4 rounded-full blur-lg" />
      
      {/* Simple gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/2 via-transparent to-accent/2 max-w-full" />
    </div>
  );
};

export default FloatingElements;