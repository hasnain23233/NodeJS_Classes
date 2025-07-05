const mongoDB = require('mongodb')
const mongoClinet = mongoDB.MongoClient


const mongUrl = "mongodb+srv://hasnainkhushi152:hasnainDev124@codelover.fugp4je.mongodb.net/?retryWrites=true&w=majority&appName=codeLover"
let _db;

const MongoConnect = (callback) => {
    mongoClinet.connect(mongUrl).then((client) => {
        callback()
        _db = client.db("airbnd")
    }).catch((error) => {
        console.log('Sorry We can`t connect to the database', error.message)
    })
}
const getDB = () => {
    return _db;
}
module.exports = { MongoConnect, getDB }