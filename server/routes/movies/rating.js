import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const { MONGO_URI } = process.env;
const client = new MongoClient(MONGO_URI);

export const getRating = async (req, res) => {
  const { user, movieId } = req.body;
  try {
    // Connect to the database
    await client.connect();
    const users = client.db("app-data").collection("users");

    // find user data inside collection
    const userData = await users.findOne({ _id: user });

    // return the rating of the movie
    const movieRating = userData.rating.find((rating) => {
      return rating.movieId === movieId;
    });

    if (movieRating) {
      const ratingValue = parseInt(movieRating.rating);
      return res.status(200).json(ratingValue);
    } else {
      return res.status(200).json(0);
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

export const addRating = async (req, res) => {
  const { user, rating, movieId } = req.body;
  try {
    // Connect to the database
    await client.connect();
    const users = client.db("app-data").collection("users");

    // find user data inside collection
    const userData = await users.findOne({ _id: user });

    // check if the movie is already rated
    const movieRating = userData.rating.filter((rating) => {
      return rating.movieId === movieId;
    });

    if (movieRating.length > 0) {
      // update the rating of the existing movie
      await users.updateOne(
        { _id: user },
        { $set: { "rating.$[movie].rating": rating } },
        { arrayFilters: [{ "movie.movieId": movieId }] }
      );
    } else {
      // add the rating of the movie
      await users.updateOne(
        { _id: user },
        { $push: { rating: { movieId: movieId, rating } } }
      );
    }
    return res.status(200).json({ status: 200, message: "Rating added" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  } finally {
    await client.close();
  }
};
