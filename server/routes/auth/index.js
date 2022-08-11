import express from "express";
import { createUser } from "./createUser.js";
import { Login } from "./login.js";

const authRouter = express.Router();

authRouter.post("/signup", createUser);
authRouter.post("/login", Login);

export default authRouter;
