import { NextFunction, Request, Response } from "express";
import { AppErrors } from "../errors/AppErrors.js";

export function authenticate(
    req: Request,
    res: Response,
    next: NextFunction
): void{
    const authHeader = req.headers.authorization;
    if(!authHeader?.startsWith("Bearer")){
    next(new AppErrors(401, "Access toke is required"));
    return;
    }
}