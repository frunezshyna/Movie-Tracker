const db = require("../config/db.js");

// Create Movie
module.exports.createMovie = async (movieData) => {
    const { title, director, year, genre, movie_duration, release_date } = movieData;
    const query = `
        INSERT INTO movies (title, director, year, genre, movie_duration, release_date)
        VALUES (?, ?, ?, ?, ?, ?)`;
    const [result] = await db.execute(query, [
        title,
        director,
        year,
        genre,
        movie_duration,
        release_date
    ]);
    return result;
};

// Get All Movies
module.exports.getAllMovies = async () => {
    const [rows] = await db.execute("SELECT * FROM movies");
    return rows;
};

// Get Movie by ID
module.exports.getMovieById = async (id) => {
    const [rows] = await db.execute("SELECT * FROM movies WHERE id = ?", [id]);
    return rows[0];
};

// Update Movie
module.exports.updateMovie = async (id, movieData) => {
    const { title, director, year, genre, movie_duration, release_date } = movieData;
    const query = `
        UPDATE movies
        SET title = ?, director = ?, year = ?, genre = ?, movie_duration = ?, release_date = ?
        WHERE id = ?`;
    const [result] = await db.execute(query, [
        title,
        director,
        year,
        genre,
        movie_duration,
        release_date,
        id
    ]);
    return result;
};

// Delete Movie
module.exports.deleteMovie = async (id) => {
    const [result] = await db.execute("DELETE FROM movies WHERE id = ?", [id]);
    return result;
};
