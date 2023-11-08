import { Request, Response } from "express";
import { Link } from "../../models/Link";
import { isObjectValid } from "../../helpers/isObjectValid";
import { LinkBaseData } from "../../models/Link";
import LinkModel, { ICreateLink } from "../../schemas/LinkSchema";

const postLink = async (req: Request, res: Response) => {
  try {
    const linkBaseData = new LinkBaseData();
    const validationResult = isObjectValid<LinkBaseData>(
      linkBaseData,
      req.body
    );

    if (!validationResult.isValid) {
      return res.status(400).json({
        errorMessage: validationResult.text,
      });
    }

    const newLink = new LinkModel();
    Object.assign(newLink, req.body);
    // const newLinkData = {
    //   categoriesIds: req.body.categoriesIds,
    //   isFavorite: req.body.isFavorite,
    //   notes: req.body.notes,
    //   title: req.body.title,
    //   url: req.body.url,
    // };
    // const newLink = new LinkModel(newLinkData);

    const savedItem = await newLink.save();

    return res.status(200).json(savedItem);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ errorMessage: "PostLink controller error" });
  }
};

export default postLink;
