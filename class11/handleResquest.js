///In this class we learn how to handle the resquest on the server side

const http = require('http')
const fs = require('fs')
const path = require('path')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, "html_file", "index.html")

    if (req.url === '/submit' && req.method === 'POST') {
        const databody = []

        req.on('data', (chunk) => {
            databody.push(chunk)
        })

        req.on('end', () => {
            let dataSet = Buffer.concat(databody).toString()
            let readableData = querystring.parse(dataSet)

            console.log(readableData)

            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(`
                <h1>Thanks for submitting!</h1>
                <p><strong>Name:</strong> ${readableData.username}</p>
                <p><strong>Email:</strong> ${readableData.password}</p>
            `)
            res.end()
        })

        return
    }

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'content-type': 'text/html' })
            res.write('<h1>Internal Server Error</h1>')
            res.end()
            return
        }

        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(data)
        res.end()
    })
})

server.listen(3200, () => {
    console.log('Your server is running on http://localhost:3200')
})
