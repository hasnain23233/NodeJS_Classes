
const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

/*
if (_id) {
            this._id = _id;
        }
        this.name = name;
        this.email = email;
        this.home = home;
        this.img = img;
        this.description = description
        save()  fetchingAll() findById(homeId) deleteById(homeId)

*/

const Schema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    home: { type: String, require: true },
    img: { type: String, require: true },
    description: { type: String, require: true },
})

module.exports = Schema