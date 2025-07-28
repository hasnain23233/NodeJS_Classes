const express = require('express')
const authRouter = express.Router()
const authController = require('../../controllers/authController')

authRouter.get('/login', authController.getLogin)
authRouter.get('/signup', authController.getSignUp)

authRouter.post('/login', authController.postLogin)
authRouter.post('/logout', authController.postLogout)
authRouter.post('/signup', authController.postsignup)

module.exports = authRouter