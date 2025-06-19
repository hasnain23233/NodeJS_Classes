//In this file we learn the core module and global objects

//core module
const FS = require('fs')
const processor = require('process')
const { log } = require('console')
FS.writeFileSync('module.txt', "this class we learn the core module in node JS and how to use it in a project")
console.log(processor.title)
console.log(processor.connected)
console.log(process.argv0)
console.log(processor.chdir)


//global object

log('custom log')
console.log(processor.argv0)


console.log('Console is a global object in javascript')
