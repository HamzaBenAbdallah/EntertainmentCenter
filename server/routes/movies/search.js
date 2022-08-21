import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const { API_KEY, MOVIE_BASE_URL } = process.env;

export const getSearchResults = async (req, res) => {
  const { query } = req.query;
  const url = `${MOVIE_BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`;

  try {
    const response = await axios(url);
    const data = response?.data.results;
    res.status(200).json(data);
  } catch (err) {
    switch (err.response.status) {
      case 400:
      case 422:
        res.status(404).json({ status: 404, message: "No movies found" });
        break;
      default:
        res.status(500).json({
          status: 500,
          message: `Internal server error`,
        });
    }
  }
};
