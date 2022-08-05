import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";
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

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(value.password, salt);

    // Create a new user
    const user = {
      _id: uuid4(),
      ...value,
      password: hashedPassword,
      date: Date.now(),
    };

    // Connect to the database
    try {
      await client.connect();
      const collection = client.db("app-data").collection("users");

      // Insert the user into the database if it doesn't exist
      const existingUser = await collection.findOne({ email: user.email });

      if (existingUser) {
        return res.status(409).json({
          status: 409,
          error: "User already exists",
        });
      }

      await collection.insertOne(user);
      res.status(201).json({
        status: 201,
        id: user._id,
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
};
