const favourites = require('../models/favourites')
const RegiesterHome = require('../models/HomeData')

exports.getIndex = (req, res, next) => {
    RegiesterHome.fetchingAll().then((data) => {
        res.render('store/index', { HomeData: data })
    }).catch((error) => {
        console.log('we can`t connect to database', error)
    })
}
exports.getHomeList = (req, res, next) => {
    RegiesterHome.fetchingAll().then(data => {
        res.render('store/homeList', { HomeData: data })
    }).catch((error) => {
        console.log('we can`t connect to database', error)
    })
}
exports.getBooking = (req, res, next) => {
    res.render('store/booking')
}

exports.getfavourites = (req, res, next) => {
    favourites.getToFvt().then(favIds => {
        favIds = favIds.map(fav => fav.houseID)
        RegiesterHome.fetchingAll().then((homes) => {
            const cleanFavIds = favIds.map(id => String(id).trim());
            const fvtHomes = homes.filter(home => cleanFavIds.includes(String(home._id).trim()));
            res.render('store/favourites', { fvtHomes: fvtHomes });
        });
    });
};



exports.postAddFvt = (req, res, next) => {
    const homeid = new favourites(req.body.id)
    homeid.save()
        .then((result) => {
            console.log("✅ fvt added ", result.insertedId);
        })
        .catch((error) => {
            console.log("❌ We can`t add the fvt ", error.message);
        })
        .finally(() => {
            res.redirect('/favourites');
        });
}

exports.postRemoveForFavroit = (req, res, next) => {
    const homeId = req.params.homeId
    favourites.deleteById(homeId).then((result) => {
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

    RegiesterHome.findById(homeId).then((home) => {
        if (!home) {
            console.log('home not found')
            res.redirect('/homes')
        } else {

            res.render('store/homeDetails', { homeDetail: home })
        }
    })
}