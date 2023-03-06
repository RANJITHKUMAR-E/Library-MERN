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
    } catch(error) {
        console.log(error);
        res.status(400).json({
            status: "failed",
            message: error
        });
    }
}

exports.login=async (req, res) =>
{
    console.log(req.body)
    const {email, password}=req.body;
    if(!email||!password) {
        res.status(400).json({
            status: "Login Failed !",
            message: "Provide both RollNo & Password"
        });
    }
    try {
        var user=await userModel.findOne({eMail: email});
        if(!user||user.length<1) {
            return res.status(400).json({
                status: "Login Failed",
                message: "Invalid Email or Password"
            })
        }
        if(!await bcrypt.compare(password, user.password)) {
            return res.status(400).json({
                status: "Login Failed",
                message: "Invalid Email or Password"
            })
        }
        const token=jwt.sign({email}, process.env.JWT_KEY, {expiresIn: process.env.JWT_EXPIRES})

        res.status(200).json({
            status: "Login Success",
            token,
            userData: {
                id: user._id,
                userName: user.userName,
                rollNo: user.rollNo,
                eMail: user.eMail,
                Mobile: user.Mobile,
                photo: user.photo,
                department: user.department,
                age: user.age,
                booksBorrowed: user.booksBorrowed,
                pendingFine: user.pendingFine,
                isAdmin: user.isAdmin
            }

        })
    }
    catch(error) {
        console.log(error)
        res.status(402).json({
            status: "Error",
            error: {error}
        });
    }

}