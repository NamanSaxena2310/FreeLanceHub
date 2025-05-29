const jwt = require("jsonwebtoken");

const authorizeUser = async (req, res, next) => {
  try {
    const token = req.headers["token"];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized. Login Again",
      });
    }

    const token_decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.userId = token_decoded.id; // ✅ Clean approach
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { authorizeUser };
