// Import required dependencies
const express = require('express');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/TaskRoutes'); // Importing the task routes
const connectDB = require('./config/db'); // MongoDB config
const logger = require('./middleware/logger'); // Custom logger middleware

// Initialize dotenv to use environment variables
dotenv.config();

// Initialize the Express app
const app = express();

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Apply custom logger middleware to log each request
app.use(logger);



// Connect to MongoDB
connectDB();

// Use task routes
app.use('/api/tasks', taskRoutes);




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
