import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const { JWT_SECRET } = process.env;

export const createToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET);
};

export const authenticateToken = async (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) {
    return res.status(401).json({
      status: 401,
      error: "Access denied",
    });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).json({
      status: 401,
      error: "Invalid token",
    });
  }
};
