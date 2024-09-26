// Import required dependencies
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Initialize dotenv to use environment variables
dotenv.config();

// Initialize the Express app
const app = express();

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Middleware to log each request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// MongoDB connection string
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((err) => {
  console.error('Failed to connect to MongoDB', err);
  process.exit(1); // Exit the process with failure code if connection fails
});

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

//Define the Mongoose model for Task
const Task = mongoose.model('Task', TaskSchema);

// API route to get all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});



// API route to create a new task
app.post('/api/tasks', async (req, res) => {
  const { title } = req.body;
  try {
    const newTask = new Task({ title });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Sample route to test the backend
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Define a port for the server
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
