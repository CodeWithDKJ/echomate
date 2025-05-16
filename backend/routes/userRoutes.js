
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get user profile
router.get('/:username', userController.getUserProfile);

// Update user profile
router.put('/:userId', userController.updateUserProfile);

// Follow a user
router.post('/:userId/follow', userController.followUser);

// Unfollow a user
router.post('/:userId/unfollow', userController.unfollowUser);

module.exports = router;
