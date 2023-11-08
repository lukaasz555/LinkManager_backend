import { Request, Response } from "express";
import mockLinks from "../../../mockData/links.json";
import { Link } from "../../models/Link";

const getLinks = (req: Request, res: Response) => {
  try {
    let filteredLinks = mockLinks;

    if (req.query.categoryId) {
      filteredLinks = mockLinks.filter((link) =>
        link.categoriesIds.includes(Number(req.query.categoryId))
      );
    }
    if (req.query.favorites) {
      console.log("favorites: ", Boolean(req.query.favorites));
      filteredLinks = filteredLinks.filter((link) => link.isFavorite);
    }

    return res.status(200).json(filteredLinks);
  } catch (err) {
    return res.status(500).json({ errorMessage: "GetLinks controller error" });
  }
};

export default getLinks;
