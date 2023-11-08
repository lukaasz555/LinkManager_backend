import { Request, Response } from "express";

const deleteLink = (req: Request, res: Response) => {
  try {
    const { userid = 0 } = req.headers;
    const linkId = req.params.id;

    // todo: create a middleware for userId
    if (!userid) {
      return res
        .status(400)
        .json({ errorMessage: "There is no userId provided - check headers" });
    }

    // find user in db
    // find & remove link
    return res.status(200).json(`deleteLink with id ${linkId}`);
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ errorMessage: "DeleteLink controller error" });
  }
};

export default deleteLink;
