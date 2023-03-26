import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

import movieRouter from "./routes/movies/index.js";
import authRouter from "./routes/auth/index.js";

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes Middleware
app.use("/api", movieRouter);
app.use("/api", authRouter);

app.get("*", (req, res) => {
    res.status(404).json({
        status: 404,
        message: "Page not found",
    });
});

// Health Check
app.get("/", (req, res) =>
    res.status(200).json("Welcome to Entertainment Center's API!")
);

app.get("/bacon", (req, res) => res.status(200).json("🥓"));

app.listen(PORT);
