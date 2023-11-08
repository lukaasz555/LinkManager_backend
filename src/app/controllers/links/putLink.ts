import { Request, Response } from "express";

const putLink = (req: Request, res: Response) => {
  try {
    const { userid = 0 } = req.headers;
    const linkId = req.params.id;

    if (!userid) {
      return res
        .status(400)
        .json({ errorMessage: "There is no userId provided - check headers" });
    }

    // find user with id = userid;
    // find link by linkId in user's links

    return res.status(200).json(`"ok - userId: ", ${userid}`);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ errorMessage: "PutLink controller error" });
  }
};

export default putLink;
