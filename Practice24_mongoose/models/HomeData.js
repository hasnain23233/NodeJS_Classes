const mongoose = require('mongoose')

const homeSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    home: { type: String, require: true },
    img: { type: String, require: true },
    description: { type: String, require: true },
})

/*
        save() find() findById(homeId) deleteById(homeId)
*/

module.exports = mongoose.model('Home', homeSchema);