const express = require('express')
const path = require('path')
const router = express.Router()
const rootDirector = require('../../utility/pathUtils')

router.get('/', (req, res, next) => {
    console.log('home page')
    res.sendFile(path.join(rootDirector, 'views/', 'home_page.html'))

})

module.exports = router