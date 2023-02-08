const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config();

const MongoUrl=process.env.Mongo_URL;

mongoose.set("strictQuery", false);
mongoose.connect(MongoUrl, {useUnifiedTopology: true, useNewUrlParser: true})

var db=mongoose.connection;

db.on('connected', () =>
{
    console.log('Database connected successfully 😉');
})

db.on('error', () =>
{
    console.log("Mongo DB connection failed 😥, Keep Trying !!");
})

module.exports = mongoose
