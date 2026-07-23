import jwt, { SignOptions } from "jsonwebtoken";

import { env } from "../config/env.js";
import { TokenPayload } from "../types/users.js";

export function signAccessToken(payload: TokenPayload): string{
    const options: SignOptions ={
        expiresIn: env.jwtAccessExpiresIn as SignOptions['expiresIn']
    }

    return jwt.sign(payload, env.jwtAccessSecret, options)
    

    
}