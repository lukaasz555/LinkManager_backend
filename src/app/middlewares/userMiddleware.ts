import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export function userMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { userid } = req.headers;
  const token =
    req.headers["authorization"] && req.headers["authorization"].split(" ")[1];

  if (!userid) {
    return res
      .status(400)
      .json({ errorMessage: "UserId is missing in headers" });
  }

  if (!token) {
    return res
      .status(401)
      .json({ errorMessage: "Access token is missing in headers" });
  }

  const tokenSecret = process.env.TOKEN_SECRET || "";

  jwt.verify(token, tokenSecret, (err, asd) => {
    if (err) {
      return res.status(401).json({ errorMessage: "Invalid token" });
    } else {
      console.log(asd);
      res.locals.token = token;
      res.locals.userId = userid;
      next();
    }
  });
}
