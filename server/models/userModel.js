const {default: mongoose}=require("mongoose");

const userSchema=mongoose.Schema({
    userName: {type: String, require},
    rollNo: {type: String, require},
    password: {type: String, require},
    eMail: {type: String, require},
    Mobile: {type: String, require},
    photo: {type: String, require, default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"},
    department: {type: String, require},
    age: {type: Number, require},
    books: {type: Number, require, default: 0},
    booksBorrowed: {type: Array, require},
    pendingFine: {type: Number, require},
    isAdmin: {type: Boolean,require,default:false}
}, {
    timestamps: true,
})

module.exports=mongoose.model("users", userSchema);