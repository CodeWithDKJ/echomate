
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const discoverRoutes = require('./routes/discoverRoutes');
const userRoutes = require('./routes/userRoutes');
const nebulaRoutes = require('./routes/nebulaRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/discover', discoverRoutes);
app.use('/api/users', userRoutes);
app.use('/api/nebulae', nebulaRoutes);
app.use('/api/posts', postRoutes);

// MongoDB connection (uncomment and update with your MongoDB URI when ready)
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('MongoDB connected');
// }).catch(err => {
//   console.error('MongoDB connection error:', err);
// });

// Basic health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Echomate API is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
