import { Request, Response } from "express";
import { LinkBaseData } from "../../models/Link";
import { isObjectValid } from "../../helpers/isObjectValid";

const putLink = (req: Request, res: Response) => {
  try {
    const { userId } = res.locals.userId;
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

    // find user with id = userid;
    // find & update link by linkId in user's links

    return res
      .status(200)
      .json(`userId: ${userId} modified link with id: ${linkId}`);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ errorMessage: "PutLink controller error" });
  }
};

export default putLink;
