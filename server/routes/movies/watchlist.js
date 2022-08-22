import { MongoClient } from "mongodb";
import { getMovieById } from "./config/getMovieById.js";
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

export const getWatchlistData = async (req, res) => {
  const { user } = req.body;
  try {
    // Connect to the database
    await client.connect();
    const users = client.db("app-data").collection("users");

    // find user data inside collection
    const userData = await users.findOne({ _id: user });

    // find movie data inside collection
    let promises = [];
    userData.watchlist.forEach((movieId) => {
      promises.push(getMovieById(movieId));
    });
    Promise.all(promises).then((data) => {
      return res.status(200).json(data);
    });
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
  const { user, movieId } = req.body;
  const movie = parseInt(movieId);

  try {
    // Connect to the database
    await client.connect();
    const users = client.db("app-data").collection("users");

    // find user data inside collection
    const userData = await users.findOne({ _id: user });

    // check if the movie is already in the watchlist
    const movieInWatchlist = userData.watchlist.find((id) => {
      return id === movie;
    });

    if (movieInWatchlist) {
      return res.status(409).json({
        message: "Movie already in watchlist",
      });
    } else {
      // Add the movie id to the user's watchlist
      await users.updateOne({ _id: user }, { $push: { watchlist: movie } });
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
  const { user, movieId } = req.body;
  const movie = parseInt(movieId);

  try {
    // Connect to the database
    await client.connect();
    const users = client.db("app-data").collection("users");

    // find user data inside collection
    const userData = await users.findOne({ _id: user });

    // check if the movie is already in the watchlist
    const movieInWatchlist = userData.watchlist.find((id) => {
      return id === movie;
    });

    if (movieInWatchlist) {
      await users.updateOne({ _id: user }, { $pull: { watchlist: movie } });
      return res.status(200).json({
        message: "Movie removed from watchlist",
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
