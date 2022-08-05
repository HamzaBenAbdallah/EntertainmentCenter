import { MongoClient } from "mongodb";
import { v4 as uuid4 } from "uuid";
import { signupValidation } from "../validation/user.js";
import dotenv from "dotenv";
dotenv.config();

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const createUser = async (req, res) => {
  try {
    const value = await signupValidation(req.body);
    try {
      const client = await MongoClient.connect(MONGO_URI, options);
      const db = client.db("app-data");
      const collection = db.collection("users");
      const user = {
        _id: uuid4(),
        ...value,
        date: Date.now(),
      };
      await collection.insertOne(user);
      res.status(201).json({
        status: 201,
        message: "User created successfully",
      });
    } catch (err) {
      res.status(502).json({
        status: 502,
        message: err.message,
      });
    } finally {
      client.close();
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: error.message,
    });
  }
};
