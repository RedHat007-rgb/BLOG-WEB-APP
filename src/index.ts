import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./db";
import { comments, createBlog, createTable } from "./models";
import { router } from "./routes";
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use("/api/v1", router);
const connect = async () => {
  try {
    await dbConnect();
    await createTable();
    await createBlog();
    await comments();
    app.listen(PORT, () => {
      console.log(`connected to PORT ${PORT}`);
    });
  } catch (error) {
    console.log("SERVER ERROR...");
  }
};

connect();
