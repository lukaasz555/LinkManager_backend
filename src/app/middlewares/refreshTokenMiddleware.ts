import { Request, Response, NextFunction } from "express";

export function refreshTokenMiddleWare(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { userid, refreshtoken } = req.headers;
  if (!userid) {
    return res
      .status(400)
      .json({ errorMessage: "UserId is missing in headers" });
  }
  if (!refreshtoken) {
    return res
      .status(400)
      .json({ errorMessage: "Refresh token is missing in headers" });
  }

  res.locals.userId = userid;
  res.locals.refreshToken = refreshtoken;
  next();
}
