import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";
import { Passport } from "passport";

const router = Router({});

router.route("/login").post(loginUser);

router.route("/register").post(registerUser);

export default router;
