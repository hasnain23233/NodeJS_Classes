const express = require('express')
const router = express.Router()
const { HomeData } = require('../host/hostRout')

router.get('/', (req, res, next) => {
    console.log(HomeData)
    res.render('home_page', { HomeData })

})

module.exports = router