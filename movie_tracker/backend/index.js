// backend/index.js
const express = require("express");
const dotenv = require("dotenv");
const movieRoutes = require("./route/Movie-Routes.js");  // Correct path to routes

dotenv.config();

const app = express();
app.use(express.json());

app.use("/movies", movieRoutes);  // Set up the /movies route

const port = process.env.PORT || 3000;
console.log('Port being used:', port);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
