const fs = require('fs')
const RegisterHome = []
module.exports = class RegistrationHome {
    constructor(name, email, home, img) {
        this.name = name
        this.email = email
        this.home = home
        this.img = img
    }

    save() {
        RegistrationHome.fetchingData(RegisterHome => {
            RegisterHome.push(this)
            fs.writeFile('Practice21/HomeData/homes.json', JSON.stringify(RegisterHome), (err, data) => {
                if (err) {
                    console.log('Data saved successfully!')
                } else {
                    console.log(data)
                }
            })
        })
    }

    static fetchingData(callback) {
        fs.readFile('Practice21/HomeData/homes.json', (err, fileData) => {
            if (!err && fileData.length > 0) {
                const data = JSON.parse(fileData)
                callback(data)
            } else {
                callback([])
            }
        })
    }
}