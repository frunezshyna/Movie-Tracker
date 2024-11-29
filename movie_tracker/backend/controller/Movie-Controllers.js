// backend/controllers/movieController.js
const Movie = require("../model/Movie-Models.js");

// Create Movie
module.exports.addMovie = async (req, res) => {
    try {
        const { title, director, year, genre, movie_duration, release_date } = req.body;
        const newMovie = { title, director, year, genre, movie_duration, release_date };
        const result = await Movie.createMovie(newMovie);
        res.status(201).json({
            code: "MOVIE-ADDED",
            message: "Movie has been successfully added.",
            result: result
        });
    } catch (error) {
        res.status(500).json({
            code: "SERVER-ERROR",
            message: "There was an error adding the movie.",
            error: error.message
        });
    }
};

// Get All Movies
module.exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.getAllMovies();
        res.status(200).json({
            code: "ALL-MOVIES-RESULT",
            message: "List of all movies",
            result: movies
        });
    } catch (error) {
        res.status(500).json({
            code: "SERVER-ERROR",
            message: "There was an error fetching movies.",
            error: error.message
        });
    }
};

// Get Movie by ID
module.exports.getMovieById = async (req, res) => {
    try {
        const movie = await Movie.getMovieById(req.params.id);
        if (movie) {
            res.status(200).json({
                code: "MOVIE-FOUND",
                message: "Movie found.",
                result: movie
            });
        } else {
            res.status(404).json({
                code: "MOVIE-NOT-FOUND",
                message: "Movie not found."
            });
        }
    } catch (error) {
        res.status(500).json({
            code: "SERVER-ERROR",
            message: "There was an error fetching the movie.",
            error: error.message
        });
    }
};

// Update Movie
module.exports.updateMovie = async (req, res) => {
    try {
        const updatedMovie = req.body;
        const result = await Movie.updateMovie(req.params.id, updatedMovie);
        if (result.affectedRows > 0) {
            res.status(200).json({
                code: "MOVIE-UPDATED",
                message: "Movie updated successfully."
            });
        } else {
            res.status(404).json({
                code: "MOVIE-NOT-FOUND",
                message: "Movie not found."
            });
        }
    } catch (error) {
        res.status(500).json({
            code: "SERVER-ERROR",
            message: "There was an error updating the movie.",
            error: error.message
        });
    }
};

// Delete Movie
module.exports.deleteMovie = async (req, res) => {
    try {
        const result = await Movie.deleteMovie(req.params.id);
        if (result.affectedRows > 0) {
            res.status(200).json({
                code: "MOVIE-DELETED",
                message: "Movie deleted successfully."
            });
        } else {
            res.status(404).json({
                code: "MOVIE-NOT-FOUND",
                message: "Movie not found."
            });
        }
    } catch (error) {
        res.status(500).json({
            code: "SERVER-ERROR",
            message: "There was an error deleting the movie.",
            error: error.message
        });
    }
};
