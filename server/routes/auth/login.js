import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";
import { loginValidation } from "../validation/user.js";
import { createToken } from "../validation/token.js";
import dotenv from "dotenv";
dotenv.config();

const { MONGO_URI } = process.env;
const client = new MongoClient(MONGO_URI);

export const Login = async (req, res) => {
    // Validate the request body
    try {
        await loginValidation(req.body);

        // Connect to the database
        try {
            await client.connect();
            const collection = client.db("app-data").collection("users");

            // Find the user in the database
            const user = await collection.findOne({
                email: req.body.email,
            });

            if (!user) {
                return res.status(401).json({
                    status: 401,
                    message: "Invalid email or password",
                });
            }

            // Check if the password is correct
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );

            if (!validPassword) {
                return res.status(401).json({
                    status: 401,
                    message: "Invalid email or password",
                });
            }

            // Create a token
            const token = createToken(user._id);
            res.header("auth-token", token).status(200).json({
                status: 200,
                message: `Logged in successfully`,
                user: user._id,
            });
        } catch (err) {
            res.status(500).json({
                status: 500,
                message: "Internal server error",
            });
        } finally {
            await client.close();
        }
    } catch (error) {
        res.status(400).json({ status: 400, message: error.message });
    }
};
