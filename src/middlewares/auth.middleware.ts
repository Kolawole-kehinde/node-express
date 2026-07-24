import { NextFunction, Request, Response } from "express";

import { AppErrors } from "../errors/AppErrors.js";
import { verifyAccessToken } from "../lib/jwt.js";

export function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return next(new AppErrors(401, "No token provided"));
  }

  const token = authHeader.split(" ")[1]
  req.user  = verifyAccessToken(token!);


  next();
}