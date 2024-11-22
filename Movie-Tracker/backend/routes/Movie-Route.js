const express = require('express');
const router = express.Router();
const movieController = require('../controllers/Movie-Controller.js');

// Add a new movie
router.post('/add', movieController.createMovie);

// Retrieve all movies
router.get('/all', movieController.getMovies);

// Update movie by ID
router.put('/update/:id', movieController.updateMovie);

// Delete movie by ID
router.delete('/delete/:id', movieController.deleteMovie);

module.exports = router;
