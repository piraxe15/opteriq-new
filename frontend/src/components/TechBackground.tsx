import React from 'react';
import { Settings, Zap, Code, Database, Cloud, Webhook, Box, GitBranch, Network, Cpu } from 'lucide-react';

const TechBackground = () => {
  const techIcons = [
    { Icon: Settings, position: 'top-10 left-4 md:left-20', size: 'w-8 h-8', delay: '0s' },
    { Icon: Zap, position: 'top-32 right-4 md:right-1/4', size: 'w-6 h-6', delay: '1s' },
    { Icon: Code, position: 'top-1/2 left-2 md:left-10', size: 'w-10 h-10', delay: '2s' },
    { Icon: Database, position: 'bottom-40 right-4 md:right-20', size: 'w-7 h-7', delay: '0.5s' },
    { Icon: Cloud, position: 'bottom-20 left-4 md:left-1/3', size: 'w-9 h-9', delay: '1.5s' },
    { Icon: Webhook, position: 'top-20 right-2 md:right-20', size: 'w-5 h-5', delay: '2.5s' },
    { Icon: Box, position: 'top-2/3 right-6 md:right-1/3', size: 'w-6 h-6', delay: '3s' },
    { Icon: GitBranch, position: 'bottom-1/3 left-2 md:left-20', size: 'w-8 h-8', delay: '0.8s' },
    { Icon: Network, position: 'top-1/3 right-2 md:right-10', size: 'w-7 h-7', delay: '1.8s' },
    { Icon: Cpu, position: 'bottom-10 right-6 md:right-1/4', size: 'w-6 h-6', delay: '2.8s' }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {techIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} tech-bg-icon animate-float`}
          style={{ animationDelay: item.delay }}
        >
          <item.Icon className={`${item.size} text-primary`} />
        </div>
      ))}
    </div>
  );
};

export default TechBackground;