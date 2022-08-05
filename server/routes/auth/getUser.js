import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { loginValidation } from "../validation/user.js";
import dotenv from "dotenv";
dotenv.config();

const { MONGO_URI, JWT_SECRET } = process.env;
const client = new MongoClient(MONGO_URI);

export const getUser = async (req, res) => {
  // Validate the request body
  try {
    const value = await loginValidation(req.body);

    // Connect to the database
    try {
      await client.connect();
      const collection = client.db("app-data").collection("users");

      // Find the user in the database
      const user = await collection.findOne({
        email: req.body.email,
      });

      if (!user) {
        return res.status(404).json({
          status: 404,
          message: "User doesn't exist",
        });
      }

      // Check if the password is correct
      const isValid = await bcrypt.compare(req.body.password, user.password);

      if (!isValid) {
        return res.status(401).json({
          status: 401,
          message: "Invalid password",
        });
      }

      // Create a token
      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
      res
        .header("auth-token", token)
        .status(200)
        .json({ status: 200, message: "User logged in" });
    } catch (err) {
      res.status(502).json({
        status: 502,
        message: err.message,
      });
    } finally {
      await client.close();
    }
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
};
