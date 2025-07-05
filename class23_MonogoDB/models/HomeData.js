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
        if (this._id) {
            const updatedFields = {
                name: this.name,
                email: this.email,
                home: this.home,
                img: this.img,
                description: this.description
            }
            return db.collection("homes").updateOne({ _id: new ObjectId(String(this._id)) }, { $set: updatedFields })
        } else {
            return db.collection("homes").insertOne(this)
        }
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
        const db = getDB()
        return db.collection('homes').deleteOne({ _id: new ObjectId(String(homeId)) })
    }

}
