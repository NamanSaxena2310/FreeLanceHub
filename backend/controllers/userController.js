const { User } = require("../models/user.model")
const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require("jsonwebtoken")
// Register Controller 

const createToken = (id)=>{
  return jwt.sign({id},process.env.JWT_PRIVATE_KEY)
}

const registerUser = async(req,res,next)=>{
  try {
     const {name,email,password} = req.body
     const userExist = await User.findOne({email})
     
     if (userExist) {
        return res.json({
          success:false,
          message: "User Already exists"
        })
     }

     if (!validator.isEmail(email)) {
      return res.json({
          success:false,
          message: "Please enter a valid email"
        })
     }

     if (password < 8) {
     return res.json({
          success:false,
          message: "Please enter a Strong password"
        })
     }

    //  Hashing password before saving in Database 
     const saltRounds = 10;
     const hashedPassword = await bcrypt.hash(password,saltRounds)

     const newUser = new User({name,email,password:hashedPassword})
     const user=await newUser.save()
     const token = createToken(user._id)
     res.json({
          success:true,
          token: token
        })

  } catch (error) {
    console.log(error)
    res.json({
          success:false,
          message: error.message
        })
  }
 
  
}


// Login Controller

const loginUser = async(req,res,next)=>{
  
}

module.exports = {
  registerUser,
  loginUser
}