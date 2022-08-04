import express from "express";
import { createUser } from "./Signup.js";

const authRouter = express.Router();

authRouter.post("/signup", createUser);

export default authRouter;
