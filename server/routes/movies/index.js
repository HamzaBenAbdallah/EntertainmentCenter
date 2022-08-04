import express from "express";
import { baseGetMovie } from "./config/baseMovieRequest.js";
import { getSearchResults } from "./search.js";
import { getGenre } from "./genre.js";

const movieRouter = express.Router();

movieRouter.get("/currently-playing-movies", (req, res) => {
  const urlParam = `movie/now_playing`;
  baseGetMovie(req, res, urlParam);
});

movieRouter.get("/top-rated-movies", (req, res) => {
  const urlParam = `movie/top_rated`;
  baseGetMovie(req, res, urlParam);
});

movieRouter.get("/trending-movies", (req, res) => {
  const urlParam = `trending/movie/week`;
  baseGetMovie(req, res, urlParam);
});

movieRouter.get("/search-movies", getSearchResults);

movieRouter.get("/genre", getGenre);

export default movieRouter;
