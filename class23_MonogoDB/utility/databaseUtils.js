const mongo = require('mongodb')
require('dotenv').config()

const mongoClient = mongo.MongoClient
const mongUrl = process.env.MONGO_URL
let _db;

const mongoConnect = (callback) => {
    mongoClient.connect(mongUrl)
        .then((client) => {
            callback()
            _db = client.db('airbnd')
        }).catch((error) => {
            console.log('Sorry we can`t connect to database', error.message)
        })

}
const getDB = () => {
    if (!_db) {
        throw Error('Can`t connect to Database')
    }
    return _db
}

module.exports = { mongoConnect, getDB }