const express = require("express")
const { registerUser } = require("../controllers/userController")


const userRouter = new express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',registerUser)


module.exports= {userRouter}