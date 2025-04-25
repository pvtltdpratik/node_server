// Importing required modules
const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define a GET API
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello, this is a GET request!' });
});

// Define a POST API
app.post('/api/message', (req, res) => {
  const { name } = req.body; // Extract 'name' from request body
  res.json({ message: `Hello, ${name}! This is a POST request.` });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});