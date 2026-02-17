

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: "Welcome to the Express API",
    status: "Success"
  });
});

app.get('/api/status', (req, res) => {
  res.status(200).json({ 
    message: 'OK'
  });
});

// Export the app for testing
module.exports = app;
