import { Router } from "express";
import { healthRouter } from "./health.route.js";
import { authRouter } from "./auth.routes.js";


export const apiRouter = Router()
apiRouter.use(healthRouter);
apiRouter.use("/auth", authRouter);