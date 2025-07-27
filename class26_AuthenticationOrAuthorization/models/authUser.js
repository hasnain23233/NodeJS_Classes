const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: [true, 'First Name is require']
    },
    lastName: String,
    email: {
        type: String,
        require: [true, "Enter Your Email "],
        unique: true
    },
    password: {
        type: String,
        require: [true, "Enter your password"],
    },
    userType: {
        type: String,
        enum: ['guest', 'host'],
        default: 'guest'
    },
    favourites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Home'
    }]
})

module.exports = mongoose.model('User', userSchema);