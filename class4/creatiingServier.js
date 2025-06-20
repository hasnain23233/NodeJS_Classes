//In this class we learn the create a server on node js and also we learn the request and response form server

//creating a server

const HTTP = require('http')
HTTP.createServer((req, res) => {
    res.write('<h1>This response form server<h1/>')//response from server
    res.end('response end')//when server is end message
}).listen(4200)

