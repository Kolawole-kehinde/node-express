import jwt, { SignOptions } from "jsonwebtoken";

import { env } from "../config/env.js";
import { TokenPayload } from "../types/users.js";
import { AppErrors } from "../errors/AppErrors.js";

export function signAccessToken(payload: TokenPayload): string {
  const options: SignOptions = {
    expiresIn: env.jwtAccessExpiresIn as SignOptions["expiresIn"],
  };

  return jwt.sign(payload, env.jwtAccessSecret, options);
}


export function verifyAccessToken( token: string): TokenPayload {

  try {
    return jwt.verify(token, env.jwtAccessSecret) as TokenPayload;
  } catch {
    throw new AppErrors(401, "Invalid or expired access token");
  }
}