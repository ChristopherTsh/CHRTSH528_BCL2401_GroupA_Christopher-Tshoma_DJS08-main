const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define the route for POST /api/login
app.post('/api/login', (req, res) => {
    // Your login logic here
    res.send('Login endpoint');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
