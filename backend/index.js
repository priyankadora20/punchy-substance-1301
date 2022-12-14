const express = require("express");
const app =express()
const {connection} = require("./config/db");
const {gadgetsRouter } = require("./routes/gadgets.route");
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const cors = require("cors");

const {GadgetsModel} = require("./models/gadgets.model")

app.use(express.json())
app.use(cors({
    origin : "*"
}))

app.use("/backend", gadgetsRouter)


app.listen(process.env.port ,async()=>{
    try{
        await connection;
        console.log("Welcome inside the backend zone of GADGETSTOP")
    }
    catch(e){
        console.log("Are you a Bot.")

        console.log(e.message)
    }
    console.log(`YOUR PORT IS WORKING PROPERLY`);
    
})