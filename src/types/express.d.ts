import { TokenPayload } from "./users.ts";

declare global {
    namespace Express {
        interface Request {
            user?: TokenPayload
        }
    }
}
export{};