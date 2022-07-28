"use strict";
import express from "express";
import morgan from "morgan";
import {
  getCurrentlyPlayingMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "./routes/movie.js";
import { getGenre } from "./routes/genre.js";

const app = express();
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.static("public"));

app.get("/api/currently-playing-movies", getCurrentlyPlayingMovies);
app.get("/api/top-rated-movies", getTopRatedMovies);
app.get("/api/trending-movies", getTrendingMovies);

app.get("/api/genre", getGenre);

app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Page not found",
  });
});

app.listen(8000);
