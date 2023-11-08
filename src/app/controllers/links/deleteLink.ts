import { Request, Response } from "express";

const deleteLink = (req: Request, res: Response) => {
  try {
    const userId = res.locals.userId;
    const linkId = req.params.id;

    // find user in db with id = userId
    // find & remove link with linkId
    return res.status(200).json(`deleteLink with id ${linkId}`);
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ errorMessage: "DeleteLink controller error" });
  }
};

export default deleteLink;
