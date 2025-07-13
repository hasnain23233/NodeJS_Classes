const express = require('express')
const authRouter = express.Router()
const authController = require('../../controllers/auth')

authRouter.get('/login', authController.getLogin)

authRouter.post('/login', authController.postLogin)
authRouter.post('/logout', authController.postLoginOut)

module.exports = authRouter