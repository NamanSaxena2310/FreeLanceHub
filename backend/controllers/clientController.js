const { Client } = require("../models/client.model")
const { User } = require("../models/user.model")
const validator = require('validator')


const addClient = async (req,res,next) =>{
  try {
    const {name,company,email,phone,notes} = req.body
 
  if (!name.trim() || !email.trim() || !phone.trim()) {
      return res.json({
        success:false,
        message:"name email or phone fields cannot be empty "
      })
  }

  if (!validator.isEmail(email)) {
    return res.json({
        success:false,
        message:"Please Enter a valid Email "
      })
  }
const clientExist = await Client.findOne({name,company,phone})
  if (clientExist) {
    return res.json({
      success:false,
      message:"Client Already Exists"
    })
  }

  const newClient = new Client({name,company,email,phone,notes})
  await newClient.save()

  res.json({
    success:true,
    message:"Client Added"
  })
  } catch (error) {
    console.log(error)
    res.json({
      success:false,
      message:error.message
    })
  }
 


}


const getClient = (req,res,next) =>{
    
}

const updateClient = (req,res,next)=>{

}


module.exports = {
  addClient,
  getClient,
  updateClient
}