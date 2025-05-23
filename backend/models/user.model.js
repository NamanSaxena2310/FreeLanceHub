const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required:[true,"username is required"],
    unique:true,
    lowercase:true
  },
  email:{
    type:String,
    required:[true,"email is required"],
    unique:true,
    lowercase:true
  },
  password: {
    type:String,
    required:[true,"password is required"],
  }

},{timestamps:true})

const User = new mongoose.model('User',UserSchema)


module.exports = {User}