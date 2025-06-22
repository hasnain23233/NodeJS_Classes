//In this file we learn the Synchronous and Asynchronous in node js
const fs = require('fs')

// example of Asynchronous
fs.readFile('class12/text/adf.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('interval Server Error' + err.message)
        return false
    } else {
        console.log(data)
    }
})
console.log('files read') //this render before the funtion

//example of Synchronous

let data = fs.readFileSync('class12/text/hasnain khushi.txt', 'utf-8',)
console.log(data)
console.log('file read')

