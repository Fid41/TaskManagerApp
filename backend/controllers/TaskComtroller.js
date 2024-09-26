const Task = require('../models/Task'); // Import the Task model

// API route to get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};


// API route to create a new task
const createTask = async (req, res) => {
  const { title } = req.body;
  try {
    const newTask = new Task({ title });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getAllTasks, createTask }; // Export the controller functions
