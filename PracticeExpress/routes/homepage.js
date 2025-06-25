const express = require('express')

const path = require('path')
const pathUtiles = require('../utiles/pathUtilis')
const Router = express.Router()

Router.get('/', (req, res, next) => {
    res.sendFile(path.join(pathUtiles, '/views/', 'home.html'))
})

module.exports = Router