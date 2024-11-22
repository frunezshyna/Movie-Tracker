const express = require('express');
const router = express.Router();
const movieController = require('../controllers/Movie-Controller.js');

// ADD A NEW MOVIE
router.post('/add', movieController.createMovie);

// GET ALL MOVIES
router.get('/all', movieController.getMovies);

// UPDATE A MOVIE BY ID
router.put('/update/:id', movieController.updateMovie);

// DELETE A MOVIE BY ID
router.delete('/delete/:id', movieController.deleteMovie);

module.exports = router;
