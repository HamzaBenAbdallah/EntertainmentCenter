import { MongoClient } from "mongodb";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const { API_KEY, MOVIE_BASE_URL, MONGO_URI } = process.env;
const client = new MongoClient(MONGO_URI);

export const getDetails = async (req, res) => {
  const { id } = req.query;
  const url = `${MOVIE_BASE_URL}/movie/${id}?api_key=${API_KEY}`;
  const similarUrl = `${MOVIE_BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`;
  const castUrl = `${MOVIE_BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;

  try {
    // Connect to the database
    await client.connect();
    const watchlistDb = client.db("app-data").collection("watchlist");
    const watchedDb = client.db("app-data").collection("watched");

    try {
      const response = await axios(url);
      const { data } = response;
      const details = { ...data, watchlist: false, watched: false };

      // check if the movie is already in the watchlist
      const watchlist = await watchlistDb.findOne({ id: data.id });

      // check if the movie is already in the watched list
      const watched = await watchedDb.findOne({ id: data.id });

      const similar = await axios(similarUrl);
      const { data: similarData } = similar;
      const cast = await axios(castUrl);
      const { data: castData } = cast;
      const director = castData.crew.find(
        (member) => member.job === "Director"
      );
      const returnData = {
        ...details,
        related: similarData.results.slice(0, 5),
        cast: castData.cast.slice(0, 4),
        director: director ? director.name : "",
        watchlist: watchlist ? true : false,
        watched: watched ? true : false,
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
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  } finally {
    await client.close();
  }
};
