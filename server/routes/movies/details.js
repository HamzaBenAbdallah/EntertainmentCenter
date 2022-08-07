import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const { API_KEY, MOVIE_BASE_URL } = process.env;

export const getDetails = async (req, res) => {
  const { id = 725201 } = req.query;
  const url = `${MOVIE_BASE_URL}/movie/${id}?api_key=${API_KEY}`;

  try {
    const response = await axios(url);
    if (true) {
      res.status(200).json({
        status: 200,
        data: response.data,
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
      message: `Internal server error`,
    });
  }
};
