const fs = require('fs');
const favourites = require('./favourites');

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

            console.log("✅ Saving home:", this); // Debugging line

            fs.writeFile('class21/HomeData/Home.json', JSON.stringify(allHomes, null, 2), err => {
                if (err) {
                    console.log('❌ Server error while writing file:', err);
                } else {
                    console.log('✅ File written successfully');
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
    static deleteById(homeId, callback) {
        this.fetchingAll(homes => {
            const homeDelete = homes.filter(home => home.id !== homeId);
            fs.writeFile('class21/HomeData/Home.json', JSON.stringify(homeDelete), err => {

                favourites.deleteById(homeId, callback)
            });
        });
    }
}
