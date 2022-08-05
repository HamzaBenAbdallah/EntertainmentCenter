import { MongoClient } from "mongodb";
import { v4 as uuid4 } from "uuid";
import { signupValidation } from "../validation/user.js";
import dotenv from "dotenv";
dotenv.config();

const { MONGO_URI } = process.env;
const client = new MongoClient(MONGO_URI);

export const createUser = async (req, res) => {
  // Validate the request body
  try {
    const value = await signupValidation(req.body);
    const user = {
      _id: uuid4(),
      ...value,
      date: Date.now(),
    };
    // Connect to the database
    try {
      await client.connect();
      const collection = client.db("app-data").collection("users");
      // Insert the user into the database if it doesn't exist
      const isExistingUser = await collection.findOne({ email: user.email });
      if (isExistingUser) {
        return res.status(409).json({
          status: 409,
          error: "User already exists",
        });
      }
      await collection.insertOne(user);
      res.status(201).json({
        status: 201,
        message: "User created successfully",
      });
    } catch (err) {
      res.status(502).json({
        status: 502,
        error: err.message,
      });
    } finally {
      await client.close();
    }
  } catch (error) {
    res.status(400).json({ status: 400, error: error.message });
  }
  client.close();
};
