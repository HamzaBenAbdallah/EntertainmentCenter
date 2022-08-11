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
import {
  getWatched,
  addMovieToWatched,
  deleteMovieFromWatched,
} from "./watched.js";
import { getWatchlistIds } from "./watchlistIds.js";
import { getWatchedIds } from "./watchedIds.js";

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

movieRouter.get("/movie-details", getDetails);
movieRouter.get("/search-movies", getSearchResults);
movieRouter.get("/genre", getGenre);

/** Watchlist */
movieRouter.get("/watchlist", authenticateToken, getWatchlist);
movieRouter.post("/watchlist", authenticateToken, addMovieToWatchlist);
movieRouter.delete("/watchlist", authenticateToken, deleteMovieFromWatchlist);
movieRouter.post("/watchlist-ids", authenticateToken, getWatchlistIds);

/** Watched */
movieRouter.get("/watched", authenticateToken, getWatched);
movieRouter.post("/watched", authenticateToken, addMovieToWatched);
movieRouter.delete("/watched", authenticateToken, deleteMovieFromWatched);
movieRouter.post("/watched-ids", authenticateToken, getWatchedIds);

export default movieRouter;
