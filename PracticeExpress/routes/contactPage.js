const express = require('express')
const path = require('path')
const pathUtiles = require('../utiles/pathUtilis')

const router = express.Router()

router.get('/contact', (req, res, next) => {
    res.sendFile(path.join(pathUtiles, '/views/', 'contact.html'))
})

module.exports = router

