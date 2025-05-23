const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required:[true,"name is required"],
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