const fs = require('fs')

module.exports = class favourites {
    static addToFvt(homeId, callback) {
        favourites.getToFvt((fvtHome) => {
            if (fvtHome.includes(homeId)) {
                callback('your home is already mark')
            } else {
                fvtHome.push(homeId)
                fs.writeFile(`class21/HomeData/fvtHome.json`, JSON.stringify(fvtHome), callback)
            }
        })
    }

    static getToFvt(callback) {
        fs.readFile(`class21/HomeData/fvtHome.json`, (err, data) => {
            if (!err) {
                const parsedData = JSON.parse(data)
                callback(parsedData)
            } else {
                callback([])
            }
        })
    }
    static deleteById(delHomeId, callback) {
        favourites.getToFvt(homesIds => {
            const homeDeleteIds = homesIds.filter(homeId => String(homeId).trim() !== String(delHomeId).trim());
            fs.writeFile('class21/HomeData/fvtHome.json', JSON.stringify(homeDeleteIds), callback);
        });
    }


}