const {default: mongoose}=require("mongoose");

const userSchema=mongoose.Schema({
    name: {type: String, require},
    rollNo: {type: String, require},
    password: {type: String, require},
    eMail: {type: String, require},
    Mobile: {type: String, require},
    photo: {type: String, require},
    department: {type: String, require},
    age: {type: Number, require},
    booksBorrowed: {type: Array, require},
    pendingFine: {type: Number, require},
    isAdmin: {type: Boolean,require,default:false}
})

module.exports=mongoose.model("Users", userSchema);