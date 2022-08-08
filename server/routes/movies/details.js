import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const { API_KEY, MOVIE_BASE_URL } = process.env;

export const getDetails = async (req, res) => {
  const { id } = req.query;
  const url = `${MOVIE_BASE_URL}/movie/${id}?api_key=${API_KEY}`;
  const similarUrl = `${MOVIE_BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`;
  const castUrl = `${MOVIE_BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;

  try {
    const response = await axios(url);
    const { data } = response;
    const similar = await axios(similarUrl);
    const { data: similarData } = similar;
    const cast = await axios(castUrl);
    const { data: castData } = cast;
    const director = castData.crew.find((member) => member.job === "Director");
    console.log(director);
    const returnData = {
      ...data,
      related: similarData.results.slice(0, 4),
      cast: castData.cast.slice(0, 5),
      director: director ? director.name : "",
    };

    if (data) {
      res.status(200).json(returnData);
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
