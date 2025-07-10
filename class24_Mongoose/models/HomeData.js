const mongoose = require('mongoose')
const favourites = require('./favourites')


const homeSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    home: { type: String, require: true },
    img: String,
    description: String,
})

homeSchema.pre('findOneAndDelete', async function (next) {
    const homeID = this.getQuery()["_id"]
    await favourites.deleteMany({ houseID: homeID })
    next()
})
module.exports = mongoose.model('Home', homeSchema);