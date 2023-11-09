import express from "express";
import { userMiddleware } from "../middlewares/userMiddleware";
import getLinks from "../controllers/links/getLinks";
import postLink from "../controllers/links/postLink";
import putLink from "../controllers/links/putLink";
import deleteLink from "../controllers/links/deleteLink";

const router = express.Router();

router.route("/").get(userMiddleware, getLinks);
router.route("/").post(userMiddleware, postLink);
router.route("/:id").put(userMiddleware, putLink);
router.route("/:id").delete(userMiddleware, deleteLink);

export default router;
