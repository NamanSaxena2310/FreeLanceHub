const jwt = require("jsonwebtoken")
const authorizeUser = async(req,res,next)=>{

  try {
    const {token} = req.headers

    if (!token) {
      return res.json({
        success:false,
        message:"Not Authorizedd Login Again"
      })
    }

    const token_decoded = jwt.verify(token,process.env.JWT_PRIVATE_KEY)
    req.body.userId = token_decoded._id
    next()
  } catch (error) {
    console.log(error)
    res.json({
      success:false,
      message:error.message
    })
  }
    
}

module.exports = {authorizeUser}