import dotenv from "dotenv"

dotenv.config()

function checkRequiredEnvVariables(key: string){
   const value = process.env[key]
   if(!value){
     throw new Error(`missing env variable for ${key}`)
   }

   return value
}

export const env = {
    port: Number(process.env.PORT ?? 5000),
    isProduction:(process.env.NODE_ENV ?? "development") === "production",
    nodeEnv: process.env.NODE_ENV ?? "development",
    logLevel: process.env.LOG_LEVEL ?? "info",
    database_url: checkRequiredEnvVariables('DATABASE_URL')
} as const