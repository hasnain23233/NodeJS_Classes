const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    console.log('home page')
    res.send(`
        <h1>Welcome to airbnd web clond</h1>
        <a href="/host/add_home" >Add home</a>
        `)
})

module.exports = router