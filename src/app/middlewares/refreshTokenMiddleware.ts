import { Request, Response, NextFunction } from "express";

export function refreshTokenMiddleWare(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { userid } = req.headers;
  const { refreshToken, email } = req.body;

  console.log("reffresh token middleware - ", refreshToken, userid, email);
  if (!userid) {
    return res
      .status(400)
      .json({ errorMessage: "UserId is missing in headers" });
  }
  if (!refreshToken) {
    return res
      .status(400)
      .json({ errorMessage: "Refresh token is missing in headers" });
  }

  res.locals.userId = userid;
  res.locals.refreshToken = refreshToken;
  next();
}
