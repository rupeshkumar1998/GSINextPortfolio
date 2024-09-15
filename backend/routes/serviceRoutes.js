// routes/serviceRoutes.js
const express = require('express');
const router = express.Router();
const { getAllServices, getServiceById, createService } = require('../controllers/serviceController');

// Route to get all services
router.get('/', getAllServices);

// Route to get a single service by ID
router.get('/:id', getServiceById);

// Route to create a new service
router.post('/', createService);

module.exports = router;
