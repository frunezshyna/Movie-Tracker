const movieModel = require('../models/Movie-Model.js');

// Add a new movie
const createMovie = (req, res) => {
    const { title, director, year, genre, movie_duration, release_date } = req.body;

    // Validate all required fields
    if (!title || !director || !year || !genre || !movie_duration || !release_date) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const movieData = { title, director, year, genre, movie_duration, release_date };
    movieModel.createMovie(movieData, (err, result) => {
        if (err) {
            console.error('Error inserting movie:', err);
            return res.status(500).json({ error: 'Failed to add movie', details: err }); // Ensure we send proper error details
        }
        res.status(201).json({
            id: result.insertId,
            title,
            director,
            year,
            genre,
            movie_duration,
            release_date
        });
    });
};

// Get all movies
const getMovies = (req, res) => {
    movieModel.getMovies((err, results) => {
        if (err) {
            console.error('Error fetching movies:', err);
            return res.status(500).json({ error: 'Failed to retrieve movies', details: err }); // Send error details
        }
        res.status(200).json(results);
    });
};

// Update movie by ID
const updateMovie = (req, res) => {
    const { id } = req.params;  // Get movie ID from the URL
    const { title, director, year, genre, movie_duration, release_date } = req.body;

    // Log the incoming request to check if all fields are present
    console.log("Incoming data for update:", req.body);

    // Validate that all fields are present and not null
    if (!title || !director || !year || !genre || !movie_duration || !release_date) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const updatedData = { title, director, year, genre, movie_duration, release_date };

    movieModel.updateMovie(id, updatedData, (err, result) => {
        if (err) {
            console.error('Error updating movie:', err);
            return res.status(500).json({ error: 'Failed to update movie', details: err });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Movie not found' });
        }

        res.status(200).json({
            message: 'Movie updated successfully',
            updatedMovie: updatedData
        });
    });
};


// Delete movie by ID
const deleteMovie = (req, res) => {
    const { id } = req.params;

    movieModel.deleteMovie(id, (err, result) => {
        if (err) {
            console.error('Error deleting movie:', err);
            return res.status(500).json({ error: 'Failed to delete movie', details: err }); // Send error details
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.status(200).json({ message: 'Movie deleted successfully' });
    });
};

module.exports = { createMovie, getMovies, updateMovie, deleteMovie };