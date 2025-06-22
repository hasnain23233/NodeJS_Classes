///In this file we learn about CRUD system and how it s use in a programming
const fs = require('fs')
console.log(process.argv)
const opration = process.argv[2];
if (opration == 'write') {
    const name = process.argv[3]
    const content = process.argv[4]
    const filePath = "class15/text/" + name + ".txt"
    fs.writeFileSync(filePath, content)
}
else if (opration == 'read') {
    const name = process.argv[3]
    const filePath = "class15/text/" + name + ".txt"
    let data = fs.readFileSync(filePath).toString()
    console.log(data)
}
else if (opration == 'delete') {
    const name = process.argv[3]
    const filePath = "class15/text/" + name + ".txt"
    fs.unlinkSync(filePath)
}
else if (opration == 'update') {
    const name = process.argv[3]
    const content = process.argv[4]
    const filePath = "class15/text/" + name + ".txt"
    let data = fs.appendFileSync(filePath, content)
    console.log(data)
}
else {
    console.log('This code was not working')
}


//Create C
// fs.writeFileSync('class15/text/JavaScript.txt', "Javascript is a programming language. Moslty use in web development ")

//Delete D
// fs.unlinkSync('class15/text/apple.txt')

//Read R
// let data = fs.readFileSync('class15/text/JavaScript.txt', 'utf-8')
// console.log(data)

// //update U
// fs.appendFileSync('class15/text/JavaScript.txt', "Javascript is a programming language. Moslty use in web development and I am using Javascript also")

