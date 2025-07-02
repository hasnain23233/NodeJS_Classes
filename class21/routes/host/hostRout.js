const express = require('express')
const fs = require('fs')
const hostRoute = express.Router()
const homesController = require('./../../controllers/hostController')

hostRoute.get('/add_home', homesController.getsHome)
hostRoute.post('/add_home', homesController.postAddHome)
hostRoute.get('/host_home_List', homesController.gethostHomeList)

hostRoute.get('/host/edit-home/:homeId', homesController.getEditHome)



module.exports = { hostRoute }