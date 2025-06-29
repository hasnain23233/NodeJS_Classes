const express = require('express')
const router = express.Router()
const { getHomeList } = require('../../controllers/homes')

router.get('/', getHomeList)

module.exports = router