///In this class we learn how to taken input fram CMD and how to use it in our program, So let's get started
const HTTP = require('http');

// We can use the 'process' object to access command line arguments
const port = process.argv[2]
const sever = HTTP.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Welcome to my server</h1>');
    res.end('<p>This is a simple HTTP server created using Node.js</p>');
})

sever.listen(port)