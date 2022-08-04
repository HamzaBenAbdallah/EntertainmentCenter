import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

import movieRouter from "./routes/movies/index.js";

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(express.json());

// Routes Middleware
app.use("/api", movieRouter);

app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Page not found",
  });
});

app.listen(PORT);
