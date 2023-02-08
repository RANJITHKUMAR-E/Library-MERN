const express=require("express");
const router=express.Router();

const {login, signup}=require("../controllers/authController");
const userController = require("../controllers/userController")

router.post("/login", login);
router.post("/signup", signup);

router.route("/")
    .get(userController.getAllUser)
    .post(userController.createUser)

router.route("/:id")
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)

module.exports=router;