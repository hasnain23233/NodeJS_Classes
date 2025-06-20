///In this class we learn the request params and how it work
const HTTP = require('http')

const Server = HTTP.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    if (req.url == '/about') {
        return res.write(`home page About`)
    }
    else if (req.url == '/login') {
        return res.write('home page login')
    }
    else {
        res.write(`home page`)
    }
    res.end()
})

Server.listen(39499)