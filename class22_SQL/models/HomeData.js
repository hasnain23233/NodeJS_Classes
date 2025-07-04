const db = require('../utility/databaseUtils')

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
        return db.execute('INSERT INTO homes (name, email, home, img, description) VALUES (? , ? , ? , ? , ? )', [this.name, this.email, this.home, this.img, this.description])

    }

    static fetchingAll() {
        return db.execute('SELECT * FROM homes')
    }

    static findById(homeId, callback) {

    }
    static deleteById(homeId, callback) {

    }
}
