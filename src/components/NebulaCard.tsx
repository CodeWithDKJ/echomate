
import React from 'react';
import { Users, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NebulaCardProps {
  name: string;
  description: string;
  members: number;
  imageUrl?: string;
  className?: string;
  onClick?: () => void;
}

const NebulaCard: React.FC<NebulaCardProps> = ({
  name,
  description,
  members,
  imageUrl,
  className,
  onClick
}) => {
  return (
    <div 
      className={cn(
        "cosmic-card overflow-hidden cursor-pointer group",
        className
      )}
      onClick={onClick}
    >
      {/* Nebula Image */}
      <div className="h-36 relative overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        ) : (
          <div className="w-full h-full bg-nebula-gradient flex items-center justify-center">
            <Star size={40} className="text-white/70" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-cosmic-bg to-transparent" />
      </div>
      
      {/* Nebula Content */}
      <div className="p-4">
        <h3 className="text-lg font-orbitron text-white mb-2 group-hover:text-cosmic-purple transition-colors">{name}</h3>
        <p className="text-sm text-gray-300 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center text-gray-400 text-sm">
          <Users size={16} className="mr-1" />
          <span>{members.toLocaleString()} members</span>
        </div>
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
        <div className="absolute inset-0 bg-cosmic-purple/5" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-cosmic-purple/50" />
      </div>
    </div>
  );
};

export default NebulaCard;
