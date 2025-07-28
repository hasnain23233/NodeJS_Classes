const express = require('express')
const fs = require('fs')
const hostRoute = express.Router()
const homesController = require('./../../controllers/hostController')

hostRoute.get('/add_home', homesController.getsHome)
hostRoute.post('/add_home', homesController.postAddHome)
hostRoute.get('/host_home_List', homesController.gethostHomeList)

hostRoute.get('/host/edit-home/:homeId', homesController.getEditHome)
hostRoute.post('/host/edit-home', homesController.postEditHome)
hostRoute.post('/host/delete-home/:homeId', homesController.postDeleteHome)



module.exports = { hostRoute }