const express = require('express')
const path = require('path')

const fs = require('fs')
const hostRoute = express.Router()
const rootDirector = require('../../utility/pathUtils')

hostRoute.get('/add_home', (req, res, next) => {
    console.log('add home page ')
    res.sendFile(path.join(rootDirector, '/views/', 'add_home.html'))
})
hostRoute.post('/add_home', (req, res, next) => {
    const content = `name: ${req.body.name} . Email is ${req.body.email} and your house is ${req.body.home} `
    fs.writeFileSync(`airbnd/HomeData/${req.body.name}.txt`, content)
    res.send(`
        <h1>Your home was registered</h1>
        name: ${req.body.name} <br>
        email: ${req.body.email} <br>
        home: ${req.body.home}
        <a href='/' >view your house </a>
        `)
})



module.exports = hostRoute