const express = require('express')

const router = express.Router()
const { getHomePage } = require('../../Controller/HomeController')

router.get('/', getHomePage)

module.exports = router