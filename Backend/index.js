import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv" 
import bookRoute from './route/book.route.js';
import cors from 'cors'


const app = express()

app.use(cors())
app.use(express.json())

dotenv.config()

const PORT = process.env.PORT || 4000;

const URI = process.env.Mongodb_URI

try {
    mongoose.connect(URI)
    
    console.log("connected to mongoDB")
} catch (error) {
    console.log("Error", error )
}


app.use('/book', bookRoute);  


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})