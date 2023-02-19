const express=require('express');
const {db}=require('./db');
const userRoute=require("./routes/userRoute")
const bookRoute=require('./routes/bookRoute')
var bodyParser=require('body-parser'); 

const app=express();
app.use(express.json())

var cors=require('cors')
app.use(cors())

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use("/api/user",userRoute)
app.use('/api/book',bookRoute)

app.get("/api", (req, res) =>{ res.status(200).json({message: "App is ready to serve ✨"});})

module.exports=app