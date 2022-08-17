import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const { API_KEY, MOVIE_BASE_URL } = process.env;

export const getMovieById = async (id) => {
  const url = `${MOVIE_BASE_URL}/movie/${id}?api_key=${API_KEY}`;

  try {
    const response = await axios(url);

    return response.data;
  } catch (err) {
    return err;
  }
};
