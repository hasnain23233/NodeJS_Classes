const { getDB } = require("../utility/databaseUtils");


module.exports = class HomeData {
    constructor(id, name, email, home, img, description) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.home = home;
        this.img = img;
        this.description = description
    }


    save() {
        const db = getDB()
        return db.collection('homes').insertOne(this)

    }

    static fetchingAll() {

    }

    static findById(homeId) {

    }
    static deleteById(homeId) {

    }
}
