import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";
import { v4 as uuid4 } from "uuid";
import { signupValidation } from "../validation/user.js";
import dotenv from "dotenv";
dotenv.config();

const { MONGO_URI, SALT } = process.env;
const client = new MongoClient(MONGO_URI);

export const createUser = async (req, res) => {
    try {
        // Connect to the database
        await client.connect();
        const collection = client.db("app-data").collection("users");

        // Check if user exists
        const existingUser = await collection.findOne({
            email: req.body.email,
        });

        if (existingUser) {
            return res.status(409).json({
                status: 409,
                message: "User already exists",
            });
        }

        try {
            // Validate the request body
            const value = await signupValidation(req.body);

            // Hash the password
            const salt = await bcrypt.genSalt(Number(SALT));
            const hashedPassword = await bcrypt.hash(value.password, salt);

            // Create a new user
            const user = {
                _id: uuid4(),
                ...value,
                password: hashedPassword,
                watchlist: [],
                watched: [],
                rating: [],
            };

            await collection.insertOne(user);

            res.status(201).json({
                status: 201,
                id: user._id,
                message: "User created successfully",
            });
        } catch (error) {
            res.status(400).json({
                status: 400,
                message: error.details[0].message,
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
