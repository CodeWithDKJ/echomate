
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import EchoPost from '@/components/EchoPost';
import ProfileOrb from '@/components/ProfileOrb';
import NebulaCard from '@/components/NebulaCard';
import { Image, Smile, Video, Plus } from 'lucide-react';
import StarryBackground from '@/components/StarryBackground';

// Mock data
const posts = [
  {
    id: 1,
    author: {
      name: 'Jane Doe',
      username: 'janedoe',
      profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
    },
    content: 'Just discovered a beautiful nebula while stargazing tonight! The colors were breathtaking. 🌌✨',
    timestamp: '2h ago',
    likes: 42,
    comments: 7,
    shares: 3
  },
  {
    id: 2,
    author: {
      name: 'Alex Chen',
      username: 'alexc',
      profileImage: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150'
    },
    content: 'Working on a new music project inspired by cosmic sounds. Anyone interested in collaborating? 🎵🌠',
    timestamp: '4h ago',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600',
    likes: 89,
    comments: 24,
    shares: 12
  },
  {
    id: 3,
    author: {
      name: 'Sarah Johnson',
      username: 'sarahj',
    },
    content: 'The Art Cosmos nebula is hosting a virtual gallery tonight at 8 PM. Join us for an evening of cosmic creativity! 🎨',
    timestamp: '6h ago',
    likes: 65,
    comments: 13,
    shares: 8
  }
];

const trendingNebulae = [
  {
    id: 1,
    name: 'Art Cosmos',
    description: 'A community for artists inspired by cosmic themes and celestial beauty.',
    members: 12500,
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300'
  },
  {
    id: 2,
    name: 'Tech Stars',
    description: 'Discuss the latest in technology, programming, and innovation.',
    members: 18900,
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300'
  },
  {
    id: 3,
    name: 'Music Universe',
    description: 'Share, discover, and create music across all genres and styles.',
    members: 9700,
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300'
  }
];

const Dashboard: React.FC = () => {
  const [postContent, setPostContent] = useState('');
  
  return (
    <div className="min-h-screen">
      <StarryBackground density={50} />
      <NavBar />
      
      <main className="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="cosmic-card p-5 mb-6 sticky top-20">
            <h3 className="font-orbitron text-white text-lg mb-4">My Nebulae</h3>
            <ul className="space-y-3">
              {trendingNebulae.map(nebula => (
                <li key={nebula.id}>
                  <a href={`/nebula/${nebula.id}`} className="flex items-center space-x-3 text-white p-2 rounded-lg hover:bg-cosmic-purple/10 transition-colors">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img src={nebula.imageUrl} alt={nebula.name} className="w-full h-full object-cover" />
                    </div>
                    <span>{nebula.name}</span>
                  </a>
                </li>
              ))}
              <li>
                <button className="flex items-center space-x-3 text-cosmic-purple p-2 rounded-lg hover:bg-cosmic-purple/10 transition-colors w-full">
                  <div className="w-8 h-8 rounded-full bg-cosmic-purple/20 flex items-center justify-center">
                    <Plus size={16} className="text-cosmic-purple" />
                  </div>
                  <span>Discover More</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="col-span-1 lg:col-span-6 space-y-6">
          {/* Create Post */}
          <div className="cosmic-card p-5">
            <div className="flex items-start space-x-3">
              <ProfileOrb initials="JD" size="sm" />
              <div className="flex-grow">
                <textarea
                  placeholder="What's happening in your cosmic journey?"
                  className="w-full bg-secondary/50 rounded-lg p-3 text-white placeholder:text-gray-400 resize-none min-h-[100px] outline-none border border-cosmic-purple/20 focus:border-cosmic-purple/50 transition-colors"
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                />
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 rounded-full hover:bg-cosmic-purple/20 transition-colors">
                      <Image size={20} className="text-cosmic-purple" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-cosmic-purple/20 transition-colors">
                      <Video size={20} className="text-cosmic-purple" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-cosmic-purple/20 transition-colors">
                      <Smile size={20} className="text-cosmic-purple" />
                    </button>
                  </div>
                  <button 
                    className={`cosmic-btn ${!postContent.trim() && 'opacity-50 cursor-not-allowed'}`}
                    disabled={!postContent.trim()}
                  >
                    Echo
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Posts Feed */}
          <div className="space-y-6">
            {posts.map(post => (
              <EchoPost
                key={post.id}
                author={post.author}
                content={post.content}
                timestamp={post.timestamp}
                image={post.image}
                likes={post.likes}
                comments={post.comments}
                shares={post.shares}
              />
            ))}
          </div>
        </div>
        
        {/* Right Sidebar */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="cosmic-card p-5 mb-6 sticky top-20">
            <h3 className="font-orbitron text-white text-lg mb-4">Trending Nebulae</h3>
            <div className="space-y-4">
              {trendingNebulae.map(nebula => (
                <a 
                  href={`/nebula/${nebula.id}`}
                  className="flex items-center space-x-3 text-white hover:text-cosmic-purple transition-colors"
                  key={nebula.id}
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src={nebula.imageUrl} alt={nebula.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium truncate">{nebula.name}</h4>
                    <p className="text-xs text-gray-400">{nebula.members.toLocaleString()} members</p>
                  </div>
                </a>
              ))}
              <a href="/nebulae" className="block text-cosmic-purple text-sm hover:underline">
                Discover more nebulae
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
