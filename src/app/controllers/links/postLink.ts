import { Request, Response } from "express";
import { Link } from "../../models/Link";
import { isObjectValid } from "../../helpers/isObjectValid";
import { LinkBaseData } from "../../models/Link";

const postLink = (req: Request, res: Response) => {
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

    linkBaseData.setDataFromRequest(req.body);

    return res.status(200).json(linkBaseData);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ errorMessage: "PostLink controller error" });
  }
};

export default postLink;
