import express from "express";
import { authenticateToken } from "../validation/token.js";
import { baseGetMovie } from "./config/baseMovieRequest.js";
import { getSearchResults } from "./search.js";
import { getGenre } from "./genre.js";
import { getDetails } from "./details.js";
import {
  getWatchlist,
  addMovieToWatchlist,
  deleteMovieFromWatchlist,
} from "./watchlist.js";

const movieRouter = express.Router();

movieRouter.get("/currently-playing-movies", authenticateToken, (req, res) => {
  const urlParam = `movie/now_playing`;
  baseGetMovie(req, res, urlParam);
});

movieRouter.get("/top-rated-movies", authenticateToken, (req, res) => {
  const urlParam = `movie/top_rated`;
  baseGetMovie(req, res, urlParam);
});

movieRouter.get("/trending-movies", authenticateToken, (req, res) => {
  const urlParam = `trending/movie/week`;
  baseGetMovie(req, res, urlParam);
});

movieRouter.get("/search-movies", authenticateToken, getSearchResults);

movieRouter.get("/genre", authenticateToken, getGenre);

movieRouter.get("/movie-details", authenticateToken, getDetails);

/** Watchlist */

movieRouter.get("/watchlist", authenticateToken, getWatchlist);

movieRouter.post("/watchlist", authenticateToken, addMovieToWatchlist);

movieRouter.delete("/watchlist", authenticateToken, deleteMovieFromWatchlist);

/** Watched */

export default movieRouter;
