import {Router} from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";

const router  = Router({})

router.route("/login").post(loginUser)

router.route("/signUp").get(registerUser)

export default router;