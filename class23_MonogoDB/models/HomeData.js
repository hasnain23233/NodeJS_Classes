const { getDB } = require("../utility/databaseUtils");
const { ObjectId } = require('mongodb')

module.exports = class HomeData {
    constructor(_id, name, email, home, img, description) {
        if (_id) {
            this._id = _id;
        }
        this.name = name;
        this.email = email;
        this.home = home;
        this.img = img;
        this.description = description
    }


    save() {
        const db = getDB();
        return db.collection("homes").insertOne(this)
    }

    static fetchingAll() {
        const db = getDB()
        return db.collection("homes").find().toArray()
    }

    static findById(homeId) {
        const db = getDB()
        return db.collection('homes').find({ _id: new ObjectId(String(homeId)) }).next()
    }
    static deleteById(homeId) {
    }
}
