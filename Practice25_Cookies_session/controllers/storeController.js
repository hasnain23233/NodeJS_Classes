const favourites = require('../models/favourites')
const Home = require('../models/HomeData')

exports.getIndex = (req, res, next) => {
    Home.find().then((data) => {
        res.render('store/index', { HomeData: data, isLoggedIn: req.isLoggedIn })
    }).catch((error) => {
        console.log('we can`t connect to database', error)
    })
}
exports.getHomeList = (req, res, next) => {
    Home.find().then(data => {
        res.render('store/homeList', { HomeData: data, isLoggedIn: req.isLoggedIn })
    }).catch((error) => {
        console.log('we can`t connect to database', error)
    })
}
exports.getBooking = (req, res, next) => {
    res.render('store/booking', { isLoggedIn: req.isLoggedIn })
}

exports.getfavourites = (req, res, next) => {
    favourites.find().populate('houseID').then(favIds => {
        const fvtHomes = favIds.map(fav => fav.houseID)
        res.render('store/favourites', { fvtHomes: fvtHomes, isLoggedIn: req.isLoggedIn });
    });
};



exports.postAddFvt = (req, res, next) => {
    const homeid = req.body.id
    favourites.findOne({ houseID: homeid }).then((fav) => {
        if (fav) {
            console.log('Already Fvt marked')
        } else {
            fav = new favourites({ houseID: homeid })
            fav.save()
                .then((result) => {
                    console.log("✅ fvt added ", result.insertedId);
                })
                .catch((error) => {
                    console.log("❌ We can`t add the fvt ", error.message);
                })
        }
        res.redirect('/favourites');
    })

}

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