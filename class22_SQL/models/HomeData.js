const db = require('../utility/databaseUtils')

module.exports = class HomeData {
    constructor(id, name, email, home, img) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.home = home;
        this.img = img;
    }


    save() {

    }

    static fetchingAll() {
        return db.execute('SELECT * FROM homes')
    }

    static findById(homeId, callback) {

    }
    static deleteById(homeId, callback) {

    }
}
