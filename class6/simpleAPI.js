///In this classs we build a smple API and send to the client
const APIData = require('./APIData')
const HTTP = require('http')

const Server = HTTP.createServer((req, res) => {
    res.setHeader('Content-type', 'text/html')
    res.write(JSON.stringify(APIData))
    res.end()
})

Server.listen(1000)