import express from 'express';
// import { getAccessToken } from "../controllers/refreshToken/getAccessToken";
import { refreshTokenMiddleWare } from '../middlewares/refreshTokenMiddleware';

const router = express.Router();

// router.route("/").post(refreshTokenMiddleWare, getAccessToken);

export default router;
