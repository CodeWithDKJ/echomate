
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import StarryBackground from '@/components/StarryBackground';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search, Compass, Users, Star, TrendingUp } from 'lucide-react';
import EchoPost from '@/components/EchoPost';
import NebulaCard from '@/components/NebulaCard';
import { useToast } from '@/hooks/use-toast';

// Mock data until we connect to the backend
const trendingPosts = [
  {
    id: 1,
    author: {
      name: 'Maya Chen',
      username: 'mayac',
      profileImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150'
    },
    content: 'Just discovered this amazing cosmic photography technique! The colors are incredible. #CosmicArt #Photography',
    timestamp: '3h ago',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600',
    likes: 127,
    comments: 32,
    shares: 18
  },
  {
    id: 2,
    author: {
      name: 'Leo Parker',
      username: 'leop',
      profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150'
    },
    content: 'Working on a new cosmic soundtrack inspired by nebulae. Can\'t wait to share it with the Music Universe nebula!',
    timestamp: '5h ago',
    likes: 85,
    comments: 14,
    shares: 7
  }
];

const trendingNebulae = [
  {
    id: 1,
    name: 'Cosmic Photographers',
    description: 'A community for photographers capturing the beauty of the universe.',
    members: 8900,
    imageUrl: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=300'
  },
  {
    id: 2,
    name: 'Science Explorers',
    description: 'Dive into scientific discoveries, research, and breakthroughs across disciplines.',
    members: 11200,
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=300'
  }
];

const trendingUsers = [
  {
    id: 1,
    name: 'Astro Alina',
    username: 'astroalina',
    bio: 'Astrophotographer and space enthusiast. Capturing the cosmos one frame at a time.',
    followers: 12400,
    profileImage: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150'
  },
  {
    id: 2,
    name: 'Neil Carter',
    username: 'cosmicneil',
    bio: 'Space science educator. Making astronomy accessible for everyone.',
    followers: 9300,
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
  }
];

const Discover: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate fetching data from backend
    const fetchData = async () => {
      try {
        // We'll replace this with actual API calls when backend is connected
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load discover data. Please try again.",
          variant: "destructive"
        });
        setIsLoading(false);
      }
    };

    fetchData();
  }, [toast]);

  return (
    <div className="min-h-screen">
      <StarryBackground density={50} />
      <NavBar />
      
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-orbitron text-white mb-6">Discover</h1>
        
        <Tabs defaultValue="trending" className="w-full">
          <TabsList className="bg-cosmic-bg/50 backdrop-blur-md border border-cosmic-purple/20 mb-6">
            <TabsTrigger value="trending" className="data-[state=active]:bg-cosmic-purple/20">
              <TrendingUp className="mr-2 h-4 w-4" />
              Trending
            </TabsTrigger>
            <TabsTrigger value="nebulae" className="data-[state=active]:bg-cosmic-purple/20">
              <Compass className="mr-2 h-4 w-4" />
              Nebulae
            </TabsTrigger>
            <TabsTrigger value="people" className="data-[state=active]:bg-cosmic-purple/20">
              <Users className="mr-2 h-4 w-4" />
              People
            </TabsTrigger>
            <TabsTrigger value="for-you" className="data-[state=active]:bg-cosmic-purple/20">
              <Star className="mr-2 h-4 w-4" />
              For You
            </TabsTrigger>
          </TabsList>
          
          <div className="mb-6">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search in Discover..." 
                className="w-full bg-secondary/50 rounded-full pl-10 pr-4 py-2 text-white placeholder:text-gray-400 outline-none border border-cosmic-purple/20 focus:border-cosmic-purple/50 transition-colors"
              />
              <Search className="absolute top-2.5 left-3 text-gray-400" size={18} />
            </div>
          </div>
          
          <TabsContent value="trending" className="space-y-6">
            <h2 className="text-xl font-orbitron text-white">Trending Posts</h2>
            <div className="space-y-6">
              {isLoading ? (
                <div className="flex justify-center py-10">
                  <div className="animate-pulse w-10 h-10 rounded-full bg-cosmic-purple/50"></div>
                </div>
              ) : (
                trendingPosts.map(post => (
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
                ))
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="nebulae" className="space-y-6">
            <h2 className="text-xl font-orbitron text-white">Popular Nebulae</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? (
                <>
                  <div className="animate-pulse cosmic-card h-64"></div>
                  <div className="animate-pulse cosmic-card h-64"></div>
                </>
              ) : (
                trendingNebulae.map(nebula => (
                  <NebulaCard
                    key={nebula.id}
                    name={nebula.name}
                    description={nebula.description}
                    members={nebula.members}
                    imageUrl={nebula.imageUrl}
                    onClick={() => console.log(`Navigating to nebula ${nebula.id}`)}
                  />
                ))
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="people" className="space-y-6">
            <h2 className="text-xl font-orbitron text-white">People to Follow</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {isLoading ? (
                <>
                  <div className="animate-pulse cosmic-card h-32"></div>
                  <div className="animate-pulse cosmic-card h-32"></div>
                </>
              ) : (
                trendingUsers.map(user => (
                  <div key={user.id} className="cosmic-card p-4 flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img 
                        src={user.profileImage} 
                        alt={user.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-white">{user.name}</h3>
                      <p className="text-sm text-gray-300">@{user.username}</p>
                      <p className="text-xs text-gray-400 mt-1">{user.followers.toLocaleString()} followers</p>
                    </div>
                    <button className="cosmic-btn py-1 px-4 text-sm">
                      Follow
                    </button>
                  </div>
                ))
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="for-you" className="space-y-6">
            <h2 className="text-xl font-orbitron text-white">Recommended for You</h2>
            <div className="py-10 text-center">
              <p className="text-gray-300">Personalized recommendations will appear here based on your interests and activity.</p>
              <button className="cosmic-btn mt-4">Update Interests</button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Discover;
