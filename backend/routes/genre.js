import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const { API_KEY } = process.env;

export const getGenre = async (req, res) => {
  const { id = 28 } = req.query;
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

  try {
    const response = await axios(url);
    const data = response.data.genres.find((genre) => {
      if (genre.id === Number(id)) {
        return genre;
      }
    });
    const genre = data.name;
    res.status(200).json(genre);
  } catch (err) {
    res.status(404).json({
      status: 404,
      message: "Please enter a valid genre id",
    });
  }
};
