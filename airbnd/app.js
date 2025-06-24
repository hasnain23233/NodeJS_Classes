//In this folder we make airbnd full beckend project using express.js and node js
const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./routes/user/app')
const hostRoute = require('./routes/host/hostRout')


const app = express()

app.use('/', (req, res, next) => {
    console.log(req.url, req.method)
    next()
})
app.use(bodyParser.urlencoded())

app.use(userRoute)
app.use(hostRoute)






app.listen(4200, () => {
    console.log('Your server is running on http://localhost:4200')
})