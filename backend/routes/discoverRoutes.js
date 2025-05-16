
const express = require('express');
const router = express.Router();
const discoverController = require('../controllers/discoverController');

// Get trending content for discover page
router.get('/trending', discoverController.getTrending);

// Get recommended nebulae
router.get('/nebulae', discoverController.getNebulaRecommendations);

// Get recommended people to follow
router.get('/people', discoverController.getPeopleRecommendations);

// Get personalized recommendations for the user
router.get('/for-you', discoverController.getPersonalizedRecommendations);

module.exports = router;
