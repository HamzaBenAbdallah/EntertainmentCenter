import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const { API_KEY, MOVIE_BASE_URL, POSTER_BASE_URL } = process.env;

export const baseGetMovie = async (req, res, urlParam) => {
  const { page, query } = req.query;

  const url1 = `${MOVIE_BASE_URL}${urlParam}?api_key=${API_KEY}&page=${
    page || 1
  }&query=${query || "a"}`;

  const url2 = `${MOVIE_BASE_URL}${urlParam}?api_key=${API_KEY}&page=${
    page + 1 || 2
  }&query=${query || "a"}`;

  try {
    const response1 = await axios(url1);
    const data1 = response1?.data.results;

    const response2 = await axios(url2);
    const data2 = response2?.data.results;

    if (data1?.length > 0) {
      const relevantData1 = data1?.map((movie) => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
        release_date: movie.release_date,
        poster_path: POSTER_BASE_URL + movie.poster_path,
        genre_id: movie.genre_ids,
      }));

      if (data2?.length > 0) {
        const relevantData2 = data2?.map((movie) => ({
          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          vote_average: movie.vote_average,
          vote_count: movie.vote_count,
          release_date: movie.release_date,
          poster_path: POSTER_BASE_URL + movie.poster_path,
          genre_id: movie.genre_ids,
        }));

        const responseData = [...relevantData1, ...relevantData2];

        res.status(200).json(responseData);
      } else {
        res.status(404).json({ status: 404, message: "No movies found" });
      }
    }
  } catch (err) {
    switch (err.response.status) {
      case 400:
      case 422:
        res
          .status(404)
          .json({ status: 404, message: "Please enter a valid page number" });
        break;
      default:
        res.status(500).json({
          status: 500,
          message: err.message,
        });
    }
  }
};
