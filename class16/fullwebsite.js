//In this file we make a simple website using the node js 
const http = require('http')
const fs = require('fs')
const contact = require('./contact')

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile('class16/home.html', 'utf-8', (err, data) => {

            if (err) {
                res.writeHead(500, { 'content-type': 'text/html' })
                res.write('<h1>Your interveral server error</h1>')
                console.log(err.message)
                res.end()
            }
            else {
                res.writeHead(200, { 'content-type': 'text/html' })
                res.write(data)
                res.end()
            }
        })
    }
    else if (req.url == '/about') {
        fs.readFile('class16/about.html', 'utf-8', (err, data) => {

            if (err) {
                res.writeHead(500, { 'content-type': 'text/html' })
                res.write('<h1>Your interveral server error</h1>')
                console.log(err.message)
                res.end()
            }
            else {
                res.writeHead(200, { 'content-type': 'text/html' })
                res.write(data)
                res.end()
            }
        })

    }
    else if (req.url === '/contact' && req.method === 'GET') {
        contact(req, res);
    }
    else if (req.url === '/submit' && req.method === 'POST') {
        contact(req, res);
    }
})
server.listen(3200, () => {
    console.log('Your server is running on http://localhost:3200')
})