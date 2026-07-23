import { AppErrors } from "../errors/AppErrors.js";
import { signAccessToken } from "../lib/jwt.js";
import { createUser, findUserByEamilWithOPassword, findUserByEmail } from "../repositories/user.repository.js";
import bcrypt from 'bcrypt'



export async function registerUser(email: string, password: string):Promise<void>{

    if(!email || !password){
        throw new AppErrors(400, "Email and password are required")
    }
    if(password.length < 6){
        throw new AppErrors(400, "Password must be 6 characters")
    }

    const  normalizeEmail = email.toLocaleLowerCase().trim()

    const existingUser = await findUserByEmail(normalizeEmail)
    if(existingUser){
      throw new AppErrors(409, "Email already exists")
    }

    const passwordHash = await  bcrypt.hash(password, 10)
    await createUser(normalizeEmail, passwordHash)
}


export async function loginUser(email: string, password: string): Promise<{accessToken: string}>{
    if(!email || !password){
       throw new AppErrors(400, "Email and password are require")     
    }

    const normalizeEamail = email.toLocaleLowerCase().trim();

    const user = await findUserByEamilWithOPassword(normalizeEamail);

    if(!user?.password_hash){
    throw new AppErrors(409, "Invalid Email or password")
    }

     const isValidPassword = await bcrypt.compare(password, user?.password_hash)
 

    
    if(!isValidPassword){
    throw new AppErrors(409, "Invalid Email or password")
    }

    const accessToken = signAccessToken({
        userId: user.id,
        email: user.email,
        role: user.role
    });

    return {accessToken}


}