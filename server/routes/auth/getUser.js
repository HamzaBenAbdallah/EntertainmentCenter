import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const { MONGO_URI } = process.env;

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const getUser = async (req, res) => {
  const client = await MongoClient.connect(MONGO_URI, option);

  try {
    const db = client.db("app-data");
    const collection = db.collection("users");
    const result = await collection.findOne({ email: req.params.email });
    res.status(200).json({
      status: 200,
      message: "User found",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    });
  } finally {
    client.close();
  }
};
