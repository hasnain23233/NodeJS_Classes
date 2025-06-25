const express = require('express')
const path = require('path')

const fs = require('fs')
const hostRoute = express.Router()

hostRoute.get('/add_home', (req, res, next) => {
    console.log('add home page ')
    res.sendFile(path.join(__dirname, '../../views/', 'add_home.html'))
})
hostRoute.post('/add_home', (req, res, next) => {
    res.send(`
        <h1>Your home was registered</h1>
        name: ${req.body.name} <br>
        email: ${req.body.email} <br>
        home: ${req.body.home}
        <a href='/' >view your house </a>
        `)
})



module.exports = hostRoute