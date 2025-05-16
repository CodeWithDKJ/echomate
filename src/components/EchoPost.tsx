
import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Star } from 'lucide-react';
import ProfileOrb from './ProfileOrb';
import { cn } from '@/lib/utils';

interface EchoPostProps {
  author: {
    name: string;
    username: string;
    profileImage?: string;
  };
  content: string;
  timestamp: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  className?: string;
}

const EchoPost: React.FC<EchoPostProps> = ({
  author,
  content,
  timestamp,
  image,
  likes,
  comments,
  shares,
  className
}) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  
  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };
  
  return (
    <div className={cn("cosmic-card p-5", className)}>
      {/* Post Header */}
      <div className="flex items-center space-x-3 mb-4">
        <ProfileOrb 
          imageUrl={author.profileImage} 
          initials={author.name.charAt(0)} 
          size="sm" 
          href={`/profile/${author.username}`}
        />
        <div>
          <h4 className="font-medium text-white">{author.name}</h4>
          <p className="text-sm text-gray-400">@{author.username} • {timestamp}</p>
        </div>
      </div>
      
      {/* Post Content */}
      <div className="mb-4">
        <p className="text-white whitespace-pre-wrap">{content}</p>
      </div>
      
      {/* Post Image */}
      {image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt="Post content" 
            className="w-full h-auto object-cover transition-transform hover:scale-[1.01]" 
          />
        </div>
      )}
      
      {/* Post Actions */}
      <div className="flex items-center justify-between pt-3 border-t border-cosmic-purple/20">
        <button 
          className={cn(
            "flex items-center space-x-2 text-sm text-gray-400 hover:text-cosmic-purple transition-colors",
            liked && "text-cosmic-purple"
          )}
          onClick={handleLike}
        >
          <Heart 
            size={18} 
            className={cn(
              liked && "fill-cosmic-purple"
            )}
          />
          <span>{likeCount}</span>
        </button>
        
        <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-cosmic-purple transition-colors">
          <MessageCircle size={18} />
          <span>{comments}</span>
        </button>
        
        <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-cosmic-purple transition-colors">
          <Share2 size={18} />
          <span>{shares}</span>
        </button>
        
        <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-cosmic-purple transition-colors">
          <Star size={18} />
        </button>
      </div>
    </div>
  );
};

export default EchoPost;
