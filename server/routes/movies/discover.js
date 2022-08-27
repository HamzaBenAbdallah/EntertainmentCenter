import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const { API_KEY, MOVIE_BASE_URL } = process.env;

export const getDiscover = async (req, res) => {
  const { params } = req.body;
  const { with_genres, sort_by } = params;
  try {
    const url = `${MOVIE_BASE_URL}discover/movie`;

    const { data } = await axios(url, {
      params: {
        api_key: API_KEY,
        with_genres,
        sort_by,
      },
    });
    res.status(200).json(data.results);
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: `Internal server error`,
    });
  }
};
