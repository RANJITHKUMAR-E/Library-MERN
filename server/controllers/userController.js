const userModel=require("../models/userModel");

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
        const id=req.params.id
        const user=await userModel.find({_id: id})
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

exports.createUser=(req, res) =>
{
    res.status(200).json({status: "Create user Done"});
}

exports.updateUser=(req, res) =>
{
    res.status(200).json({status: "Update user Done"});
}

exports.deleteUser=(req, res) =>
{
    res.status(200).json({status: "Delete user Done"});
}