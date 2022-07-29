import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const { API_KEY, MOVIE_BASE_URL } = process.env;

export const baseGetMovie = async (req, res, urlParam) => {
  const { page, region, query } = req.query;
  const url = `${MOVIE_BASE_URL}${urlParam}?api_key=${API_KEY}&page=${
    page || 1
  }&region=${region || "US"}&query=${query || "a"}`;
  try {
    const response = await axios(url);
    const data = response?.data.results;

    if (data.length > 0) {
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
    } else {
      res.status(404).json({ status: 404, message: "No movies found" });
    }
  } catch (err) {
    switch (err.response.status) {
      case 400:
      case 422:
        res
          .status(404)
          .json({ status: 404, message: "Please enter a valid page number" });
        break;
      default:
        res.status(500).json({
          status: 500,
          message: err.message,
        });
    }
  }
};
