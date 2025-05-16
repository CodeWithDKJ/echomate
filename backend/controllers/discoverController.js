
// Mock data - In a real application, this would come from a database
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

// Get trending content
exports.getTrending = (req, res) => {
  try {
    res.status(200).json({
      posts: trendingPosts,
      nebulae: trendingNebulae,
      users: trendingUsers
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trending content', error: error.message });
  }
};

// Get nebula recommendations
exports.getNebulaRecommendations = (req, res) => {
  try {
    res.status(200).json(trendingNebulae);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching nebula recommendations', error: error.message });
  }
};

// Get people recommendations
exports.getPeopleRecommendations = (req, res) => {
  try {
    res.status(200).json(trendingUsers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching people recommendations', error: error.message });
  }
};

// Get personalized recommendations
exports.getPersonalizedRecommendations = (req, res) => {
  try {
    // In a real app, this would use user data to provide personalized recommendations
    // For now, we'll just return a mix of trending content
    res.status(200).json({
      posts: trendingPosts.slice(0, 1),
      nebulae: trendingNebulae.slice(0, 1),
      users: trendingUsers.slice(0, 1)
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching personalized recommendations', error: error.message });
  }
};
