import { Request, Response } from "express";
import mockLinks from "../../../mockData/links.json";
import { Link } from "../../models/Link";

const getLinks = (req: Request, res: Response) => {
  try {
    console.log("getLinks controller try");
    res.send(mockLinks);
  } catch (err) {
    console.log("getLinks controller catch");
    res.status(500).json({ errorMessage: "/getLinks controller error" });
  }
};

export default getLinks;
