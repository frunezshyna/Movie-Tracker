// On git bash
// npm init -y
// npm install express mysql2 dotenv

// To Start
// node index.js
// or
// npm start

// Server Setup
const express = require("express");
const dotenv = require("dotenv");
const movieRoutes = require("./route/Movie-Routes.js");

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use("/movies", movieRoutes);

const port = process.env.PORT || 3000;
console.log('Port being used:', port);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
