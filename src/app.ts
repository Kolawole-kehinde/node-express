// entry file for express, express related logic
import express from 'express'
import { errorHandler } from './middlewares/errorHandler.js'
import { notFound } from './middlewares/notFound.js'
import cors from 'cors'
import { apiRouter } from './routes/index.js'



export function createApp(){
    const app = express()
  
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    
    app.use(cors())
    app.use("/api", apiRouter)
    app.use(notFound)
    app.use(errorHandler)

    return app

}

