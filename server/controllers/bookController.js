const bookModel=require('../models/bookModel');
const jwt=require('jsonwebtoken')
const db=require('../db');

exports.getAllBook=async(req, res) =>
{
    try{ 
        const books=await bookModel.find({})
        res.status(200).json({
            status:"Get All books ",
            data:books
        });
    }catch(error){
        console.log(error);
        res.status(400).json({
            status:'Failed',
            error:error
        });
    }
}
exports.createBook=async(req, res) =>
{
    const data=req.body;
    console.log(data)
    try{
        const newBook=new bookModel(data);
        const resp=await newBook.save();
        res.status(200).json({
            message: "Book Created successfully 😌",
            data: resp,
        });
    }
    catch(error){
        console.log(error);
        res.status(400).json({
            status:'Failed',
            error:error
        });
    }
}
exports.getBook=async(req, res) =>
{
    try{
        const book=await bookModel.find({_id: req.params.id});
        res.status(200).json({
            status:"Success ",
            data:book
        });
    }catch(error){
        console.log(error);
        res.status(400).json({
            status:'Failed',
            error:error
        });
    }
}
exports.updateBook=async(req, res) =>
{
    const data=req.body;
    try {
        const oldBook=await bookModel.find({_id: req.params.id});

        if(oldBook.length=0) {
            return res.status(400).json({
                status: "failed",
                message: "Book not found !"
            })
        }

        const resp=await bookModel.updateOne({_id: req.params.id}, data, {upsert: true})
        res.status(200).json({
            message: "Book Updated successfully 😌",
            data: resp
        });
    } catch(error) {
        console.log(error);
        return res.status(400).json({
            status: "Failed",
            error: error
        });
    }
}
exports.deleteBook=async(req, res) =>
{
    try {
        const oldBook=await bookModel.find({_id: req.params.id});

        if(oldBook.length=0) {
            return res.status(400).json({
                status: "failed",
                message: "Book not found !"
            })
        }

        const msg=await bookModel.deleteOne({_id: req.params.id})

        res.status(200).json({
            message: "Book deleted successfully 😌",
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