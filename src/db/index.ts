import { Client } from "pg";

export const dbConnect = async (URL: string) => {
  try {
    const pgCLient = new Client(URL);
    await pgCLient.connect();
    console.log("Connected to DB....");
  } catch (e) {
    throw e;
  }
};
