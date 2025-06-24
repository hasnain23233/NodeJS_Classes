///In this class we learn the path modules and global modules in node js

//Using path modules
const path = require('path')
const file = 'class16/dataUser/hasnain khushi.txt'
console.log(path.extname(file))
console.log(path.dirname(file))
console.log(path.resolve('class16/dataUser', "hasnain khushi.txt"))
console.log(path.basename(file))
console.log(path.isAbsolute(file))

//using Global mmodules
console.log(__dirname)
console.log(__filename)