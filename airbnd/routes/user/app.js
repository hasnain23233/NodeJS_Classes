const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()

router.get('/', (req, res, next) => {
    console.log('home page')
    res.sendFile(path.join(__dirname, '../../views/', 'home_page.html'))

})

module.exports = router