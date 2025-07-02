const fs = require('fs')

module.exports = class HomeData {
    constructor(id, name, email, home, img) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.home = home;
        this.img = img;
    }

    save() {
        HomeData.fetchingAll(allHomes => {
            if (this.id) {
                allHomes = allHomes.map(home => home.id === this.id ? this : home);
            } else {
                this.id = Math.random().toString();
                allHomes.push(this);
            }
            fs.writeFile('class21/HomeData/Home.json', JSON.stringify(allHomes), err => {
                if (err) {
                    console.log('Server error:', err);
                }
            });
        });
    }

    static fetchingAll(callback) {
        fs.readFile('class21/HomeData/Home.json', (err, data) => {
            if (!err) {
                const parsedData = JSON.parse(data);
                callback(parsedData);
            } else {
                callback([]);
            }
        });
    }

    static findById(homeId, callback) {
        this.fetchingAll(homes => {
            const homeFound = homes.find(home => home.id === homeId);
            callback(homeFound);
        });
    }
}
