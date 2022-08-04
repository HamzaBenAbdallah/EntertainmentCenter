import express from "express";
import { createUser } from "./createUser.js";
import { getUser } from "./getUser.js";

const authRouter = express.Router();

authRouter.post("/signup", createUser);
authRouter.get("/:email", getUser);

export default authRouter;
