import { Request, Response } from "express";
import mockLinks from "../../../mockData/links.json";
import { Link } from "../../models/Link";
import LinkModel from "../../schemas/LinkSchema";

const getLinks = async (req: Request, res: Response) => {
  console.log("i am in getLinks controller somehow?");
  try {
    const searchValue = {};

    if (req.query.categoryId) {
      Object.assign(searchValue, { categoriesIds: req.query.categoryId });
    }
    if (req.query.favorites) {
      Object.assign(searchValue, { isFavorite: true });
    }

    const result = await LinkModel.find({
      userId: res.locals.userId,
      ...searchValue,
    });

    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ errorMessage: "GetLinks controller error" });
  }
};

export default getLinks;
