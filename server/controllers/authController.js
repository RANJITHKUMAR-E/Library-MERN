const jwt=require('jsonwebtoken')
const bcrypt=require("bcryptjs")

const userModel=require("../models/userModel");

exports.signup=async (req, res) =>
{
    const data=req.body;

    try {
        if(req.body.isAdmin) {
            return res.status(401).json({
                status: "error",
                message: "You cannot create a admin account."
            })
        }
        data.password=await bcrypt.hash(req.body.password, 12);
        const newUser=new userModel(data);
        await newUser.save();

        const token=jwt.sign({rollNo: req.body.rollNo}, process.env.JWT_KEY, {expiresIn: process.env.JWT_EXPIRES})
        res.status(200).json({
            message: "SignUp done successfully 😌",
            token,
            data: data,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: "failed",
            message: error
        });
    }
}

exports.login=async (req, res) =>
{
    const {rollNo, password}=req.body;

    if(!rollNo||!password) {
        res.status(400).json({
            status: "Login Failed !",
            message: "Provide both RollNo & Password"
        });
    }
    try {
        const user=await userModel.findOne({rollNo: rollNo});
        console.log(user.length)
        if(user.length<1) {
            return res.status(400).json({
                status: "Login Failed",
                message: "Invalid Roll number or Password"
            })
        }
        if(!await bcrypt.compare(password, user.password)) {
            return res.status(400).json({
                status: "Login Failed",
                message: "Invalid Roll number or Password"
            })
        }

        const token=jwt.sign({rollNo}, process.env.JWT_KEY, {expiresIn: process.env.JWT_EXPIRES})

        res.status(200).json({
            status: "Login Success",
            token,
            userName: user.userName
        })
    }
    catch(error) {
        console.log(error)
        res.status(400).json({
            status: "Error",
            error: {error}
        });
    }
    
}