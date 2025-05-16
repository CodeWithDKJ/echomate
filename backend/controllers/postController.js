
// Mock data - In a real application, this would come from a database
const posts = [
  {
    id: '1',
    author: {
      id: '1',
      name: 'Jane Doe',
      username: 'janedoe',
      profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
    },
    content: 'Just discovered a beautiful nebula while stargazing tonight! The colors were breathtaking. 🌌✨',
    image: null,
    timestamp: '2025-05-16T08:00:00Z',
    likes: 42,
    comments: [
      {
        id: '101',
        author: {
          id: '2',
          name: 'Alex Chen',
          username: 'alexc'
        },
        content: 'Amazing! Which telescope are you using?',
        timestamp: '2025-05-16T08:30:00Z'
      }
    ],
    shares: 3
  },
  {
    id: '2',
    author: {
      id: '2',
      name: 'Alex Chen',
      username: 'alexc',
      profileImage: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150'
    },
    content: 'Working on a new music project inspired by cosmic sounds. Anyone interested in collaborating? 🎵🌠',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600',
    timestamp: '2025-05-16T06:00:00Z',
    likes: 89,
    comments: [],
    shares: 12
  }
];

// Get all posts
exports.getAllPosts = (req, res) => {
  try {
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error: error.message });
  }
};

// Get a specific post
exports.getPost = (req, res) => {
  try {
    const { postId } = req.params;
    const post = posts.find(p => p.id === postId);
    
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching post', error: error.message });
  }
};

// Create a new post
exports.createPost = (req, res) => {
  try {
    const postData = req.body;
    
    // In a real app, you would save to the database and generate an ID
    const newPost = {
      id: Date.now().toString(),
      ...postData,
      timestamp: new Date().toISOString(),
      likes: 0,
      comments: [],
      shares: 0
    };
    
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error: error.message });
  }
};

// Like a post
exports.likePost = (req, res) => {
  try {
    const { postId } = req.params;
    // In a real app, you would update the database
    
    res.status(200).json({ message: `Successfully liked post with ID: ${postId}` });
  } catch (error) {
    res.status(500).json({ message: 'Error liking post', error: error.message });
  }
};

// Comment on a post
exports.commentOnPost = (req, res) => {
  try {
    const { postId } = req.params;
    const { content, author } = req.body;
    
    // In a real app, you would update the database
    const newComment = {
      id: Date.now().toString(),
      content,
      author,
      timestamp: new Date().toISOString()
    };
    
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: 'Error commenting on post', error: error.message });
  }
};

// Share a post
exports.sharePost = (req, res) => {
  try {
    const { postId } = req.params;
    // In a real app, you would update the database
    
    res.status(200).json({ message: `Successfully shared post with ID: ${postId}` });
  } catch (error) {
    res.status(500).json({ message: 'Error sharing post', error: error.message });
  }
};
