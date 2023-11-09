import { Request, Response } from "express";
import { LinkBaseData } from "../../models/Link";
import { isObjectValid } from "../../helpers/isObjectValid";
import mongoose from "mongoose";
import LinkModel from "../../schemas/LinkSchema";

const putLink = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.userId;
    const linkId = req.params.id;
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

    const linkToEdit = await LinkModel.findOne({ userId, _id: linkId }).exec();
    if (!linkToEdit) {
      return res
        .status(404)
        .json({ errorMessage: `Link with id ${linkId} doesn't exist` });
    }

    const editedLink = await linkToEdit
      .$set({
        ...req.body,
      })
      .save();

    return res.status(200).json(editedLink);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ errorMessage: "PutLink controller error" });
  }
};

export default putLink;
