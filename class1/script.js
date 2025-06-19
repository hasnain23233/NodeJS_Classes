///In this class we create a first code in server side using node js and also creat a .txt file using the node ja

// simple code of node js 
console.log('This is a first code of the javascript in node js on the server side of the web application')

function addNumber(num1, num2) {
    return num1 + num2
}
let firstNumber = addNumber(20, 49)
console.log(firstNumber)

//creating a text file using node js and also add contant in text file
let FS = require('fs') //require is use to import any module in Javascript. we import fs. this module is use for creating the files
FS.writeFileSync('data.txt', 'This is our first use of node js and we learn the creating the file using the node js')
