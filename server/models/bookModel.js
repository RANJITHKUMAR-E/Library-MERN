const mongoose=require('mongoose');

const bookSchema=mongoose.Schema({
    bookId:{type:String,require},
    bookName:{type:String,require},
    bookImage:{type:String,require},
    category:{type:String,require},
    authorName:{type:String,require},
    publishedDate:{type:String,require},
    addedDate:{type:String,require},
    bookCount:{type:Number,require},
    price:{type:Number,require},
})

module.exports=mongoose.model('book',bookSchema);