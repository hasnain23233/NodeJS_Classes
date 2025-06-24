///In this class we learn the express js, middleware and more.... So let`s start
const express = require('express')

//using express 
const app = express()

//appling middleware
app.get('/', (req, res, next) => {
    console.log('First middleware:', req.url, req.method)
    next()
})


// Second middleware
app.post('/about', (req, res) => {
    console.log('Second middleware:', req.url, req.method)
    res.send('<h1>Authentication Completed About Page</h1>') // ✅ Send the final response
})
app.get('/service', (req, res, next) => {
    console.log('thired middleware:', req.url, req.method)
    res.send('<h1>Authentication Completed Service page</h1>')
})




const port = 4200
app.listen(port, () => {
    console.log('Your Server is running on http://localhost:4200')
})