import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const { MONGO_URI } = process.env;
const client = new MongoClient(MONGO_URI);

export const getWatchlist = async (req, res) => {
  try {
    // Connect to the database
    await client.connect();
    const collection = client.db("app-data").collection("watchlist");

    // get all movies from the database
    const movies = await collection.find({}).toArray();

    if (movies.length > 0) {
      return res.status(200).json(movies);
    } else {
      return res.status(404).json({
        message: "No movies found",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  } finally {
    await client.close();
  }
};

export const addMovieToWatchlist = async (req, res) => {
  const { user, movieDetails } = req.body;
  try {
    // Connect to the database
    await client.connect();
    const watchlist = client.db("app-data").collection("watchlist");
    const watchlistIds = client.db("app-data").collection("watchlist-ids");

    // get all movies from the database
    const movies = await watchlist.find({}).toArray();

    // check if the movie is already in the watchlist
    const movieInWatchlist = movies.find((movie) => {
      return movie.id === movieDetails.id;
    });

    if (movieInWatchlist) {
      return res.status(409).json({
        message: "Movie already in watchlist",
      });
    } else {
      // add the movie to the watchlist
      await watchlist.insertOne({
        userId: user,
        ...movieDetails,
      });

      // add the movie id to the watchlist ids collection
      const MovieIds = await watchlistIds.find({}).toArray();
      await Promise.all(
        MovieIds.map(async (movie) => {
          if (movie.userId === user) {
            await watchlistIds.updateOne(
              { userId: req.body.user },
              { $push: { movieIds: movieDetails.id } }
            );
          }
        })
      );
    }

    return res.status(201).json({
      message: "Movie added to watchlist",
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Internal server error x",
    });
  } finally {
    await client.close();
  }
};

export const deleteMovieFromWatchlist = async (req, res) => {
  try {
    // Connect to the database
    await client.connect();
    const collection = client.db("app-data").collection("watchlist");

    // get all movies from the database
    const movies = await collection.find({}).toArray();

    // check if the movie is already in the watchlist
    const movieInWatchlist = movies.find((movie) => {
      return movie.id === req.params.id;
    });

    if (movieInWatchlist) {
      await collection.deleteOne({ id: req.params.id });
      return res.status(200).json({
        message: "Movie deleted from watchlist",
      });
    } else {
      return res.status(404).json({
        message: "Movie not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  } finally {
    await client.close();
  }
};
