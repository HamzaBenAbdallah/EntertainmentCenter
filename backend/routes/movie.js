import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const { API_KEY, MOVIE_BASE_URL } = process.env;

export const getCurrentlyPlayingMovies = async (req, res) => {
  const { page, region } = req.query;
  const url = `${MOVIE_BASE_URL}/movie/now_playing?api_key=${API_KEY}&page=${
    page || 1
  }&region=${region || "US"}`;

  try {
    const response = await axios(url);
    const data = response?.data.results;

    const relevantData = data.map((movie) => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      genre_id: movie.genre_ids,
    }));
    res.status(200).json(relevantData);
  } catch (err) {
    switch (err.response.status) {
      case 422:
        res
          .status(422)
          .json({ status: 422, message: "Please enter a valid page number" });
        break;
      default:
        res.status(500).json({
          status: 500,
          message: err.message,
        });
    }
  }
};

export const getTopRatedMovies = async (req, res) => {
  const { page, region } = req.query;
  const url = `${MOVIE_BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${
    page || 1
  }&region=${region || "US"}`;

  try {
    const response = await axios(url);
    const data = response?.data.results;

    const relevantData = data.map((movie) => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      genre_id: movie.genre_ids,
    }));
    res.status(200).json(relevantData);
  } catch (err) {
    switch (err.response.status) {
      case 422:
        res
          .status(422)
          .json({ status: 422, message: "Please enter a valid page number" });
        break;
      default:
        res.status(500).json({
          status: 500,
          message: err.message,
        });
    }
  }
};

export const getTrendingMovies = async (req, res) => {
  const { page, region } = req.query;
  const url = `${MOVIE_BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${
    page || 1
  }&region=${region || "US"}`;

  try {
    const response = await axios(url);
    const data = response?.data.results;

    const relevantData = data.map((movie) => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      genre_id: movie.genre_ids,
    }));
    res.status(200).json(relevantData);
  } catch (err) {
    switch (err.response.status) {
      case 422:
        res
          .status(422)
          .json({ status: 422, message: "Please enter a valid page number" });
        break;
      default:
        res.status(500).json({
          status: 500,
          message: err.message,
        });
    }
  }
};
