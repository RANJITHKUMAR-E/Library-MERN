const mongoose=require('mongoose');

const bookSchema=mongoose.Schema({
    bookName: {type: String, require},
    description: {type: String, require},
    bookImage:{type:String,require},
    category: {type: String, require},
    authorName: {type: String, require},
    pages: {type: String, require},
    publishedDate:{type:String,require},
    addedDate: {type: Date, "default": Date.now},
    bookCount:{type:Number,require},
    price:{type:Number,require},
},
    {timestamps: true, })

module.exports=mongoose.model('book',bookSchema);