import { Request, Response } from "express";

const loginUser = (req: Request, res: Response) => {
  try {
    return res.status(200).json("/login");
  } catch (e) {
    console.log(e);
    return res.status(500).json({ errorMessage: "LoginUser error" });
  }
};

export default loginUser;
