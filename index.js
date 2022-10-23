const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());

const movies = require("./data/movie.json");

app.get("/", (req, res) => {
  res.send("news api running");
});

app.get("/movies", (req, res) => {
  res.send(movies);
});

app.get("/details/:id", (req, res) => {
  const id = req.params.id;
  const singleMovie = movies?.find((movie) => movie.id === id);
  res.send(singleMovie);
});
app.listen(port, () => {
  console.log("movie server running on port", port);
});
