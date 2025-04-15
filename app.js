const express = require('express');
const cors = require('cors'); // Import CORS middleware
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for JSON parsing
app.use(express.json());

// Middleware for enabling CORS
app.use(cors());

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Add a test route
app.get('/test', (req, res) => {
  res.send('Nodemon is working!');
});

// Add a route to check environment variables
app.get('/env', (req, res) => {
  res.json({
    node_env: process.env.NODE_ENV,
    jwt_secret: process.env.JWT_SECRET ? '*****' : 'NOT SET'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});