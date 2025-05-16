
import React from 'react';
import { Link } from 'react-router-dom';
import StarryBackground from '@/components/StarryBackground';
import { ChevronRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <StarryBackground density={150} />
      
      {/* Header */}
      <header className="py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-orbitron text-2xl text-white flex items-center space-x-2">
            <span className="text-cosmic-purple">Echo</span>
            <span className="text-cosmic-blue">mate</span>
          </div>
          <div className="space-x-4">
            <button className="px-4 py-2 text-white hover:text-cosmic-purple transition-colors">About</button>
            <Link to="/dashboard" className="cosmic-btn">
              Launch App
            </Link>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="flex-grow flex items-center">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-orbitron text-white mb-6">
              Discover Your <span className="text-cosmic-purple">Cosmic</span> Community
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Echomate is a vibrant social universe where your voice resonates across the stars.
              Connect, create, and collaborate in a space designed for authentic expression.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/dashboard" className="cosmic-btn px-8 py-3 text-lg animate-pulse-glow">
                Start Exploring
                <ChevronRight size={20} />
              </Link>
              <button className="text-white border border-white/30 px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-orbitron text-center text-white mb-12">Discover the Echomate Universe</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Echo Posts */}
          <div className="cosmic-card p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-cosmic-purple/20 flex items-center justify-center mb-4">
              <span className="text-2xl">🌟</span>
            </div>
            <h3 className="text-xl font-orbitron text-white mb-3">Echo Posts</h3>
            <p className="text-gray-300">
              Share your thoughts with cosmic-themed posts that stand out with unique filters and animations.
            </p>
          </div>
          
          {/* Nebula Communities */}
          <div className="cosmic-card p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-cosmic-purple/20 flex items-center justify-center mb-4">
              <span className="text-2xl">🌌</span>
            </div>
            <h3 className="text-xl font-orbitron text-white mb-3">Nebula Communities</h3>
            <p className="text-gray-300">
              Join themed communities where like-minded explorers gather to share interests and collaborate.
            </p>
          </div>
          
          {/* Star Charts */}
          <div className="cosmic-card p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-cosmic-purple/20 flex items-center justify-center mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-orbitron text-white mb-3">Star Charts</h3>
            <p className="text-gray-300">
              Track your journey with beautiful visualizations showing your activities and connections.
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-cosmic-purple/30">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-orbitron text-xl text-white mb-4 md:mb-0">
            <span className="text-cosmic-purple">Echo</span>
            <span className="text-cosmic-blue">mate</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            &copy; 2025 Echomate. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
