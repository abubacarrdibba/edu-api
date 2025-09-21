 // importing express and acqure it 
const express = require("express");

const routes = require("./routes/route");

const app = express();

const connect = require("./utilities/connect-db")

 void (() => {
    try {
        connect()
        console.log("connected db")
    } catch (error) {
        console.log("db is not connected")
    }
 })()


 app.use(express.json());
 app.use(express.urlencoded({ extended: true}))

 app.use("/api", routes);
 

module.exports = app;


