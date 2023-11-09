import { Request, Response } from "express";
import LinkModel from "../../schemas/LinkSchema";

const deleteLink = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.userId;
    const linkId = req.params.id;

    const linkToDelete = await LinkModel.findOne({
      userId,
      _id: linkId,
    }).exec();
    if (!linkToDelete) {
      return res
        .status(404)
        .json({ errorMessage: `Link with id ${linkId} doesn't exist` });
    }

    await linkToDelete.deleteOne();

    return res.status(200).json(`Deleted link with id ${linkId}`);
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ errorMessage: "DeleteLink controller error" });
  }
};

export default deleteLink;
