import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { generateJwtToken } from "../../helpers/generateJwtToken";

export const getAccessToken = (req: Request, res: Response) => {
  const { userId, email, refreshToken } = res.locals;
  const tokenRefresh = process.env.TOKEN_REFRESH || "";

  try {
    jwt.verify(refreshToken, tokenRefresh, (error: any, decoded: any) => {
      // https://github.com/auth0/node-jsonwebtoken#errors--codes
      if (error) {
        if (error.name === "TokenExpiredError") {
          // handle token expired
          return res.status(401).json({ errorMessage: "Token has expired" });
        }
        if (error.message === "invalid signature") {
          return res.status(401).json({ errorMessage: "Invalid signature" });
        }
        return res
          .status(401)
          .json({ errorMessage: "Other JsonWebToken Error" });
      } else {
        const jwtToken = generateJwtToken(userId, email);
        return res.status(200).json(jwtToken);
      }
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ errorMessage: "GetToken error" });
  }
};
