import { Request, Response } from "express";

const registerUser = (req: Request, res: Response) => {
  try {
    return res.status(200).json("/register");
  } catch (e) {
    console.log(e);
    return res.status(500).json({ errorMessage: "RegisterUser error" });
  }
};

export default registerUser;
