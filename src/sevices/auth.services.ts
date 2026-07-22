import { AppErrors } from "../errors/AppErrors.js";



export async function registerUser(email: string, password: string):Promise<void>{

    if(!email || !password){
        throw new AppErrors(400, "Email and password are required")
    }
    if(password.length < 6){
        throw new AppErrors(400, "Password must be 6 characters")
    }

    const  normalizeEmail = email.toLocaleLowerCase().trim()
}