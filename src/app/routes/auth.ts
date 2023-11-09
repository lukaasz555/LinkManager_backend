import express from "express";
import loginUser from "../controllers/auth/loginUser";
import registerUser from "../controllers/auth/registerUser";

const router = express.Router();

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);

export default router;
