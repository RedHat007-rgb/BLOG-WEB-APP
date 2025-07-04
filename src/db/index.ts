import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();
const pgUrl = process.env.PG_URL;
if (!pgUrl) {
  throw new Error("PLease check the connection string.");
}
export const pgCLient = new Client(pgUrl);
export const dbConnect = async () => {
  try {
    await pgCLient.connect();
    console.log("Connected to DB....");
  } catch (e) {
    throw e;
  }
};
