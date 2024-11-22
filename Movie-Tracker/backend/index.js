const express = require('express');
const dotenv = require('dotenv');
const movieRoutes = require('./routes/Movie-Route.js');

dotenv.config();  // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Use movie routes
app.use('/movies', movieRoutes);

// Basic route to check if the server is working
app.get('/', (req, res) => {
    res.send('Movie Tracker API is working!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
