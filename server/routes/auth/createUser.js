import { MongoClient } from "mongodb";
import { v4 as uuid4 } from "uuid";
import dotenv from "dotenv";
dotenv.config();

const { MONGO_URI } = process.env;

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const createUser = async (req, res) => {
  const client = await MongoClient.connect(MONGO_URI, option);

  try {
    const db = client.db("app-data");
    const collection = db.collection("users");
    // const { email, password } = req.body;
    const user = {
      _id: uuid4(),
      email: "test email",
      password: "test password",
    };
    const result = await collection.insertOne(user);
    res.status(201).json({
      status: 201,
      message: "User created successfully",
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    });
  } finally {
    client.close();
  }
};
