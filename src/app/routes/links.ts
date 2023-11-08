import express from "express";
import getLinks from "../controllers/links/getLinks";
import postLink from "../controllers/links/postLink";
import putLink from "../controllers/links/putLink";
import deleteLink from "../controllers/links/deleteLink";

const router = express.Router();

router.route("/").get(getLinks);
router.route("/").post(postLink);
router.route("/:id").put(putLink);
router.route("/:id").delete(deleteLink);

export default router;
