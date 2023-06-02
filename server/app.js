const express = require('express');
const morgan = require("morgan")
const cors = require("cors")
const ErrorHandler = require("./utils/ErrorHandler")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")

const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload({useTempFiles:true}))
app.use(express.json())
app.use(cookieParser())
app.use(morgan("dev"))
app.use(cors())
app.use(ErrorHandler)

app.get("/",(req,res) => {
   return res.send("Hello")
})
if(process.env.NODE_ENV !== 'PRODUCTION'){
    require('dotenv').config({
        path:"server/config/.env"
    })
}

module.exports = { app }
