import express from "express";
import { getToken } from "../controllers/refreshToken/getToken";
import { refreshTokenMiddleWare } from "../middlewares/refreshTokenMiddleware";

const router = express.Router();

router.route("/").post(refreshTokenMiddleWare, getToken);

export default router;
