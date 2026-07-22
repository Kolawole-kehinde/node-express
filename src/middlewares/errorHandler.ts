import type { NextFunction, Request, Response } from "express";
import { logger } from "../lib/logger.js";
import { AppErrors } from "../errors/AppErrors.js";

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  if(err instanceof AppErrors){
     res.status(err.statusCode).json({
      success: false,
      message: "err.message"
     });
  }
  logger.error({ err }, "Unhandled error");

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
}