const express = require('express')
const authRouter = express.Router()

authRouter.get('/login', (req, res, next) => {
    res.send('<h1>Login page of the website auth</h1>')
})

module.exports = authRouter