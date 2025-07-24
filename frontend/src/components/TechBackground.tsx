import React from 'react';
import { Settings, Zap, Code, Database, Cloud, Webhook, Box, GitBranch, Network, Cpu } from 'lucide-react';

const TechBackground = () => {
  // LIGHTWEIGHT VERSION - Only essential static icons
  const techIcons = [
    { Icon: Settings, position: 'top-20 left-[15%]', size: 'w-6 h-6' },
    { Icon: Zap, position: 'top-40 right-[20%]', size: 'w-5 h-5' },
    { Icon: Code, position: 'bottom-40 left-[25%]', size: 'w-7 h-7' },
    { Icon: Database, position: 'bottom-20 right-[15%]', size: 'w-6 h-6' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-0" style={{ opacity: 0.06 }}>
      {techIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position}`}
        >
          <item.Icon className={`${item.size} text-primary`} />
        </div>
      ))}
    </div>
  );
};

export default TechBackground;