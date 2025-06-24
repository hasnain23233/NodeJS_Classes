///In this class we learn the  Parsing Request
const express = require('express')
const bodyParser = require('body-parser')


const app = express()


app.get('/', (req, res, next) => {
    console.log('This is a first middle ware')
    res.send('<h1>Wellcome to home page of the website</h1>')
})
app.get('/contact', (req, res, next) => {
    console.log('this is a second middleware ')
    res.send(`
        <form action="/contact" method="post">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required>

            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" required>

            <button type="submit">Submit</button>
        </form>
        `)
})

app.post('/contact', (req, res, next) => {
    console.log('this is a fourth middleware we user', req.body)
    next()
})


app.use(bodyParser.urlencoded())
app.post('/contact', (req, res, next) => {
    console.log('this is a third middleware', req.body)
    res.send(`<h1>Thank you ${req.body.name} for contact us. we well contacting you on your email ${req.body.email}. Thanks a lot !!!!!</h1>`)
})

app.listen(43999, () => [
    console.log('Your server is running on http://localhost:43999')
])