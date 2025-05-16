
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Bell, MessageCircle, Search, X } from 'lucide-react';
import ProfileOrb from './ProfileOrb';
import { cn } from '@/lib/utils';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-cosmic-bg/80 border-b border-cosmic-purple/30">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="font-orbitron text-2xl text-white flex items-center space-x-2"
        >
          <span className="text-cosmic-purple">Echo</span>
          <span className="text-cosmic-blue">mate</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/dashboard" className="text-white hover:text-cosmic-purple transition-colors">Home</Link>
          <Link to="/nebulae" className="text-white hover:text-cosmic-purple transition-colors">Nebulae</Link>
          <Link to="/discover" className="text-white hover:text-cosmic-purple transition-colors">Discover</Link>
        </div>
        
        {/* Search */}
        <div className={cn(
          "hidden md:flex items-center bg-secondary/50 rounded-full overflow-hidden transition-all",
          searchActive ? "w-64" : "w-48"
        )}>
          <input 
            type="text" 
            placeholder="Search Echomate..." 
            className="bg-transparent border-none outline-none px-4 py-2 flex-grow text-white placeholder:text-gray-400"
            onFocus={() => setSearchActive(true)}
            onBlur={() => setSearchActive(false)}
          />
          <button className="p-2 text-gray-400 hover:text-cosmic-purple">
            <Search size={18} />
          </button>
        </div>
        
        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary/50 transition-colors relative">
            <Bell size={20} className="text-white" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-cosmic-purple rounded-full"></span>
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary/50 transition-colors">
            <MessageCircle size={20} className="text-white" />
          </button>
          <ProfileOrb 
            initials="JD" 
            size="sm" 
            href="/profile"
          />
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-full hover:bg-secondary/50 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cosmic-bg border-t border-cosmic-purple/30 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <div className="flex items-center bg-secondary/50 rounded-full overflow-hidden">
              <input 
                type="text" 
                placeholder="Search Echomate..." 
                className="bg-transparent border-none outline-none px-4 py-2 flex-grow text-white placeholder:text-gray-400"
              />
              <button className="p-2 text-gray-400">
                <Search size={18} />
              </button>
            </div>
            
            <div className="flex flex-col space-y-3">
              <Link to="/dashboard" className="text-white hover:text-cosmic-purple transition-colors py-2">Home</Link>
              <Link to="/nebulae" className="text-white hover:text-cosmic-purple transition-colors py-2">Nebulae</Link>
              <Link to="/discover" className="text-white hover:text-cosmic-purple transition-colors py-2">Discover</Link>
            </div>
            
            <div className="flex items-center space-x-4 py-2">
              <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary/50 transition-colors relative">
                <Bell size={20} className="text-white" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-cosmic-purple rounded-full"></span>
              </button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary/50 transition-colors">
                <MessageCircle size={20} className="text-white" />
              </button>
              <ProfileOrb 
                initials="JD" 
                size="sm" 
                href="/profile"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
