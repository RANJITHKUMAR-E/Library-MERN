const userModel=require("../models/userModel");
const jwt=require('jsonwebtoken')
const bcrypt=require("bcryptjs")
const db=require("../db");

exports.getAllUser=async (req, res) =>
{
    try {
        const users=await userModel.find({})
        res.status(200).json({
            status: "Get all users Done",
            data: users
        });
    } catch(error) {
        console.log(error);
        res.status(400).json({
            status: "Failed 😥",
            error: error
        });
    }
}

exports.getUser=async (req, res) =>
{
    try {
        const user=await userModel.find({rollNo: req.params.id})

        res.status(200).json({
            status: "success",
            data: user
        });
    } catch(error) {
        console.log(error);
        res.status(400).json({
            status: "Failed 😥",
            error: error
        });
    }
}


// Only for admin
exports.createUser=async (req, res) =>
{
    const data=req.body;
    try {
        data.password=await bcrypt.hash(req.body.password, 12);
        const newUser=new userModel(data);
        await newUser.save();

        const token=jwt.sign({rollNo: req.body.rollNo}, process.env.JWT_KEY, {expiresIn: process.env.JWT_EXPIRES})
        res.status(200).json({
            message: "User Created successfully 😌",
            token,
            data: data,
        });
    } catch(error) {
        console.log(error);
        res.status(400).json({
            status: "Failed",
            message: error
        });
    }
}

exports.updateUser=async (req, res) =>
{
    const data=req.body;
    try {
        data.password=await bcrypt.hash(req.body.password, 12);

        const old=await userModel.find({_id: req.params.id});

        if(old.length=0) {
            return res.status(400).json({
                status: "failed",
                message: "User not found !"
            })
        }

        await userModel.updateOne({_id: req.params.id}, data, {upsert: true})
        const token=jwt.sign({rollNo: req.body.rollNo}, process.env.JWT_KEY, {expiresIn: process.env.JWT_EXPIRES})
        res.status(200).json({
            message: "User Updated successfully 😌",
            token,
            data: data
        });
    } catch(error) {
        console.log(error);
        return res.status(400).json({
            status: "Failed",
            error: error
        });
    }
}

exports.updateProfile=async (req, res) =>
{
    const data=req.body;
    try {
        const old=await userModel.find({_id: req.params.id});

        if(old.length=0) {
            return res.status(400).json({
                status: "failed",
                message: "User not found !"
            })
        }

        await userModel.updateOne({_id: req.params.id}, {photo: data.photo}, {upsert: true})
        res.status(200).json({
            message: "User Profile Updated successfully 😌",
            data: data
        });
    } catch(error) {
        console.log(error);
        return res.status(400).json({
            status: "Failed",
            error: error
        });
    }
}

exports.updatePassword=async (req, res) =>
{
    const data=req.body;
    try {
        data.password=await bcrypt.hash(req.body.password, 12);

        const old=await userModel.find({_id: req.params.id});

        if(old.length=0) {
            return res.status(400).json({
                status: "failed",
                message: "User not found !"
            })
        }

        await userModel.updateOne({_id: req.params.id}, {password: data.password}, {upsert: true})

        const token=jwt.sign({rollNo: old.rollNo}, process.env.JWT_KEY, {expiresIn: process.env.JWT_EXPIRES})
        res.status(200).json({
            message: "Password Updated successfully 😌",
            token: {token}
        });
    } catch(error) {
        console.log(error);
        return res.status(400).json({
            status: "Failed",
            error: error
        });
    }
}

exports.deleteUser=async (req, res) =>
{
    try {
        const old=await userModel.find({_id: req.params.id});

        if(old.length=0) {
            return res.status(400).json({
                status: "failed",
                message: "User not found !"
            })
        }

        const msg=await userModel.deleteOne({_id: req.params.id})

        res.status(200).json({
            message: "User deleted successfully 😌",
            result: {msg}
        });
    } catch(error) {
        console.log(error);
        return res.status(400).json({
            status: "Failed",
            error: error
        });
    }
}