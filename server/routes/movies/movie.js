import { baseGetMovie } from "./config/baseMovieRequest.js";

export const getCurrentlyPlayingMovies = async (req, res) => {
  const urlParam = `movie/now_playing`;
  baseGetMovie(req, res, urlParam);
};

export const getTopRatedMovies = async (req, res) => {
  const urlParam = `movie/top_rated`;
  baseGetMovie(req, res, urlParam);
};

export const getTrendingMovies = async (req, res) => {
  const urlParam = `trending/movie/week`;
  baseGetMovie(req, res, urlParam);
};
