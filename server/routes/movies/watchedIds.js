import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const { MONGO_URI } = process.env;
const client = new MongoClient(MONGO_URI);

export const getWatchedIds = async (req, res) => {
  const { user } = req.body;
  try {
    // Connect to the database
    await client.connect();
    const collection = client.db("app-data").collection("watched-ids");

    // find user data inside collection
    const userData = await collection.findOne({ userId: user });
    return res.status(200).json(userData.movieIds);
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  } finally {
    await client.close();
  }
};
