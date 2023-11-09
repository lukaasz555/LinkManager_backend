import { Request, Response, NextFunction } from "express";

export function userMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { userid } = req.headers;
  if (!userid) {
    return res
      .status(400)
      .json({ errorMessage: "UserId is missing in headers" });
  }
  res.locals.userId = userid;
  next();
}
