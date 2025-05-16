
import React from 'react';
import NavBar from '@/components/NavBar';
import EchoPost from '@/components/EchoPost';
import StarryBackground from '@/components/StarryBackground';
import { Users, Star, Calendar, MapPin, Link as LinkIcon } from 'lucide-react';

// Mock data
const userData = {
  name: 'Jane Doe',
  username: 'janedoe',
  bio: 'Digital explorer navigating the cosmic web. Designer, stargazer, coffee enthusiast.',
  location: 'San Francisco, CA',
  website: 'janedoe.design',
  joinDate: 'Joined May 2025',
  profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  coverImage: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=1200',
  following: 287,
  followers: 542,
  interests: ['Design', 'Photography', 'Space', 'Technology', 'Art']
};

const userPosts = [
  {
    id: 1,
    author: {
      name: userData.name,
      username: userData.username,
      profileImage: userData.profileImage
    },
    content: 'Just discovered a beautiful nebula while stargazing tonight! The colors were breathtaking. 🌌✨',
    timestamp: '2h ago',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600',
    likes: 42,
    comments: 7,
    shares: 3
  },
  {
    id: 2,
    author: {
      name: userData.name,
      username: userData.username,
      profileImage: userData.profileImage
    },
    content: 'Working on some new cosmic-inspired designs today. Finding so much inspiration in these astronomical images! 🎨🌠',
    timestamp: '1d ago',
    likes: 89,
    comments: 24,
    shares: 12
  },
  {
    id: 3,
    author: {
      name: userData.name,
      username: userData.username,
      profileImage: userData.profileImage
    },
    content: 'The Art Cosmos nebula is hosting a virtual gallery tonight at 8 PM. Join us for an evening of cosmic creativity! 🎨',
    timestamp: '3d ago',
    likes: 65,
    comments: 13,
    shares: 8
  }
];

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen">
      <StarryBackground density={50} />
      <NavBar />
      
      <main className="container mx-auto px-4 pb-6">
        {/* Cover Image */}
        <div className="relative h-64 md:h-80 -mt-1 rounded-b-lg overflow-hidden">
          <img 
            src={userData.coverImage} 
            alt="Cover" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cosmic-bg/80" />
        </div>
        
        {/* Profile Info */}
        <div className="relative -mt-20 px-4">
          <div className="flex flex-col md:flex-row md:items-end">
            {/* Profile Image */}
            <div className="w-32 h-32 rounded-full border-4 border-cosmic-bg overflow-hidden animate-pulse-glow">
              <img 
                src={userData.profileImage} 
                alt={userData.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Actions */}
            <div className="md:ml-auto mt-4 md:mt-0 flex space-x-3">
              <button className="px-5 py-2 rounded-full bg-secondary/80 text-white hover:bg-secondary transition-colors">
                Message
              </button>
              <button className="cosmic-btn">
                Follow
              </button>
            </div>
          </div>
          
          {/* User Info */}
          <div className="mt-4">
            <h1 className="text-2xl font-orbitron text-white">{userData.name}</h1>
            <p className="text-gray-400">@{userData.username}</p>
            <p className="mt-3 text-white">{userData.bio}</p>
            
            <div className="mt-4 flex flex-wrap gap-y-2 text-sm text-gray-300">
              {userData.location && (
                <div className="flex items-center mr-6">
                  <MapPin size={16} className="mr-1 text-gray-400" />
                  <span>{userData.location}</span>
                </div>
              )}
              {userData.website && (
                <div className="flex items-center mr-6">
                  <LinkIcon size={16} className="mr-1 text-gray-400" />
                  <a href={`https://${userData.website}`} className="text-cosmic-purple hover:underline">{userData.website}</a>
                </div>
              )}
              <div className="flex items-center">
                <Calendar size={16} className="mr-1 text-gray-400" />
                <span>{userData.joinDate}</span>
              </div>
            </div>
            
            <div className="mt-4 flex space-x-6">
              <div className="flex items-center">
                <span className="font-medium text-white">{userData.following}</span>
                <span className="ml-1 text-gray-400">Following</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-white">{userData.followers}</span>
                <span className="ml-1 text-gray-400">Followers</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Star Chart (Activity Visualization) */}
        <div className="mt-8 cosmic-card p-5">
          <h3 className="font-orbitron text-white text-lg mb-4">Star Chart</h3>
          <div className="h-48 bg-cosmic-bg/50 rounded-lg flex items-center justify-center p-4 relative overflow-hidden">
            {/* Simple star chart visualization */}
            <div className="absolute inset-0">
              {userData.interests.map((interest, index) => (
                <div 
                  key={interest}
                  className="absolute w-16 h-16 animate-float"
                  style={{
                    top: `${20 + Math.sin(index) * 20}%`,
                    left: `${(index * 20) + 5}%`,
                    animationDelay: `${index * 0.5}s`
                  }}
                >
                  <div className="cosmic-orb w-full h-full flex items-center justify-center">
                    <Star size={20} className="text-white" />
                  </div>
                  <div className="text-xs text-white mt-1 text-center">{interest}</div>
                </div>
              ))}
            </div>
            <div className="text-center z-10">
              <Star size={32} className="text-cosmic-purple mx-auto animate-pulse" />
              <p className="text-white font-orbitron mt-1">Activity Map</p>
              <p className="text-sm text-gray-400">Based on your recent interactions</p>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="mt-8 border-b border-cosmic-purple/30">
          <div className="flex">
            <button className="px-6 py-3 text-cosmic-purple border-b-2 border-cosmic-purple font-medium">
              Posts
            </button>
            <button className="px-6 py-3 text-gray-400 hover:text-white transition-colors">
              Media
            </button>
            <button className="px-6 py-3 text-gray-400 hover:text-white transition-colors">
              Likes
            </button>
          </div>
        </div>
        
        {/* Posts */}
        <div className="mt-6 space-y-6">
          {userPosts.map(post => (
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
      </main>
    </div>
  );
};

export default Profile;
