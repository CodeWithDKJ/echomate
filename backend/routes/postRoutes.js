
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Get all posts
router.get('/', postController.getAllPosts);

// Get a specific post
router.get('/:postId', postController.getPost);

// Create a new post
router.post('/', postController.createPost);

// Like a post
router.post('/:postId/like', postController.likePost);

// Comment on a post
router.post('/:postId/comment', postController.commentOnPost);

// Share a post
router.post('/:postId/share', postController.sharePost);

module.exports = router;
