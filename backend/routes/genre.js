import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const { API_KEY, MOVIE_BASE_URL } = process.env;

export const getGenre = async (req, res) => {
  const { id = 28 } = req.query;
  const url = `${MOVIE_BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;

  try {
    const response = await axios(url);
    const data = response.data.genres.find((genre) => {
      if (genre.id === Number(id)) {
        return genre;
      }
    });
    const genre = data?.name;
    if (genre) {
      res.status(200).json({
        status: 200,
        genre: `${genre}`,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "No results found, please enter a valid genre id",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    });
  }
};
