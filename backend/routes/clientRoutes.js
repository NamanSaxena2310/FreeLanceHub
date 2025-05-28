const express = require('express')
const { authorizeUser } = require('../middlewares/auth')
const { addClient, getClient, updateClient } = require('../controllers/clientController')

const clientRouter = express.Router()

clientRouter.post('/add',authorizeUser,addClient)
clientRouter.post('/update',authorizeUser,updateClient)
clientRouter.get('/get',authorizeUser,getClient)


module.exports ={clientRouter}
