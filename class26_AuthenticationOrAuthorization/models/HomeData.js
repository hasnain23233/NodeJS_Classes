const mongoose = require('mongoose')

const homeSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    home: { type: String, require: true },
    img: { type: String, require: true },
    description: { type: String, require: true },
})

// homeSchema.pre('findOneAndDelete', async function (next) {
//     const homeID = this.getQuery()['_id']
//     await favourites.deleteMany({ houseID: homeID })
//     next()
// })

module.exports = mongoose.model('Home', homeSchema);