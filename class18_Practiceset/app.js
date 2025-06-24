const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log('Your requesting first middleware', req.url, req.method)
    next()
})
app.use((req, res, next) => {
    console.log('aprrovel your resquest in second middleware', req.url, req.method)
    next()
})
// app.use((req, res, next) => {
//     console.log('Your request approve in the third middleware', req.method, req.url)
//     res.send('<h1>Your server is running</h1>')
// })

app.get('/', (req, res, next) => {
    console.log('handle home page of the website /')
    res.send('<h1>Wellcome to home page</h1>')
})
app.get('/contact', (req, res, next) => {
    console.log('we are in contact page of the website')
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
    res.send('we will contact you shortly')
})

app.listen(4200, () => {
    console.log('Your server is running on http://localhost:4200')
})