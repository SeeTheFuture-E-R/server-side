
const express = require("express");
const { register } = require("../controllers/authController");
userRouter = express.Router();
const userController = require("../controllers/userController");
const verifyJWT = require("../middleware/verifyJWT");


userRouter.route("/")
    .get(verifyJWT,userController.getAllUsers)

userRouter.route("/:id")
    .delete(verifyJWT,userController.deleteUser)
    .put(verifyJWT,userController.updateUser)
    .get(verifyJWT,userController.getUserByUserId);

module.exports = userRouter;
