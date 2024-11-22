const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

// MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// CRUD operations

// Add a new movie
const createMovie = (movieData, callback) => {
    const query = 'INSERT INTO movies (title, director, year, genre, movie_duration, release_date) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, 
        [
            movieData.title, 
            movieData.director, 
            movieData.year, 
            movieData.genre, 
            movieData.movie_duration, 
            movieData.release_date
        ],
        callback);
};

// Retrieve all movies
const getMovies = (callback) => {
    const query = 'SELECT * FROM movies';
    db.query(query, callback);
};

// Update movie details by ID
const updateMovie = (id, movieData, callback) => {
    const query = `
        UPDATE movies
        SET title = ?, director = ?, year = ?, genre = ?, movie_duration = ?, release_date = ?
        WHERE id = ?`;

    db.query(query, 
        [
            movieData.title,
            movieData.director,
            movieData.year,
            movieData.genre,
            movieData.movie_duration, // Ensure movie_duration is passed correctly
            movieData.release_date,
            id
        ], 
        callback
    );
};

// Delete a movie by ID
const deleteMovie = (id, callback) => {
    const query = 'DELETE FROM movies WHERE id = ?';
    db.query(query, [id], callback);
};

module.exports = { createMovie, getMovies, updateMovie, deleteMovie };
