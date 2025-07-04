// import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { pgCLient } from "../db";
import { Request, Response } from "express";

// const loginHandler = (req: Request, res: Response) => {};

const registerHandler = async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !password || !password) {
      res.json({
        message: "Please enter all the fields",
      });
      return;
    }
    const salt = process.env.SALT_ROUNDS;
    if (!salt) {
      throw new Error("please check the salt_rounds");
    }
    const convertedSalt = parseInt(salt);
    const hashedPassword = await bcrypt.hash(password, convertedSalt);
    console.log(hashedPassword);
    const query = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`;
    console.log(query);
    const result = await pgCLient.query(query, [
      username,
      email,
      hashedPassword,
    ]);
    console.log(result);
    console.log("after query");
    res.json({
      message: result,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: "Internal server error",
    });
  }
};

// const getUserData = (req: Request, res: Response) => {};

export { registerHandler };
