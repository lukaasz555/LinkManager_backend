import { Request, Response } from "express";
import UserModel from "../../schemas/UserSchema";
import { validatedPassword } from "../../helpers/auth";

const loginUser = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({
        errorMessage: "There is no account with provided email address",
      });
    }
    const isPasswordValid = await validatedPassword(
      req.body.password,
      user!.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ errorMessage: "Wrong credentials" });
    }

    const jwtToken = "tokenshouldbegenerated";
    return res.status(200).json(jwtToken);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ errorMessage: "LoginUser error" });
  }
};

export default loginUser;
