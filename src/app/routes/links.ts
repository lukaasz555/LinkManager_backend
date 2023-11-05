import express from "express";
import getLinks from "../controllers/links/getLinks";

const router = express.Router();

router.route("/").get(getLinks);

export default router;
