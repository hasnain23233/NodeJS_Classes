const express = require('express')
const app = express()
const bodyPareser = require('body-parser')

const HomePage = require('./routes/homepage')
const ContactPage = require('./routes/contactPage')

app.use(bodyPareser.urlencoded())
app.use((req, res, next) => {
    console.log('Your requesting first middleware', req.url, req.method)
    next()
})
app.use('/home', HomePage)
app.use(ContactPage)
app.post('/contact', (req, res, next) => {
    res.send(`<h1> we will contact you shortly ${req.body.name} </h1>`)
})

app.listen(4200, () => {
    console.log('Your server is running on http://localhost:4200')
})