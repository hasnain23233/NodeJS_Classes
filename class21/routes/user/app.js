const express = require('express')
const storerouter = express.Router()
const { getHomeList, getBooking, getfavourites, getInder } = require('../../controllers/storeController')

storerouter.get('/', getInder)
storerouter.get('/homes', getHomeList)
storerouter.get('/booking', getBooking)
storerouter.get('/favourites', getfavourites)

module.exports = storerouter