import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const { MONGO_URI } = process.env;
const client = new MongoClient(MONGO_URI);

export const getWatched = async (req, res) => {
  try {
    // Connect to the database
    await client.connect();
    const collection = client.db("app-data").collection("watched");

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

export const addMovieToWatched = async (req, res) => {
  const { user, movieDetails } = req.body;
  try {
    // Connect to the database
    await client.connect();
    const watched = client.db("app-data").collection("watched");
    const watchedIds = client.db("app-data").collection("watched-ids");

    // get all movies from the database
    const movies = await watched.find({}).toArray();

    // check if the movie is already in the watched
    const movieInWatched = movies.find((movie) => {
      return movie.id === movieDetails.id;
    });

    if (movieInWatched) {
      return res.status(409).json({
        message: "Movie already in watched",
      });
    } else {
      // add the movie to the watched
      await watched.insertOne({
        userId: user,
        ...movieDetails,
      });

      // add the movie id to the watched ids collection
      const movieIds = await watchedIds.find({}).toArray();
      await Promise.all(
        movieIds.map(async (movie) => {
          if (movie.userId === user) {
            await watchedIds.updateOne(
              { userId: req.body.user },
              { $push: { movieIds: movieDetails.id } }
            );
          }
        })
      );
    }

    return res.status(201).json({
      message: "Movie added to watched",
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

export const deleteMovieFromWatched = async (req, res) => {
  try {
    // Connect to the database
    await client.connect();
    const collection = client.db("app-data").collection("watched");

    // get all movies from the database
    const movies = await collection.find({}).toArray();

    // check if the movie is already in the watched
    const movieInWatched = movies.find((movie) => {
      return movie.id === req.body.id;
    });

    if (!movieInWatched) {
      return res.status(409).json({
        message: "Movie not in watched",
      });
    } else {
      // delete the movie from the watched
      await collection.deleteOne({ id: req.body.id });
      return res.status(200).json({
        message: "Movie deleted from watched",
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
