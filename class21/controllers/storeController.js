const favourites = require('../models/favourites')
const RegiesterHome = require('../models/HomeData')


exports.getHomeList = (req, res, next) => {
    RegiesterHome.fetchingAll((data) => {
        res.render('store/homeList', { HomeData: data })
    })
}
exports.getBooking = (req, res, next) => {
    res.render('store/booking')
}

exports.getfavourites = (req, res, next) => {
    favourites.getToFvt(favIds => {
        RegiesterHome.fetchingAll((homes) => {
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


exports.getInder = (req, res, next) => {
    RegiesterHome.fetchingAll((data) => {
        res.render('store/index', { HomeData: data })
    })
}
exports.getHomeDetails = (req, res, next) => {
    const homeId = req.params.homeId

    RegiesterHome.findById(homeId, home => {
        if (!home) {
            console.log('home not found')
            res.redirect('/homes')
        } else {

            res.render('store/homeDetails', { homeDetail: home })
        }
    })
}