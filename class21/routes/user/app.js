const express = require('express')
const storerouter = express.Router()
const userController = require('../../controllers/storeController')

storerouter.get('/', userController.getInder)
storerouter.get('/homes', userController.getHomeList)
storerouter.get('/booking', userController.getBooking)
storerouter.get('/favourites', userController.getfavourites)
storerouter.get('/homes-list/:homeId', userController.getHomeDetails)

module.exports = storerouter