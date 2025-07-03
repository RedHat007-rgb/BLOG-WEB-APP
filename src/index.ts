import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./db";
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
if (!process.env.PG_URL) {
  throw new Error("PLease check the connection string");
}
const PgUrl: any = process.env.PG_URL;

const connect = async () => {
  try {
    await dbConnect(PgUrl);
    app.listen(PORT, () => {
      console.log(`connected to PORT ${PORT}`);
    });
  } catch (error) {
    console.log("SERVER ERROR...");
  }
};

connect();
