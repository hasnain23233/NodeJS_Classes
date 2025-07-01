const fs = require('fs')

module.exports = class HomeData {
    constructor(name, email, home, img) {
        this.name = name
        this.email = email
        this.home = home
        this.img = img
    }
    content() {
        return `name: ${this.name} . Email is ${this.email} and your house is ${this.home} `
    }
    save() {
        this.id = Math.random().toString()
        HomeData.fetchingAll(HomeRegisterData => {
            HomeRegisterData.push(this)
            fs.writeFile(`class21/HomeData/Home.json`, JSON.stringify(HomeRegisterData), (err, data) => {
                if (err) {
                    console.log('Interval Server is Error')
                }
                else {
                    console.log('Your data was save')
                }
            })
        })

    }
    static fetchingAll(callback) {
        fs.readFile(`class21/HomeData/Home.json`, (err, data) => {
            if (!err) {
                const parsedData = JSON.parse(data)
                callback(parsedData)
            } else {
                callback([])
            }
        })
    }

    static findById(homeId, callback) {
        this.fetchingAll(homes => {
            const homeFound = homes.find(home => home.id === homeId)
            callback(homeFound)
        })
    }
}