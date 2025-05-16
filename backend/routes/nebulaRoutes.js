
const express = require('express');
const router = express.Router();
const nebulaController = require('../controllers/nebulaController');

// Get all nebulae
router.get('/', nebulaController.getAllNebulae);

// Get a specific nebula
router.get('/:nebulaId', nebulaController.getNebula);

// Create a new nebula
router.post('/', nebulaController.createNebula);

// Join a nebula
router.post('/:nebulaId/join', nebulaController.joinNebula);

// Leave a nebula
router.post('/:nebulaId/leave', nebulaController.leaveNebula);

module.exports = router;
