const mongoose = require('mongoose')


const homeSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    home: { type: String, require: true },
    img: String,
    description: String,
})

module.exports = mongoose.model('Home', homeSchema);