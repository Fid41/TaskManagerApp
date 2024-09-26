const mongoose = require('mongoose');

// Define a simple Mongoose schema for a Task
const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

// Define the Mongoose model for Task
const Task = mongoose.model('Task', TaskSchema);

module.exports = Task; // Export the Task model
