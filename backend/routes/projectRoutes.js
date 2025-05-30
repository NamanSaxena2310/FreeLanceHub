const express = require('express')
const { authorizeUser } = require('../middlewares/auth')
const projectRouter = express.Router()

projectRouter.get('/get',authorizeUser,)
projectRouter.post('/create',authorizeUser,)
projectRouter.post('/update',authorizeUser,)
projectRouter.post('/delete',authorizeUser,)

module.exports = {
  projectRouter
}