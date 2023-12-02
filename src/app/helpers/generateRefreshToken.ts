import jwt from "jsonwebtoken";

export function generateRefreshToken(userId: string): string {
  const tokenRefresh = process.env.TOKEN_REFRESH || "";
  const expiresIn = "1d";

  const payload = {
    sub: userId,
    iat: Math.floor(Date.now() / 1000),
  };

  const refreshToken = jwt.sign(payload, tokenRefresh, { expiresIn });
  return refreshToken;
}
