
// Mock data - In a real application, this would come from a database
const users = [
  {
    id: '1',
    name: 'Jane Doe',
    username: 'janedoe',
    email: 'jane@example.com',
    bio: 'Digital artist exploring cosmic themes',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    followers: 1240,
    following: 420
  },
  {
    id: '2',
    name: 'Alex Chen',
    username: 'alexc',
    email: 'alex@example.com',
    bio: 'Music producer and cosmic enthusiast',
    profileImage: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150',
    followers: 890,
    following: 350
  }
];

// Get user profile
exports.getUserProfile = (req, res) => {
  try {
    const { username } = req.params;
    const user = users.find(user => user.username === username);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile', error: error.message });
  }
};

// Update user profile
exports.updateUserProfile = (req, res) => {
  try {
    const { userId } = req.params;
    const userData = req.body;
    
    // In a real app, you would update the user in the database
    // For now, we'll just return the updated data
    
    res.status(200).json({
      id: userId,
      ...userData,
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user profile', error: error.message });
  }
};

// Follow a user
exports.followUser = (req, res) => {
  try {
    const { userId } = req.params;
    // In a real app, you would update the following relationship in the database
    
    res.status(200).json({ message: `Successfully followed user with ID: ${userId}` });
  } catch (error) {
    res.status(500).json({ message: 'Error following user', error: error.message });
  }
};

// Unfollow a user
exports.unfollowUser = (req, res) => {
  try {
    const { userId } = req.params;
    // In a real app, you would remove the following relationship from the database
    
    res.status(200).json({ message: `Successfully unfollowed user with ID: ${userId}` });
  } catch (error) {
    res.status(500).json({ message: 'Error unfollowing user', error: error.message });
  }
};
