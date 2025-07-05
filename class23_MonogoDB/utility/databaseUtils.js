const mongo = require('mongodb')

const mongoClient = mongo.MongoClient
const mongUrl = "mongodb+srv://hasnainkhushi152:hasnainDev124@codelover.fugp4je.mongodb.net/?retryWrites=true&w=majority&appName=codeLover"

const mongoConnect = (callback) => {
    mongoClient.connect(mongUrl)
        .then((client) => {
            console.log("Connected to MongoDB to server")
            callback(client)
        }).catch((error) => {
            console.log('Sorry we can`t connect to database', error.message)
        })

}

module.exports = mongoConnect