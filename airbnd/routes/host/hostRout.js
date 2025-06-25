const express = require('express')
const hostRoute = express.Router()

hostRoute.get('/add_home', (req, res, next) => {
    console.log('add home page ')
    res.send(`
        <h1>Register your home page</h1>
        <form action="/host/add_home" method="post">
            <label for="name">Name</label> <br>
            <input type="text" id="name" name="name" placeholder="Enter your name" required>  <br> <br>

            <label for="email">Email</label><br>
            <input type="email" id="email" name="email" placeholder="Enter your email address" required> <br> <br>

            <label for="home">Home</label><br>
            <input type="text" id="home" name="home" placeholder="Enter your home name" required>

            <button type="submit">Submit</button>
        </form>
        `)
})
hostRoute.post('/add_home', (req, res, next) => {
    res.send(`
        <h1>Your home was registered</h1>
        name: ${req.body.name} <br>
        email: ${req.body.email} <br>
        home: ${req.body.home}
        <a href='/' >view your house </a>
        `)
})



module.exports = hostRoute