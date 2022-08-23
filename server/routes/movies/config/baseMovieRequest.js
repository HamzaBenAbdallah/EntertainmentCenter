import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const { API_KEY, MOVIE_BASE_URL } = process.env;

export const baseGetMovie = async (req, res, urlParam) => {
  const url = `${MOVIE_BASE_URL}${urlParam}?api_key=${API_KEY}`;

  try {
    const { data } = await axios(url);

    res.status(200).json(data.results);
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
