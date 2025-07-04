import express from "express";
import { registerHandler } from "../controllers";
const router = express.Router();

router.route("/register").post(registerHandler);
// router.route("/login").post(loginHandler);
// router.route("/users/:id").get(getUserData);

export { router };
