const favourites = require('../models/favourites')
const RegiesterHome = require('../models/HomeData')

exports.getIndex = (req, res, next) => {
    RegiesterHome.fetchingAll().then(([data]) => {
        res.render('store/index', { HomeData: data })
    }).catch((error) => {
        console.log('we can`t connect to database', error)
    })
}
exports.getHomeList = (req, res, next) => {
    RegiesterHome.fetchingAll().then(([data]) => {
        res.render('store/homeList', { HomeData: data })
    }).catch((error) => {
        console.log('we can`t connect to database', error)
    })
}
exports.getBooking = (req, res, next) => {
    res.render('store/booking')
}

exports.getfavourites = (req, res, next) => {
    favourites.getToFvt(favIds => {
        RegiesterHome.fetchingAll().then(([homes]) => {
            const cleanFavIds = favIds.map(id => String(id).trim());
            const fvtHomes = homes.filter(home => cleanFavIds.includes(String(home.id).trim()));
            res.render('store/favourites', { fvtHomes: fvtHomes });
        });
    });
};



exports.postAddFvt = (req, res, next) => {
    favourites.addToFvt(req.body.id, error => {
        if (error) {
            console.log('error while marking', error)
        }
        res.redirect('/favourites')
    })
}

exports.postRemoveForFavroit = (req, res, next) => {
    const homeId = req.params.homeId
    favourites.deleteById(homeId, err => {
        if (err) {
            console.log("Error while removing from favourites page", err)
        }
        res.redirect('/favourites')
    })
}



exports.getHomeDetails = (req, res, next) => {
    const homeId = req.params.homeId

    RegiesterHome.findById(homeId).then(([homes]) => {
        const home = homes[0]
        if (!home) {
            console.log('home not found')
            res.redirect('/homes')
        } else {

            res.render('store/homeDetails', { homeDetail: home })
        }
    })
}