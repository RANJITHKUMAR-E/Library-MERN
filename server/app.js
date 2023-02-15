const express=require('express');
const {db}=require('./db');
const userRoute=require("./routes/userRoute")
const bookRoute = require('./routes/bookRoute')

const app=express();
app.use(express.json())

app.use("/api/user",userRoute)
app.use('/api/book',bookRoute)

app.get("/api", (req, res) =>{ res.status(200).json({message: "App is ready to serve ✨"});})

module.exports=app