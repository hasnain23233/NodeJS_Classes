const express = require('express')
const app = express()
const rootPath = require('./utility/rootPath')
const path = require('path')
const bodyParser = require('body-parser')

const userRouter = require('./routes/userRouter/user')
const hostRouter = require('./routes/hostRouter/host')

app.use(express.static(path.join(rootPath, 'public')))

app.use(bodyParser.urlencoded())

app.set('view engine', 'ejs')
app.set('views', path.join(rootPath, 'views'))

app.use(userRouter)
app.use(hostRouter.router)

app.listen(4200, () => {
    console.log('Your server is running on the http://localhost:4200 In airbnd')
})