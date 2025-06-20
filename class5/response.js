///In this class we understand the how server response to the client
const HTTP = require('http')

const description = 'We generate the response using the node js'
const Server = HTTP.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html') //In here we set the html on the server
    res.write(
        `
        <h1> Understanding the  server response</h1>
        <p>${description}</p>
        `
    )
    res.end()
})

Server.listen(1000)