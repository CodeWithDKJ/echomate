
// Mock data - In a real application, this would come from a database
const nebulae = [
  {
    id: '1',
    name: 'Art Cosmos',
    description: 'A community for artists inspired by cosmic themes and celestial beauty.',
    banner: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300',
    members: 12500,
    posts: []
  },
  {
    id: '2',
    name: 'Tech Stars',
    description: 'Discuss the latest in technology, programming, and innovation.',
    banner: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300',
    members: 18900,
    posts: []
  }
];

// Get all nebulae
exports.getAllNebulae = (req, res) => {
  try {
    res.status(200).json(nebulae);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching nebulae', error: error.message });
  }
};

// Get a specific nebula
exports.getNebula = (req, res) => {
  try {
    const { nebulaId } = req.params;
    const nebula = nebulae.find(n => n.id === nebulaId);
    
    if (!nebula) {
      return res.status(404).json({ message: 'Nebula not found' });
    }
    
    res.status(200).json(nebula);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching nebula', error: error.message });
  }
};

// Create a new nebula
exports.createNebula = (req, res) => {
  try {
    const nebulaData = req.body;
    
    // In a real app, you would save to the database and generate an ID
    const newNebula = {
      id: Date.now().toString(),
      ...nebulaData,
      members: 1,
      posts: [],
      createdAt: new Date().toISOString()
    };
    
    res.status(201).json(newNebula);
  } catch (error) {
    res.status(500).json({ message: 'Error creating nebula', error: error.message });
  }
};

// Join a nebula
exports.joinNebula = (req, res) => {
  try {
    const { nebulaId } = req.params;
    // In a real app, you would update the database
    
    res.status(200).json({ message: `Successfully joined nebula with ID: ${nebulaId}` });
  } catch (error) {
    res.status(500).json({ message: 'Error joining nebula', error: error.message });
  }
};

// Leave a nebula
exports.leaveNebula = (req, res) => {
  try {
    const { nebulaId } = req.params;
    // In a real app, you would update the database
    
    res.status(200).json({ message: `Successfully left nebula with ID: ${nebulaId}` });
  } catch (error) {
    res.status(500).json({ message: 'Error leaving nebula', error: error.message });
  }
};
