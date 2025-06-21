////In this file we learn how to submit the form in node js

//first step sending form submit
const HTTP = require('http')
const fs = require('fs')
const path = require('path')

// const server = HTTP.createServer((req, res) => {
//     res.writeHead(200, { 'content-type': 'text/html' })
//     if (req.url == '/') {
//         res.write(`
//         <form action="/submit" method="POST">
//             <label for="username">Username:</label><br>
//             <input type="text" id="username" name="username" required><br><br>

//             <label for="password">Password:</label><br>
//             <input type="password" id="password" name="password" required><br><br>

//             <button type="submit">Login</button>
//         </form>

//         `)
//     }
//     else if (req.url == '/submit') {
//         res.write('<h1>Thank you for login</h1>')
//     }
//     res.end()
// })
// server.listen(3300)

//using with html file

const server = HTTP.createServer((req, res) => {
    const filePath = path.join(__dirname, "html_file", "index.html");
    if (req.url == '/submit') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>Thank you for login</h1>')
        return res.end()

    }
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'content-type': 'text/html' })
            res.write('server is error')
            res.end()
        }
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(data)
        res.end()
    })
})
server.listen(3100)

