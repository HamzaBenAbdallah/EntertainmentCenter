import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const { MONGO_URI } = process.env;
const client = new MongoClient(MONGO_URI);

export const getWatchlist = async (req, res) => {
  const { user } = req.body;
  try {
    // Connect to the database
    await client.connect();
    const users = client.db("app-data").collection("users");

    // find user data inside collection
    const userData = await users.findOne({ _id: user });

    return res.status(200).json(userData.watchlist);
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
    const users = client.db("app-data").collection("users");

    // find user data inside collection
    const userData = await users.findOne({ _id: user });

    // check if the movie is already in the watchlist
    const movieInWatchlist = userData.watchlist.find((id) => {
      return id === movieDetails.id;
    });

    if (movieInWatchlist) {
      return res.status(409).json({
        message: "Movie already in watchlist",
      });
    } else {
      // Add the movie id to the user's watchlist
      await users.updateOne(
        { _id: user },
        { $push: { watchlist: movieDetails.id } }
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
