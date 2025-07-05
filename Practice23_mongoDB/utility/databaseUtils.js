const mongoDB = require('mongodb')
const mongoClinet = mongoDB.MongoClient
require('dotenv').config()

const mongUrl = process.env.MONGO_URL
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