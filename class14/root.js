/// In this class we learn the modules and routes system

const http = require('http');
const userform = require('./userForm');
const userData = require('./userSubmit');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        userform(req, res);
    } else if (req.url === '/submit' && req.method === 'POST') {
        userData(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(4200, () => {
    console.log('Your server is running on http://localhost:4200');
});
