const express = require('express')
const router = express.Router()
const { getAddHome, postAddHome } = require('../../Controller/HomeController')


router.get('/add_home', getAddHome)
router.post('/add_home', postAddHome)

module.exports = { router }