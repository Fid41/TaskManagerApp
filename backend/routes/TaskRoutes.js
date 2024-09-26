const express = require('express');
const router = express.Router();
const { getAllTasks, createTask } = require('../controllers/taskComtroller'); // Import controller functions

// API route to get all tasks
router.get('/', getAllTasks);

// API route to create a new task
router.post('/', createTask);

module.exports = router; // Export the router
