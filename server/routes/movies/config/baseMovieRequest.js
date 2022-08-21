import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const { API_KEY, MOVIE_BASE_URL } = process.env;

export const baseGetMovie = async (req, res, urlParam) => {
  const { page = 1 } = req.query;

  const url1 = `${MOVIE_BASE_URL}${urlParam}?api_key=${API_KEY}&page=${page}`;

  const url2 = `${MOVIE_BASE_URL}${urlParam}?api_key=${API_KEY}&page=${
    page + 1
  }`;

  try {
    const response1 = await axios(url1);
    const data1 = response1?.data.results;
    const response2 = await axios(url2);
    const data2 = response2?.data.results;

    const responseData = [...data1, ...data2];
    res.status(200).json(responseData);
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
