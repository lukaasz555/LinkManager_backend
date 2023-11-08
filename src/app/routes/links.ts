import express from "express";
import getLinks from "../controllers/links/getLinks";
import postLink from "../controllers/links/postLink";
import putLink from "../controllers/links/putLink";

const router = express.Router();

router.route("/").get(getLinks);
router.route("/").post(postLink);
router.route("/:id").put(putLink);

export default router;
