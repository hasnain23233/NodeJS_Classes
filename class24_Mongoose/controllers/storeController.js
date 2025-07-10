const favourites = require('../models/favourites')
const Home = require('../models/HomeData')

exports.getIndex = (req, res, next) => {
    Home.find().then((data) => {
        res.render('store/index', { HomeData: data })
    }).catch((error) => {
        console.log('we can`t connect to database', error)
    })
}
exports.getHomeList = (req, res, next) => {
    Home.find().then((data) => {
        res.render('store/homeList', { HomeData: data })
    }).catch((error) => {
        console.log('we can`t connect to database', error)
    })
}
exports.getBooking = (req, res, next) => {
    res.render('store/booking')
}

exports.getfavourites = (req, res, next) => {
    favourites.find()
        .populate('houseID').then((favIds) => {
            const fvtHomes = favIds.map((fav) => fav.houseID)
            res.render('store/favourites', { fvtHomes: fvtHomes });
        });
};



// Controller
exports.postAddFvt = (req, res, next) => {
    const homeId = req.body.id;

    favourites.findOne({ houseID: homeId }).then((fav) => {
        if (fav) {
            console.log('Already Favrouted marked')
        } else {
            fav = new favourites({ houseID: homeId })
            fav.save().then((result) => {
                console.log("✅ fvt added ", result);
            }).catch((err) => {
                console.log('Can adding fvt this home', err.message)
            })
        }
        res.redirect('/favourites');
    }).catch((err) => {
        console.log('error while marking favourties ', err.message)
    })

};


exports.postRemoveForFavroit = (req, res, next) => {
    const homeId = req.params.homeId
    favourites.findOneAndDelete({ houseID: homeId }).then((result) => {
        console.log("✅ fvt remove ", result.insertedId);
    })
        .catch((error) => {
            console.log("❌ We can`t remove the fvt ", error.message);
        })
        .finally(() => {
            res.redirect('/favourites');
        });
}



exports.getHomeDetails = (req, res, next) => {
    const homeId = req.params.homeId

    Home.findById(homeId).then((home) => {
        if (!home) {
            console.log('home not found')
            res.redirect('/homes')
        } else {

            res.render('store/homeDetails', { homeDetail: home })
        }
    })
}