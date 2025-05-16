
import React from 'react';
import NavBar from '@/components/NavBar';
import NebulaCard from '@/components/NebulaCard';
import StarryBackground from '@/components/StarryBackground';
import { Search, Filter, Plus } from 'lucide-react';

// Mock data
const nebulaeCategories = [
  {
    id: 1,
    name: 'Art & Creativity',
    nebulae: [
      {
        id: 1,
        name: 'Art Cosmos',
        description: 'A community for artists inspired by cosmic themes and celestial beauty.',
        members: 12500,
        imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300'
      },
      {
        id: 2,
        name: 'Digital Creatives',
        description: 'Share digital art, designs, and creative projects in this vibrant community.',
        members: 8700,
        imageUrl: 'https://images.unsplash.com/photo-1548263594-a71ea65a8598?w=300'
      },
      {
        id: 3,
        name: 'Photography Stars',
        description: 'Capture the beauty of the world through your lens and share with fellow photographers.',
        members: 15300,
        imageUrl: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=300'
      }
    ]
  },
  {
    id: 2,
    name: 'Technology & Science',
    nebulae: [
      {
        id: 4,
        name: 'Tech Stars',
        description: 'Discuss the latest in technology, programming, and innovation.',
        members: 18900,
        imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300'
      },
      {
        id: 5,
        name: 'Science Explorers',
        description: 'Dive into scientific discoveries, research, and breakthroughs across disciplines.',
        members: 11200,
        imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=300'
      },
      {
        id: 6,
        name: 'AI Collective',
        description: 'Exploring artificial intelligence, machine learning, and their applications.',
        members: 9500,
        imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300'
      }
    ]
  },
  {
    id: 3,
    name: 'Music & Entertainment',
    nebulae: [
      {
        id: 7,
        name: 'Music Universe',
        description: 'Share, discover, and create music across all genres and styles.',
        members: 9700,
        imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300'
      },
      {
        id: 8,
        name: 'Film Cosmos',
        description: 'Discuss movies, series, and the art of filmmaking with fellow enthusiasts.',
        members: 7300,
        imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300'
      },
      {
        id: 9,
        name: 'Gaming Galaxy',
        description: 'Connect with gamers, share experiences, and discuss all things gaming.',
        members: 14800,
        imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300'
      }
    ]
  }
];

const Nebulae: React.FC = () => {
  return (
    <div className="min-h-screen">
      <StarryBackground density={50} />
      <NavBar />
      
      <main className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-orbitron text-white mb-2">Explore Nebulae</h1>
            <p className="text-gray-300">Discover communities that match your interests</p>
          </div>
          <button className="cosmic-btn mt-4 md:mt-0">
            <Plus size={18} />
            Create Nebula
          </button>
        </div>
        
        {/* Search and Filter */}
        <div className="cosmic-card p-5 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input 
                type="text" 
                placeholder="Search nebulae..." 
                className="w-full bg-secondary/50 rounded-full pl-10 pr-4 py-2 text-white placeholder:text-gray-400 outline-none border border-cosmic-purple/20 focus:border-cosmic-purple/50 transition-colors"
              />
              <Search className="absolute top-2.5 left-3 text-gray-400" size={18} />
            </div>
            <button className="px-4 py-2 rounded-full bg-secondary/50 text-white hover:bg-secondary transition-colors flex items-center justify-center gap-2">
              <Filter size={18} />
              Filter
            </button>
          </div>
        </div>
        
        {/* Nebulae Listing */}
        <div className="space-y-8">
          {nebulaeCategories.map(category => (
            <div key={category.id}>
              <h2 className="text-xl font-orbitron text-white mb-4">{category.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.nebulae.map(nebula => (
                  <NebulaCard
                    key={nebula.id}
                    name={nebula.name}
                    description={nebula.description}
                    members={nebula.members}
                    imageUrl={nebula.imageUrl}
                    onClick={() => console.log(`Navigating to nebula ${nebula.id}`)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Recommendation */}
        <div className="mt-12 text-center">
          <h3 className="text-white text-lg mb-2">Don't see what you're looking for?</h3>
          <p className="text-gray-300 mb-4">Create your own nebula and invite others to join!</p>
          <button className="cosmic-btn mx-auto">
            <Plus size={18} />
            Create Nebula
          </button>
        </div>
      </main>
    </div>
  );
};

export default Nebulae;
