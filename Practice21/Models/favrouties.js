const fs = require('fs')
const path = require('path')
const rootPath = require('./../utility/rootPath')

const fvtRootPath = path.join(rootPath, "HomeData", "fovourites.json")

module.exports = class favrouties {
    static getFavrouties(homeId, callback) {
        favrouties.addFavrouties(favroutiesHome => {
            if (favroutiesHome.includes(homeId)) {
                callback('home is already marked')
            } else {
                favroutiesHome.push(homeId)
                fs.writeFile(fvtRootPath, JSON.stringify(favroutiesHome), callback)
            }
        })
    }

    static addFavrouties(callback) {
        fs.readFile(fvtRootPath, (err, fileData) => {
            if (!err && fileData.length > 0) {
                const data = JSON.parse(fileData)
                callback(data)
            } else {
                callback([])
            }
        })
    }
}
