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

// MongoDB connection string
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((err) => {
  console.error('Failed to connect to MongoDB', err);
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
