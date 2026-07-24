import { NextFunction, Request, Response } from "express";
import { AppErrors } from "../errors/AppErrors.js";

export function requireAdmin(
  req: Request,
  res: Response,
  next:NextFunction
): void{
    if(req.user?.role !== 'ADMIN'){
    next( new AppErrors(403, "Admin accesss required. You do not have admin access"));
    return
    }

    next();
}