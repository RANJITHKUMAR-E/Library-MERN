const express=require('express');
const {db}=require('./db');
const userRoute=require("./routes/userRoute")

const app=express();
app.use(express.json())

app.use("/api/user",userRoute)

app.get("/api", (req, res) =>{ res.status(200).json({message: "App is ready to serve ✨"});})

module.exports=app