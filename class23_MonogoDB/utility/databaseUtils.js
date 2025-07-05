const mongo = require('mongodb')

const mongoClient = mongo.MongoClient
const mongUrl = "mongodb+srv://hasnainkhushi152:hasnainDev124@codelover.fugp4je.mongodb.net/?retryWrites=true&w=majority&appName=codeLover"
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