//In this class we learn the create a server on node js and also we learn the request and response form server

// first creating a server

const HTTP = require('http')
HTTP.createServer((req, res) => {
    res.write('<h1>This response form server<h1/>')
    res.end('response end')
}).listen(4200)

