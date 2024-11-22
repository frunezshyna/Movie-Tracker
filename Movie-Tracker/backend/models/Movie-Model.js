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

// Connect to Database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// CRUD OPERATIONS
// ADD A NEW MOVIE
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

// GET ALL MOVIES
const getMovies = (callback) => {
    const query = 'SELECT * FROM movies';
    db.query(query, callback);
};

// UPDATE A MOVIE BY ID
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
            movieData.movie_duration,
            movieData.release_date,
            id
        ], 
        callback
    );
};

// DELETE A MOVIE BY ID
const deleteMovie = (id, callback) => {
    const query = 'DELETE FROM movies WHERE id = ?';
    db.query(query, [id], callback);
};

module.exports = { createMovie, getMovies, updateMovie, deleteMovie };
