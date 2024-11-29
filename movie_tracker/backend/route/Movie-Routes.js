// backend/routes/movieRoutes.js
const express = require("express");
const movieController = require("../controller/Movie-Controllers.js");
const router = express.Router();

// Create Movie
router.post("/add", movieController.addMovie);

// Get All Movies
router.get("/all", movieController.getAllMovies);

// Get Movie by ID
router.get("/:id", movieController.getMovieById);

// Update Movie
router.put("/update/:id", movieController.updateMovie);

// Delete Movie
router.delete("/delete/:id", movieController.deleteMovie);

module.exports = router;
