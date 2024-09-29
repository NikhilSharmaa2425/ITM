import express from "express"
import mongoose from "momgoose"
import dotenv from "dotenv"

const app = express();
dotenv.config()

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL

mongoose.connect(MONGOURL).then(()=>{
    console.log("DATABASE is connected Sucessfully.")
    app.listen(PORT, ()=>{
        console.log(`server is running at $(PORT)`)
    })

})
.catch((error))

