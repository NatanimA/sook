const http = require("http")


const {app} = require("./app")
const {PORT,DEV_SERVER_URL} = require("./config/config")
const { connectDatabase } = require("./db/Database")
let SERVER_URL = ""


// Uncaught Exceptions
process.on("uncaughtException",(err) => {
    console.log(`UNCAUGHT ERROR HAPPENED WHILE >>> ${err.message}`)
    console.log("Shuting down server")
})



//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "server/config/.env",
  });
  SERVER_URL = DEV_SERVER_URL;
}

// Connect MongoDb
connectDatabase()

// Create Server
const httpServer = http.createServer(app)
httpServer.listen(PORT,() => {
    console.log(`🚀 Server is ready on ${SERVER_URL}`);
})


// Unhandled promise rejections
process.on("unhandledRejection",(err) => {
    console.log(`UNHANDLED PROMISE REJECTION ERROR WHILE >>> ${err.message}`)
    console.log("Shuting down server");

    httpServer.close(() => {
        process.exit(1)
    })
})


