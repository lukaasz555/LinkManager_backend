import jwt from "jsonwebtoken";

export function generateJwtToken(userId: string): string {
  const tokenSecret = process.env.TOKEN_SECRET || "";
  const expiresIn = "15m";

  const payload = {
    sub: userId,
    iat: Math.floor(Date.now() / 1000),
  };

  const jwtToken = jwt.sign(payload, tokenSecret, { expiresIn });
  return jwtToken;
}
