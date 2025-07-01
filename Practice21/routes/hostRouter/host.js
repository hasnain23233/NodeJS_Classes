const express = require('express')
const router = express.Router()
const hostController = require('../../Controller/hostController')


router.get('/add_home', hostController.getAddHome)
router.post('/add_home', hostController.postAddHome)
router.get('/host_home_List', hostController.getHostHomeList)

module.exports = { router }