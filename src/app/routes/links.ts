import express from "express";
import getLinks from "../controllers/links/getLinks";
import postLink from "../controllers/links/postLink";

const router = express.Router();

router.route("/").get(getLinks);
router.route("/").post(postLink);

export default router;
