import { baseGetMovie } from "./config/baseMovieRequest.js";

export const getSearchResults = async (req, res) => {
  const urlParam = `search/movie`;
  baseGetMovie(req, res, urlParam);
};
