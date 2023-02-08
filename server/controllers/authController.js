const db=require("../db");
const userModel=require("../models/userModel");

exports.signup=(req,res) =>
{
    const newUser=userModel(req.body);
    try {
        newUser.save()
        res.status(200).json({message: "SignUp done successfully 😌"});
        
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "SignUp failed !"});
    }
}

exports.login=(req, res) =>
{
    res.status(200).json({message: "login done"});
    
}