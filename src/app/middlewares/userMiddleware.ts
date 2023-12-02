import { Request, Response, NextFunction } from "express";

export function userMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { userid } = req.headers;
  const token =
    req.headers["authorization"] &&
    req.headers["authorization"].split(" ")[1].trim();

  if (!token) {
    return res
      .status(401)
      .json({ errorMessage: "Access token is missing in headers" });
  }

  if (!userid) {
    return res
      .status(400)
      .json({ errorMessage: "UserId is missing in headers" });
  }

  res.locals.token = token;
  res.locals.userId = userid;
  next();
}
