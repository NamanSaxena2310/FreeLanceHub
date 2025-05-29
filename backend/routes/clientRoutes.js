const express = require('express')
const { authorizeUser } = require('../middlewares/auth')
const { addClient, updateClient, getDetailsOfSingleClient, getClients, deleteClient } = require('../controllers/clientController')

const clientRouter = express.Router()

clientRouter.post('/add',authorizeUser,addClient)
clientRouter.post('/update',authorizeUser,updateClient)
clientRouter.post('/get',authorizeUser,getClients)
clientRouter.post('/get-single',authorizeUser,getDetailsOfSingleClient)
clientRouter.post('/delete',authorizeUser,deleteClient)


module.exports ={clientRouter}
