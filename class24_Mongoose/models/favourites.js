const mongoose = require('mongoose')

const favouritesSchema = new mongoose.Schema({
    houseID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Home',
        require: true,
        unique: true
    }
})

module.exports = mongoose.model('favourites', favouritesSchema)