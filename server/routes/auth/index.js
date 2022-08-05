import express from "express";
import { createUser } from "./createUser.js";
import { auth } from "./auth.js";

const authRouter = express.Router();

authRouter.post("/signup", createUser);
authRouter.post("/login", auth);

export default authRouter;
