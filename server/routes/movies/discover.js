import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const { API_KEY, MOVIE_BASE_URL } = process.env;

export const getDiscover = async (req, res) => {
  const url = `${MOVIE_BASE_URL}discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;
  try {
    const { data } = await axios(url);
    res.status(200).json(data.results);
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: `Internal server error`,
    });
  }
};
