const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required']
    },
    lastName: String,
    email: {
        type: String,
        required: [true, "Enter your email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Enter your password"],
    },
    userType: {
        type: String,
        enum: ['guest', 'host'],
        default: 'guest'
    }
})

module.exports = mongoose.model('User', userSchema)
