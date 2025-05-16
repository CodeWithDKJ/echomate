
import React from 'react';
import { cn } from '@/lib/utils';

interface ProfileOrbProps {
  imageUrl?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg';
  pulseColor?: string;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const ProfileOrb: React.FC<ProfileOrbProps> = ({ 
  imageUrl, 
  initials, 
  size = 'md', 
  pulseColor = 'cosmic-purple',
  className,
  href,
  onClick
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-14 h-14 text-base',
    lg: 'w-20 h-20 text-lg'
  };
  
  const pulseClasses = {
    'cosmic-purple': 'shadow-cosmic-purple/50',
    'cosmic-blue': 'shadow-cosmic-blue/50'
  };
  
  const content = (
    <div 
      className={cn(
        'rounded-full bg-secondary flex items-center justify-center font-medium text-white uppercase animate-pulse-glow cursor-pointer transition-transform hover:scale-105',
        sizeClasses[size],
        pulseClasses[pulseColor as keyof typeof pulseClasses],
        className
      )}
      onClick={onClick}
    >
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt="Profile" 
          className="w-full h-full object-cover rounded-full"
        />
      ) : (
        <span>{initials || '?'}</span>
      )}
    </div>
  );
  
  if (href) {
    return <a href={href}>{content}</a>;
  }
  
  return content;
};

export default ProfileOrb;
