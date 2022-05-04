import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import postRoutes from './routes/posts.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true })) // accept json file max:30mb
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.get("/", (req, res) => {
    res.json(
        {
            author: "OguzhanTkbs",
            message: "Hello World ..."
        }
    )
})

app.use("/posts", postRoutes) // localhost:500/posts or else  


const PORT = process.env.PORT || 5000 // Create a backend port


mongoose.connect(process.env.CONNECTION_URL, { // Connect to mongoDB
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {          // if connection success
    app.listen(PORT, () => {
        console.log(`Server is runing on port : ${PORT}`)
    })
}).catch((err) => {     // if connection fail
    console.log("Error : ", err.message)
})