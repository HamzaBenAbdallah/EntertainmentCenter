import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";
import { loginValidation } from "../validation/user.js";
import dotenv from "dotenv";
dotenv.config();

const { MONGO_URI } = process.env;
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
          error: "User doesn't exist",
        });
      }

      // Check if the password is correct
      const isValid = await bcrypt.compare(req.body.password, user.password);

      if (!isValid) {
        return res.status(401).json({
          status: 401,
          error: "Invalid password",
        });
      }

      res.status(200).json({ status: 200, message: "User found" });
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
