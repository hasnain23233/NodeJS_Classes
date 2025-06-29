const express = require('express')
const fs = require('fs')
const hostRoute = express.Router()
const homesController = require('./../../controllers/homes')

hostRoute.get('/add_home', homesController.getsHome)
hostRoute.post('/add_home', homesController.postAddHome)



module.exports = { hostRoute }