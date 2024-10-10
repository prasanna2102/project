const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'build')));

// Define a route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Listen on port 3000 and bind to 0.0.0.0 to make the server accessible
app.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on port 3000 and accessible externally');
});
