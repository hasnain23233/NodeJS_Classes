module.exports = class favourites {
    constructor(houseID) {
        this.houseID = houseID
    }
    save() {
        const db = getDB()
        return db.collection("favourites").findOne({ houseID: this.houseID }).then((existingFvt) => {
            if (!existingFvt) {
                return db.collection("favourites").insertOne(this)
            } else {
                return new Promise.resolve()
            }
        })
    }

    static getToFvt() {
        const db = getDB()
        return db.collection('favourites').find().toArray()
    }
    static deleteById(delHomeId) {
        const db = getDB()
        return db.collection('favourites').deleteOne({ houseID: delHomeId })
    }


}