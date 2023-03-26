import express from "express";
import { authenticateToken } from "../validation/token.js";
import { baseGetMovie } from "./config/baseMovieRequest.js";
import { getSearchResults } from "./search.js";
import { getGenre } from "./filters/genre.js";
import { getCertification } from "./filters/certification.js";
import { getDetails } from "./details.js";
import { getDiscover } from "./discover.js";
import {
    getWatchlist,
    getWatchlistData,
    addMovieToWatchlist,
    deleteMovieFromWatchlist,
} from "./watchlist.js";
import {
    getWatched,
    getWatchedData,
    addMovieToWatched,
    deleteMovieFromWatched,
} from "./watched.js";
import { getRating, addRating } from "./rating.js";

const movieRouter = express.Router();

movieRouter.get("/currently-playing-movies", (req, res) => {
    const urlParam = `movie/now_playing`;
    baseGetMovie(req, res, urlParam);
});

movieRouter.get("/upcoming-movies", (req, res) => {
    const urlParam = `movie/upcoming`;
    baseGetMovie(req, res, urlParam);
});

movieRouter.get("/trending-movies", (req, res) => {
    const urlParam = `trending/movie/week`;
    baseGetMovie(req, res, urlParam);
});

movieRouter.get("/top-rated-movies", (req, res) => {
    const urlParam = `movie/top_rated`;
    baseGetMovie(req, res, urlParam);
});

movieRouter.get("/movie-details", getDetails);
movieRouter.get("/search-movies", getSearchResults);
movieRouter.post("/get-discover", getDiscover);

/** Filters */
movieRouter.get("/get-genre", getGenre);
movieRouter.get("/get-certification", getCertification);

/** Watchlist */
movieRouter.post("/get-watchlist", authenticateToken, getWatchlist);
movieRouter.post("/get-watchlist-data", authenticateToken, getWatchlistData);
movieRouter.post("/add-to-watchlist", authenticateToken, addMovieToWatchlist);
movieRouter.patch(
    "/remove-from-watchlist",
    authenticateToken,
    deleteMovieFromWatchlist
);

/** Watched */
movieRouter.post("/get-watched", authenticateToken, getWatched);
movieRouter.post("/get-watched-data", authenticateToken, getWatchedData);
movieRouter.post("/add-to-watched", authenticateToken, addMovieToWatched);
movieRouter.patch(
    "/remove-from-watched",
    authenticateToken,
    deleteMovieFromWatched
);

/** Ratings */
movieRouter.post("/get-rating", authenticateToken, getRating);
movieRouter.post("/add-rating", authenticateToken, addRating);

export default movieRouter;
