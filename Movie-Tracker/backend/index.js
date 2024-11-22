// BASH
// npm init -y
// npm i express dotenv

//To Start
// node index.js

// Server Setup
const express = require('express');
const dotenv = require('dotenv');
const movieRoutes = require('./routes/Movie-Route.js');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Use Movie Routes
app.use('/movies', movieRoutes);

// Basic route to check if the server is working
app.get('/', (req, res) => {
    res.send('Movie Tracker API is working!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
