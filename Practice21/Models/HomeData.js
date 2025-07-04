const db = require('../utility/database')
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
        if (this.id) {
            return db.execute(
                'UPDATE homes SET name = ?, email = ?, home = ?, img = ?, description = ? WHERE id = ?',
                [this.name, this.email, this.home, this.img, this.description, this.id]
            );
        } else {
            return db.execute('INSERT INTO homes ( name, email, home, img, description) VALUES (? , ? , ? , ? , ?)',
                [this.name, this.email, this.home, this.img, this.description]
            )
        }

    }

    static fetchingAll() {
        return db.execute('SELECT * FROM homes')
    }

    static findById(homeId) {
        return db.execute('SELECT * FROM homes WHERE id=?', [homeId])
    }
    static deleteById(homeId, callback) {
        return db.execute('DELETE FROM homes WHERE id=?', [homeId])
    }
}
